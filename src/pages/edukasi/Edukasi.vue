<template>
  <div>
    <div class="home-container">
      <!-- HEADER -->
      <div class="home-header">
        <span class="text__title-1 text__primary">Edukasi</span>
      </div>

      <div>
        <SearchField
          placeholder="Cari gangguan, metode, dsb"
          @click.native="$router.replace('/edukasi/search')"
        />
      </div>

      <!-- playlist title -->
      <div
        class="text__title-3 text__neutral-black"
        style="margin-top: 24px; margin-bottom: 12px"
      >
        Untuk rasa penasaranmu
      </div>

      <!-- playlist -->
      <div class="playlist">
        <!-- container for spacing -->
        <!-- <div
          class="playlist-item col-6"
          v-for="(playlist, index) in playlistData"
          :key="index"
          @click="goToDetail(12)"
        >
          <div>
            <div class="playlist-item--bg">
              <img :src="playlist.img" />
            </div>
            <div class="playlist-item--text text__title-4 text__primary">
              {{ playlist.text }}
            </div>
          </div>
        </div> -->
        <div
          class="playlist--item"
          v-for="(playlist, index) in playlistData"
          :key="index"
          @click="goToDetail(index)"
        >
          <img :src="playlist" />
        </div>
      </div>

      <!-- material title -->
      <div
        class="text__title-3 text__neutral-black"
        style="margin-top: 24px; margin-bottom: 12px"
      >
        Bantu Kamu Lebih Tenang
      </div>

      <!-- materials -->
      <div>
        <div class="material-item flex items-center">
          <img src="img/education_display_mat1.png" />
          <div class="text__headline text__primary">
            Teknik Pernapasan 4-7-8
          </div>
        </div>
        <div class="material-item flex items-center">
          <img src="img/education_display_mat2.png" />
          <div class="text__headline text__primary">Menulis Jurnal</div>
        </div>
        <div class="material-item flex items-center">
          <img src="img/education_display_mat3.png" />
          <div class="text__headline text__primary">
            Menumbuhkan Rasa Syukur
          </div>
        </div>
        <div class="material-item flex items-center">
          <img src="img/education_display_mat4.png" />
          <div class="text__headline text__primary">
            Tertawa untuk Melepas Stress
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const playlistData = [
  "img/edukasi/education_cover_p1.svg",
  "img/edukasi/education_cover_p2.svg",
  "img/edukasi/education_cover_p3.svg",
  "img/edukasi/education_cover_p4.svg"
];

import SearchField from "components/inputs/SearchField";
export default {
  name: "Edukasi",
  components: { SearchField },
  data() {
    return {
      playlistData: playlistData
    };
  },
  methods: {
    goToDetail(idx) {
      switch (idx) {
        case 0:
          this.$router.replace("/edukasi/edukasi-detail/cemas-dan-gangguan");
          break;

        case 1:
          this.$router.replace("/edukasi/edukasi-detail/kecemasan-mahasiswa");
          break;

        case 2:
          this.$router.replace("/edukasi/edukasi-detail/beragam-gangguan");
          break;

        case 3:
          this.$router.replace("/edukasi/edukasi-detail/menangani-kecemasan");
          break;

        default:
          break;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.home-container {
  height: 100vh;
  overflow: scroll;
  padding-bottom: 80px;
}

.playlist {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-template-rows: repeat(2, 1fr);
  gap: 16px;
  width: calc(100%);

  &--item {
    aspect-ratio: 156 / 180;
    height: fit-content;
    margin: 0;
    padding: 0;
    margin-bottom: -6px;

    img {
      width: 100%;
      margin: 0;
      padding: 0;
    }
  }
}

/* .playlist-item {
  width: fit-content;
  height: 200px;
  margin-bottom: 16px;
  position: relative;
  overflow: hidden;
  border-radius: 16px;
}

.playlist-item > div {
  width: calc(100% - 8px);
  height: 200px;
  position: relative;
  overflow: hidden;
  border-radius: 16px;
}

.playlist-item:nth-child(even) {
  display: flex;
  justify-content: flex-end;
}

.playlist-item--bg {
  width: 100%;

  position: absolute;
  top: 0;
  left: 0;

  z-index: 1;
}

.playlist-item--bg img {
  width: 100%;
  object-fit: cover;
}

.playlist-item--text {
  width: calc(100%);
  padding: 12px 16px;

  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 10;
  box-sizing: border-box;

  text-align: center;
} */

.material-item {
  padding: 12px 16px;
  margin-bottom: 8px;

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;

  background: #f2f6ff;
  border-radius: 8px;
}

.material-item img {
  border-radius: 20px;
}
</style>
