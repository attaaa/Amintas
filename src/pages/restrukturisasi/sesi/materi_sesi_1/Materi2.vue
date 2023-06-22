<template>
  <LayoutOne headerImg="img/restrukturisasi/sesi1_materi1.png">
    <h1 class="text__title-2 text__primary q-ma-none q-mt-md q-mb-sm">
      Menghubungkan Perasaan dan Pikiran
    </h1>

    <p class="text__body text__neutral-black">
      Pada materi sebelumnya kita sudah mengetahui bahwa pikiran dapat
      mempengaruhi perasaanmu. Tentunya hal itu saja belum cukup membuktikan
      hubungan keduanya. Dalam materi ini kita akan mencoba menghubungkan
      mereka, dan memperhatikan bagaimana pikiran dapat mempengaruhi perasaanmu.
      Untuk melakukannya, kita akan menggunakan sebuah skenario lagi.
    </p>

    <p class="text__body text__neutral-black">
      Hal yang perlu kamu lakukan adalah membayangkan situasi di skenario
      tersebut betul terjadi padamu di dunia nyata. Setelah membayangkannya,
      coba kamu renungi sejenak bagaimana perasaan yang timbul di dalam dirimu.
    </p>

    <p class="text__body text__neutral-black">
      Jika sudah siap, coba baca skenario berikut dengan seksama ya!
    </p>

    <h2 class="text__headline text__neutral-black" style="margin-bottom: 12px">
      Skenario:
    </h2>

    <p class="text__body text__neutral-black">
      Mulai hari ini hingga seminggu kedepan, orangtuamu menitipkan rumah
      padamu. Ayah dan ibumu akan berlibur sejenak kembali ke kampung halaman
      mereka, karena sudah lama tidak mengunjungi keluarga di sana. Setelah kamu
      pulang dari berbelanja kebutuhan rumah untuk seminggu kedepan, dan tiba di
      rumah cukup larut. Kamu merasa ada yang aneh, sekeliling rumah terasa
      sangat sunyi dan gelap. Saat membuka pintu dan ingin menghampiri saklar,
      tiba-tiba ada yang lompat mengejutkanmu seraya berteriak "Kejutan!", dan
      diiringi dengan suara riuh orang bernyanyi "Selamat Ulang Tahun! selamat
      ulang tahun..."
    </p>

    <img class="img-body" src="img/restrukturisasi/sesi1_materi2_body1.png" />

    <p class="text__body text__neutral-black">
      Kamu pun langsung berpikir:
    </p>

    <p class="text__special-body">
      "Wah aku 22 tahun sekarang, bukan ulang tahun yang penting sebenarnya.
      Makanya aku tidak berharap akan ada yang ingat. Tapi ternyata banyak orang
      yang peduli dan ini sangat menyenangkan! Ada banyak sahabat dan keluarga
      yang datang hari ini. Mereka datang dan menyempatkan waktu, pasti aku
      dianggap istimewa hahaha"
    </p>

    <h2 class="text__headline text__neutral-black" style="margin-bottom: 12px">
      Coba renungi sejenak, kira-kira bagaimana perasaanmu pada situasi itu.
    </h2>

    <p class="text__body text__neutral-black">
      Namun bagaimana jika, pikiran di kepalamu seperti ini:
    </p>

    <p class="text__special-body">
      "Nggak! Aku sudah bilang berkali-kali. Aku tidak suka dikasih kejutan saat
      ulang tahun. Tapi seperti biasa, tidak ada yang mendengarkan omonganku.
      Aku bingung harus bagaimana, aku malas sekali harus basa-basi dan
      berpura-pura senang. Aku ingin pergi dari sini"
    </p>

    <h2 class="text__headline text__neutral-black" style="margin-bottom: 12px">
      Coba renungi kembali perasaanmu.
    </h2>

    <p class="text__body text__neutral-black">
      Membayangkan pikiran seperti itu, tentu saja membuat perasaanmu jadi
      berbeda sekarang. Mungkin saat ini kamu justru merasa kesal atau bahkan
      frustasi, berbeda dibanding sebelumnya.
    </p>

    <p class="text__body text__neutral-black">
      Seperti itulah bagaimana pikiran yang muncul akibat suatu kejadian dapat
      mempengaruhi perasaanmu. Berbeda pikiran yang muncul, berbeda pula
      perasaan yang dialami. Akhirnya kita sekarang jadi lebih paham tentang
      hubungan keduanya, namun tentu pikiran mengganggu itu tidak muncul begitu
      saja.
    </p>

    <p class="text__body text__neutral-black">
      Biar kamu dapat lebih memahami tentang pikiran dan perasaanmu, yuk akses
      materi selanjutnya di sesi ini!
    </p>
  </LayoutOne>
</template>

<script>
import LayoutOne from "../../../../layouts/LayoutOne.vue";

export default {
  components: { LayoutOne },
  computed: {
    statusLatihan() {
      return this.$store.state.restrukturisasi.statusLatihan.sesi1;
    }
  },
  mounted() {
    this.$store.commit("restrukturisasi/setStatusSesi", "sesi2");
    // set materi 2 in sesi 1 as done
    this.$store.commit("restrukturisasi/setStatusMateri", {
      sesi: "sesi1",
      materiIdx: 1,
      value: true
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
