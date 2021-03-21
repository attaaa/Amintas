<template>
  <div class="button-picker flex items-center">
    <img
      svg-inline
      src="assets/icons/mood-base/baik.svg"
      v-if="moodState === 'baik'"
      style="margin-right: 8px; width: 18px; height: 18px;"
    />
    <img
      svg-inline
      src="assets/icons/mood-base/sangat-baik.svg"
      v-if="moodState === 'sangat baik'"
      style="margin-right: 8px; width: 18px; height: 18px;"
    />
    <img
      svg-inline
      src="assets/icons/mood-base/buruk.svg"
      v-if="moodState === 'buruk'"
      style="margin-right: 8px; width: 18px; height: 18px;"
    />
    <img
      svg-inline
      src="assets/icons/mood-base/netral.svg"
      v-if="moodState === 'netral'"
      style="margin-right: 8px; width: 18px; height: 18px;"
    />
    <img
      svg-inline
      src="assets/icons/mood-base/sangat-buruk.svg"
      v-if="moodState === 'sangat buruk'"
      style="margin-right: 8px; width: 18px; height: 18px;"
    />
    <span class="text__title-5 button-picker-title text-white">{{
      moodState
    }}</span>
  </div>
</template>

<style lang="scss">
.button-picker {
  border-radius: 6px;
  padding: 8px 12px;
  background-color: $color-primary;
}
.button-picker-title {
  text-transform: capitalize;
}
</style>

<script>
export default {
  name: "ButtonPicker",
  props: {
    moodState: String
  }
};
</script>
