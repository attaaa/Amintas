<template>
  <div class="onboarding-container text-center">
    <VueSlickCarousel
      class="onboarding-banner"
      :arrows="false"
      :infinite="false"
      @afterChange="changeNav"
    >
      <!-- ONBOARDING ITEM -->
      <div v-for="(img, idx) in imgList" :key="idx">
        <div class="onboarding-item">
          <img class="img" :src="img" />
        </div>
      </div>
    </VueSlickCarousel>

    <div class="nav-onboarding" style="margin-bottom: 65px;">
      <div
        v-for="idx in imgList.length"
        :key="idx"
        class="nav-item-onboarding"
        :class="{ active: activeItemIdx === idx - 1 }"
      />
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  components: { VueSlickCarousel },
  props: {
    imgList: Array
  },
  data() {
    return {
      activeItemIdx: 0
    };
  },
  methods: {
    changeNav(slideIndex) {
      this.activeItemIdx = slideIndex;
    }
  }
};
</script>

<style scoped>
.onboarding-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: calc(100vw - 32px);
}

.onboarding-banner {
  width: calc(100vw - 32px);
  /* height: 358px; */
  /* margin-left: -24px; */
  overflow-x: hidden;

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
  width: calc(100vw - 32px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* scroll-snap-align: start; */
}

.onboarding-item .title {
  margin-top: 24px;
  margin-bottom: 12px;
}

.onboarding-item .detail {
  margin-bottom: 41px;
}

.nav-onboarding {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
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

/* .slick-active {
  width: 100% !important;
} */
</style>
