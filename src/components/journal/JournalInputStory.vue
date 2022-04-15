<template>
  <div class="journal-input-story column">
    <!-- header navigation -->
    <div class="col-auto" style="margin-bottom: 24px;">
      <img
        svg-inline
        class="fill-primary"
        src="assets/icons/general/arrow-left.svg"
        style="width: 24px; height: 24px;"
        @click="goBack()"
      />
    </div>

    <!-- text title -->
    <div
      class="column col full-width"
      style="padding-left: 8px; padding-right: 8px;"
    >
      <div
        class="col-auto text__title-3 text-center"
        style="width: 280px; margin-left: auto; margin-right: auto; margin-bottom: 24px;"
      >
        Apa yang terjadi hingga kamu merasa seperti ini?
      </div>

      <div class="col full-width overflow-hidden">
        <TextAreaTitled
          v-on="$listeners"
          :input-var="inputVar"
          class="block scroll hide-scrollbar"
          style="min-height: 328px; max-height: 100%;"
        />
      </div>
    </div>
  </div>
</template>

<script>
import TextAreaTitled from "components/inputs/TextAreaTitled";
export default {
  name: "JournalInputStory",
  components: { TextAreaTitled },
  props: {
    inputVar: Object
  },
  methods: {
    goBack() {
      this.$emit("go-back", true);
    }
  }
};
</script>
