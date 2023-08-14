<template>
  <LayoutOne headerImg="img/restrukturisasi/sesi1_materi3.png">
    <h1 class="text__title-2 text__primary q-ma-none q-mt-md q-mb-sm">
      Faktor Pikiran Negatif
    </h1>

    <p class="text__body text__neutral-black" style="margin-bottom: 12px">
      Dalam materi sebelumnya kita mencoba meninjau hubungan pikiran dan perasaan, melalui suatu skenario yang memunculkan dua perspektif pikiran untuk mempengaruhi perasaan kita. Setelah kita paham bagaimana pengaruh dari hubungan keduanya, sekarang kita akan mencoba untuk mengetahui latar belakang pikiran negatif yang muncul pada diri kita.
    </p>

    <p class="text__body text__neutral-black" style="margin-bottom: 12px">
      Seperti yang sudah dijelaskan pada materi pertama, bahwa perilaku temanmu yang membatalkan janji bukanlah penyebab perasaan frustasimu. Melainkan timbul akibat persepsimu akan situasi itu, dan pandanganmu pada diri sendiri dan pertemananmu. Persepsi atau pandangan tersebutlah faktor yang menimbulkan pikiran negatif, dimana pada akhirnya pikiran itu akan mempengaruhi perasaanmu. Sebelumnya juga pernah disebutkan pada materi yang sama, bahwa terdapat tiga jenis faktor yang dapat menimbulkan pikiran negatif tersebut.
    </p>

    <p class="text__body text__neutral-black">
      Faktor tersebut diantaranya, seseorang memiliki pandangan negatif terhadap dirinya sendiri; seseorang memandang situasi atau kejadian dalam hidupnya secara negatif dan bias; lalu yang terakhir, seseorang berpandangan bahwa masa depannya pasti akan suram.
    </p>

    <p class="text__body text__neutral-black" style="margin-bottom: 12px">
      Untuk lebih memahami faktor-faktor tersebut, kita akan menggunakan contoh skenario serupa agar lebih mudah mengidentifikasinya. Mari kita perhatikan skenario dan penjelasan berikut!
    </p>

    <h2 class="text__headline text__neutral-black" style="margin-bottom: 4px">
      Skenario:
    </h2>

    <p class="text__body text__neutral-black">
      Kamu membuat janji bertemu dengan seorang teman, namun ia membatalkannya pada saat-saat terakhir. Kamu merasa tersinggung, sakit hati, dan kesal.
    </p>

    <img class="img-body" src="img/restrukturisasi/sesi1_materi3_body1.png" />

    <p class="text__body text__neutral-black" style="margin-bottom: 12px">
      Pikiran yang muncul akibat situasi itu dan mempengaruhi perasaanmu, mungkin seperti ini:
    </p>

    <p class="text__special-body">
      "Teman-temanku selalu membuatku kecewa, sepertinya aku memang tidak pantas memiliki teman"
    </p>

    <p class="text__body text__neutral-black" style="margin-bottom: 12px">
      Pikiran tersebut menunjukkan pandangan negatif terhadap diri sendiri:
    </p>

    <p class="text__special-body">
      “..aku memang tidak pantas..”
    </p>

    <p class="text__body text__neutral-black">
      Pada pikiran tersebut yang menjadi faktornya adalah pandangan negatif seseorang terhadap dirinya sendiri, dan pikiran tersebut memiliki jenis pola pikir negatif “all-or-none”, dimana perilaku seorang teman menjadi penilaian untuk keseluruhan temannya. Terkait jenisnya, aku akan memberitahu lebih banyak pada sesi selanjutnya. Jadi jangan kebingungan dan anggap saja ini sedikit perkenalan ya!
    </p>

    <p class="text__body text__neutral-black">
      Nah sekarang giliran kamu, untuk coba mengidentifikasi bagaimana pikiran negatifmu dan apa faktornya. Yuk akses bagian latihan sesi ini biar kamu bisa mempraktekkannya!
    </p>

    <h2 class="text__headline text__neutral-black" style="margin-bottom: 4px">
      Sedikit Catatan:
    </h2>

    <p class="text__body text__neutral-black">
      Pikiran negatifmu tidak harus memiliki ketiga faktor, terkadang hanya terdapat 1 atau 2 faktor. Hal itu tergantung pikiran negatif yang kamu identifikasi. Terkait identifikasinya, pikiran tersebut muncul dapat muncul dengan spontan dan tanpa sadar perasaan kita telah terpengaruh. Makanya, jika kamu kesulitan mengingat pikiran negatifmu. Coba akses bagian Bantuan pada modul ini, ya!
    </p>
  </LayoutOne>
</template>

<script>
import LayoutOne from "../../../../layouts/LayoutOne.vue";

export default {
  components: { LayoutOne },
  mounted() {
    this.$store.commit("restrukturisasi/enableLatihan", {
      sesi: "sesi1",
      latihan: 0
    });
  }
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
