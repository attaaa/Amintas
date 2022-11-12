<template>
  <div>
    <FillLayout
      title="Aktivitas atau situasi apa yang akan kamu lakukan?"
      :showAction="checkInputValid()"
      :handleNextAction="handleNextAction"
      :showBantuan="true"
      :bantuanHeight="484"
      :bantuanContent="markdownToHtml"
    >
      <div
        v-if="activities"
        class="full-width overflow-hidden"
        style="padding-inline: 16px"
      >
        <div class="col full-width overflow-hidden">
          <TableLadderActivity
            v-for="(activity, index) in activities"
            :key="index"
            :model="activities[index].val"
            @input="val => (activities[index].val = val)"
            :idx="index"
            :is-last="index === activities.length - 1"
            :is-first="index === 0"
            :handle-add="handleAdd"
            :handle-remove="handleRemove"
            style="margin-bottom: 12px"
          />
        </div>
      </div>
    </FillLayout>
  </div>
</template>

<script>
import TableLadderActivity from "src/components/strategi/TableLadderActivity.vue";
import FillLayout from "src/layouts/FillLayout.vue";

import DistorsiKognitif from "!!raw-loader!../../data/info/DistorsiKognitif.md";
import { marked } from "marked";

export default {
  name: "StrategiInputActivities",
  components: { FillLayout, TableLadderActivity },
  data() {
    return {
      activities: [{ val: "" }]
    };
  },
  computed: {
    strategiInputData() {
      return this.$store.state.strategi.strategiInputData;
    },
    markdownToHtml() {
      return marked(DistorsiKognitif);
    }
  },
  mounted() {
    this.activities = [
      ...this.strategiInputData.activities.map(val => ({
        val: val
      }))
    ];
  },
  methods: {
    checkInputValid() {
      for (let activity of this.activities) {
        if (activity.val === "") {
          return false;
        }
      }
      return true;
    },
    log(val) {
      console.log(val);
    },
    handleAdd() {
      this.activities = [...this.activities, { val: "" }];
    },
    handleRemove(idx) {
      this.activities.splice(idx, 1);
    },
    handleNextAction() {
      this.$store.dispatch("strategi/updateInputStrategi", {
        ...this.strategiInputData,
        activities: [...this.activities.map(activity => activity.val)]
      });
      this.$router.push("/strategi/input-level");
    }
  }
};
</script>

<style></style>
