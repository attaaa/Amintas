<template>
  <LayoutOne
    headerImg="img/restrukturisasi/sesi3.png"
    backRoutes="/restrukturisasi"
  >
    <h1 class="text__title-2 text__primary q-ma-none q-mt-md q-mb-sm">
      Sesi 3: Menantang Pikiran
    </h1>
    <p class="text__body text__neutral-black">
      Setelah memahami pengaruh pikiran pada perasaanmu, dan mengenal bagaimana
      bentuk pikiran mengganggu. Pada bagian terakhir ini, kita akan belajar
      bagaimana menghadapinya, aku akan memberitahumu beberapa strategi yang
      dapat membantumu dalam menghadapinya. Mengingat terkadang bagi sebagian
      orang hal itu tidak mudah dilakukan, dan memiliki persiapan tentu akan
      membantu kita, bukan? Makanya, yuk kita pelajari dan terbebas dari
      perasaan tidak nyaman itu!
    </p>

    <h2 class="text__title-3 text__neutral-black" style="margin-bottom: 12px">
      Materi
    </h2>
    <div>
      <div class="material-item flex items-center">
        <img src="img/restrukturisasi/sesi3_materi1_item.png" />
        <div class="text__headline text__primary">
          <div>Melaporkan Fakta</div>
        </div>
      </div>
      <div class="material-item flex items-center">
        <img src="img/restrukturisasi/sesi3_materi2_item.png" />
        <div class="text__headline text__primary">
          <div>Menjaga Keseimbangan Pikiran</div>
        </div>
      </div>
      <div class="material-item flex items-center">
        <img src="img/restrukturisasi/sesi3_materi3_item.png" />
        <div class="text__headline text__primary">
          <div>ABC dan D</div>
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
        <img src="img/restrukturisasi/sesi3_latihan1_item.png" />
        <div class="text__headline text__primary">
          <div>Bermain Pera: Reporter</div>
        </div>
      </div>
      <div class="material-item flex items-center">
        <img src="img/restrukturisasi/sesi3_latihan2_item.png" />
        <div class="text__headline text__primary">
          <div>Menjaga Keseimbangan Pikiran</div>
        </div>
      </div>
      <div class="material-item flex items-center">
        <img src="img/restrukturisasi/sesi3_latihan3_item.png" />
        <div class="text__headline text__primary">
          <div>Bermain Peran: Pengacara</div>
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
