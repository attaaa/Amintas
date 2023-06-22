<template>
  <LayoutOne headerImg="img/restrukturisasi/intro_detail.png">
    <h1 class="text__title-2 text__primary q-ma-none q-mt-md q-mb-sm">
      Sesi 1: Pikiran dan Perasaan
    </h1>
    <p class="text__body text__neutral-black">
      Selayaknya manusia normal, aku dan kamu seringkali sulit mengungkapkan
      dengan tepat apa yang sebenarnya kita rasakan. Tentu itu membingungkan,
      padahal ada banyak diksi yang dapat menggambarkan setiap perasaan dan
      emosi kita. Seperti kata tegang, kesal, sedih, ataupun frustasi yang dapat
      menunjukkan perasaan buruk yang kita alami. Lalu ada juga kata seperti
      senang, puas, bersemangat, ataupun gembira yang menggambarkan perasaan
      bahagia. Tapi tenang, aku akan menjelaskan semuanya untukmu melalui materi
      dan latihan yang ada di sini. Yuk kita mulai pelajari perasaan kita!
    </p>

    <h2 class="text__title-3 text__neutral-black" style="margin-bottom: 12px">
      Materi
    </h2>
    <div>
      <div class="material-item flex items-center">
        <img src="img/restrukturisasi/sesi1_materi1.png" />
        <div class="text__headline text__primary">
          <div>Tentang Pikiran dan Perasaan</div>
        </div>
      </div>
      <div class="material-item flex items-center">
        <img src="img/restrukturisasi/sesi1_materi2.png" />
        <div class="text__headline text__primary">
          <div>Menghubungkan Perasaan dengan Pikiran</div>
        </div>
      </div>
      <div class="material-item flex items-center">
        <img src="img/restrukturisasi/sesi1_materi3.png" />
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
        <img src="img/restrukturisasi/sesi1_latihan1.png" />
        <div class="text__headline text__primary">
          <div>Identifikasi Pikiran Negatif</div>
        </div>
      </div>
      <div class="material-item flex items-center">
        <img src="img/restrukturisasi/sesi1_latihan2.png" />
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
