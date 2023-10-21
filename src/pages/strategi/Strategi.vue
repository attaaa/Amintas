<template>
  <div style="padding: 16px">
    <!-- header -->
    <div class="flex justify-between items-center" style="margin-bottom: 56px">
      <div class="text__title-1 text__primary">Strategi</div>
      <div class="flex">
        <div @click="$router.push('/strategi/history')" class="q-mr-sm">
          <img svg-inline src="assets/icons/general/history.svg" />
        </div>
        <div @click="$refs.popUpHelp.setState('half')">
          <img src="assets/icons/bantuan-24.svg" />
        </div>
      </div>
    </div>
    <!--  -->
    <div class="text-center" style="margin-bottom: 24px">
      <img src="assets/img/empty_nothing_alt.png" />
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
        @click="$router.push('/strategi/input-category')"
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
      @stateChange="onPopupHelpStateChanges"
    >
      <q-scroll-area
        class="column"
        style="height: 100vh; padding: 16px; padding-top: 4px; padding-bottom: 0 !important;"
      >
        <div
          class="info-content"
          :style="popupHelpState === 'half' && { paddingBottom: '350px' }"
          v-html="markdownToHtml()"
        ></div>
      </q-scroll-area>
    </SwipeableBottomSheet>

    <!-- pop up done notification -->
    <PopupAction ref="popupDone" img="img/popup_finishing.png">
      <template v-slot:title>Strategi telah berhasil!</template>
      <template v-slot:description>
        Wah kamu pasti akan lebih tenang dan lebih berani saat menghadapinya
        lagi!
      </template>
      <template v-slot:action>
        <button
          class="btn__large btn__accent col relative-position"
          @click="$refs.popupDone.$refs.popup.setState('close')"
          v-ripple
        >
          Tutup
        </button>
      </template>
    </PopupAction>

    <!-- pop up instruction -->
    <PopupAction
      ref="popupInstruction"
      img="img/instructions/strategi/materi-bantuan-strategi.png"
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
import SwipeableBottomSheet from "components/SwipeableBottomSheet";
import { marked } from "marked";
import Strategi from "!!raw-loader!../../data/info/Strategi.md";
import PopupAction from "src/components/shared/PopupAction.vue";

export default {
  name: "Strategi",
  components: { SwipeableBottomSheet, PopupAction },

  data() {
    return {
      popupHelpState: "close"
    };
  },

  mounted() {
    if (!this.$store.state.account.strategiVisited) {
      const timeOut = setTimeout(() => {
        this.$store.commit("account/setStrategiVisited");
        this.$refs.popupInstruction.$refs.popup.setState("open");
      }, 800);
    }

    // this.$store.commit("strategi/clearInputStrategi");
    if (this.$store.state.strategi.strategiActive) {
      this.$router.replace("/strategi-active");
    } else if (this.$route.query.popupDone) {
      setTimeout(() => {
        this.$refs.popupDone.$refs.popup.setState("open");
        this.$router.replace({ query: null });
      }, 700);
    }
  },
  methods: {
    // content inside bottom sheet helper
    markdownToHtml() {
      return marked(Strategi);
    },
    helperHalfTop() {
      return window.innerHeight - 460;
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
