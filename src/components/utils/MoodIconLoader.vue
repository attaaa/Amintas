<template>
  <div>
    <img
      svg-inline
      src="assets/icons/mood-base/sangat-buruk.svg"
      v-if="mood === 'sangat buruk'"
    />
    <img
      svg-inline
      src="assets/icons/mood-base/buruk.svg"
      v-if="mood === 'buruk'"
    />
    <img
      svg-inline
      src="assets/icons/mood-base/netral.svg"
      v-if="mood === 'netral'"
    />
    <img
      svg-inline
      src="assets/icons/mood-base/baik.svg"
      v-if="mood === 'baik'"
    />
    <img
      svg-inline
      src="assets/icons/mood-base/sangat-baik.svg"
      v-if="mood === 'sangat baik'"
    />
  </div>
</template>

<script>
export default {
  name: "MoodIconLoader",
  props: {
    mood: String
  }
};
</script>
