<template>
  <div class="journal-input-distortion column">
    <!-- header navigation -->
    <div
      class="col-auto row items-center justify-between relative-position"
      style="margin-bottom: 24px;"
    >
      <img
        svg-inline
        class="fill-primary"
        src="assets/icons/general/arrow-left.svg"
        style="width: 24px; height: 24px;"
        @click="goBack()"
      />
      <div class="absolute-center" @click="showPopUp()">
        <img
          svg-inline
          class="fill-primary"
          src="assets/icons/help-round.svg"
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
        style="max-width: 296px; margin-left: auto; margin-right: auto; margin-bottom: 24px;"
      >
        Pilihlah distorsi kognitif dari pikiran negatifmu
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

    <!-- pop up help -->
    <PopUp ref="popUpHelp">
      <!-- illustration -->
      <div
        class="placeholder-illustration flex"
        style="height: 188px; margin: 8px;"
      ></div>

      <span
        class="block text__primary text__title-3 full-width text-center"
        style="margin-top: 24px; margin-bottom: 16px;"
        >Distorsi Kognitif?
      </span>
      <p class="text__body text__neutral-dark-grey" style="margin-bottom: 48px">
        Jawabanmu akan terekam pada sesi latihan ini. Apakah kamu yakin ingin
        menyudahi sesi latihan?
      </p>
    </PopUp>
  </div>
</template>

<script>
import JournalDistortionPicker from "components/inputs/JournalDistortionPicker";
import PopUp from "components/bottomsheet/PopUp";

export default {
  name: "JournalInputDistortion",
  props: {
    selectedDistortion: Array
  },
  components: {
    JournalDistortionPicker,
    PopUp
  },
  methods: {
    goBack() {
      this.$emit("go-back", true);
    },
    skipInput() {
      this.$emit("skip-input");
    },
    showPopUp() {
      this.$refs.popUpHelp.setState("open");
    },
    hidePopUp() {
      this.$refs.popUpHelp.setState("close");
    }
  }
};
</script>
