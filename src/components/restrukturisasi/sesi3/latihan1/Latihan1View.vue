<template>
  <div>
    <!--  -->
    <div class="group q-mb-md">
      <!--


      -->
      <div class="informasi-title">
        <span class="text__title-3">Catatan</span>
        <div class="informasi-title--decor" />
      </div>

      <div style="margin-bottom: 16px;">
        <div class="text__title-4" style="margin-bottom: 12px">
          Peristiwa dan Perasaan
        </div>
        <div class="content-detail">
          <div class="text__body">
            {{ latihanData.catatan.peristiwa }}
          </div>
        </div>
      </div>

      <div style="margin-bottom: 16px;">
        <div class="text__title-4" style="margin-bottom: 12px">
          Pikiran Negatif
        </div>
        <div class="content-detail">
          <div class="text__body">
            {{ latihanData.catatan.pikiranNegatif }}
          </div>
        </div>
      </div>

      <div style="margin-bottom: 16px;">
        <div class="text__title-4" style="margin-bottom: 12px">
          Fakta
        </div>
        <div class="content-detail">
          <div class="text__body">
            {{ latihanData.catatan.fakta }}
          </div>
        </div>
      </div>

      <div style="margin-bottom: 16px;">
        <div class="text__title-4" style="margin-bottom: 12px">
          Kesimpulan
        </div>
        <div class="content-detail">
          <div class="text__body">
            {{ latihanData.catatan.kesimpulan }}
          </div>
        </div>
      </div>
      <!--


       -->
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
      return this.$store.state.restrukturisasi.sesi3Latihan1;
    }
  },

  methods: {
    ulangLatihan() {
      this.$store.commit("restrukturisasi/setStatusLatihan", {
        sesi: "sesi3",
        latihanName: "latihan1Form",
        value: true
      });

      this.$store.commit("restrukturisasi/setLatihanAktif", {
        active: true,
        name: "Bermain Peran: Reporter",
        path: "/restrukturisasi/sesi3"
      });

      //
      // clear data
      this.$store.commit("restrukturisasi/setLatihanData", {
        sesiLatihan: "sesi3Latihan1",
        data: {
          catatan: {
            peristiwa: "",
            pikiranNegatif: "",
            fakta: "",
            kesimpulan: ""
          }
        }
      });

      // reset finish status
      this.$store.commit("restrukturisasi/resetFinishedLatihan", {
        sesi: "sesi3",
        currSesiLatihanFinished: "latihan1Finished"
      });

      window.location.reload();
    }
  }
};
</script>

<style lang="scss" scoped>
.content-detail {
  padding: 16px;
  background-color: #f2f6ff;
  border-radius: 8px;
}
</style>
