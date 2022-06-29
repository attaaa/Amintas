<template>
  <div>
    <FillLayout
      title="Aktivitas atau situasi apa yang akan kamu lakukan?"
      :showAction="true"
      :handleNextAction="null"
      :showBantuan="true"
      :bantuanHeight="484"
      :bantuanContent="markdownToHtml"
    >
      <div
        v-if="true"
        class="full-width overflow-hidden"
        style="padding-inline: 16px"
      >
        <div
          v-for="(activity, index) in strategiInputData.activities"
          :key="'level' - index"
        >
          <TableLadderLevel :label="activity" v-model="levels[index]" />
          <div class="divider" style="margin: 12px 0 16px" />
        </div>
      </div>
    </FillLayout>
  </div>
</template>

<script>
import TableLadderLevel from "src/components/strategi/TableLadderLevel.vue";
import FillLayout from "src/layouts/FillLayout.vue";

import DistorsiKognitif from "!!raw-loader!../../data/info/DistorsiKognitif.md";
import { marked } from "marked";

export default {
  name: "StrategiInputLevel",
  components: { FillLayout, TableLadderLevel },
  data() {
    return {
      levels: null
    };
  },
  mounted() {
    this.levels = this.strategiInputData.activites.map(_ => 0);
  },
  computed: {
    strategiInputData() {
      return this.$store.state.strategi.strategiInputData;
    },
    markdownToHtml() {
      return marked(DistorsiKognitif);
    }
  }
};
</script>

<style></style>
