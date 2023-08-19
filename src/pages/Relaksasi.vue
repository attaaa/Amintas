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
          <!-- <div style="margin-bottom: 4px">
            1. Menarik nafas melalui hidung selama 4 detik
          </div>
          <div style="margin-bottom: 4px">2. Menahan nafas selama 7 detik</div>
          <div style="margin-bottom: 4px">
            3. Membuang nafas melalui mulut selama 8 detik
          </div> -->
          <ol>
            <li class="text__body" style="margin-bottom: 8px">
              Menarik nafas melalui hidung selama 4 detik
            </li>
            <li class="text__body" style="margin-bottom: 8px">
              Menahan nafas selama 7 detik
            </li>
            <li class="text__body" style="margin-bottom: 8px">
              Membuang nafas melalui mulut selama 8 detik
            </li>
          </ol>
        </div>
      </div>
    </div>

    <!--

      OTHERS ELEMENT

    -->

    <!-- POPUP BACK -->
    <PopupAction ref="popupBack">
      <template v-slot:description>
        Proses relaksasimu belum selesai. Apakah kamu yakin ingin meninggalkan
        halaman?
      </template>
    </PopupAction>

    <!-- POPUP DONE -->
    <PopupAction ref="popupDone" img="img/popup/done.png">
      <template v-slot:title> Relaksasi telah selesai!</template>
      <template v-slot:description>
        Wah, relaksasimu telah selesai. Jika masih memerlukan bantuan, jangan
        sungkan ya!
      </template>
      <template v-slot:action>
        <button
          class="btn__large btn__accent col relative-position text__neutral-black"
          @click="onCloseDonePopup()"
          v-ripple
        >
          Tutup
        </button>
      </template>
    </PopupAction>
  </div>
</template>

<style lang="scss" scoped>
.relaksasi {
  &--content {
    padding: 22px 16px 0 16px;
  }

  .helper {
    margin-top: 48px;
    padding: 16px;
    background: #f2f6ff;
    border-radius: 8px;
  }
}

ol {
  padding-left: 20px;
}
</style>

<script>
import Timer from "components/relaksasi/Timer.vue";
import TimerButton from "components/relaksasi/TimerButton";
import PopupAction from "components/shared/PopupAction";

export default {
  name: "Relaksasi",
  components: {
    Timer,
    TimerButton,
    PopupAction
  },
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
          this.$refs.popupDone.$refs.popup.setState("open");
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
        this.$refs.popupBack.$refs.popup.setState("open");
      } else {
        this.$router.back();
      }
    },
    onCloseDonePopup() {
      this.reStart();
      this.$refs.popupDone.$refs.popup.setState("close");
    }
  }
};
</script>
