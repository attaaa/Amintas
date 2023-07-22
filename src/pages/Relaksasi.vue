<template>
  <div class="relaksasi">
    <div class="relaksasi--content">
      <!-- header navigation -->
      <div style="margin-bottom: 24px;" @click="onBack()">
        <img
          svg-inline
          class="fill-primary"
          src="assets/icons/general/arrow-left.svg"
        />
      </div>

      <!-- text title -->
      <p
        class="text__title-3 text-center text__neutral-black"
        style="margin-bottom: 4px; width: 280px; margin-left: auto; margin-right: auto;"
        v-if="started && !isFinish"
      >
        {{ titleStep[idxStep] }}
      </p>
      <p
        class="text__body text-center"
        style="margin-bottom: 16px"
        v-if="started && !isFinish"
      >
        selama
      </p>
      <div v-else style="height: 74px;"></div>

      <div class="text-center">
        <Timer
          v-if="started"
          ref="timer"
          :idx-step="idxStep"
          :putaran="putaran"
          @is-finish="finishing()"
          @next-step="nextStep()"
        />
        <TimerButton v-else />
      </div>

      <div class="text-center" style="margin-top: 32px">
        <div v-if="!paused && !isFinish">
          <button
            v-if="!started"
            class="btn__medium btn__accent"
            @click="start()"
          >
            Mulai
          </button>
          <button
            v-else
            class="btn__medium btn__alert-secondary text__alert"
            @click="stop()"
          >
            Stop
          </button>
        </div>
        <div v-else-if="paused || isFinish">
          <button
            class="btn__medium btn__secondary text__primary"
            @click="reStart()"
          >
            Ulang
          </button>
          <!-- <button
            class="btn__medium"
            :class="{
              btn__accent: isFinish,
              btn__disabled: paused,
              'text__neutral-dark-grey': paused
            }"
          >
            Selesai
          </button> -->
        </div>
      </div>

      <div class="full-width helper">
        <div
          class="text__neutral-black text__headline"
          style="margin-bottom: 8px;"
        >
          Instruksi Singkat:
        </div>
        <div>
          <div style="margin-bottom: 4px">
            1. Menarik nafas melalui hidung selama 4 detik
          </div>
          <div style="margin-bottom: 4px">2. Menahan nafas selama 7 detik</div>
          <div style="margin-bottom: 4px">
            3. Membuang nafas melalui mulut selama 8 detik
          </div>
        </div>
      </div>
    </div>

    <!-- POPUP BACK -->
    <SwipeableBottomSheet
      ref="popUpBack"
      default-state="close"
      :open-top="getHeightForPopUp(420)"
      :use-overlay="true"
      :can-close="true"
      :use-drag-icon="false"
    >
      <div class="info-content" style="padding: 24px 16px 0;">
        <div class="text-center bg-secondary" style="border-radius: 8px;">
          <img style="height: 156px;" src="img/popup/tinggalkan_halaman.png" />
        </div>
        <div
          class="text__primary text__title-2 text-center"
          style="margin-top: 24px; margin-bottom: 12px;"
        >
          Tinggalkan Halaman?
        </div>

        <p
          class="text-center text__body text__neutral-dark-grey"
          style="margin-bottom: 48px"
        >
          Proses relaksasimu belum selesai. Apakah kamu yakin ingin meninggalkan
          halaman?
        </p>

        <div class="row items-end ">
          <button
            class="btn__large btn__secondary col relative-position"
            @click="$refs.popUpBack.setState('close')"
            v-ripple
          >
            Batal
          </button>
          <div style="width: 16px;"></div>
          <button
            class="btn__large btn__alert col-auto relative-position text-white"
            @click="$router.back()"
            v-ripple
          >
            Tinggalkan Halaman
          </button>
        </div>
      </div>
    </SwipeableBottomSheet>

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
          <img style="height: 156px;" src="img/popup/done.png" />
        </div>
        <div
          class="text__primary text__title-2 text-center"
          style="margin-top: 24px; margin-bottom: 12px;"
        >
          Relaksasi telah selesai!
        </div>

        <p
          class="text-center text__body text__neutral-dark-grey"
          style="margin-bottom: 48px"
        >
          Wah, relaksasimu telah selesai. Jika masih memerlukan bantuan, jangan
          sungkan ya!
        </p>

        <div class="row items-end ">
          <button
            class="btn__large btn__accent col relative-position text__neutral-black"
            @click="onCloseDonePopup()"
            v-ripple
          >
            Tutup
          </button>
        </div>
      </div>
    </SwipeableBottomSheet>
  </div>
</template>

<style lang="scss" scoped>
.relaksasi {
  &--content {
    padding: 22px 16px 0 16px;
  }

  .helper {
    margin-top: 48px;
    padding: 12px;
    background: #f2f6ff;
    border-radius: 8px;
  }
}
</style>

<script>
import Timer from "components/relaksasi/Timer.vue";
import TimerButton from "components/relaksasi/TimerButton";
import SwipeableBottomSheet from "components/SwipeableBottomSheet";

export default {
  name: "Relaksasi",
  components: { Timer, TimerButton, SwipeableBottomSheet },
  data() {
    return {
      started: false,
      titleStep: [
        "Tarik Nafas melalui Hidung",
        "Tahan Nafas",
        "Buang Nafas melalui Mulut"
      ],
      idxStep: 0,
      paused: false,
      isFinish: false,
      putaran: 1
    };
  },
  methods: {
    getHeightForPopUp(height) {
      return window.innerHeight - height;
    },
    start() {
      this.started = true;
      setTimeout(() => {
        this.$refs.timer.startTimer();
      }, 300);
    },
    reStart() {
      this.paused = false;
      this.isFinish = false;
      this.idxStep = 0;
      this.putaran = 1;
      this.$refs.timer.reset();
      this.started = false;
    },
    stop() {
      this.paused = true;
      this.$refs.timer.stopTimer();
    },
    nextStep() {
      this.idxStep += 1;
    },
    finishing() {
      // this.isFinish = true;
      if (this.putaran === 4) {
        this.isFinish = true;
        setTimeout(() => {
          this.$refs.popUpDone.setState("open");
        }, 300);

        return;
      }
      this.putaran += 1;
      this.idxStep = 0;
      this.$refs.timer.reset();
      this.start();
    },
    // general page handler
    onBack() {
      if (this.started) {
        this.stop();
        this.$refs.popUpBack.setState("open");
      } else {
        this.$router.back();
      }
    },
    onCloseDonePopup() {
      this.reStart();
      this.$refs.popUpDone.setState("close");
    }
  }
};
</script>
