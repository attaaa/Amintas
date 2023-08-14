// layout with back button and image header
<template>
  <div
    class="container-scroll"
    ref="container"
    :style="keyboardVisible && { paddingBottom: keyboardHeight + 'px' }"
  >
    <div class="header">
      <div class="btn" @click="onBack">
        <img svg-inline src="assets/icons/general/arrow-left.svg" />
      </div>
      <img :src="headerImg" />
    </div>
    <div class="main">
      <slot></slot>
    </div>
    <!-- action -->
    <div
      v-if="showAction"
      class="fill-action col-auto"
      :class="[true ? 'show-action' : 'hide-action']"
    >
      <button
        class="btn__large btn__accent full-width"
        @click="$refs.popUpAktifkan.setState('open')"
      >
        {{ labelNextAction || "Label" }}
      </button>
    </div>
    <!--  -->
    <div
      v-if="showSecondaryAction"
      class="fill-action col-auto secondary-action"
      :class="[true ? 'show-action' : 'hide-action']"
    >
      <button class="btn__large btn__secondary" @click="handleSave()">
        {{ labelSaveAction || "Simpan" }}
      </button>
      <button
        class="btn__large"
        :class="{
          btn__disabled: !activeDoneButton,
          btn__accent: activeDoneButton
        }"
        @click="activeDoneButton && $refs.popUpDone.setState('open')"
      >
        {{ labelDoneAction || "Selesai" }}
      </button>
    </div>
    <!--  -->
    <div v-if="showAction || showSecondaryAction" class="spacer" />
    <!--

     -->

    <!-- POPUP AKTIVASI -->
    <SwipeableBottomSheet
      ref="popUpAktifkan"
      default-state="close"
      :open-top="getHeightForPopUp(444)"
      :use-overlay="true"
      :can-close="true"
      :use-drag-icon="false"
    >
      <div class="info-content" style="padding: 24px 16px 0;">
        <div class="text-center bg-secondary" style="border-radius: 8px;">
          <img style="height: 156px;" src="img/popup_activation.png" />
        </div>
        <div
          class="text__primary text__title-2 text-center"
          style="margin-top: 24px; margin-bottom: 12px;"
        >
          Aktifkan Latihan?
        </div>

        <p
          class="text-center text__body text__neutral-dark-grey"
          style="margin-bottom: 48px"
        >
          Kamu jadi dapat berlatih melawan pikiran mengganggu. Apakah kamu yakin
          ingin mengaktifkan latihan?
        </p>

        <div class="row items-end ">
          <button
            class="btn__large btn__alert-secondary col-auto relative-position"
            @click="$refs.popUpAktifkan.setState('close')"
            v-ripple
          >
            Batal
          </button>
          <div style="width: 16px;"></div>
          <button
            class="btn__large btn__accent col relative-position"
            @click="aktivasiLatihan()"
            v-ripple
          >
            Aktifkan
          </button>
        </div>
      </div>
    </SwipeableBottomSheet>
    <!--

    -->

    <!-- POPUP DONE -->
    <SwipeableBottomSheet
      ref="popUpDone"
      default-state="close"
      :open-top="getHeightForPopUp(420)"
      :use-overlay="true"
      :can-close="true"
      :use-drag-icon="false"
    >
      <div class="info-content" style="padding: 24px 16px 0;">
        <div class="text-center bg-secondary" style="border-radius: 8px;">
          <img style="height: 156px;" src="img/popup_finishing.png" />
        </div>
        <div
          class="text__primary text__title-2 text-center"
          style="margin-top: 24px; margin-bottom: 12px;"
        >
          Selesaikan Latihan?
        </div>

        <p
          class="text-center text__body text__neutral-dark-grey"
          style="margin-bottom: 48px"
        >
          Jawabanmu akan disimpan pada latihan ini. Apakah kamu yakin ingin
          melanjutkannya?
        </p>

        <div class="row items-end ">
          <button
            class="btn__large btn__alert-secondary col-auto relative-position"
            @click="$refs.popUpDone.setState('close')"
            v-ripple
          >
            Batal
          </button>
          <div style="width: 16px;"></div>
          <button
            class="btn__large btn__accent col relative-position"
            @click="selesaikanLatihan()"
            v-ripple
          >
            Lanjutkan
          </button>
        </div>
      </div>
    </SwipeableBottomSheet>

    <!-- POPUP DONE -->
    <SwipeableBottomSheet
      ref="popUpFinished"
      default-state="close"
      :open-top="getHeightForPopUp(420)"
      :use-overlay="true"
      :can-close="true"
      :use-drag-icon="false"
    >
      <div class="info-content" style="padding: 24px 16px 0;">
        <div class="text-center bg-secondary" style="border-radius: 8px;">
          <img style="height: 156px;" src="img/popup_finishing.png" />
        </div>
        <div
          class="text__primary text__title-2 text-center"
          style="margin-top: 24px; margin-bottom: 12px;"
        >
          Latihan telah selesai!
        </div>

        <p
          class="text-center text__body text__neutral-dark-grey"
          style="margin-bottom: 48px"
        >
          Selain lebih paham, kamu pun jadi lebih siap melawan pikiran
          menganggu!
        </p>

        <div class="row items-end ">
          <button
            class="btn__large btn__accent col relative-position"
            @click="$refs.popUpFinished.setState('close')"
            v-ripple
          >
            Tutup
          </button>
        </div>
      </div>
    </SwipeableBottomSheet>

    <!-- pop up back confirmation on latihan updated -->
    <PopupAction ref="popupBack">
      <template v-slot:action>
        <button
          class="btn__large btn__secondary relative-position"
          @click="$refs.popupBack.$refs.popup.setState('close')"
          v-ripple
        >
          Batal
        </button>
        <div style="width: 16px;"></div>
        <button
          class="btn__large btn__alert col relative-position text-white"
          @click="$router.replace(backPath)"
          v-ripple
        >
          Tinggalkan Halaman
        </button>
      </template>
    </PopupAction>
  </div>
