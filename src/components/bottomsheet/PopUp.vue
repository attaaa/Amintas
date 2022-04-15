<template>
  <div class="wrapper" :data-open="state === 'open' ? 1 : 0">
    <div class="bg" @click="() => setState('close')"></div>
    <div
      ref="card"
      class="card"
      :data-state="state"
      :style="{ bottom: calcBottom(state) + `px` }"
    >
      <div class="pan-area" ref="pan"><div class="bar" ref="bar"></div></div>
      <div class="contents">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PopUp",
  data() {
    return {
      state: "close",
      cardHeight: 1000
    };
  },
  mounted() {
    this.cardHeight = this.$refs.card.clientHeight;
  },
  methods: {
    calcBottom(state) {
      switch (state) {
        case "open":
          return 0;
        case "close":
          return -this.cardHeight;
      }
    },
    setState(state) {
      this.state = state;
    }
  }
};
</script>

<style lang="scss" scoped>
.wrapper[data-open="1"] {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
}

.wrapper[data-open="1"] .bg {
  display: block;
  transition: all 0.3s;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
}

.card {
  width: 100%;
  position: fixed;
  background: white;
  border-radius: 24px 24px 0 0;
  box-shadow: 0 -3px 4px rgba(0, 0, 0, 0.05);
  left: 0;
}

.card[data-state="open"],
.card[data-state="close"] {
  transition: all 0.3s ease-out;
}

.card[data-state="close"] {
  box-shadow: none;
}

.bar {
  width: 32px;
  height: 4px;
  border-radius: 14px;
  background: rgba(0, 0, 0, 0.3);
  margin: 0 auto;
  cursor: pointer;
}

.pan-area {
  padding: 8px 0;
}

.contents {
  max-height: 100%;
  box-sizing: border-box;
  padding: 16px;
}
</style>
