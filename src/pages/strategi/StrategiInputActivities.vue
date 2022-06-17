<template>
  <div>
    <FillLayout
      title="Aktivitas atau situasi apa yang akan kamu lakukan?"
      :showAction="!!someVar && !!someVar"
      :handleNextAction="handleNextAction"
    >
      <div class="full-width overflow-hidden" style="padding-inline: 8px"></div>
    </FillLayout>
  </div>
</template>

<script>
import TextAreaTitled from "components/inputs/TextAreaTitled";
import FillLayout from "src/layouts/FillLayout.vue";

export default {
  name: "StrategiInputActivities",
  components: {
    TextAreaTitled,
    FillLayout
  },
  data() {
    return {
      someVar
    };
  },
  methods: {
    handleNextAction() {
      this.$router.push("/");
    }
  }
};
</script>

<style></style>
