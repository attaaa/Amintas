<template>
  <div class="journal-edit hide-scrollbar" v-if="journalData !== undefined">
    <div class="journal-edit--nav row items-center">
      <!-- back button -->
      <div @click="$router.back()" style="margin-right: 16px">
        <img svg-inline src="assets/icons/general/arrow-left.svg" />
      </div>
      <div class="text__title-4 text__primary">Edit Jurnal</div>
    </div>

    <div class="journal-edit--mood column items-center">
      <MoodIconLoader
        :mood="'buruk'"
        style="width: 56px; height: 56px; margin-bottom: 8px;"
      />
      <div class="text__title-3">Buruk</div>
      <div class="line" style="width: 184px; margin-top: 12px" />
    </div>

    <div class="journal-edit--emotion field-edit">
      <div
        class="text__title-4 text__neutral-dark-grey"
        style="margin-bottom: 8px"
      >
        Emosi
      </div>
      <div class="flex">
        <!-- <LabelMood
          v-for="(emotion, idx) in journalData.emotions"
          :key="idx"
          :label-text="emotion"
          style="margin-right: 8px; margin-bottom: 8px"
        /> -->
        <LabelMood
          :label-text="'buruk'"
          style="margin-right: 8px; margin-bottom: 8px"
        />
      </div>
      <div class="line" style="width: 100%; margin-top: 12px" />
    </div>

    <div class="journal-edit--story field-edit">
      <div
        class="text__title-4 text__neutral-dark-grey"
        style="margin-bottom: 8px"
      >
        Detail Cerita
      </div>
      <div
        class="text__headline text__neutral-black"
        style="margin-bottom: 4px"
      >
        Santai tapi pusing
      </div>
      <div class="text__body text__neutral-black">
        Aku kepengen cepet dapet kerjaan lain, tp aku ragu buat ng...
      </div>
      <div class="line" style="width: 100%; margin-top: 12px" />
    </div>

    <div class="journal-edit--identif field-edit">
      <div
        class="text__title-4 text__neutral-dark-grey"
        style="margin-bottom: 8px"
      >
        Pikiran Negatif
      </div>
      <div class="text__body text__neutral-black">
        Aku kepengen cepet dapet kerjaan lain, tp aku ragu buat ng...
      </div>
      <div class="line" style="width: 100%; margin-top: 12px" />
    </div>

    <div class="journal-edit--distortion field-edit">
      <div
        class="text__title-4 text__neutral-dark-grey"
        style="margin-bottom: 8px"
      >
        Distorsi Kognitif
      </div>
      <div class="column">
        <div class="row">
          <LabelDistortion
            :label-text="'Overgeneralization'"
            style="margin-bottom: 8px; margin-right: 8px;"
          />
        </div>
      </div>
      <div class="line" style="width: 100%; margin-top: 12px" />
    </div>

    <div class="journal-edit--challenge field-edit">
      <div
        class="text__title-4 text__neutral-dark-grey"
        style="margin-bottom: 8px"
      >
        Tantangan Pikiran
      </div>
      <div class="text__body text__neutral-black">
        Aku kepengen cepet dapet kerjaan lain, tp aku ragu buat ng...
      </div>
      <div class="line" style="width: 100%; margin-top: 12px" />
    </div>

    <div class="journal-edit--alternate field-edit">
      <div
        class="text__title-4 text__neutral-dark-grey"
        style="margin-bottom: 8px"
      >
        Pikiran Alternatif
      </div>
      <div class="text__body text__neutral-black">
        Aku kepengen cepet dapet kerjaan lain, tp aku ragu buat ng...
      </div>
      <div class="line" style="width: 100%; margin-top: 12px" />
    </div>
  </div>
</template>

<script>
import MoodIconLoader from "components/utils/MoodIconLoader";
import LabelMood from "components/LabelMood";
import LabelDistortion from "components/LabelDistortion";

export default {
  name: "JournalEdit",
  components: { MoodIconLoader, LabelMood, LabelDistortion },
  props: {
    journalData: {
      type: Boolean,
      default: true
    }
  }
};
</script>

<style scoped>
.line {
  height: 2px;

  background: #f1f2f5;
  border-radius: 2px;
}

.field-edit {
  padding: 16px;
}

.journal-edit--nav {
  padding: 16px;
  background: #ffffff;
  box-shadow: 0px 2px 4px -1px rgba(48, 48, 48, 0.08);
}

.journal-edit--mood {
  padding: 16px 24px;

  border: 0.3px solid #dedede;
  border-radius: 0px;
}
</style>
