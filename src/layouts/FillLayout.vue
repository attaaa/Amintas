<template>
  <div class="relative-position" style="height: 100vh; overflow: hidden;">
    <!-- header navigation -->
    <div class="relative-position" style="padding: 16px 12px;">
      <div @click="$router.back()">
        <img
          src="assets/icons/general/arrow-left.svg"
          svg-inline
          style="width: 24px; fill: #5C7CCD;"
        />
      </div>
      <div
        v-if="showBantuan"
        class="absolute-center"
        @click="() => this.$refs.popUpHelp.setState('half')"
      >
        <img
          src="assets/icons/bantuan.svg"
          svg-inline
          style="width: 24px; fill: #5C7CCD;"
        />
      </div>
    </div>

    <!-- page title -->
    <div
      class="text-center text__title-3 text__neutral-black"
      style="padding: 4px 32px; margin-bottom: 20px;"
    >
      {{ title }}
    </div>

    <!-- content -->
    <slot></slot>

    <!-- action -->
    <div
      class="fill-action col-auto"
      :class="[showAction ? 'show-action' : 'hide-action']"
    >
      <button
        class="btn__large btn__accent full-width"
        @click="handleNextAction()"
      >
        {{ labelNextAction }}
      </button>
    </div>

    <!-- pop up help -->
    <SwipeableBottomSheet
      v-if="showBantuan"
      ref="popUpHelp"
      default-state="close"
      :half-top="helperHalfTop()"
      :use-overlay="true"
      :can-close="true"
      :swipeable="true"
    >
      <q-scroll-area
        class="column "
        style="height: 100vh; padding: 16px; padding-bottom: 0 !important;"
      >
        <div
          class="info-content"
          style="padding-bottom: 40px;"
          v-html="bantuanContent"
        ></div>
      </q-scroll-area>
    </SwipeableBottomSheet>
  </div>
</template>

<script>
import SwipeableBottomSheet from "components/SwipeableBottomSheet";

export default {
  name: "FillLayout",
  components: {
    SwipeableBottomSheet
  },
  props: {
    title: String,
    showAction: Boolean,
    labelNextAction: {
      type: String,
      default: "Lanjut"
    },

    // settings pop up bantuan
    showBantuan: Boolean,
    bantuanHeight: Number,
    bantuanContent: String,

    // handler
    handleBackAction: Function,
    handleNextAction: Function
  },
  methods: {
    helperHalfTop() {
      return window.innerHeight - this.bantuanHeight;
    }
  }
};
</script>

<style>
.fill-action {
  width: 100%;
  padding: 16px 16px 24px 16px;
  position: absolute;
  box-shadow: 0px 2px 4px 1px rgba(48, 48, 48, 0.12);
  background-color: #fff;
  z-index: 40px;
}

.fill-action.hide-action {
  bottom: -88px;
}

.fill-action.show-action {
  bottom: 0;
  transition: bottom 500ms cubic-bezier(0.465, 0.183, 0.153, 0.946);
}
</style>
