<template>
  <div class="journal-distortion-button row" :class="{ selected: isSelected }">
    <DistortionIconLoader
      :distortion-name="distortion.title"
      :width="32"
      style="margin-right: 8px"
    />
    <div class="text col">
      <div class="title text__primary text__title-5">
        {{ distortion.title }}
      </div>
      <div class="desc text__primary text__footnote">
        {{ distortion.desc }}
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.journal-distortion-button {
  padding: 8px 12px;
  background-color: #f2f6ff;
  border-radius: 6px;
  border: 1px solid transparent;
  transition: border 0.3s ease;

  &.selected {
    border: 1px solid #5c7ccd;
    transition: border 0.3s ease;
  }
}
</style>

<script>
import DistortionIconLoader from "components/utils/DistortionIconLoader";

export default {
  name: "JournalDistortionButton",
  props: {
    isSelected: Boolean,
    distortion: Object
  },
  components: {
    DistortionIconLoader
  }
};
</script>
