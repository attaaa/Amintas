<template>
  <div
    class="relative-position"
    style="width: 280px; height: 280px; margin: auto;"
  >
    <div class="bg-gauge">
      <img
        svg-inline
        style="width: 280px; height: 280px"
        src="assets/gauge-bg.svg"
      />
    </div>

    <q-circular-progress
      show-value
      reverse
      v-model="timer"
      size="280px"
      :thickness="0.29"
      color="primary"
      disable
      :angle="360"
    >
      <div>
        <p class="text__large-title text__primary" style="margin-bottom: 0;">
          {{ currStepTime }}
        </p>
        <p class="text__headline">Detik</p>
        <div class="text__footnote text__primary label-putaran">
          Putaran {{ putaran }}
        </div>
      </div>
    </q-circular-progress>
  </div>
</template>

<style lang="scss">
.bg-gauge {
  position: absolute;
  top: 0;
  bottom: 0;
}

.label-putaran {
  padding: 4px 8px;
  border: 1px solid #5c7ccd;
  box-sizing: border-box;
  border-radius: 12px;
}
</style>

<script>
export default {
  name: "Timer",
  props: {
    idxStep: Number,
    putaran: Number
  },
  data() {
    return {
      fullTime: 19,
      leftTime: 19,
      stepTime: [4, 7, 8],
      // idxStep: 0,
      currStepTime: 4,
      timer: 100,
      interval: null
    };
  },
  mounted() {
    // this.starTimer();
  },
  methods: {
    calculateTimeFraction() {
      const rawTimeFraction = this.leftTime / this.fullTime;
      return rawTimeFraction - (1 / this.fullTime) * (1 - rawTimeFraction);
    },
    setCircleDashArray() {
      const circleDashArray = `${(this.calculateTimeFraction() * 283).toFixed(
        0
      )} 283`;
      this.strokeDashArray = circleDashArray;
      // console.log(circleDashArray);
    },
    startTimer() {
      this.interval = setInterval(() => {
        this.leftTime -= 1;
        this.timer = (this.leftTime / this.fullTime) * 100;
        this.currStepTime -= 1;

        if (this.leftTime == 0) {
          clearInterval(this.interval);
          this.$emit("is-finish");
          return;
        }

        if (this.currStepTime == 0) {
          setTimeout(() => {
            this.$emit("next-step");
            this.currStepTime = this.stepTime[this.idxStep + 1];
          }, 300);
        }
      }, 1000);
    },
    stopTimer() {
      clearInterval(this.interval);
    },
    reset() {
      this.leftTime = 19;
      this.currStepTime = 4;
      this.timer = 100;
    }
  }
};
</script>
