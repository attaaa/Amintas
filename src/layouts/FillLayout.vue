<template>
  <div class="relative-position" style="height: 100vh; overflow: hidden;">
    <div
      class="fill-layout-container"
      :style="keyboardVisible && { paddingBottom: keyboardHeight + 'px' }"
      ref="container"
    >
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
          @click="$refs.popUpHelp.setState('half')"
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
    </div>

    <!-- action -->
    <slot name="action">
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
    </slot>

    <!-- pop up help -->
    <SwipeableBottomSheet
      v-if="showBantuan"
      ref="popUpHelp"
      default-state="close"
      :half-top="helperHalfTop()"
      :use-overlay="true"
      :can-close="true"
      :swipeable="true"
      @stateChange="onPopupHelpStateChanges"
    >
      <q-scroll-area
        class="column "
        style="height: 100vh; padding: 16px; padding-bottom: 0 !important;"
      >
        <div
          class="info-content"
          :style="popupHelpState === 'half' && { paddingBottom: '300px' }"
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

  data() {
    return {
      container: null,
      keyboardVisible: false,
      keyboardHeight: 0,
      popupHelpState: "close"
    };
  },

  mounted() {
    this.container = this.$refs.container;
    // listen for keyboard event to add space on the bottom
    document.addEventListener("deviceready", () => {
      window.addEventListener("native.keyboardshow", this.onKeyboardShow);
      window.addEventListener("native.keyboardhide", this.onKeyboardHide);
    });
  },

  beforeDestroy() {
    // Remove event listeners when the component is about to be destroyed
    window.removeEventListener("native.keyboardshow", this.onKeyboardShow);
    window.removeEventListener("native.keyboardhide", this.onKeyboardHide);
  },

  methods: {
    helperHalfTop() {
      return window.innerHeight - this.bantuanHeight;
    },

    // handle keyboard
    onKeyboardShow(event) {
      this.keyboardVisible = true;
      this.keyboardHeight = event.keyboardHeight - (this.showAction ? 89 : 0);

      // auto adding scroll value with keyboard height to make the input field visible on top of the keyboard
      this.$nextTick(() => {
        const newScroll = this.container.scrollTop + this.keyboardHeight;
        this.container.scrollTop = newScroll;
      });
    },
    onKeyboardHide() {
      this.keyboardVisible = false;
      this.keyboardHeight = 0;
    },

    onPopupHelpStateChanges(state) {
      this.popupHelpState = state;
    }
  }
};
</script>

<style lang="scss" scoped>
.fill-layout-container {
  height: 100vh;
  overflow: scroll;
  padding-bottom: 100px;
}

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

.info-content {
  padding-bottom: 40px;
}
</style>
