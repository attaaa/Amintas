<template>
  <div>
    <FillLayout
      title="Apa tujuanmu menghadapi pemicu tersebut?"
      :showAction="!!story_tujuan"
      :handleNextAction="handleNextAction"
      :showBantuan="true"
      :bantuanHeight="484"
      :bantuanContent="markdownToHtml"
    >
      <div class="full-width overflow-hidden" style="padding-inline: 8px">
        <div class="col full-width overflow-hidden">
          <TextArea
            @input-listener="onChangeStory"
            :input-var="story_tujuan"
            placeholder="Tuliskan tujuan strategimu di sini"
            class="block scroll hide-scrollbar"
            style="min-height: 328px; max-height: 100%;"
          />
        </div>
      </div>
    </FillLayout>
  </div>
</template>

<script>
import TextArea from "components/inputs/TextArea.vue";
import FillLayout from "src/layouts/FillLayout.vue";

import StrategiStory from "!!raw-loader!../../data/info/StrategiStory.md";
import { marked } from "marked";

export default {
  name: "StrategiInputStory2",
  components: {
    FillLayout,
    TextArea
  },
  data() {
    return {
      story_tujuan: ""
    };
  },
  computed: {
    strategiInputData() {
      return this.$store.state.strategi.strategiInputData;
    },
    markdownToHtml() {
      return marked(StrategiStory);
    }
  },
  mounted() {
    this.story_tujuan = this.strategiInputData.story_tujuan;
  },
  methods: {
    onChangeStory(story) {
      this.story_tujuan = story;
    },
    handleNextAction() {
      this.$store.dispatch("strategi/updateInputStrategi", {
        ...this.strategiInputData,
        story_tujuan: this.story_tujuan
      });
      this.$router.push("/strategi/input-activities");
    }
  }
};
</script>

<style></style>
