<template>
  <div class="search-page">
    <div style="margin-bottom: 16px;">
      <img
        svg-inline
        src="assets/icons/general/arrow-left.svg"
        style="width: 24px; fill: #5C7CCD;"
        @click="goBack()"
      />
    </div>
    <SearchField style="margin-bottom: 24px;" :auto-focus="true" />
    <div class="text__title-4 text__neutral" style="margin-bottom: 8px">
      Sesuai mood kamu
    </div>
    <div class="flex">
      <ButtonPicker
        style="margin-right: 8px; margin-bottom: 8px"
        mood-state="sangat buruk"
      />
      <ButtonPicker
        style="margin-right: 8px; margin-bottom: 8px"
        mood-state="buruk"
      />
      <ButtonPicker
        style="margin-right: 8px; margin-bottom: 8px"
        mood-state="netral"
      />
      <ButtonPicker
        style="margin-right: 8px; margin-bottom: 8px"
        mood-state="baik"
      />
      <ButtonPicker
        style="margin-right: 8px; margin-bottom: 8px"
        mood-state="sangat baik"
      />
    </div>
  </div>
</template>

<style lang="scss">
.search-page {
  padding: 22px 16px;
  height: 100vh;
  box-sizing: border-box;
}
</style>

<script>
import SearchField from "components/inputs/SearchField";
import ButtonPicker from "components/inputs/ButtonPicker";

export default {
  name: "Search",
  components: { SearchField, ButtonPicker },
  methods: {
    goBack() {
      this.$router.back();
    }
  }
};
</script>
