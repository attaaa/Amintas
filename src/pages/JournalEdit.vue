<template>
  <div class="journal-edit hide-scrollbar" v-if="journalData !== undefined">
    <div class="journal-edit--nav row items-center">
      <!-- back button -->
      <div @click="$router.replace('/')" style="margin-right: 16px">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.6661 6.66663H4.54191L8.94374 2.28357C9.19491 2.03271 9.33602 1.69246 9.33602 1.33769C9.33602 0.98291 9.19491 0.642664 8.94374 0.391799C8.69256 0.140934 8.35189 0 7.99668 0C7.64146 0 7.30079 0.140934 7.04961 0.391799L0.380176 7.05298C0.258738 7.17968 0.163545 7.32908 0.10006 7.49261C-0.0333532 7.81696 -0.0333532 8.18077 0.10006 8.50511C0.163545 8.66865 0.258738 8.81805 0.380176 8.94475L7.04961 15.6059C7.17362 15.7308 7.32115 15.8299 7.48369 15.8975C7.64624 15.9652 7.82059 16 7.99668 16C8.17276 16 8.34711 15.9652 8.50966 15.8975C8.6722 15.8299 8.81973 15.7308 8.94374 15.6059C9.06876 15.4821 9.16799 15.3347 9.23571 15.1724C9.30343 15.01 9.3383 14.8359 9.3383 14.66C9.3383 14.4842 9.30343 14.31 9.23571 14.1477C9.16799 13.9853 9.06876 13.838 8.94374 13.7142L4.54191 9.3311H14.6661C15.0199 9.3311 15.3592 9.19074 15.6093 8.9409C15.8595 8.69105 16 8.35219 16 7.99886C16 7.64553 15.8595 7.30667 15.6093 7.05683C15.3592 6.80699 15.0199 6.66663 14.6661 6.66663Z"
            fill="#5C7CCD"
          />
        </svg>
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
  },
  methods: {
    goEdit() {
      this.$router.replace();
    }
  }
};
</script>

<style>
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
