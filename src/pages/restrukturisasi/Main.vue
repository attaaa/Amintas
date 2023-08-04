<template>
  <div class="container">
    <div class="header-nav">
      <div class="icon q-mr-md" @click="$router.replace('/')">
        <img svg-inline src="assets/icons/general/arrow-left.svg" />
      </div>
      <div class="text__title-4 text__primary">
        Modul Restrukturisasi
      </div>
    </div>

    <div class="container-scroll">
      <div class="main q-pa-3">
        <!--  -->
        <!-- PERKENALAN -->
        <h2 class="text__title-2 text__neutral-back q-my-none">Perkenalan</h2>
        <div
          class="item"
          @click="() => this.$router.push('restrukturisasi/intro')"
        >
          <h3 class="text__title-3 text__primary">Untuk Temanku</h3>
          <img src="img/restrukturisasi/intro.png" />
        </div>

        <!--  -->
        <!-- SESI UTAMA -->
        <!--  -->
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
          <img src="img/restrukturisasi/sesi1.png" />
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
            <div>2 Materi</div>
            <div>1 Latihan</div>
          </div>
          <img src="img/restrukturisasi/sesi2.png" />
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
            <div>3 Latihan</div>
          </div>
          <img src="img/restrukturisasi/sesi3.png" />
        </div>

        <h2 class="text__title-2 text__neutral-back">Bantuan</h2>
        <div
          class="item"
          @click="goToSesi('bantuan')"
          :class="{ disabled: !statusSesi.bantuan }"
        >
          <h3 class="text__title-3 text__primary">
            Analisis <br />
            ABC
          </h3>
          <img src="img/restrukturisasi/bantuan.png" />
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
