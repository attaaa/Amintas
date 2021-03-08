<template>
  <div class="button-picker flex items-center">
    <img
      svg-inline
      src="assets/icons/mood/baik.svg"
      v-if="moodState === 'baik'"
      style="margin-right: 8px"
    />
    <img
      svg-inline
      src="assets/icons/mood/sangat_baik.svg"
      v-if="moodState === 'sangat baik'"
      style="margin-right: 8px"
    />
    <img
      svg-inline
      src="assets/icons/mood/buruk.svg"
      v-if="moodState === 'buruk'"
      style="margin-right: 8px"
    />
    <img
      svg-inline
      src="assets/icons/mood/netral.svg"
      v-if="moodState === 'netral'"
      style="margin-right: 8px"
    />
    <img
      svg-inline
      src="assets/icons/mood/sangat_buruk.svg"
      v-if="moodState === 'sangat buruk'"
      style="margin-right: 8px"
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
