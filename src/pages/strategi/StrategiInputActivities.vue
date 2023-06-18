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
            :model="activities[index].name"
            @input="val => (activities[index].name = val)"
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

import StrategiActivities from "!!raw-loader!../../data/info/StrategiActivities.md";
import { marked } from "marked";

export default {
  name: "StrategiInputActivities",
  components: { FillLayout, TableLadderActivity },
  data() {
    return {
      activities: [{ name: "", level: null }]
    };
  },
  computed: {
    strategiInputData() {
      return this.$store.state.strategi.strategiInputData;
    },
    markdownToHtml() {
      return marked(StrategiActivities);
    }
  },
  created() {
    this.activities = [...this.strategiInputData.activities];
  },
  methods: {
    checkInputValid() {
      for (let activity of this.activities) {
        if (activity.name === "") {
          return false;
        }
      }
      return true;
    },
    log(val) {
      console.log(val);
    },
    handleAdd() {
      this.activities = [...this.activities, { name: "", level: null }];
    },
    handleRemove(idx) {
      this.activities.splice(idx, 1);
    },
    handleNextAction() {
      this.$store.dispatch("strategi/updateInputStrategi", {
        activities: [...this.activities]
      });
      this.$router.push("/strategi/input-level");
    }
  }
};
</script>

<style></style>
