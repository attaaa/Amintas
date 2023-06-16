// layout with back button and image header
<template>
  <div class="container-scroll" ref="container">
    <div class="header">
      <div class="btn" @click="$router.back()">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.6661 10.6666H8.54191L12.9437 6.28357C13.1949 6.03271 13.336 5.69246 13.336 5.33769C13.336 4.98291 13.1949 4.64266 12.9437 4.3918C12.6926 4.14093 12.3519 4 11.9967 4C11.6415 4 11.3008 4.14093 11.0496 4.3918L4.38018 11.053C4.25874 11.1797 4.16355 11.3291 4.10006 11.4926C3.96665 11.817 3.96665 12.1808 4.10006 12.5051C4.16355 12.6686 4.25874 12.818 4.38018 12.9448L11.0496 19.6059C11.1736 19.7308 11.3211 19.8299 11.4837 19.8975C11.6462 19.9652 11.8206 20 11.9967 20C12.1728 20 12.3471 19.9652 12.5097 19.8975C12.6722 19.8299 12.8197 19.7308 12.9437 19.6059C13.0688 19.4821 13.168 19.3347 13.2357 19.1724C13.3034 19.01 13.3383 18.8359 13.3383 18.66C13.3383 18.4842 13.3034 18.31 13.2357 18.1477C13.168 17.9853 13.0688 17.838 12.9437 17.7142L8.54191 13.3311H18.6661C19.0199 13.3311 19.3592 13.1907 19.6093 12.9409C19.8595 12.6911 20 12.3522 20 11.9989C20 11.6455 19.8595 11.3067 19.6093 11.0568C19.3592 10.807 19.0199 10.6666 18.6661 10.6666Z"
            fill="#5C7CCD"
          />
        </svg>
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
        @click="$refs.popUpDone.setState('open')"
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
          <img style="height: 156px;" src="/img/popup_activation.png" />
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
          <img style="height: 156px;" src="/img/popup_finishing.png" />
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
          <img style="height: 156px;" src="/img/popup_finishing.png" />
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

    <!-- for dev only -->
    <!-- <button @click="reset">reset</button> -->
  </div>
</template>

<script>
import SwipeableBottomSheet from "components/SwipeableBottomSheet";

export default {
  components: { SwipeableBottomSheet },
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
    // handleDone: Function,

    // secondary action
    showSecondaryAction: Boolean,
    activeDoneButton: Boolean,
    labelDoneAction: String,
    labelSaveAction: String
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

    // for dev only
    reset() {
      // save data first
      this.$store.commit("restrukturisasi/setLatihanData", {
        sesiLatihan: "sesi1Latihan1",
        data: {
          pikiran: "",
          selectedOptionsIdx: []
        }
      });

      // set status to finished
      this.$store.commit("restrukturisasi/resetFinishedLatihan", {
        sesi: "sesi1",
        currSesiLatihanFinished: "latihan1Finished",
        nextSesiLatihan: "latihan2"
      });
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
