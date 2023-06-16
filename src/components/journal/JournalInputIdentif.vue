<template>
  <div class="journal-input-identif column">
    <!-- header navigation -->
    <div
      class="col-auto row items-center justify-between"
      style="margin-bottom: 24px;"
    >
      <div @click="goBack()">
        <img
          svg-inline
          class="fill-primary"
          src="assets/icons/general/arrow-left.svg"
          style="width: 24px; height: 24px;"
        />
      </div>
      <button
        class="btn__small btn__secondary text__primary"
        @click="skipInput()"
      >
        Lewati
      </button>
    </div>

    <!-- text title -->
    <div
      class="column col full-width"
      style="padding-left: 8px; padding-right: 8px;"
    >
      <div
        class="col-auto text__title-3 text-center"
        style="width: 280px; margin-left: auto; margin-right: auto; margin-bottom: 24px;"
      >
        Bagaimana pikiran negatif yang kamu identifikasi?
      </div>

      <div class="col full-width overflow-hidden">
        <TextArea
          v-on="$listeners"
          :input-var="inputVar"
          :placeholder="placeholder"
          class="block scroll hide-scrollbar"
          style="min-height: 328px; max-height: 100%;"
        />
      </div>
    </div>
  </div>
</template>

<script>
import TextArea from "components/inputs/TextArea";
export default {
  name: "JournalInputIdentif",
  components: {
    TextArea
  },
  props: {
    inputVar: String,
    placeholder: String
  },
  methods: {
    goBack() {
      this.$emit("go-back", true);
    },
    skipInput() {
      this.$emit("skip-input", true);
    }
  }
};
</script>
