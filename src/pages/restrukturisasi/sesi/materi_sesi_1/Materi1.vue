<template>
  <LayoutOne headerImg="/img/restrukturisasi/sesi1_materi1.png">
    <h1 class="text__title-2 text__primary q-ma-none q-mt-md q-mb-sm">
      Tentang Pikiran dan Perasaan
    </h1>
    <p class="text__body text__neutral-black">
      Coba renungi dengan menutup matamu dan bayangkan perasaan yang sedang kamu
      rasakan saat ini. Ajukan pertanyaan ini di dalam kepalamu:
    </p>

    <p class="text__special-body">
      "Apakah itu perasaan sementara yang hanya datang dan seketika pergi?
      Ataukah itu merupakan perasaan yang tetap tinggal, dan menggambarkan
      suasana hatimu seminggu terakhir?"
    </p>

    <img class="img-body" src="/img/restrukturisasi/sesi1_materi1_body1.png" />

    <p class="text__body text__neutral-black">
      Perasaan yang bertahan dari waktu ke waktu, menginterpretasikan mood atau
      suasana hatimu. Ia merefleksikan pemikiranmu pada diri sendiri, dunia di
      sekelilingmu, dan juga pandanganmu pada masa depan.
    </p>

    <h2 class="text__headline text__neutral-black" style="margin-bottom: 12px">
      Lalu, mengapa ia muncul?
    </h2>

    <p class="text__body text__neutral-black">
      Perasaan yang bertahan dari waktu ke waktu, menginterpretasikan mood atau
      suasana hatimu. Ia merefleksikan pemikiranmu pada diri sendiri, dunia di
      sekelilingmu, dan juga pandanganmu pada masa depan.
    </p>

    <h2 class="text__headline text__neutral-black" style="margin-bottom: 12px">
      Skenario:
    </h2>

    <p class="text__body text__neutral-black">
      Kamu membuat janji bertemu dengan seorang teman, namun ia membatalkannya
      pada saat-saat terakhir. Kamu merasa tersinggung, sakit hati, dan sangat
      kesal.
    </p>

    <img class="img-body" src="/img/restrukturisasi/sesi1_materi1_body2.png" />

    <p class="text__body text__neutral-black">
      Bagaimana jika aku beritahu, bahwa perilaku temanmu bukanlah yang
      menimbulkan perasaan negatifmu. Namun sebaliknya, hal yang mempengaruhi
      perasaanmu itu adalah persepsimu terhadap situasi tersebut, serta
      pemikiran terkait dirimu sendiri dan juga pertemanan kalian. Jika situasi
      itu benar-benar terjadi di dunia nyata, itu adalah hal yang normal dan
      wajar kamu rasakan. Toh, kegiatan menyenangkan yang kamu nantikan gagal.
      Namun yang perlu diperhatikan, mengapa perasaan negatif seperti itu dapat
      bertahan dan mempengaruhi kita hingga bersedih.
    </p>

    <p class="text__body text__neutral-black">
      Penelitian menyebutkan, bahwa seseorang yang terus merasa buruk secara
      emosional dipengaruhi oleh tiga faktor. Faktor itu diantaranya, mereka
      memiliki pandangan negatif terhadap dirinya sendiri; mereka memandangan
      situasi atau peristiwa dalam hidup mereka secara negatif dan bias; lalu
      yang terakhir mereka berpandangan bahwa masa depan pasti akan suram. Namun
      fakta baiknya, hal tersebut bisa kita hadapi agar tidak lagi memunculkan
      pikiran negatif yang akan mempengaruhi perasaan kita.
    </p>

    <p class="text__body text__neutral-black">
      Lalu hal pertama yang akan kita lakukan untuk menjadi lebih baik, yaitu
      belajar membedakan pikiran dan perasaan. Tentu bukan hal yang mudah,
      karena seringkali ucapan kita mengaburkan perbedaannya.
    </p>

    <p class="text__body text__neutral-black">
      Mungkin kamu akan mengungkapkan perasaanmu seperti ini:
    </p>

    <p class="text__special-body">
      “Saya tersinggung”
    </p>

    <p class="text__body text__neutral-black">
      Padahal sebenarnya, sebelum itu kamu memiliki pikiran negatif seperti ini:
    </p>

    <p class="text__special-body">
      “Temanku tidak menghargaiku”
    </p>

    <p class="text__body text__neutral-black">
      Pikiran negatif itulah yang sebenarnya mempengaruhi perasaanmu, hingga
      pada akhirnya kamu merasa tersinggung.
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
    // set materi 1 in sesi 1 as done
    this.$store.commit("restrukturisasi/setStatusMateri", {
      sesi: "sesi1",
      materiIdx: 0,
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
