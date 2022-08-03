<template>
  <div class="onboarding-container text-center" style="padding: 24px">
    <div class="onboarding-banner">
      <div
        class="onboarding-banner-inner"
        :style="{ left: `${isMove ? x : calcX()}px` }"
        ref="elem"
      >
        <div class="onboarding-item">
          <div style="margin-bottom: 24px">
            <img src="/img/onboarding1.png" />
          </div>
          <div class="text__primary text__title-3" style="margin-bottom: 12px;">
            Selamat datang di Amintas!
          </div>
          <div
            class="text__neutral-dark-grey text__body"
            style="margin-bottom: 41px;"
          >
            Teman yang akan selalu ada, dan siap membantumu jadi lebih tenang
          </div>
        </div>
        <div class="onboarding-item">
          <div style="margin-bottom: 24px">
            <img src="/img/onboarding1.png" />
          </div>
          <div class="text__primary text__title-3" style="margin-bottom: 12px;">
            Selamat datang di Amintas!
          </div>
          <div
            class="text__neutral-dark-grey text__body"
            style="margin-bottom: 41px;"
          >
            Teman yang akan selalu ada, dan siap membantumu jadi lebih tenang
          </div>
        </div>
      </div>
    </div>
    <div class="nav-onboarding" style="margin-bottom: 65px;">
      <div class="nav-item-onboarding active"></div>
      <div class="nav-item-onboarding"></div>
      <div class="nav-item-onboarding"></div>
      <div class="nav-item-onboarding"></div>
      <div class="nav-item-onboarding"></div>
    </div>
    <button
      class="btn__accent btn__large"
      style="width: 100%; margin-bottom: 16px;"
    >
      Masuk
    </button>
    <button
      class="btn__secondary btn__borderless btn__large"
      style="width: 100%; margin-bottom: 72px;"
    >
      Belum punya akun
    </button>
  </div>
</template>

<script>
import Hammer from "hammerjs";

export default {
  name: "Onboarding1",
  data() {
    return {
      mc: null,
      x: 0,
      startX: 0,
      state: "aaa",
      isMove: false
    };
  },
  mounted() {
    this.initSwipeListener();
  },
  methods: {
    initSwipeListener() {
      window.onresize = () => {
        this.rect = this.$refs.elem.getBoundingClientRect();
      };
      this.rect = this.$refs.elem.getBoundingClientRect();

      this.mc = new Hammer(this.$refs.elem);
      this.mc.get("pan").set({ direction: Hammer.DIRECTION_ALL });

      this.mc.on("panleft panright", evt => {
        // console.log(this.$refs.elem.style.left);
        console.log(evt);
        this.x = this.$refs.elem.getBoundingClientRect().left + evt.deltaX;
        // console.log(this.x);
      });

      this.mc.on("panstart", evt => {
        console.log("test");
        this.x = evt.center.x;
        this.isMove = true;
      });

      this.mc.on("panend", evt => {
        this.isMove = false;

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
    calcX() {
      switch (this.state) {
        case "open":
          return this.openTop;
        case "half":
          return this.halfTop;
        case "static":
          return this.openTop;
        default:
          return this.x;
      }
    }
  }
};
</script>

<style>
.onboarding-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
}

.onboarding-banner {
  width: 100vw;
  height: 358px;
  margin-left: -24px;
  overflow-x: hidden;
  /* scroll-snap-type: x mandatory; */

  display: flex;
  align-items: center;

  position: relative;
}

.onboarding-banner-inner {
  display: flex;

  position: absolute;
  top: 0;
  left: 0;
}

.onboarding-item {
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* scroll-snap-align: start; */
}

.nav-onboarding {
  display: flex;
  justify-content: center;
}

.nav-item-onboarding {
  content: "";
  width: 6px;
  height: 6px;
  border-radius: 50%;
  margin-inline: 2px;
  background-color: #dedede;
}

.nav-item-onboarding.active {
  width: 16px;
  border-radius: 3px;
  background-color: #5c7ccd;
}
</style>
