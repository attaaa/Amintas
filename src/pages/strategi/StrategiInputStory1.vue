<template>
  <div>
    <FillLayout
      title="Apa yang terjadi hingga kamu cemas akan hal itu?"
      :showAction="!!inputVar.title && !!inputVar.content"
      :handleNextAction="handleNextAction"
    >
      <div class="full-width overflow-hidden" style="padding-inline: 8px">
        <TextAreaTitled
          @input-story-listener="onChangeStory"
          :input-var="inputVar"
          :placeholder-props="{
            title: 'Nama Pemicu',
            content: 'Tuliskan ceritamu disini'
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
      inputVar: {
        title: "",
        content: ""
      }
    };
  },
  methods: {
    onChangeStory(story) {
      this.inputVar = story;
    },
    handleNextAction() {
      this.$router.push("/");
    }
  }
};
</script>

<style></style>
