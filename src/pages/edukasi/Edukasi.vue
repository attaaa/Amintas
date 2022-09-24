<template>
  <div>
    <div class="home-container">
      <!-- HEADER -->
      <div class="home-header">
        <span class="text__title-1 text__primary">Edukasi</span>
      </div>

      <div>
        <SearchField />
      </div>

      <!-- playlist title -->
      <div
        class="text__title-3 text__neutral-black"
        style="margin-top: 24px; margin-bottom: 12px"
      >
        Untuk rasa penasaranmu
      </div>

      <!-- playlist -->
      <div class="playlist row">
        <!-- container for spacing -->
        <div
          class="playlist-item col-6"
          v-for="(playlist, index) in playlistData"
          :key="index"
          @click="goToDetail(12)"
        >
          <!-- actual playlist item -->
          <div>
            <div class="playlist-item--bg">
              <img :src="playlist.img" />
            </div>
            <div class="playlist-item--text text__title-4 text__primary">
              {{ playlist.text }}
            </div>
          </div>
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
          <img src="/img/education_display_mat1.png" />
          <div class="text__headline text__primary">Teknik Pernapasan</div>
        </div>
        <div class="material-item flex items-center">
          <img src="/img/education_display_mat1.png" />
          <div class="text__headline text__primary">Teknik Pernapasan</div>
        </div>
        <div class="material-item flex items-center">
          <img src="/img/education_display_mat1.png" />
          <div class="text__headline text__primary">Teknik Pernapasan</div>
        </div>
        <div class="material-item flex items-center">
          <img src="/img/education_display_mat1.png" />
          <div class="text__headline text__primary">Teknik Pernapasan</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const playlistData = [
  {
    img: "/img/education_cover1.png",
    text: "Cemas dan Gangguan"
  },
  {
    img: "/img/education_cover2.png",
    text: "Kecemasan Mahasiswa"
  },
  {
    img: "/img/education_cover3.png",
    text: "Beragam Gangguan"
  },
  {
    img: "/img/education_cover4.png",
    text: "Mengangani Kecemasan"
  }
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
    goToDetail(detailId) {
      this.$router.push("/edukasi/edukasi-detail/4");
    }
  }
};
</script>

<style>
.home-container {
  height: 100vh;
  overflow: scroll;
  padding-bottom: 80px;
}

.playlist-item {
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
}

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
