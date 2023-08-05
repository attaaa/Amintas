<template>
  <div>
    <div style="margin-bottom: 16px;">
      <div class="text__title-4" style="margin-bottom: 12px">
        Pikiran
      </div>
      <div class="content-detail">
        <div class="text__body">
          {{ latihanData.pikiran }}
        </div>
      </div>
    </div>

    <div style="margin-bottom: 16px;">
      <div class="text__title-4" style="margin-bottom: 12px">
        Faktor Pikiran
      </div>
      <div>
        <div class="text__body faktor-pikiran__container">
          <template v-for="iValue in latihanData.selectedOptionsIdx">
            <Tray :key="iValue" variant="normal">
              <FaktorPikiranIconLoaderVue :icon-name="options[iValue].icon" />
              <div class="option-item--text text__title-5 text-primary">
                {{ options[iValue].name }}
              </div>
            </Tray>
          </template>
        </div>
      </div>
    </div>

    <div
      class="text__title-4 text__alert text-center"
      style="margin-top: 40px;"
      @click="ulangLatihan()"
    >
      Ulang Latihan
    </div>
  </div>
</template>

<script>
import Tray from "src/components/Tray";
import FaktorPikiranIconLoaderVue from "src/components/utils/FaktorPikiranIconLoader";

const faktorPikiranList = [
  {
    id: 0,
    icon: "diri sendiri",
    name: "Diri sendiri"
  },
  {
    id: 1,
    icon: "masa depan",
    name: "Masa depan"
  },
  {
    id: 2,
    icon: "situasi",
    name: "Situasi"
  }
];

export default {
  components: { Tray, FaktorPikiranIconLoaderVue },

  data: function() {
    return {
      options: faktorPikiranList
    };
  },

  computed: {
    latihanData() {
      return this.$store.state.restrukturisasi.sesi1Latihan1;
    }
  },

  methods: {
    ulangLatihan() {
      this.$store.commit("restrukturisasi/setStatusLatihan", {
        sesi: "sesi1",
        latihanName: "latihan1Form",
        value: true
      });

      this.$store.commit("restrukturisasi/setLatihanAktif", {
        active: true,
        name: "Identifikasi Pikiran Negatif",
        path: "/restrukturisasi/sesi1"
      });

      //
      // clear data
      this.$store.commit("restrukturisasi/setLatihanData", {
        sesiLatihan: "sesi1Latihan1",
        data: {
          pikiran: "",
          selectedOptionsIdx: []
        }
      });

      // reset finish status
      this.$store.commit("restrukturisasi/resetFinishedLatihan", {
        sesi: "sesi1",
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

.faktor-pikiran__container {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}
</style>
