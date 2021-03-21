<template>
  <div class="journal-preview-item full-width">
    <div class="journal-preview-item--head full-width row items-center">
      <img
        svg-inline
        class="mood-img"
        src="assets/icons/mood-base/sangat-buruk.svg"
        style="width: 32px; height: 32px;"
      />
      <span class="mood-title text__title-1">{{ journalData.moodTitle }}</span>
      <span class="time-created flex">{{ journalData.timeCreated }}</span>
    </div>

    <div class="journal-preview-item--label row">
      <div
        v-for="(item, index) in journalData.labelMoodList.slice(0, 3)"
        :key="index"
        class="flex"
      >
        <LabelMood :label-text="item" />
        <div class="space-8"></div>
      </div>
      <LabelMood :label-text="numberedLabel" :use-img-state="false" />
    </div>

    <div class="journal-preview-item--content">
      <span class="journal-title text__title-4 text__primary block">
        {{ journalData.journalTitle }}
      </span>
      <p class="text__body q-ma-none">
        {{ journalData.journalContent }}
      </p>
    </div>
  </div>
</template>

<style lang="scss">
@import url("JournalPreviewItem.scss");
</style>

<script>
import LabelMood from "./LabelMood";

export default {
  name: "JournalPreviewItem",
  components: { LabelMood },
  props: {
    journalData: Object
  },
  data() {
    return {
      numberedLabel: null
    };
  },
  mounted() {
    this.unpackLabel();
  },
  methods: {
    unpackLabel() {
      if (this.journalData.labelMoodList.length > 3) {
        this.numberedLabel = "+" + (this.journalData.labelMoodList.length - 3);
      }
    }
  }
};
</script>
