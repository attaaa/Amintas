<template>
  <LayoutOne headerImg="img/restrukturisasi/sesi2_materi2.png">
    <h1 class="text__title-2 text__primary q-ma-none q-mt-md q-mb-sm">
      Mengidentifikasi Pola Pikir Negatif
    </h1>
    <p class="text__body text__neutral-black" style="margin-bottom: 12px">
      Setelah mengenal jenisnya di materi sebelumnya, dan sempat mencoba untuk
      mengungkap pikiran negatif di sesi pertama. Sekarang kita akan mencoba
      mengungkapnya dengan lebih detail hingga menentukan jenisnya.
      Mengidentifikasi pola pikir negatif biasanya cukup rumit dilakukan,
      apalagi pikiran seperti itu munculnya otomatis dan spontan. Tapi, jangan
      khawatir karena aku telah menyiapkan hal khusus untukmu!
    </p>

    <p class="text__body text__neutral-black" style="margin-bottom: 12px">
      Sama seperti hal lain yang baru saja kita pelajari, untuk terbiasa
      mengungkap pikiran negatif memerlukan upaya. Namun kamu harus ingat, hal
      itu akan membantumu melawan stress dan memiliki mental yang sehat. Biar
      kamu dapat lebih mudah dalam mengidentifikasinya, aku akan mengajarimu
      suatu metode bernama Analisis ABC.
    </p>

    <p class="text__body text__neutral-black" style="margin-bottom: 12px">
      ABC sendiri merupakan singkatan dari 'A' yaitu Activation Event atau
      peristiwa pemicu; 'B' yaitu Belief atau pikiran mengganggu yang akan
      diidentifikasi; dan terakhir 'C' yaitu Consequence atau perasaan
      mengganggu;
    </p>

    <p class="text__body text__neutral-black">
      Kita akan mempelajarinya dengan jurnal milik Jane, ia sering menggunakan
      metode itu untuk mengungkap pikiran negatifnya. Maka dari itu, yuk kita
      perhatikan penjabaran dari jurnalnya!
    </p>

    <p class="text__body text__neutral-black" style="margin-bottom: 12px">
      Pada salah satu jurnalnya, Jane bercerita tentang temannya. Berikut detail dan penjabaran Analisis ABC dari Jane yang dimuat di jurnalnya.
    </p>

    <p class="text__body text__neutral-black" style="margin-bottom: 12px">
      Jane menjabarkan peristiwa yang dialami atau "A: Activation Event":
    </p>

    <p class="text__special-body">
      “Minggu lalu temanku tidak mendapatkan pekerjaan yang dia lamar”.
    </p>

    <p class="text__body text__neutral-black" style="margin-bottom: 12px">
      Jane melewati 'B', dan menjabarkan perasaan mengganggu yang muncul atau
      "C: Consequence":
    </p>

    <p class="text__special-body">
      “..dan aku seketika merasa sangat gagal dan bersalah..”
    </p>

    <img class="img-body" src="img/restrukturisasi/sesi2_materi2_body1.png" />

    <p class="text__body text__neutral-black" style="margin-bottom: 12px">
      Lalu Jane meninjau 'A' dan 'C', untuk mengidentifikasi "B: Belief":
    </p>

    <p class="text__special-body">
      "Itu salahku, aku pasti salah mengajarinya. Pasti banyak materi yang
      kurang aku jelaskan, dan saat ujian dia jadi salah"
    </p>

    <p class="text__body text__neutral-black">
      Setelah mendapatkan 'B' atau pikiran mengganggu yang timbul akibat
      peristiwa 'A', dan menyebabkan 'C'. Jane pun dapat mengidentifikasi bahwa
      jenis pola pikir negatifnya adalah personalisation, yaitu distorsi
      kognitif yang mendorong seseorang merasa bertanggung jawab atas peristiwa
      di luar urusannya.
    </p>

    <p class="text__body text__neutral-black">
      Nah setelah memahami penjabaran di atas, sekarang giliran kamu buat
      mempraktekkan Analisis ABC untuk mengungkap pikiran negatifmu dan memahami
      distorsi kognitif yang mempengaruhinya. Yuk akses latihan sesi ini biar
      kamu bisa mempraktekkannya!
    </p>

    <h2 class="text__headline text__neutral-black" style="margin-bottom: 4px">
      Sedikit Catatan:
    </h2>

    <p class="text__body text__neutral-black">
      Seperti yang kamu ketahui, pikiran negatif kita munculnya spontan dan
      otomatis. Jika kamu masih merasa bingung dengan materi di atas, coba akses
      bagian Bantuan pada modul ini, ya!
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
      sesi: "sesi2",
      latihan: 0
    });
  }
};
</script>
