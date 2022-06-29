<template>
  <div>
    <FillLayout
      title="Apa yang terjadi hingga kamu cemas akan hal itu?"
      :showAction="!!story_penyebab.title && !!story_penyebab.detail"
      :handleNextAction="handleNextAction"
    >
      <div class="full-width overflow-hidden" style="padding-inline: 8px">
        <TextAreaTitled
          @input-story-listener="onChangeStory"
          :input-var="story_penyebab"
          :placeholder-props="{
            title: 'Nama Pemicu',
            detail: 'Tuliskan ceritamu disini'
          }"
          class="block scroll hide-scrollbar"
          style="min-height: 328px; max-height: 100%;"
        />
      </div>
    </FillLayout>
  </div>
</template>

<script>
import TextAreaTitled from "components/inputs/TextAreaTitled";
import FillLayout from "src/layouts/FillLayout.vue";

export default {
  name: "StrategiInputStory1",
  components: {
    TextAreaTitled,
    FillLayout
  },
  data() {
    return {
      story_penyebab: {
        title: "",
        detail: ""
      }
    };
  },
  methods: {
    onChangeStory(story) {
      this.story_penyebab = story;
    },
    handleNextAction() {
      this.$store.dispatch("strategi/updateInputStrategi", {
        ...this.strategiInputData,
        story_penyebab: this.story_penyebab
      });
      this.$router.push("/strategi/input-story2");
    }
  },
  computed: {
    strategiInputData() {
      return this.$store.state.strategi.strategiInputData;
    }
  }
};
</script>

<style></style>
