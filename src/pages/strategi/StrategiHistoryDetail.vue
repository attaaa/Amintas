<template>
  <div class="journal-detail hide-scrollbar">
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
      </div>

      <div class="flex">
        <img
          :src="trigger_category[strategiData.category].img"
          style="width: 56px; height: 56px; margin-right: 16px;"
        />
        <div class="flex-column justify-between">
          <span class="text__title-2" style="text-transform: capitalize">{{
            strategiData.story_penyebab.title
          }}</span>
          <div class="text__footnote">
            <span>
              {{ trigger_category[strategiData.category].title }}
            </span>
            <span style="margin-inline: 8px; color: #DEDEDE;">|</span>
            <span>
              {{ strategiData.created_at.split("-")[0] }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <div style="padding: 16px;">
      <div style="margin-bottom: 24px;">
        <div class="text__title-3" style="margin-bottom: 8px">
          Detail Cerita
        </div>
        <div class="content-detail">
          <div class="text__body">
            {{ strategiData.story_penyebab.detail }}
          </div>
        </div>
      </div>

      <div style="margin-bottom: 24px;">
        <div class="text__title-3" style="margin-bottom: 8px">
          Tujuan
        </div>
        <div class="content-detail">
          <div class="text__body">
            {{ strategiData.story_tujuan }}
          </div>
        </div>
      </div>

      <div style="margin-bottom: 24px;">
        <div class="text__title-3" style="margin-bottom: 8px">
          Tangga Ketakutan
        </div>
        <div class="content-detail">
          <template v-for="(activity, idx) of strategiData.activities">
            <FearLadder
              class="fear-ladder-custom"
              :key="idx"
              :text="activity.name"
              :level="activity.level"
              :checked="activity.checked"
              :status="activity.status"
              :readOnly="true"
            />
          </template>
        </div>
      </div>

      <!-- <div
        class="btn-logout text__title-4 text__alert text-center q-mb-md"
        @click="showPopUpDelete()"
      >
        Hapus Riwayat
      </div> -->
      <PopUp ref="popupDelete">
        <!-- illustration -->
        <div
          class="placeholder-illustration flex"
          style="height: 188px; margin: 8px;"
        ></div>

        <span
          class="block text__primary text__title-3 full-width text-center"
          style="margin-top: 24px; margin-bottom: 16px;"
          >Hapus Jurnal?
        </span>
        <p
          class="text__body text__neutral-dark-grey text-center"
          style="margin-bottom: 48px"
        >
          Ceritamu di dalamnya jadi hilang dan jurnal akan terhapus. Apakah kamu
          sudah yakin ingin menghapusnya?
        </p>

        <div class="pop-up--action row">
          <button
            class="btn__large btn__alert col relative-position text-white"
            @click="delJournal()"
            v-ripple
          >
            Hapus Jurnal
          </button>
          <div style="width: 16px;"></div>
          <button
            class="btn__large btn__secondary text__primary col-auto relative-position "
            @click="hidePopUpDelete()"
            v-ripple
          >
            Tidak
          </button>
        </div>
      </PopUp>
    </div>
  </div>
</template>

<script>
// import MoodIconLoader from "components/utils/MoodIconLoader";
// import LabelMood from "components/LabelMood";
// import LabelDistortion from "components/LabelDistortion";
import PopUp from "components/bottomsheet/PopUp";
import FearLadder from "src/components/strategi/FearLadder.vue";

import { TRIGGER_CATEGORY } from "src/data/strategi/StrategiModel";

export default {
  components: { PopUp, FearLadder },

  data() {
    return {
      trigger_category: TRIGGER_CATEGORY
    };
  },

  computed: {
    strategiData() {
      return this.$store.getters["strategi/getStrategiData"](
        this.$route.params.id
      );
    }
  },

  methods: {
    delJournal() {
      this.$store.dispatch("journal/delJournal", this.$route.params.id);
      this.$router.replace("/");
    },
    editJournal() {
      this.$router.replace("/journal/edit/" + this.$route.params.id);
    },
    showPopUpDelete() {
      this.$refs.popupDelete.setState("open");
    },
    hidePopUpDelete() {
      this.$refs.popupDelete.setState("close");
    }
  }
};
</script>

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

.fear-ladder-custom:not(:first-child) {
  margin-top: 16px;
}
</style>
