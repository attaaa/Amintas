<template>
  <LayoutOne headerImg="/img/restrukturisasi/sesi1_latihan1_detail.png">
    <h1 class="text__title-2 text__primary q-ma-none q-mt-md q-mb-sm">
      Identifikasi Pikiran Negatif
    </h1>
    <p class="text__body text__neutral-black">
      Pada latihan pertama ini, kamu diminta untuk mengidentifikasi pikiran yang
      muncul dalam kepalamu berdasarkan suatu peristiwa. Coba renungi dengan
      seksama, jika skenario ini benar terjadi padamu dan melibatkan teman
      dekatmu.
    </p>
    <p class="text__body text__neutral-black">
      Ungkapkan pikiran yang muncul dalam kepalamu pada situasi itu. Kemudian
      coba identifikasi faktor yang melatarbelakangi pikiran negatif tersebut!
    </p>

    <div class="custom-header">
      <h2 class="text__title-3 text__neutral-black">Skenario</h2>
      <div class="custom-header--line"></div>
    </div>
    <p class="text__body text__neutral-black">
      Seorang teman meminta bantuanmu untuk mempersiapkan wawancara magang di
      perusahaan favoritnya. Kamu membantunya semalam suntuk mempersiapkan
      berbagai hal, agar dia berhasil besok pagi.
    </p>
    <p class="text__body text__neutral-black">
      Dua hari berlalu, kemudian dia menemuimu. Dia memberi kabar bahwa dia
      kacau saat wawancara, dia tidak dapat menjawab beberapa pertanyaan
      penting, dan tidak lolos untuk magang di sana. Kamu pun merasa sedih dan
      merasa bertanggung jawab atas kegagalannya.
    </p>

    <h2 class="text__title-3 text__neutral-black" style="margin-bottom: 12px">
      Materi
    </h2>
    <div>
      <div class="material-item flex items-center">
        <img src="/img/restrukturisasi/sesi1_materi1.png" />
        <div class="text__headline text__primary">
          <div>Tentang Pikiran dan Perasaan</div>
        </div>
      </div>
      <div class="material-item flex items-center">
        <img src="/img/restrukturisasi/sesi1_materi2.png" />
        <div class="text__headline text__primary">
          <div>Menghubungkan Perasaan dengan Pikiran</div>
        </div>
      </div>
      <div class="material-item flex items-center">
        <img src="/img/restrukturisasi/sesi1_materi3.png" />
        <div class="text__headline text__primary">
          <div>Faktor Pikiran Negatif</div>
        </div>
      </div>
    </div>

    <h2
      class="text__title-3 text__neutral-black"
      style="margin-top: 24px;  margin-bottom: 12px"
    >
      Latihan
    </h2>
    <div>
      <div class="material-item flex items-center">
        <img src="/img/restrukturisasi/sesi1_latihan1.png" />
        <div class="text__headline text__primary">
          <div>Identifikasi Pikiran Negatif</div>
        </div>
      </div>
      <div class="material-item flex items-center">
        <img src="/img/restrukturisasi/sesi1_latihan2.png" />
        <div class="text__headline text__primary">
          <div>Catatan Pikiran Negatif</div>
        </div>
      </div>
    </div>
  </LayoutOne>
</template>

<script>
import LayoutOne from "../../../layouts/LayoutOne.vue";

export default {
  components: { LayoutOne }
};
</script>

<style lang="scss" scoped>
.custom-header {
  display: flex;
  gap: 12px;
  align-items: center;
  margin-top: 12px;
  margin-bottom: 12px;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }

  div {
    background-color: #ffcb4d;
    height: 1px;
    flex-basis: 0;
    flex-grow: 1;
  }
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

  div {
    height: 72px;
    flex-basis: 0;
    flex-grow: 1;

    div {
      display: flex;
      align-items: center;
    }
  }
}

.material-item img {
  border-radius: 20px;
}
</style>
