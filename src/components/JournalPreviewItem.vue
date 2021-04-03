<template>
  <div class="journal-preview-item full-width">
    <div class="journal-preview-item--head full-width row items-center">
      <MoodIconLoader
        :mood="journalData.mood"
        style="width: 32px; height: 32px;"
      />
      <span class="mood-title text__title-1">{{ journalData.mood }}</span>
      <span class="time-created flex">{{
        journalData.created_at.split("-")[1]
      }}</span>
    </div>

    <div class="journal-preview-item--label row">
      <div
        v-for="(item, index) in journalData.emotions.slice(0, 3)"
        :key="index"
        class="flex"
      >
        <LabelMood :label-text="item" />
        <div class="space-8"></div>
      </div>
      <LabelMood
        v-if="numberedLabel > 0"
        :label-text="numberedLabel"
        :use-img-state="false"
      />
    </div>

    <div class="journal-preview-item--content">
      <span class="journal-title text__title-4 text__primary block">
        {{ journalData.story.title }}
      </span>
      <p class="text__body q-ma-none">
        {{ journalData.story.content }}
      </p>
    </div>
  </div>
</template>

<style lang="scss">
@import url("JournalPreviewItem.scss");
</style>

<script>
import LabelMood from "./LabelMood";
import MoodIconLoader from "components/utils/MoodIconLoader";

export default {
  name: "JournalPreviewItem",
  components: { LabelMood, MoodIconLoader },
  props: {
    journalData: Object
  },
  data() {
    return {
      numberedLabel: 0
    };
  },
  mounted() {
    this.unpackLabel();
  },
  methods: {
    unpackLabel() {
      if (this.journalData.emotions.length > 3) {
        this.numberedLabel = "+" + (this.journalData.emotions.length - 3);
      }
    }
  }
};
</script>
