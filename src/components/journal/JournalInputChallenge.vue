<template>
  <div class="journal-input-identif column">
    <!-- header navigation -->
    <div
      class="col-auto row items-center justify-between"
      style="margin-bottom: 24px;"
    >
      <img
        svg-inline
        class="fill-primary"
        src="assets/icons/general/arrow-left.svg"
        style="width: 24px; height: 24px;"
        @click="goBack()"
      />
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
        style="max-width: 296px; margin-left: auto; margin-right: auto; margin-bottom: 24px;"
      >
        Cobalah untuk menantang pikiran negatifmu
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
  name: "JournalInputChallenge",
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
      this.$emit("skip-input");
    }
  }
};
</script>
