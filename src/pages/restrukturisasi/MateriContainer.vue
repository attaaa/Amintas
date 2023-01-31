<template>
  <div v-html="markdownToHtml"></div>
</template>

<script>
import DistorsiKognitif from "!!raw-loader!../../data/info/DistorsiKognitif.md";
import { marked } from "marked";

export default {
  computed: {
    markdownToHtml() {
      return marked(DistorsiKognitif);
    }
  }
};
</script>
