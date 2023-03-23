<template>
  <div class="container">
    <div class="header-nav">
      <div class="icon q-mr-md" @click="$router.back()">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.6662 6.66663H4.54203L8.94386 2.28357C9.19503 2.03271 9.33614 1.69246 9.33614 1.33769C9.33614 0.98291 9.19503 0.642664 8.94386 0.391799C8.69268 0.140934 8.35201 0 7.9968 0C7.64158 0 7.30091 0.140934 7.04974 0.391799L0.380298 7.05298C0.25886 7.17968 0.163667 7.32908 0.100182 7.49261C-0.0332311 7.81696 -0.0332311 8.18077 0.100182 8.50511C0.163667 8.66865 0.25886 8.81805 0.380298 8.94475L7.04974 15.6059C7.17374 15.7308 7.32127 15.8299 7.48381 15.8975C7.64636 15.9652 7.82071 16 7.9968 16C8.17289 16 8.34723 15.9652 8.50978 15.8975C8.67233 15.8299 8.81986 15.7308 8.94386 15.6059C9.06888 15.4821 9.16811 15.3347 9.23583 15.1724C9.30355 15.01 9.33842 14.8359 9.33842 14.66C9.33842 14.4842 9.30355 14.31 9.23583 14.1477C9.16811 13.9853 9.06888 13.838 8.94386 13.7142L4.54203 9.3311H14.6662C15.02 9.3311 15.3593 9.19074 15.6094 8.9409C15.8596 8.69105 16.0001 8.35219 16.0001 7.99886C16.0001 7.64553 15.8596 7.30667 15.6094 7.05683C15.3593 6.80699 15.02 6.66663 14.6662 6.66663Z"
            fill="#5C7CCD"
          />
        </svg>
      </div>
      <div class="text__title-4 text__primary">
        Modul Restrukturisasi
      </div>
    </div>

    <div class="container-scroll">
      <div class="main q-pa-3">
        <!-- PERKENALAN -->
        <h2 class="text__title-2 text__neutral-back q-my-none">Perkenalan</h2>
        <div
          class="item"
          @click="() => this.$router.push('restrukturisasi/intro')"
        >
          <h3 class="text__title-3 text__primary">Untuk Temanku</h3>
          <img src="/img/restrukturisasi/intro.png" />
        </div>
        <!-- SESI UTAMA -->
        <h2 class="text__title-2 text__neutral-back">Sesi Utama</h2>
        <div
          class="item"
          :class="{ disabled: !statusSesi.sesi1 }"
          @click="goToSesi('sesi1')"
        >
          <h3 class="text__title-3 text__primary">
            Sesi 1: <br />
            Pikiran dan Perasaan
          </h3>
          <div v-if="statusSesi.sesi1" class="item__tray">
            <div>3 Materi</div>
            <div>2 Latihan</div>
          </div>
          <img src="/img/restrukturisasi/sesi1.png" />
        </div>
        <div
          class="item"
          :class="{ disabled: !statusSesi.sesi2 }"
          @click="goToSesi('sesi2')"
        >
          <h3 class="text__title-3 text__primary">
            Sesi 2: <br />
            Pola Pikir Negatif
          </h3>
          <div v-if="statusSesi.sesi2" class="item__tray">
            <div>3 Materi</div>
            <div>2 Latihan</div>
          </div>
          <img src="/img/restrukturisasi/sesi2.png" />
        </div>
        <div
          class="item"
          :class="{ disabled: !statusSesi.sesi3 }"
          @click="goToSesi('sesi3')"
        >
          <h3 class="text__title-3 text__primary">
            Sesi 3: <br />
            Menantang Pikiran
          </h3>
          <div v-if="statusSesi.sesi3" class="item__tray">
            <div>3 Materi</div>
            <div>2 Latihan</div>
          </div>
          <img src="/img/restrukturisasi/sesi3.png" />
        </div>
        <h2 class="text__title-2 text__neutral-back">Bantuan</h2>
        <div class="item">
          <h3 class="text__title-3 text__primary">
            Bantuan
          </h3>
          <img src="/img/restrukturisasi/sesi1.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    statusSesi() {
      return this.$store.state.restrukturisasi.statusSesi;
    }
  },
  methods: {
    goToSesi(sesi) {
      if (!this.statusSesi[sesi]) return;

      this.$router.push(`/restrukturisasi/${sesi}`);
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.container-scroll {
  flex-grow: 1;
  overflow: auto;
  min-height: 0;
}

.header-nav {
  padding: 16px;

  display: flex;
  align-items: center;

  box-shadow: 0px 2px 4px -1px rgba(48, 48, 48, 0.08);

  .icon {
    display: grid;
    place-items: center;
  }
}

.main {
  padding: 16px;
}

.item {
  position: relative;
  width: 100%;
  height: 164px;
  background-color: #f2f6ff;
  border-radius: 16px;
  padding: 16px;
  overflow: hidden;
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &.disabled {
    filter: grayscale(80%);
  }

  h3 {
    width: 156px;
    margin: 0;
  }

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;

    object-fit: cover;
    bottom: 0;
    user-select: none;
    pointer-events: none;
  }

  &__tray {
    display: flex;
    gap: 8px;

    div {
      padding: 4px 8px;
      background: #ffcb4d;
      border-radius: 12px;

      font-family: "Nunito Sans";
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 18px;
      /* identical to box height, or 150% */

      text-align: center;
      letter-spacing: 0.02em;

      /* Neutral/Black */

      color: #303030;
    }
  }
}
</style>
