<template>
  <div>
    <FillLayout
      title="Apa yang memicu perasaan cemasmu?"
      :showAction="!!story_penyebab.title"
      :handleNextAction="handleNextAction"
    >
      <div class="full-width overflow-hidden" style="padding-inline: 8px">
        <TextArea
          @input-listener="onChangeStoryTitle"
          :input-var="story_penyebab.title"
          placeholder="Nama Pemicu"
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
        title: ""
      }
    };
  },
  computed: {
    strategiInputData() {
      return this.$store.state.strategi.strategiInputData;
    }
  },
  mounted() {
    this.story_penyebab.title = this.strategiInputData.story_penyebab.title;
  },
  methods: {
    onChangeStoryTitle(storyTitle) {
      this.story_penyebab.title = storyTitle;
    },
    handleNextAction() {
      this.$store.dispatch("strategi/updateInputStrategi", {
        ...this.strategiInputData,
        story_penyebab: {
          ...this.strategiInputData.story_penyebab,
          title: this.story_penyebab.title
        }
      });
      this.$router.push("/strategi/input-story1-detail");
    }
  }
};
</script>

<style></style>
