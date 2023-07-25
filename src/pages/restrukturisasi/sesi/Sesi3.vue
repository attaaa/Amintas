<template>
  <LayoutOne
    headerImg="img/restrukturisasi/sesi3.png"
    backRoutes="/restrukturisasi"
  >
    <h1 class="text__title-2 text__primary q-ma-none q-mt-md q-mb-sm">
      Sesi 3: Menantang Pikiran
    </h1>
    <p class="text__body text__neutral-black">
      Setelah memahami pengaruh pikiran pada perasaanmu, dan mengenal bagaimana
      bentuk pikiran mengganggu. Pada bagian terakhir ini, kita akan belajar
      bagaimana menghadapinya, aku akan memberitahumu beberapa strategi yang
      dapat membantumu dalam menghadapinya. Mengingat terkadang bagi sebagian
      orang hal itu tidak mudah dilakukan, dan memiliki persiapan tentu akan
      membantu kita, bukan? Makanya, yuk kita pelajari dan terbebas dari
      perasaan tidak nyaman itu!
    </p>

    <h2 class="text__title-3 text__neutral-black" style="margin-bottom: 12px">
      Materi
    </h2>
    <div>
      <div
        class="material-item flex items-center"
        :class="{ 'item-disabled': !statusMateri[0] }"
        @click="
          statusMateri[0] && $router.push('/restrukturisasi/sesi3/materi1')
        "
      >
        <img src="img/restrukturisasi/sesi3_materi1_item.png" />
        <div class="text__headline text__primary">
          <div>Melaporkan Fakta</div>
        </div>
      </div>

      <div
        class="material-item flex items-center"
        :class="{ 'item-disabled': !statusMateri[1] }"
        @click="
          statusMateri[1] && $router.push('/restrukturisasi/sesi3/materi2')
        "
      >
        <img src="img/restrukturisasi/sesi3_materi2_item.png" />
        <div class="text__headline text__primary">
          <div>Menjaga Keseimbangan Pikiran</div>
        </div>
      </div>

      <div
        class="material-item flex items-center"
        :class="{ 'item-disabled': !statusMateri[2] }"
        @click="
          statusMateri[2] && $router.push('/restrukturisasi/sesi3/materi3')
        "
      >
        <img src="img/restrukturisasi/sesi3_materi3_item.png" />
        <div class="text__headline text__primary">
          <div>ABC dan D</div>
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
          statusLatihan[0] && $router.replace('/restrukturisasi/sesi3/latihan1')
        "
      >
        <template v-if="!latihan1Finished && latihan1Form">
          <img src="img/activated_exercise.png" />
        </template>
        <template v-else-if="!latihan1Finished">
          <img src="img/restrukturisasi/sesi3_latihan1_item.png" />
        </template>

        <template v-else>
          <img src="img/finished_exercise.png" />
        </template>
        <div class="text__headline text__primary">
          <div>Bermain Peran: Reporter</div>
        </div>
      </div>

      <div
        class="material-item flex items-center"
        :class="{ 'item-disabled': !statusLatihan[1] }"
        @click="
          statusLatihan[1] && $router.replace('/restrukturisasi/sesi3/latihan2')
        "
      >
        <template v-if="!latihan2Finished && latihan2Form">
          <img src="img/activated_exercise.png" />
        </template>
        <template v-else-if="!latihan2Finished">
          <img src="img/restrukturisasi/sesi3_latihan2_item.png" />
        </template>

        <template v-else>
          <img src="img/finished_exercise.png" />
        </template>
        <div class="text__headline text__primary">
          <div>Menjaga Keseimbangan Pikiran</div>
        </div>
      </div>

      <div
        class="material-item flex items-center"
        :class="{ 'item-disabled': !statusLatihan[2] }"
        @click="
          statusLatihan[2] && $router.replace('/restrukturisasi/sesi3/latihan3')
        "
      >
        <template v-if="!latihan3Finished && latihan3Form">
          <img src="img/activated_exercise.png" />
        </template>
        <template v-else-if="!latihan3Finished">
          <img src="img/restrukturisasi/sesi3_latihan3_item.png" />
        </template>

        <template v-else>
          <img src="img/finished_exercise.png" />
        </template>
        <div class="text__headline text__primary">
          <div>Bermain Peran: Pengacara</div>
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
      return this.$store.state.restrukturisasi.statusMateri.sesi3;
    },
    statusLatihan() {
      return this.$store.state.restrukturisasi.statusLatihanEnable.sesi3;
    },
    latihan1Finished() {
      return this.$store.state.restrukturisasi.statusLatihan.sesi3
        .latihan1Finished;
    },
    latihan1Form() {
      return this.$store.state.restrukturisasi.statusLatihan.sesi3.latihan1Form;
    },

    latihan2Finished() {
      return this.$store.state.restrukturisasi.statusLatihan.sesi3
        .latihan2Finished;
    },
    latihan2Form() {
      return this.$store.state.restrukturisasi.statusLatihan.sesi3.latihan2Form;
    },

    latihan3Finished() {
      return this.$store.state.restrukturisasi.statusLatihan.sesi3
        .latihan3Finished;
    },
    latihan3Form() {
      return this.$store.state.restrukturisasi.statusLatihan.sesi3.latihan3Form;
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
