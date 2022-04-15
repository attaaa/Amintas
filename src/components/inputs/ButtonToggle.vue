<template>
  <div class="button-toggle row full-width">
    <div
      class="button-toggle--item col text-center text__title-5"
      :class="{ selected: selectedState === 'negatif' }"
      @click="selectEmotionState('negatif')"
    >
      Negatif
    </div>
    <div
      class="button-toggle--item col text-center text__title-5"
      :class="{ selected: selectedState === 'positif' }"
      @click="selectEmotionState('positif')"
    >
      Positif
    </div>
  </div>
</template>

<style lang="scss">
.button-toggle {
  background-color: #dedede;
  border-radius: 4px;

  &--item {
    border-radius: 4px;
    color: #a3a5a7;
    padding: 2px 12px;
    box-sizing: border-box;

    &.selected {
      background-color: #5c7ccd;
      color: #ffffff;
    }
  }
}
</style>

<script>
export default {
  name: "ButtonToggle",
  props: {
    selectedState: String
  },
  methods: {
    selectEmotionState(emotionState) {
      this.$emit("change-emotion-state", emotionState);
    }
  }
};
</script>
