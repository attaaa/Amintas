<template>
  <div class="container">
    <!-- header -->
    <div class="header-nav">
      <div class="icon q-mr-md" @click="$router.back()">
        <img svg-inline src="assets/icons/general/arrow-left.svg" />
      </div>
      <div class="text__title-4 text__primary">
        Riwayat Strategi
      </div>
    </div>

    <!-- content -->
    <template v-if="strategiDataList && strategiDataList.length === 0">
      <div class="content">
        <div style="padding: 58px 24px;">
          <!-- illustration -->
          <div class="text-center" style="margin-bottom: 24px">
            <img src="assets/img/empty_nothing.png" />
          </div>

          <div
            class="text__title-3 text__primary text-center"
            style="margin-bottom: 12px"
          >
            Riwayatmu masih kosong
          </div>
          <div
            class="text__body text__neutral-dark-grey text-center"
            style="margin-bottom: 24px"
          >
            Belum ada strategi selesai, mulai hadapi pemicu cemas dengan
            strategimu
          </div>
        </div>
      </div>
    </template>
    <template v-else>
      <StrategiItemList />
    </template>
  </div>
</template>

<script>
import StrategiItemList from "src/components/strategi/StrategiItemList";

export default {
  components: { StrategiItemList },
  computed: {
    strategiDataList() {
      return this.$store.state.strategi.strategiHistory;
    }
  }
};
</script>

<style lang="scss" scoped>
.header-nav {
  padding: 16px;

  display: flex;
  align-items: center;

  box-shadow: 0px 2px 4px -1px rgba(48, 48, 48, 0.08);

  .icon {
    display: grid;
    place-items: center;
  }
}
</style>
