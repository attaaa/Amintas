<template>
  <LayoutOne
    headerImg="img/restrukturisasi/sesi2.png"
    backRoutes="/restrukturisasi"
  >
    <h1 class="text__title-2 text__primary q-ma-none q-mt-md q-mb-sm">
      Sesi 2: Pola Pikir Negatif
    </h1>
    <p class="text__body text__neutral-black">
      Pada bagian sebelumnya, kita sudah belajar bagaimana pikiran mempengaruhi
      perasaan dan latar belakang pikiran negatif. Untuk jadi lebih baik,
      tentunya kita tidak berhenti di situ. Setelah memahami perasaan dan faktor
      pikiran negatif, sekarang kita akan mencari tau tentang bagaimana bentuk
      pikiran mengganggu yang mempengaruhi perasaan kita. Lalu
      mengidentifikasinya, agar kita paham bagaimana bentuk-bentuk pikiran itu
      mempengaruhi beragam perasaan tidak nyaman yang muncul pada diri kita.
      Mari kita memahaminya melalui materi dan latihan di sini!
    </p>

    <h2 class="text__title-3 text__neutral-black" style="margin-bottom: 12px">
      Materi
    </h2>
    <div>
      <div
        class="material-item flex items-center"
        :class="{ 'item-disabled': !statusMateri[0] }"
        @click="
          statusMateri[0] && $router.push('/restrukturisasi/sesi2/materi1')
        "
      >
        <img src="img/restrukturisasi/sesi2_materi1_item.png" />
        <div class="text__headline text__primary">
          <div>Jenis Distorsi Kognitif</div>
        </div>
      </div>
      <div
        class="material-item flex items-center"
        :class="{ 'item-disabled': !statusMateri[1] }"
        @click="
          statusMateri[1] && $router.push('/restrukturisasi/sesi2/materi2')
        "
      >
        <img src="img/restrukturisasi/sesi2_materi2_item.png" />
        <div class="text__headline text__primary">
          <div>Mengidentifikasi Pola Pikir Negatif</div>
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
      <div
        class="material-item flex items-center"
        :class="{ 'item-disabled': !statusLatihan[0] }"
        @click="
          statusLatihan[0] && $router.replace('/restrukturisasi/sesi2/latihan1')
        "
      >
        <template v-if="!latihan1Finished && latihan1Form">
          <img src="img/activated_exercise.png" />
        </template>
        <template v-else-if="!latihan1Finished">
          <img src="img/restrukturisasi/sesi2_latihan1_item.png" />
        </template>

        <template v-else>
          <img src="img/finished_exercise.png" />
        </template>
        <div class="text__headline text__primary">
          <div>Catatan Pola Pikir Negatif</div>
        </div>
      </div>
    </div>
  </LayoutOne>
</template>

<script>
import LayoutOne from "layouts/LayoutOne.vue";

export default {
  components: { LayoutOne },
  computed: {
    statusMateri() {
      return this.$store.state.restrukturisasi.statusMateri.sesi2;
    },
    statusLatihan() {
      return this.$store.state.restrukturisasi.statusLatihanEnable.sesi2;
    },
    latihan1Finished() {
      return this.$store.state.restrukturisasi.statusLatihan.sesi2
        .latihan1Finished;
    },
    latihan1Form() {
      return this.$store.state.restrukturisasi.statusLatihan.sesi2.latihan1Form;
    }
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
