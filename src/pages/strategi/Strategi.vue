<template>
  <div style="padding: 16px">
    <!-- header -->
    <div class="flex justify-between items-center" style="margin-bottom: 56px">
      <div class="text__title-1 text__primary">Strategi</div>
      <div @click="$refs.popUpHelp.setState('half')">
        <img src="assets/icons/bantuan-24.svg" />
      </div>
    </div>
    <!--  -->
    <div class="text-center" style="margin-bottom: 24px">
      <img src="assets/img/empty_nothing.png" />
    </div>
    <div
      class="text__title-3 text__primary text-center"
      style="margin-bottom: 12px"
    >
      Strategimu belum ada nih
    </div>
    <div
      class="text__body text__neutral-dark-grey text-center"
      style="margin-bottom: 24px"
    >
      Mulai buat strategimu sendiri untuk lebih efektif hadapi pemicu cemas
    </div>
    <div class="flex justify-center">
      <button
        class="btn__large btn__accent"
        @click="() => this.$router.replace('/strategi/input-category')"
      >
        Buat Strategi
      </button>
    </div>

    <!-- help bottom sheet -->
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
          v-html="markdownToHtml()"
        ></div>
      </q-scroll-area>
    </SwipeableBottomSheet>
  </div>
</template>

<script>
import SwipeableBottomSheet from "components/SwipeableBottomSheet";
import { marked } from "marked";
import Strategi from "!!raw-loader!../../data/info/Strategi.md";

export default {
  name: "Strategi",
  components: { SwipeableBottomSheet },
  mounted() {
    this.$store.commit("strategi/clearInputStrategi");
    if (this.$store.state.strategi.strategiActive) {
      this.$router.replace("/strategi-active");
    }
  },
  methods: {
    // content inside bottom sheet helper
    markdownToHtml() {
      return marked(Strategi);
    },
    helperHalfTop() {
      return window.innerHeight - 460;
    }
  }
};
</script>

<style></style>
