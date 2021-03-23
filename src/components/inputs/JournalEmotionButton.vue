<template>
  <div class="journal-emotion-button row" :class="{ selected: isSelected }">
    <EmotionIconLoader :icon-name="emotion" class="icon" />
    <div class="text text__title-4 text__primary">
      {{ emotion }}
    </div>
  </div>
</template>

<style lang="scss">
.journal-emotion-button {
  padding: 8px 12px;
  background-color: #f2f6ff;
  box-sizing: border-box;
  border-radius: 6px;
  border: 1px solid transparent;
  transition: border 0.3s ease;

  .icon {
    width: 24px;
    height: 24px;
    margin-right: 8px;
  }

  .text {
    text-transform: capitalize;
  }

  &.selected {
    box-sizing: border-box !important;
    border: 1px solid #5c7ccd;
    transition: border 0.3s ease;
  }
}
</style>

<script>
import EmotionIconLoader from "components/utils/EmotionIconLoader";

export default {
  name: "JournalEmotionButton",
  components: { EmotionIconLoader },
  props: {
    emotion: String,
    isSelected: Boolean
  }
};
</script>
