<template>
  <div class="journal-input-distortion column">
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
        style="width: 280px; margin-left: auto; margin-right: auto; margin-bottom: 24px;"
      >
        Bagaimana distorsi kognitif pada pikiranmu?
      </div>

      <div class="column col">
        <JournalDistortionPicker
          class="col scroll hide-scrollbar"
          style="margin-left: auto; margin-right: auto;"
          v-on="$listeners"
          :selected-distortion="selectedDistortion"
        />
      </div>
    </div>
  </div>
</template>

<script>
import JournalDistortionPicker from "components/inputs/JournalDistortionPicker";

export default {
  name: "JournalInputDistortion",
  props: {
    selectedDistortion: Array
  },
  components: {
    JournalDistortionPicker
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
