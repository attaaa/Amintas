<template>
  <div class="column">
    <div id="mood-row1" style="margin: auto;" class="row">
      <div
        class="mood-item text-center relative-position"
        style="margin-right: 8px"
        @click="selectMood('sangat buruk')"
      >
        <div class="shadow"></div>
        <img
          svg-inline
          src="assets/icons/mood-base/sangat-buruk.svg"
          style="width: 48px; height: 48px; margin-bottom: 4px;"
        />
        <div
          class="text__title-5"
          style="color: #8953C2;"
          v-if="selectedMood === 'sangat buruk'"
        >
          Sangat Buruk
        </div>
      </div>

      <div
        class="mood-item text-center relative-position"
        style="margin-left: 8px; margin-right: 8px"
        @click="selectMood('buruk')"
      >
        <div class="shadow"></div>
        <img
          svg-inline
          src="assets/icons/mood-base/buruk.svg"
          style="width: 48px; height: 48px; margin-bottom: 4px;"
        />
        <div
          class="text__title-5"
          style="color: #1E82C0;"
          v-if="selectedMood === 'buruk'"
        >
          Buruk
        </div>
      </div>

      <div
        class="mood-item text-center relative-position"
        style="margin-left: 8px; margin-right: 8px"
        @click="selectMood('netral')"
      >
        <div class="shadow"></div>
        <img
          svg-inline
          src="assets/icons/mood-base/netral.svg"
          style="width: 48px; height: 48px; margin-bottom: 4px;"
        />
        <div
          class="text__title-5"
          style="color: #BE6101;"
          v-if="selectedMood === 'netral'"
        >
          Netral
        </div>
      </div>

      <div
        class="mood-item text-center relative-position"
        style="margin-left: 8px; margin-right: 8px"
        @click="selectMood('baik')"
      >
        <div class="shadow"></div>
        <img
          svg-inline
          src="assets/icons/mood-base/baik.svg"
          style="width: 48px; height: 48px; margin-bottom: 4px;"
        />
        <div
          class="text__title-5"
          style="color: #5C7C30;"
          v-if="selectedMood === 'baik'"
        >
          Baik
        </div>
      </div>

      <div
        class="mood-item text-center relative-position"
        style="margin-left: 8px;"
        @click="selectMood('sangat baik')"
      >
        <div class="shadow"></div>
        <img
          svg-inline
          src="assets/icons/mood-base/sangat-baik.svg"
          style="width: 48px; height: 48px; margin-bottom: 4px;"
        />
        <div
          class="text__title-5"
          style="color: #B08213;"
          v-if="selectedMood === 'sangat baik'"
        >
          Sangat Baik
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.mood-item {
  width: 48px;
  $this: &;

  // &.not-selected {
  //   .shadow {
  //     position: absolute;
  //     width: 48px;
  //     height: 48px;
  //     z-index: 2;
  //     top: 0;
  //     left: 0;
  //     right: 0;
  //     margin: auto;
  //     background-color: #dedede;
  //     opacity: 0.7;
  //     border-radius: 50%;
  //     box-shadow: 0px 2px 4px 1px rgba(48, 48, 48, 0.08);
  //   }
  //   #{$this} {
  //     &--text {
  //       color: #a3a5a7;
  //     }
  //   }
  // }
}
</style>

<script>
export default {
  name: "JournalMoodPicker",
  props: {
    selectedMood: String
  },
  methods: {
    selectMood(moodName) {
      this.$emit("change-mood", moodName);
    }
  }
};
</script>