</template>

<script>
import SwipeableBottomSheet from "components/SwipeableBottomSheet";
import PopupAction from "src/components/shared/PopupAction.vue";
// import keyboardMixin from "src/mixins/keyboardMixin";

export default {
  components: { SwipeableBottomSheet, PopupAction },

  // mixins: [keyboardMixin],

  props: {
    headerImg: {
      type: String,
      default: "#"
    },
    showAction: Boolean,
    labelNextAction: String,

    // handler
    handleNextAction: Function,
    handleSave: Function,
    // handleBack: Function,
    // handleDone: Function,

    // secondary action
    showSecondaryAction: Boolean,
    activeDoneButton: Boolean,
    labelDoneAction: String,
    labelSaveAction: String,

    backPath: String,
    hasChanges: Boolean
  },

  data() {
    return {
      container: null,
      keyboardVisible: false,
      keyboardHeight: 0
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
    getHeightForPopUp(height) {
      return window.innerHeight - height;
    },
    aktivasiLatihan() {
      this.$refs.popUpAktifkan.setState("close");
      this.$emit("aktivasiLatihan");
    },
    selesaikanLatihan() {
      this.$refs.popUpDone.setState("close");
      this.$emit("selesaikanLatihan");
      this.$refs.container.scrollTop = 0;
      setTimeout(() => {
        this.$refs.popUpFinished.setState("open");
      }, 500);
    },
    togglePopUp(popUpName, state) {
      this.$refs[popUpName].setState(state);
    },
    onBack() {
      if (this.hasChanges) this.$refs.popupBack.$refs.popup.setState("open");
      else this.$router.replace(this.backPath);
    },

    // handle keyboard
    onKeyboardShow(event) {
      this.keyboardVisible = true;
      this.keyboardHeight =
        event.keyboardHeight -
        (this.showAction || this.showSecondaryAction ? 89 : 0);

      // auto adding scroll value with keyboard height to make the input field visible on top of the keyboard
      this.$nextTick(() => {
        const newScroll = this.container.scrollTop + this.keyboardHeight;
        this.container.scrollTop = newScroll;
      });
    },
    onKeyboardHide() {
      this.keyboardVisible = false;
      this.keyboardHeight = 0;
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  position: relative;
  width: 100%;
  height: 200px;
  background: #f2f6ff;
  border-radius: 0px 0px 16px 16px;
  overflow: hidden;

  .btn {
    position: relative;
    z-index: 10;
    display: inline-block;
    margin: 16px 12px;
  }

  img {
    position: absolute;
    height: 100%;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    object-fit: cover;
    // z-index: 0;
  }
}

.main {
  padding: 16px;
}

.fill-action {
  width: 100%;
  padding: 16px 16px 24px 16px;
  position: absolute;
  box-shadow: 0px 2px 4px 1px rgba(48, 48, 48, 0.12);
  background-color: #fff;
  z-index: 10;
}

.fill-action.hide-action {
  bottom: -88px;
}

.fill-action.show-action {
  bottom: 0;
  transition: bottom 500ms cubic-bezier(0.465, 0.183, 0.153, 0.946);
}

.spacer {
  width: 100%;
  height: 88px;
}

.secondary-action {
  display: flex;
  gap: 16px;

  button {
    flex-basis: 0;
    flex-grow: 1;
  }
}
</style>
