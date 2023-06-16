<template>
  <div class="journal-input-identif column">
    <!-- header navigation -->
    <div
      class="col-auto row items-center justify-between relative-position"
      style="margin-bottom: 24px;"
    >
      <div @click="goBack()">
        <img
          svg-inline
          class="fill-primary"
          src="assets/icons/general/arrow-left.svg"
          style="width: 24px; height: 24px;"
        />
      </div>
      <div class="absolute-center" @click="showPopUp()">
        <img
          svg-inline
          class="fill-primary"
          src="assets/icons/help-round.svg"
          style="width: 24px; height: 24px;"
        />
      </div>
      <button
        class="btn__small btn__secondary text__primary"
        @click="skipInput()"
      >
        Lewati
      </button>
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
        Bagaimana alternatif pikiran terkait ceritamu?
      </div>

      <div class="col full-width overflow-hidden">
        <TextArea
          v-on="$listeners"
          :input-var="inputVar"
          :placeholder="placeholder"
          class="block scroll hide-scrollbar"
          style="min-height: 328px; max-height: 100%;"
        />
      </div>
    </div>

    <!-- pop up help -->
    <SwipeableBottomSheet
      ref="popUpHelp"
      default-state="close"
      :half-top="helperHalfTop()"
      :use-overlay="true"
      :can-close="true"
      :swipeable="true"
    >
      <q-scroll-area
        class="column "
        style="height: 100vh; padding: 16px; padding-top: 4px; padding-bottom: 0 !important;"
      >
        <div
          class="info-content"
          style="padding-bottom: 40px;"
          v-html="markdownToHtml"
        ></div>
      </q-scroll-area>
    </SwipeableBottomSheet>
  </div>
</template>

<script>
import TextArea from "components/inputs/TextArea";
import SwipeableBottomSheet from "components/SwipeableBottomSheet";

import { marked } from "marked";
import Alternative from "!!raw-loader!../../data/info/Alternative.md";

export default {
  name: "JournalInputAlternative",
  components: {
    TextArea,
    SwipeableBottomSheet
  },
  props: {
    inputVar: String,
    placeholder: String
  },
  computed: {
    markdownToHtml() {
      return marked(Alternative);
    }
  },
  methods: {
    goBack() {
      this.$emit("go-back", true);
    },
    skipInput() {
      this.$emit("skip-input");
    },
    showPopUp() {
      this.$refs.popUpHelp.setState("half");
    },
    hidePopUp() {
      this.$refs.popUpHelp.setState("close");
    },
    helperHalfTop() {
      return window.innerHeight - 484;
    }
  }
};
</script>

<style lang="scss" scoped>
.info-content::v-deep {
  ul {
    padding-inline-start: 24px;

    li {
      padding-inline-start: 10px;
    }
  }
}
</style>
