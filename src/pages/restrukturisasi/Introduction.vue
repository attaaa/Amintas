<template>
  <LayoutOne
    headerImg="img/restrukturisasi/intro_detail.png"
    backRoutes="/restrukturisasi"
  >
    <h1 class="text__title-2 text__primary q-ma-none">Untuk Temanku</h1>
    <h2 class="text__title-4 text__neutral-black q-mt-md q-mb-sm">
      Halo, Selamat Datang!
    </h2>
    <p class="text__body text__neutral-black">
      Ini adalah bagian khusus yang disiapkan Amintas untukmu, salah satu teman
      terbaik. Pada modul ini, Amintas akan membantu untuk merubah pemikiran
      salah yang membuat perasaanmu tidak nyaman. Untuk kemudian menjadi suatu
      pemikiran baru yang lebih rasional. Sehingga nantinya, kamu dapat terbebas
      dari perasaan tidak nyaman akibat pikiran mengganggu tersebut.
    </p>
    <p class="text__body text__neutral-black">
      Melalui modul ini, Amintas akan mengajarimu bagaimana pemikiran memiliki
      pengaruh besar terhadap perasaanmu. Kemudian kamu juga akan mengenal
      berbagai jenis pikiran mengganggu dan bagaimana mengidentifikasinya.
      Setelah itu, kamu akan dibawa untuk mencari tahu bagaimana menghadapi dan
      mengurangi pengaruhnya pada perasaanmu. Lalu jika kamu kesulitan
      mengidentifikasi pikiran mengganggu, Amintas siap mengajarimu melalui
      bagian Bantuan pada modul ini.
    </p>
    <p class="text__body text__neutral-black">
      Yuk kita mulai belajar dan merubah pikiran mengganggu dengan modul ini!
    </p>
  </LayoutOne>
</template>

<script>
import LayoutOne from "layouts/LayoutOne.vue";

export default {
  components: { LayoutOne },
  mounted() {
    this.$store.commit("restrukturisasi/setStatusSesi", "sesi1");
    this.$store.commit("restrukturisasi/setStatusSesi", "bantuan");
  }
};
</script>

<style></style>
