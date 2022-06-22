<template>
  <div>
    <FillLayout
      title="Apa tujuanmu menghadapi pemicu tersebut?"
      :showAction="!!story2"
      :handleNextAction="handleNextAction"
      :showBantuan="true"
      :bantuanHeight="484"
      :bantuanContent="markdownToHtml"
    >
      <div class="full-width overflow-hidden" style="padding-inline: 8px">
        <div class="col full-width overflow-hidden">
          <TextArea
            @input-listener="onChangeStory"
            :input-var="story2"
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

import DistorsiKognitif from "!!raw-loader!../../data/info/DistorsiKognitif.md";
import { marked } from "marked";

export default {
  name: "StrategiInputStory2",
  components: {
    FillLayout,
    TextArea
  },
  data() {
    return {
      story2: ""
    };
  },
  methods: {
    onChangeStory(story) {
      this.story2 = story;
    },
    handleNextAction() {
      this.$router.push("/");
    }
  },
  computed: {
    markdownToHtml() {
      return marked(DistorsiKognitif);
    }
  }
};
</script>

<style></style>
