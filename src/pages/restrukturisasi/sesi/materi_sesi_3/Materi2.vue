<template>
  <LayoutOne
    headerImg="img/restrukturisasi/sesi3_materi2.png"
    backRoutes="/restrukturisasi/sesi3"
  >
    <h1 class="text__title-2 text__primary q-ma-none q-mt-md q-mb-sm">
      Menjaga Keseimbangan Pikiran
    </h1>
    <p class="text__body text__neutral-black" style="margin-bottom: 12px">
      Strategi kedua adalah suatu strategi tentang bagaimana menyeimbangkan
      pikiran kita, dari pikiran negatif yang berusaha mempengaruhi. Terkadang,
      kita merasa dibombardir dengan berbagai pikiran negatif di kepala kita.
      Salah satu hal yang akan sangat membantu untuk menyeimbangkankannya, yaitu
      dengan secara sadar mengingat hal-hal positif yang terjadi dan mengakui
      kemampuan kita. Berfokus pada hal itu, akan mendorong kita mengurangi
      perasaan negatif dan membantu kita meningkatkan kepercayaan diri.
      Kepercayaan diri tentu sangat diperlukan untuk menjaga perasaan bahagia
      kita.
    </p>

    <p class="text__body text__neutral-black">
      Nah sekarang mari kita pelajari bagaimana menyeimbangkan pikiran kita
      dengan memikirkan hal positif dibaliknya. Berikut terdapat contoh dari
      jurnal Jane yang dapat kita pelajari, yuk perhatikan penjabarannya!
    </p>

    <h2 class="text__headline text__neutral-black" style="margin-bottom: 4px">
      Jurnal Jane
    </h2>

    <p class="text__body text__neutral-black">
      Jane dan kelompoknya di kelas, gagal menyelesaikan tugas kuliah tepat
      waktu.
    </p>

    <img class="img-body" src="img/restrukturisasi/sesi3_materi2_body1.png" />

    <p class="text__body text__neutral-black" style="margin-bottom: 12px">
      Jane berusaha mengingat hal positif yang terjadi dan berpikir seperti ini:
    </p>

    <p class="text__special-body">
      "Aku telah menyelesaikan bagianku dan membantu kelompokku hingga ke bagian
      penutup. Bagian selanjutnya aku serahkan kepada mereka, karena aku harus
      percaya dan mengandalkan mereka. Sepertinya, kali ini aku telah sedikit
      berubah dan jadi lebih mempercayai teman-temanku."
    </p>

    <p class="text__body text__neutral-black" style="margin-bottom: 12px">
      Hal itu, mengurangi pengaruh pikiran negatif dari distorsi kognitif
      magnification yang mungkin dapat muncul mempengaruhi perasaannya. Pikiran
      negatif yang mungkin akan muncul seperti ini:
    </p>

    <p class="text__special-body">
      "Ini buruk, semua orang akan berpikir aku telah gagal di perkuliahanku.
      Kacau!"
    </p>

    <p class="text__body text__neutral-black">
      Ketika Jane menyeimbangkan pikiran negatifnya dengan mengingat hal positif
      yang terjadi, ia berhasil mengurangi pengaruh pikiran negatif di
      kepalanya. Maka dari itu, strategi ini juga dapat kamu manfaatkan untuk
      menghindari pengaruh pikiran negatif pada perasaanmu.
    </p>

    <p class="text__body text__neutral-black">
      Nah, setelah ini masih ada satu strategi lagi yang aku ingin tunjukkan
      padamu, biar kamu punya banyak persiapan. Yuk, kita bahas strategi
      selanjutnya biar kamu bisa cepat mempraktikkannya!
    </p>
  </LayoutOne>
</template>

<script>
import LayoutOne from "layouts/LayoutOne.vue";

export default {
  components: { LayoutOne },
  mounted() {
    // enable materi 3
    this.$store.commit("restrukturisasi/setStatusMateri", {
      sesi: "sesi3",
      materiIdx: 2,
      value: true
    });
  }
};
</script>
