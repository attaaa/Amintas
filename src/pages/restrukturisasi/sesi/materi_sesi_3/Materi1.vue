<template>
  <LayoutOne
    headerImg="img/restrukturisasi/sesi3_materi1.png"
    backRoutes="/restrukturisasi/sesi3"
  >
    <h1 class="text__title-2 text__primary q-ma-none q-mt-md q-mb-sm">
      Melaporkan Fakta
    </h1>
    <p class="text__body text__neutral-black" style="margin-bottom: 12px">
      Strategi pertama yang aku persiapkan untukmu adalah suatu strategi tentang
      melaporkan fakta atau bisa juga disebut bermain peran sebagai seorang
      reporter. Pada strategi ini, kita dapat mengungkap fakta yang tidak kita
      sadari pada saat peristiwa pemicu terjadi. Strategi ini memungkinkanmu
      untuk mundur dan mengamati situasi dari peristiwa yang terjadi. Bukannya
      malah merespon berlebihan, dan berakhir memiliki perasaan mengganggu. Saat
      memanfaatkan strategi ini, kamu akan mampu membedakan kebenaran dari
      peristiwa yang terjadi, dibandingkan mempercai perasaan negatif akibat
      situasi saat itu.
    </p>

    <p class="text__body text__neutral-black">
      Kita akan mempelajarinya dengan kembali memanfaatkan jurnal milik Jane,
      yuk perhatikan langkah detailnya!
    </p>

    <p class="text__body text__neutral-black" style="margin-bottom: 12px">
      Jane menuliskan peristiwa pemicu dan perasaannya seperti ini:
    </p>

    <p class="text__special-body">
      “Aku melihat Ryan kemarin malam dari arah kelas sedang berjalan menuju
      parkiran. Namun dia mengabaikanku dan tidak menegur (A). Aku tersinggung
      (C)”
    </p>

    <img class="img-body" src="img/restrukturisasi/sesi3_materi1_body1.png" />

    <p class="text__body text__neutral-black" style="margin-bottom: 12px">
      Jane menuliskan pikiran negatifnya:
    </p>

    <p class="text__special-body">
      “Pasti dia tidak menganggapku temannya. Aku tidak akan berteriak
      menegurnya, dia pasti berpikir aku berisik dan tidak sopan. Itu akan
      membuatku terlihat konyol (B)”
    </p>

    <p class="text__body text__neutral-black">
      Pola pikir negatif atau distorsi kognitifnya adalah jumping to conclusion,
      hingga mendorong Jane membuat kesimpulan negatif yang tidak berdasarkan
      fakta.
    </p>

    <p class="text__body text__neutral-black" style="margin-bottom: 12px">
      Namun bagaimana jika sesaat peristiwa tersebut terjadi, Jane melaporkan
      fakta yang ia ketahui layaknya reporter?
    </p>

    <p class="text__body text__neutral-black" style="margin-bottom: 12px">
      Pikiran Jane pada peristiwa tersebut mungkin akan seperti ini:
    </p>

    <p class="text__special-body">
      “Kemarin pada malam hari, seorang teman kuliah bergegas melewati saya
      dalam perjalanan menuju parkiran”
    </p>

    <p class="text__body text__neutral-black" style="margin-bottom: 12px">
      Berdasarkan fakta yang dilaporkan, meski Ryan tidak berhenti untuk
      menegur. Namun jelas sekali tidak ada bukti menunjukkan perilaku Ryan,
      disebabkan karena Jane. Justru mungkin saja, Ryan tidak melihat Jane atau
      sedang terburu-buru untuk pulang tepat waktu agar tidak terjebak macet,
      dan berbagai faktor lainnya.
    </p>

    <p class="text__body text__neutral-black">
      Ketika melaporkan fakta, kita akan menyadari perbedaan kebenaran dari
      peristiwa yang terjadi, dan perasaan mengganggu yang terpengaruh oleh
      pikiran negatif. Maka dari itu strategi ini efektif, dan dapat kamu
      manfaatkan untuk terbebas dari perasaan mengganggu akibat pikiran
      negatifmu.
    </p>

    <p class="text__body text__neutral-black">
      Nah, biar kamu makin siap menghadapi pikiran negatifmu, yuk kita pelajari
      strategi yang lain di materi selanjutnya!
    </p>
  </LayoutOne>
</template>

<script>
import LayoutOne from "layouts/LayoutOne.vue";

export default {
  components: { LayoutOne },
  mounted() {
    // enable materi 2
    this.$store.commit("restrukturisasi/setStatusMateri", {
      sesi: "sesi3",
      materiIdx: 1,
      value: true
    });
  }
};
</script>
