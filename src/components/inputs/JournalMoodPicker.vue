<template>
  <div class="column">
    <div id="mood-row1" style="margin: auto;">
      <div
        class="mood-item text-center relative-position"
        style="width: 85px; height: 74px;"
        :class="{
          'not-selected': selectedMood !== '' && selectedMood !== 'netral'
        }"
        @click="selectMood('netral')"
      >
        <div class="shadow"></div>
        <img
          svg-inline
          src="assets/icons/mood-base/netral.svg"
          style="width: 48px; height: 48px; margin-bottom: 4px;"
        />
        <div class="mood-item--text text__title-5">Netral</div>
      </div>
    </div>

    <div
      id="mood-row2"
      class="row"
      style="margin-left: auto; margin-right:auto; margin-top: -12px;"
    >
      <div
        class="mood-item text-center relative-position"
        style="width: 85px; height; 74px; margin-right: 72px"
        :class="{
          'not-selected': selectedMood !== '' && selectedMood !== 'buruk'
        }"
        @click="selectMood('buruk')"
      >
        <div class="shadow"></div>
        <img
          svg-inline
          src="assets/icons/mood-base/buruk.svg"
          style="width: 48px; height: 48px; margin-bottom: 4px;"
        />
        <div class="mood-item--text text__title-5">Buruk</div>
      </div>

      <div
        class="mood-item text-center relative-position"
        style="width: 85px; height: 74px;"
        :class="{
          'not-selected': selectedMood !== '' && selectedMood !== 'baik'
        }"
        @click="selectMood('baik')"
      >
        <div class="shadow"></div>
        <img
          svg-inline
          src="assets/icons/mood-base/baik.svg"
          style="width: 48px; height: 48px; margin-bottom: 4px;"
        />
        <div class="mood-item--text text__title-5">Baik</div>
      </div>
    </div>

    <div
      id="mood-row3"
      class="row"
      style="margin-left: auto; margin-right:auto; margin-top: 12px;"
    >
      <div
        class="mood-item text-center relative-position"
        style="width: 85px; height; 74px; margin-right: 16px;"
        :class="{
          'not-selected': selectedMood !== '' && selectedMood !== 'sangat buruk'
        }"
        @click="selectMood('sangat buruk')"
      >
        <div class="shadow"></div>
        <img
          svg-inline
          src="assets/icons/mood-base/sangat-buruk.svg"
          style="width: 48px; height: 48px; margin-bottom: 4px;"
        />
        <div class="mood-item--text text__title-5">Sangat Buruk</div>
      </div>

      <div
        class="mood-item text-center relative-position"
        style="width: 85px; height: 74px;"
        :class="{
          'not-selected': selectedMood !== '' && selectedMood !== 'sangat baik'
        }"
        @click="selectMood('sangat baik')"
      >
        <div class="shadow"></div>
        <img
          svg-inline
          src="assets/icons/mood-base/sangat-baik.svg"
          style="width: 48px; height: 48px; margin-bottom: 4px;"
        />
        <div class="mood-item--text text__title-5">Sangat Baik</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.mood-item {
  $this: &;

  &.not-selected {
    .shadow {
      position: absolute;
      width: 48px;
      height: 48px;
      z-index: 2;
      top: 0;
      left: 0;
      right: 0;
      margin: auto;
      background-color: #dedede;
      opacity: 0.7;
      border-radius: 50%;
    }
    #{$this} {
      &--text {
        color: #a3a5a7;
      }
    }
  }
}
</style>

<script>
export default {
  name: "JournalMoodPicker",
  data() {
    return {
      selectedMood: ""
    };
  },
  methods: {
    selectMood(moodName) {
      this.selectedMood = moodName;
      this.$emit("change-mood", this.selectedMood);
    }
  }
};
</script>
