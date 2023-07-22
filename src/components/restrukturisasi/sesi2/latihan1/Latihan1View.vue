<template>
  <div>
    <!--  -->
    <div class="group q-mb-md">
      <!--


      -->
      <div class="custom-header">
        <h2 class="text__title-3 text__neutral-black">Catatan 1</h2>
        <div class="custom-header--line"></div>
      </div>

      <div style="margin-bottom: 16px;">
        <div class="text__title-4" style="margin-bottom: 12px">
          Peristiwa
        </div>
        <div class="content-detail">
          <div class="text__body">
            {{ latihanData.catatan1.pikiran }}
          </div>
        </div>
      </div>

      <div style="margin-bottom: 16px;">
        <div class="text__title-4" style="margin-bottom: 12px">
          Pikiran
        </div>
        <div class="content-detail">
          <div class="text__body">
            {{ latihanData.catatan1.pikiran }}
          </div>
        </div>
      </div>

      <div style="margin-bottom: 16px;">
        <div class="text__title-4" style="margin-bottom: 12px">
          Faktor Pikiran
        </div>
        <div>
          <div class="text__body faktor-pikiran__container">
            <template v-for="iValue in latihanData.catatan1.faktorPikiran">
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
      <!--


       -->
    </div>

    <div class="group q-mb-xl">
      <!--


      -->
      <div class="custom-header">
        <h2 class="text__title-3 text__neutral-black">Catatan 2</h2>
        <div class="custom-header--line"></div>
      </div>

      <div style="margin-bottom: 16px;">
        <div class="text__title-4" style="margin-bottom: 12px">
          Peristiwa
        </div>
        <div class="content-detail">
          <div class="text__body">
            {{ latihanData.catatan2.pikiran }}
          </div>
        </div>
      </div>

      <div style="margin-bottom: 16px;">
        <div class="text__title-4" style="margin-bottom: 12px">
          Pikiran
        </div>
        <div class="content-detail">
          <div class="text__body">
            {{ latihanData.catatan2.pikiran }}
          </div>
        </div>
      </div>

      <div style="margin-bottom: 16px;">
        <div class="text__title-4" style="margin-bottom: 12px">
          Faktor Pikiran
        </div>
        <div>
          <div class="text__body faktor-pikiran__container">
            <template v-for="iValue in latihanData.catatan2.faktorPikiran">
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
      <!--


       -->
    </div>

    <div class="group q-mb-xl">
      <!--


      -->
      <div class="custom-header">
        <h2 class="text__title-3 text__neutral-black">Catatan 3</h2>
        <div class="custom-header--line"></div>
      </div>

      <div style="margin-bottom: 16px;">
        <div class="text__title-4" style="margin-bottom: 12px">
          Peristiwa
        </div>
        <div class="content-detail">
          <div class="text__body">
            {{ latihanData.catatan3.pikiran }}
          </div>
        </div>
      </div>

      <div style="margin-bottom: 16px;">
        <div class="text__title-4" style="margin-bottom: 12px">
          Pikiran
        </div>
        <div class="content-detail">
          <div class="text__body">
            {{ latihanData.catatan3.pikiran }}
          </div>
        </div>
      </div>

      <div style="margin-bottom: 16px;">
        <div class="text__title-4" style="margin-bottom: 12px">
          Faktor Pikiran
        </div>
        <div>
          <div class="text__body faktor-pikiran__container">
            <template v-for="iValue in latihanData.catatan3.faktorPikiran">
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
      return this.$store.state.restrukturisasi.sesi1Latihan2;
    }
  }
};
</script>

<style lang="scss" scoped>
.custom-header {
  display: flex;
  gap: 12px;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 12px;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }

  div {
    background-color: #ffcb4d;
    height: 1px;
    flex-basis: 0;
    flex-grow: 1;
  }
}

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
