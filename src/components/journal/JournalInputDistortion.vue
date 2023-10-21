<template>
  <div class="journal-input-distortion column">
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
        style="max-width: 296px; margin-left: auto; margin-right: auto; margin-bottom: 24px;"
      >
        Pilihlah distorsi kognitif dari pikiran negatifmu
      </div>

      <div class="column col">
        <JournalDistortionPicker
          class="col scroll hide-scrollbar"
          style="margin-left: auto; margin-right: auto;"
          v-on="$listeners"
          :selected-distortion="selectedDistortion"
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
      @stateChange="onPopupHelpStateChanges"
    >
      <q-scroll-area
        class="column "
        style="height: 100vh; padding: 16px; padding-top: 4px; padding-bottom: 0 !important;"
      >
        <div
          class="info-content"
          :style="popupHelpState === 'half' && { paddingBottom: '300px' }"
          v-html="markdownToHtml"
        ></div>
      </q-scroll-area>
    </SwipeableBottomSheet>

    <!-- pop up instruction -->
    <PopupAction
      ref="popupInstruction"
      img="img/instructions/strategi/materi-bantuan-distorsi.png"
      :popupHeight="450"
    >
      <template v-slot:title>Materi Bantuan</template>
      <template v-slot:description>
        Akses materi bantuan pada '?' di atas layar, untuk bantu kamu jadi lebih
        paham akan hal-hal yang baru kamu temui
      </template>
      <template v-slot:action>
        <button
          class="btn__large btn__accent col relative-position"
          @click="$refs.popupInstruction.$refs.popup.setState('close')"
          v-ripple
        >
          Saya Mengerti
        </button>
      </template>
    </PopupAction>
  </div>
</template>

<script>
import JournalDistortionPicker from "components/inputs/JournalDistortionPicker";
import SwipeableBottomSheet from "components/SwipeableBottomSheet";
import PopupAction from "src/components/shared/PopupAction.vue";

import { marked } from "marked";
import DistorsiKognitif from "!!raw-loader!../../data/info/DistorsiKognitif.md";

export default {
  name: "JournalInputDistortion",
  components: {
    JournalDistortionPicker,
    SwipeableBottomSheet,
    PopupAction
  },

  props: {
    selectedDistortion: Array
  },

  data() {
    return {
      popupHelpState: "close"
    };
  },

  computed: {
    markdownToHtml() {
      return marked(DistorsiKognitif);
    }
  },

  mounted() {
    if (!this.$store.state.account.distortionVisited) {
      const timeOut = setTimeout(() => {
        this.$store.commit("account/setDistortionVisited");
        this.$refs.popupInstruction.$refs.popup.setState("open");
      }, 800);
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
    },

    onPopupHelpStateChanges(state) {
      this.popupHelpState = state;
    }
  }
};
</script>

<style lang="scss" scoped>
.info-content {
  padding-bottom: 40px;
}
</style>
