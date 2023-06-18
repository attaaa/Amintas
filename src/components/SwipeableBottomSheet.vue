<template>
  <div
    class="wrapper"
    :data-open="state === 'open' ? 1 : 0"
    :style="zIndex && { 'z-index': zIndex }"
  >
    <div
      v-if="useOverlay && showOverlay"
      class="bg"
      @click="() => setState('close')"
    ></div>
    <div
      ref="card"
      class="card"
      :data-state="isMove ? 'move' : state"
      :style="{ top: `${isMove ? y : calcY()}px`, zIndex: zIndex }"
    >
      <div class="pan-area" ref="pan" v-if="useDragIcon">
        <div class="bar" ref="bar"></div>
      </div>
      <div class="contents">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import Hammer from "hammerjs";

export default {
  name: "SwipeableBottomSheet",
  props: {
    defaultState: {
      type: String,
      default: "half"
    },
    halfTop: {
      type: Number,
      default: 280
    },
    openTop: {
      type: Number,
      default: 0
    },
    swipeable: Boolean,
    useOverlay: Boolean,
    useDragIcon: {
      type: Boolean,
      default: true
    },
    canClose: {
      type: Boolean,
      default: false
    },
    zIndex: Number
  },
  data() {
    return {
      mc: null,
      y: 0,
      startY: 0,
      showOverlay: false,
      isMove: false,
      state: this.defaultState,
      rect: {}
    };
  },
  mounted() {
    if (this.swipeable) {
      this.initSwipeAction();
    }
  },
  beforeDestroy() {
    if (this.swipeable) {
      this.mc.destroy();
    }
    window.onresize = null;
  },
  methods: {
    initSwipeAction() {
      window.onresize = () => {
        this.rect = this.$refs.card.getBoundingClientRect();
      };
      this.rect = this.$refs.card.getBoundingClientRect();

      this.mc = new Hammer(this.$refs.pan);
      this.mc.get("pan").set({ direction: Hammer.DIRECTION_ALL });

      this.mc.on("panup pandown", evt => {
        this.y = evt.center.y - 16;
      });

      this.mc.on("panstart", evt => {
        this.startY = evt.center.y;
        this.isMove = true;
      });

      this.mc.on("panend", evt => {
        this.isMove = false;

        console.log(this.canClose);
        console.log(this.y);
        console.log(this.halfTop + (this.halfTop * 1) / 3);

        if (this.canClose && this.y > this.halfTop + (this.halfTop * 1) / 3) {
          this.state = "close";
          return;
        }

        switch (this.state) {
          case "half":
            this.state = "open";
            break;
          case "open":
            this.state = "half";
            break;
        }
      });
    },
    calcY() {
      switch (this.state) {
        case "open":
          this.showOverlay = true;
          return this.openTop;
        case "half":
          this.showOverlay = true;
          return this.halfTop;
        case "close":
          this.showOverlay = false;
          return window.innerHeight;
        case "static":
          return this.openTop;
        default:
          return this.y;
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
  z-index: 9999;
}

.wrapper .bg {
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
  height: 100vh;
  overflow: hidden;
  position: fixed;
  background: white;
  border-radius: 16px 16px 0 0;
  box-shadow: 0px 2px 4px 1px rgba(48, 48, 48, 0.24);
  left: 0;
  z-index: 9999;
}

.card[data-state="half"],
.card[data-state="open"],
.card[data-state="close"] {
  transition: top 0.3s ease-out;
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
}
</style>
