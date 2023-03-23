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
      <div class="content-detail">
        <div class="text__body">
          <template v-for="iValue in latihanData.selectedOptionsIdx">
            <Tray :key="iValue">
              <FaktorPikiranIconLoaderVue :icon-name="options[iValue].icon" />
              <div class="option-item--text text__title-5 text-white">
                {{ options[iValue].name }}
              </div>
            </Tray>
          </template>
        </div>
      </div>
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
