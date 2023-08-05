<template>
  <div>
    <!--  -->
    <div class="group q-mb-md">
      <!--
        pikiran 1
      -->
      <div class="informasi-title">
        <span class="text__title-3">Pikiran 1</span>
        <div class="informasi-title--decor" />
      </div>

      <p class="text__special-body text-center">
        “Mendapatkan beasiswa itu biasa saja (A), aku hanya beruntung (B)”
      </p>

      <div class="q-mb-md ">
        <label class="text__title-4 text__neutral-black">
          Pernyataan Positif
        </label>
        <div class="content-detail">
          <div class="text__body">
            {{ latihanData.pikiran1.pernyataanPositif }}
          </div>
        </div>
      </div>
    </div>

    <div class="group q-mb-xl">
      <!--
        pikiran 2
      -->
      <div class="informasi-title">
        <span class="text__title-3">Pikiran 2</span>
        <div class="informasi-title--decor" />
      </div>

      <p class="text__special-body text-center">
        “Temanku terlambat dari waktu janjian (A). Harusnya dia datang lebih
        cepat biar kami tidak buang-buang waktu (B)”
      </p>

      <div class="q-mb-md ">
        <label class="text__title-4 text__neutral-black">
          Pernyataan Positif
        </label>
        <div class="content-detail">
          <div class="text__body">
            {{ latihanData.pikiran2.pernyataanPositif }}
          </div>
        </div>
      </div>
    </div>

    <div class="group q-mb-xl">
      <!--
        pikiran 3
      -->
      <div class="informasi-title">
        <span class="text__title-3">Pikiran 3</span>
        <div class="informasi-title--decor" />
      </div>

      <p class="text__special-body text-center">
        “Aku terlambat mengumpulkan tugas dan dosenku tidak menerima tugasku
        (A), Aku memang orang gagal (B)”
      </p>

      <div class="q-mb-md ">
        <label class="text__title-4 text__neutral-black">
          Pernyataan Positif
        </label>
        <div class="content-detail">
          <div class="text__body">
            {{ latihanData.pikiran3.pernyataanPositif }}
          </div>
        </div>
      </div>
    </div>

    <div
      class="text__title-4 text__alert text-center"
      style="margin-top: 40px;"
    >
      Ulang Latihan
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    latihanData() {
      return this.$store.state.restrukturisasi.sesi3Latihan2;
    }
  },

  methods: {
    ulangLatihan() {
      this.$store.commit("restrukturisasi/setStatusLatihan", {
        sesi: "sesi3",
        latihanName: "latihan2Form",
        value: true
      });

      this.$store.commit("restrukturisasi/setLatihanAktif", {
        active: true,
        name: "Menjaga Keseimbangan Pikiran",
        path: "/restrukturisasi/sesi3"
      });

      //
      // clear data
      this.$store.commit("restrukturisasi/setLatihanData", {
        sesiLatihan: "sesi3Latihan2",
        data: {
          pikiran1: {
            pernyataanPositif: ""
          },
          pikiran2: {
            pernyataanPositif: ""
          },
          pikiran3: {
            pernyataanPositif: ""
          }
        }
      });

      // reset finish status
      this.$store.commit("restrukturisasi/resetFinishedLatihan", {
        sesi: "sesi3",
        currSesiLatihanFinished: "latihan2Finished"
      });

      window.location.reload();
    }
  }
};
</script>

<style lang="scss" scoped>
.content-detail {
  margin-top: 8px;
  padding: 16px;
  background-color: #f2f6ff;
  border-radius: 8px;
}
</style>
