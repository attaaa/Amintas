<template>
  <div class="journal-detail hide-scrollbar" v-if="journalData !== undefined">
    <div
      class="journal-detail--header"
      style="padding: 16px; margin-bottom: 8px;"
    >
      <div
        class="flex justify-between items-center"
        style="margin-bottom: 30px;"
      >
        <div @click="$router.back()">
          <img
            svg-inline
            src="assets/icons/general/arrow-left.svg"
            style="width: 24px; fill: #5C7CCD;"
          />
        </div>
        <button
          class="btn__primary btn__small text-white"
          @click="editJournal()"
        >
          Edit
        </button>
      </div>

      <div class="flex">
        <MoodIconLoader
          :mood="journalData.mood"
          style="width: 56px; height: 56px; margin-right: 16px;"
        />
        <div class="flex-column justify-between">
          <span class="text__title-2" style="text-transform: capitalize">{{
            journalData.mood
          }}</span>
          <div class="text__footnote">
            <span style="margin-right: 8px">{{
              journalData.created_at.split("-")[0]
            }}</span>
            <span>{{ journalData.created_at.split("-")[1] }}</span>
          </div>
        </div>
      </div>
    </div>

    <div style="padding: 16px;">
      <div style="margin-bottom: 16px">
        <div class="text__title-3" style="margin-bottom: 8px">
          Emosi
        </div>
        <div class="flex">
          <LabelMood
            v-for="(emotion, idx) in journalData.emotions"
            :key="idx"
            :label-text="emotion"
            style="margin-right: 8px; margin-bottom: 8px"
          />
        </div>
      </div>

      <div style="margin-bottom: 24px;">
        <div class="text__title-3" style="margin-bottom: 8px">
          Detail Cerita
        </div>
        <div class="content-detail">
          <div
            class="text__title-4 text__neutral-black"
            style="margin-bottom: 4px"
          >
            {{ journalData.story.title }}
          </div>
          <div class="text__body">
            {{ journalData.story.detail }}
          </div>
        </div>
      </div>

      <div
        style="margin-bottom: 24px;"
        v-if="journalData.identification !== ''"
      >
        <div class="text__title-3" style="margin-bottom: 8px">
          Pikiran Negatif
        </div>
        <div class="content-detail">
          <div class="text__body">
            {{ journalData.identification }}
          </div>
        </div>
      </div>

      <div
        style="margin-bottom: 16px;"
        v-if="journalData.distortions.length > 0"
      >
        <div class="text__title-3" style="margin-bottom: 8px">
          Distorsi Kognitif
        </div>
        <div class="column">
          <div class="row">
            <LabelDistortion
              v-for="(distortion, idx) in journalData.distortions"
              :key="idx"
              :label-text="distortion"
              style="margin-bottom: 8px; margin-right: 8px;"
            />
          </div>
        </div>
      </div>

      <div style="margin-bottom: 24px;" v-if="journalData.challenge">
        <div class="text__title-3" style="margin-bottom: 8px">
          Tentang Pikiran
        </div>
        <div class="content-detail">
          <div class="text__body">
            {{ journalData.challenge }}
          </div>
        </div>
      </div>

      <div style="margin-bottom: 24px;" v-if="journalData.alternative">
        <div class="text__title-3" style="margin-bottom: 8px">
          Pikiran Alternatif
        </div>
        <div class="content-detail">
          <div class="text__body">
            {{ journalData.alternative }}
          </div>
        </div>
      </div>

      <div
        class="btn-logout text__title-4 text__alert text-center q-mb-md"
        @click="$refs.popupDelete.$refs.popup.setState('open')"
      >
        Hapus Jurnal
      </div>

      <!-- pop up delete -->
      <PopupAction ref="popupDelete" img="img/popup/hapus.png">
        <template v-slot:title>
          Hapus Jurnal?
        </template>
        <template v-slot:description>
          Ceritamu akan terhapus. Apakah kamu yakin ingin menghapus jurnal ini?
        </template>
        <template v-slot:action>
          <button
            class="btn__large btn__secondary relative-position"
            @click="$refs.popupDelete.$refs.popup.setState('close')"
            v-ripple
          >
            Batal
          </button>
          <div style="width: 16px;"></div>
          <button
            class="btn__large btn__alert col relative-position text-white"
            @click="delJournal()"
            v-ripple
          >
            Hapus Jurnal
          </button>
        </template>
      </PopupAction>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.journal-detail {
  &--header {
    background-color: #f2f6ff;
    border-radius: 0px 0px 24px 24px;
  }

  .content-detail {
    padding: 16px;
    background-color: #f2f6ff;
    border-radius: 8px;
  }
}
</style>

<script>
import MoodIconLoader from "components/utils/MoodIconLoader";
import LabelMood from "components/LabelMood";
import LabelDistortion from "components/LabelDistortion";
import PopupAction from "src/components/shared/PopupAction.vue";

export default {
  name: "JournalDetail",
  components: { MoodIconLoader, LabelMood, LabelDistortion, PopupAction },
  methods: {
    delJournal() {
      this.$store.dispatch("journal/delJournal", this.$route.params.id);
      this.$store.dispatch("app/showToast", "Jurnal telah dihapus");
      this.$router.replace("/");
    },
    editJournal() {
      this.$router.replace("/journal/edit/" + this.$route.params.id);
    }
  },
  computed: {
    journalData() {
      return this.$store.getters["journal/getJournalData"](
        this.$route.params.id
      )[0];
    }
  }
};
</script>
