<template>
  <div class="onboarding-container text-center" style="padding: 24px">
    <VueSlickCarousel
      class="onboarding-banner"
      :arrows="false"
      :infinite="false"
      @afterChange="changeNav"
    >
      <!-- ONBOARDING ITEM -->
      <div>
        <div class="onboarding-item">
          <img class="img" src="img/onboarding1.png" />
          <div class="title text__primary text__title-3">
            Selamat datang di Amintas!
          </div>
          <div class="detail text__neutral-dark-grey text__body">
            Teman yang akan selalu ada, dan siap membantumu jadi lebih tenang
          </div>
        </div>
      </div>

      <div>
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
      </div>
    </VueSlickCarousel>
    <div class="nav-onboarding" style="margin-bottom: 65px;">
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
    <button
      class="btn__accent btn__large"
      style="width: 100%; margin-bottom: 16px;"
      @click="() => this.$router.push('login')"
    >
      Masuk
    </button>
    <button
      class="btn__secondary btn__borderless btn__large"
      style="width: 100%; margin-bottom: 72px;"
      @click="() => this.$router.push('register')"
    >
      Belum punya akun
    </button>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";

export default {
  name: "Onboarding1",
  components: { VueSlickCarousel },
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
  height: 100%;
}

.onboarding-banner {
  width: 100vw;
  height: 358px;
  margin-left: -24px;
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
  width: 100vw;
  padding-inline: 24px;
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
