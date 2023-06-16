<template>
  <div class="relaksasi">
    <div class="relaksasi--content">
      <!-- header navigation -->
      <div style="margin-bottom: 24px;" @click="$router.back()">
        <img
          svg-inline
          class="fill-primary"
          src="assets/icons/general/arrow-left.svg"
          style="width: 24px; height: 24px;"
        />
      </div>

      <!-- text title -->
      <p
        class="text__title-3 text-center text__primary"
        style="margin-bottom: 4px; width: 280px; margin-left: auto; margin-right: auto;"
        v-if="started && !isFinish"
      >
        {{ titleStep[idxStep] }}
      </p>
      <p
        class="text__title-4 text-center"
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
          class="text__neutral-dark-grey text__title-4"
          style="margin-bottom: 8px;"
        >
          Instruksi Singkat
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
  </div>
</template>

<style lang="scss">
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

export default {
  name: "Relaksasi",
  components: { Timer, TimerButton },
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
      isFinish: false
    };
  },
  methods: {
    goBack() {
      this.$router.back();
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
      this.isFinish = true;
    }
  }
};
</script>
