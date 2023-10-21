<template>
  <!-- POPUP BACK -->
  <SwipeableBottomSheet
    ref="popupInstruction"
    default-state="close"
    :open-top="getHeightForPopUp(customHeight)"
    :use-overlay="true"
    :can-close="false"
    :use-drag-icon="false"
  >
    <div ref="instructionsContent">
      <div class="onboarding-container text-center">
        <VueSlickCarousel
          class="onboarding-banner"
          :arrows="false"
          :infinite="false"
          @afterChange="changeNav"
        >
          <!-- ONBOARDING ITEM -->
          <div v-for="instruction in instructionList" :key="instruction.id">
            <div class="onboarding-item">
              <img class="img" :src="instruction.img" />
              <div class="title text__primary text__title-3">
                {{ instruction.title }}
              </div>
              <div class="detail text__neutral-dark-grey text__body">
                {{ instruction.description }}
              </div>
            </div>
          </div>

          <!-- <div>
          <div class="onboarding-item">
            <img class="img" src="img/onboarding2.png" />
            <div class="title text__primary text__title-3">
              Rileks dan nyaman
            </div>
            <div class="detail text__neutral-dark-grey text__body">
              Mau curhat, relaksasi, atau bantuan ahli biar lebih tenang, jadi
              gampang!
            </div>
          </div>
        </div>

        <div>
          <div class="onboarding-item">
            <img class="img" src="img/onboarding3.png" />
            <div class="title text__primary text__title-3">
              Bantu kamu lebih paham
            </div>
            <div class="detail text__neutral-dark-grey text__body">
              Dari artikel pengetahuan sampai video materi, ada semuanya!
            </div>
          </div>
        </div>

        <div>
          <div class="onboarding-item">
            <img class="img" src="img/onboarding4.png" />
            <div class="title text__primary text__title-3">
              Lebih relevan dan rasional
            </div>
            <div class="detail text__neutral-dark-grey text__body">
              Belajar ubah pikiran mengganggumu jadi pikiran baru yang lebih
              positif
            </div>
          </div>
        </div>

        <div>
          <div class="onboarding-item">
            <img class="img" src="img/onboarding5.png" />
            <div class="title text__primary text__title-3">
              Berdamai dengan pemicu
            </div>
            <div class="detail text__neutral-dark-grey text__body">
              Bisa bikin strategi biar ngadepin pemicu cemasmu jadi lebih mudah
            </div>
          </div>
        </div> -->
        </VueSlickCarousel>
        <div class="nav-onboarding" style="margin-bottom: 16px;">
          <div
            class="nav-item-onboarding"
            :class="{ active: activeItemIdx === 0 }"
          ></div>
          <div
            class="nav-item-onboarding"
            :class="{ active: activeItemIdx === 1 }"
          ></div>
          <div
            class="nav-item-onboarding"
            :class="{ active: activeItemIdx === 2 }"
          ></div>
          <div
            class="nav-item-onboarding"
            :class="{ active: activeItemIdx === 3 }"
          ></div>
          <div
            class="nav-item-onboarding"
            :class="{ active: activeItemIdx === 4 }"
          ></div>
        </div>
      </div>

      <!-- <div class="info-content" style="padding: 24px 16px 0;">

      <div class="text-center bg-secondary" style="border-radius: 8px;">
        <img style="height: 156px;" :src="img" />
      </div>
      <div
        class="text__primary text__title-2 text-center"
        style="margin-top: 24px; margin-bottom: 12px;"
      >
        test title
      </div>

      <p
        class="text-center text__body text__neutral-dark-grey"
        style="margin-bottom: 48px"
      >
        text description
      </p>

      <div class="row items-end ">
        <slot name="action">
          <button
            class="btn__large btn__alert col relative-position text-white"
            @click="$router.back()"
            v-ripple
          >
            Mulai
          </button>
        </slot>
      </div>
    </div> -->
      <div class="row items-end" style="padding: 24px 16px;">
        <button
          :style="{ visibility: showButton ? 'visible' : 'hidden' }"
          class="btn__large btn__accent col relative-position"
          @click="onMulai()"
          v-ripple
        >
          Mulai
        </button>
      </div>
    </div>
  </SwipeableBottomSheet>
</template>

<script>
import SwipeableBottomSheet from "components/SwipeableBottomSheet";

import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";

export default {
  name: "Instruction",
  components: {
    SwipeableBottomSheet,
    VueSlickCarousel
  },

  props: {
    customHeight: {
      type: Number,
      default: 517
    },
    instructionList: Array
  },

  data() {
    return {
      activeItemIdx: 0,
      contentHeight: 0
    };
  },

  computed: {
    showButton() {
      return this.activeItemIdx === this.instructionList.length - 1;
    }
  },

  methods: {
    changeNav(slideIndex) {
      this.activeItemIdx = slideIndex;
    },
    getHeightForPopUp(height) {
      return window.innerHeight - height;
    },
    setState(state) {
      this.$refs.popupInstruction.setState(state);
    },
    onMulai() {
      this.$emit("mulai");
      this.setState("close");
    }
  }
};
</script>

<style scoped>
.onboarding-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-top: 24px;
  margin-inline: 16px;
  width: calc(100vw - 32px);
}

.onboarding-banner {
  width: calc(100vw - 32px);
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

.onboarding-item img {
  width: 100%;
}

.onboarding-item .title {
  margin-top: 24px;
  margin-bottom: 12px;
}

.onboarding-item .detail {
  margin-bottom: 41px;
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
