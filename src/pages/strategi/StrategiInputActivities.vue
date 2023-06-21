<template>
  <div>
    <FillLayout
      :bantuanContent="markdownToHtml"
      :bantuanHeight="484"
      :handleNextAction="handleNextAction"
      :showAction="checkInputValid()"
      :showBantuan="true"
      title="Aktivitas atau situasi apa yang akan kamu lakukan?"
    >
      <div
        v-if="activities"
        class="full-width overflow-hidden"
        style="padding-inline: 16px"
      >
        <div class="col full-width overflow-hidden">
          <TableLadderActivity
            v-for="(activity, index) in activities"
            :handle-add="handleAdd"
            :handle-remove="handleRemove"
            :idx="index"
            :is-first="index === 0"
            :is-last="index === activities.length - 1"
            :key="index"
            :model="activities[index].name"
            @input="val => (activities[index].name = val)"
            style="margin-bottom: 12px"
          >
          </TableLadderActivity>
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
      activities: [
        { name: "", level: null, status: "inactive", checked: false }
      ]
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
    this.activities = JSON.parse(
      JSON.stringify(this.strategiInputData.activities)
    );
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
      this.activities = [
        ...this.activities,
        { name: "", level: null, status: "inactive", checked: false }
      ];
    },
    handleRemove(idx) {
      this.activities.splice(idx, 1);
    },
    handleNextAction() {
      this.$store.dispatch("strategi/updateInputStrategi", {
        ...this.strategiInputData,
        activities: [...this.activities]
      });
      this.$router.push("/strategi/input-level");
    },
    onInput() {}
  }
};
</script>

<style></style>
