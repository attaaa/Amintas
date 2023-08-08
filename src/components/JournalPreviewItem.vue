<template>
  <div class="journal-preview-item full-width">
    <div class="journal-preview-item--head full-width row items-center">
      <MoodIconLoader
        :mood="journalData.mood"
        style="width: 32px; height: 32px;"
      />
      <span
        class="mood-title text__title-3"
        :style="{ color: titleColor[journalData.mood] }"
        >{{ journalData.mood }}</span
      >
      <span class="time-created flex text__footnote">{{
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
      <span
        class="journal-title text__headline text__neutral-black block"
        v-if="journalData.story.title !== ''"
      >
        {{ journalData.story.title }}
      </span>
      <p class="journal-body text__body text__neutral-black q-ma-none">
        {{ journalData.story.detail }}
      </p>
    </div>
  </div>
</template>

<script>
import LabelMood from "./LabelMood";
import MoodIconLoader from "components/utils/MoodIconLoader";

const titleColor = {
  "sangat buruk": "#8953C2",
  buruk: "#1E82C0",
  netral: "#BE6101",
  baik: "#5C7C30",
  "sangat baik": "#B08213"
};

export default {
  name: "JournalPreviewItem",
  components: { LabelMood, MoodIconLoader },
  props: {
    journalData: Object
  },
  data() {
    return {
      numberedLabel: 0,
      titleColor
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

<style lang="scss" scoped>
.journal-preview-item {
  &--head {
    margin-bottom: 16px;

    .mood-title {
      margin-left: 12px;
      flex-grow: 1;
      margin-right: 24px;
      text-transform: capitalize;
    }

    .time-created {
      margin-right: auto;
    }
  }

  &--label {
    margin-bottom: 16px;
  }

  &--content {
    border-radius: 8px;
    background: #f2f6ff;
    padding: 16px;

    .journal-title {
      margin-bottom: 4px;
    }

    .journal-body {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 2; /* Number of lines to display */
      max-height: 48px; /* Two lines with some buffer */
      line-height: 24px; /* Line height for proper line truncation */
    }
  }
}
</style>
