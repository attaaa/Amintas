<template>
  <div>
    <FillLayout
      title="Apa yang terjadi hingga kamu cemas akan hal itu?"
      :showAction="!!story_penyebab.detail"
      :handleNextAction="handleNextAction"
    >
      <div class="full-width overflow-hidden" style="padding-inline: 8px">
        <TextArea
          @input-listener="onChangeStoryDetail"
          :input-var="story_penyebab.detail"
          placeholder="Tuliskan ceritamu di sini"
          class="block scroll hide-scrollbar"
          style="min-height: 328px; max-height: 100%;"
        />
      </div>
    </FillLayout>
  </div>
</template>

<script>
import TextArea from "components/inputs/TextArea.vue";
import FillLayout from "src/layouts/FillLayout.vue";

export default {
  name: "StrategiInputStory1",
  components: {
    TextArea,
    FillLayout
  },
  data() {
    return {
      story_penyebab: {
        detail: ""
      }
    };
  },
  computed: {
    strategiInputData() {
      return this.$store.state.strategi.strategiInputData;
    }
  },
  mounted() {
    this.story_penyebab.detail = this.strategiInputData.story_penyebab.detail;
  },
  methods: {
    onChangeStoryDetail(storyDetail) {
      this.story_penyebab.detail = storyDetail;
    },
    handleNextAction() {
      this.$store.dispatch("strategi/updateInputStrategi", {
        ...this.strategiInputData,
        story_penyebab: {
          ...this.strategiInputData.story_penyebab,
          detail: this.story_penyebab.detail
        }
      });
      this.$router.push("/strategi/input-story2");
    }
  }
};
</script>

<style></style>
