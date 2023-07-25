<template>
  <LayoutOne
    headerImg="img/restrukturisasi/sesi3_materi3.png"
    backRoutes="/restrukturisasi/sesi3"
  >
    <h1 class="text__title-2 text__primary q-ma-none q-mt-md q-mb-sm">
      ABC dan D
    </h1>
    <p class="text__body text__neutral-black">
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
      Kita akan berperan layaknya seorang pengacara yang menantang saksi dengan
      mengajukan pertanyaan, untuk menemukan kebenaran yang sebenarnya. Pada
      praktekknya, kita akan membantah pikiran negatif dengan melemparkan
      pertanyaan yang akan membuat perdebatan dan menguji kebenarannya. Hingga
      pada akhirnya kita sadar, dan mendapati bahwa pikiran negatif itu tidak
      valid.
    </p>

    <p class="text__body text__neutral-black">
      Sekarang mari kita pelajari beberapa pertanyaan yang dapat kamu ajukan di
      dalam kepalamu, untuk memicu perdebatan dengan pikiran negatifmu. Berikut
      beberapa contoh pertanyaan yang aku siapkan untukmu, kamu perlu
      memperhatikan dan cobalah untuk mengingatnya!
    </p>

    <img class="img-body" src="img/restrukturisasi/sesi3_materi3_body1.png" />

    <p class="text__special-body">
      “Bagaimana cara lain menilai situasi ini?
    </p>

    <p class="text__special-body">
      "Jika dampaknya tidak terlalu buruk, lalu mengapa aku memandang situasi
      ini secara negatif?"
    </p>

    <p class="text__special-body">
      "Bagaimana orang lain memandang peristiwa yang kualami ini?"
    </p>

    <p class="text__special-body">
      “Secara realistis, apakah hal itu memang mungkin terjadi?”
    </p>

    <p class="text__special-body">
      “Apakah bermanfaat bagiku untuk terus berpikir seperti ini?”
    </p>

    <p class="text__body text__neutral-black">
      Kamu dapat mengadaptasinya ataupun membuat versimu sendiri untuk menantang
      pikiran negatif di kepala. Manfaatkan pertentangan yang muncul nantinya,
      untuk membuktikan bahwa pikiran negatif itu salah dan tidak valid untuk
      dipercayai.
    </p>

    <p class="text__body text__neutral-black">
      Nah setelah aku beritahu beberapa strategi untuk menghadapi pikiran
      negatifmu, sekarang kamu dapat mempraktekkannya untuk belajar menghindari
      pengaruh pikiran negatif pada perasaanmu. Yuk akses latihan di sesi ini
      biar kamu bisa mencobanya!
    </p>
  </LayoutOne>
</template>

<script>
import LayoutOne from "layouts/LayoutOne.vue";

export default {
  components: { LayoutOne },
  mounted() {
    // enable latihan 1
    this.$store.commit("restrukturisasi/enableLatihan", {
      sesi: "sesi3",
      latihan: 0
    });
  }
};
</script>
