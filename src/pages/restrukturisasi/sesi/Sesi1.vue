<template>
  <LayoutOne headerImg="/img/restrukturisasi/intro_detail.png">
    <h1 class="text__title-2 text__primary q-ma-none q-mt-md q-mb-sm">
      Sesi 1: Pikiran dan Perasaan
    </h1>
    <p class="text__body text__neutral-black">
      Selayaknya manusia normal, aku dan kamu seringkali sulit mengungkapkan
      dengan tepat apa yang sebenarnya kita rasakan. Tentu itu membingungkan,
      padahal ada banyak diksi yang dapat menggambarkan setiap perasaan dan
      emosi kita. Seperti kata tegang, kesal, sedih, ataupun frustasi yang dapat
      menunjukkan perasaan buruk yang kita alami. Lalu ada juga kata seperti
      senang, puas, bersemangat, ataupun gembira yang menggambarkan perasaan
      bahagia. Tapi tenang, aku akan menjelaskan semuanya untukmu melalui materi
      dan latihan yang ada di sini. Yuk kita mulai pelajari perasaan kita!
    </p>

    <h2 class="text__title-3 text__neutral-black" style="margin-bottom: 12px">
      Materi
    </h2>
    <div>
      <div
        class="material-item flex items-center"
        @click="$router.push('/restrukturisasi/sesi1/materi1')"
      >
        <img src="/img/restrukturisasi/sesi1_materi1_ico.png" />
        <div class="text__headline text__primary">
          <div>Tentang Pikiran dan Perasaan</div>
        </div>
      </div>
      <div
        class="material-item flex items-center"
        :class="{ 'item-disabled': !statusMateri[0] }"
        @click="
          statusMateri[0] && $router.push('/restrukturisasi/sesi1/materi2')
        "
      >
        <img src="/img/restrukturisasi/sesi1_materi2_ico.png" />
        <div class="text__headline text__primary">
          <div>Menghubungkan Perasaan dengan Pikiran</div>
        </div>
      </div>
      <div
        class="material-item flex items-center"
        :class="{ 'item-disabled': !statusMateri[1] }"
        @click="
          statusMateri[1] && $router.push('/restrukturisasi/sesi1/materi3')
        "
      >
        <img src="/img/restrukturisasi/sesi1_materi3_ico.png" />
        <div class="text__headline text__primary">
          <div>Faktor Pikiran Negatif</div>
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
        :class="{ 'item-disabled': !statusLatihan1 }"
        @click="
          statusLatihan1 && $router.push('/restrukturisasi/sesi1/latihan1')
        "
      >
        <template v-if="!latihan1Finished && latihan1Form">
          <img src="/img/activated_exercise.png" />
        </template>
        <template v-else-if="!latihan1Finished">
          <img src="/img/restrukturisasi/sesi1_latihan1.png" />
        </template>

        <template v-else>
          <img src="/img/finished_exercise.png" />
        </template>
        <div class="text__headline text__primary">
          <div>Identifikasi Pikiran Negatif</div>
        </div>
      </div>
      <div
        class="material-item flex items-center"
        :class="{ 'item-disabled': !statusLatihan2 }"
        @click="
          statusLatihan2 && $router.push('/restrukturisasi/sesi1/latihan2')
        "
      >
        <template v-if="!latihan2Finished && latihan2Form">
          <img src="/img/activated_exercise.png" />
        </template>
        <template v-else-if="latihan2Finished">
          <img src="/img/restrukturisasi/sesi1_latihan2.png" />
        </template>
        <template v-else>
          <img src="/img/finished_exercise.png" />
        </template>

        <div class="text__headline text__primary">
          <div>Catatan Pikiran Negatif</div>
        </div>
      </div>
    </div>
  </LayoutOne>
</template>

<script>
import LayoutOne from "../../../layouts/LayoutOne.vue";

export default {
  components: { LayoutOne },
  computed: {
    statusMateri() {
      return this.$store.state.restrukturisasi.statusMateri.sesi1;
    },
    statusLatihan1() {
      const statusMateri = this.$store.state.restrukturisasi.statusMateri.sesi1;
      return statusMateri.every(Boolean);
    },
    statusLatihan2() {
      return this.$store.state.restrukturisasi.statusLatihan.sesi1.latihan2;
    },
    latihan1Finished() {
      return this.$store.state.restrukturisasi.statusLatihan.sesi1
        .latihan1Finished;
    },
    latihan2Finished() {
      return this.$store.state.restrukturisasi.statusLatihan.sesi1
        .latihan2Finished;
    },
    latihan1Form() {
      return this.$store.state.restrukturisasi.statusLatihan.sesi1.latihan1Form;
    },
    latihan2Form() {
      return this.$store.state.restrukturisasi.statusLatihan.sesi1.latihan2Form;
    }
  }
  // mounted() {
  //   this.$store.commit("restrukturisasi/setStatusSesi", "sesi2");
  // }
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
