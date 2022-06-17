<template>
  <div style="padding: 16px">
    <div class="text__title-1 text__primary" style="margin-bottom: 56px">
      Strategi
    </div>
    <div class="text-center" style="margin-bottom: 24px">
      <img src="/assets/img/empty_nothing.png" />
    </div>
    <div
      class="text__title-3 text__primary text-center"
      style="margin-bottom: 12px"
    >
      Strategimu belum ada nih
    </div>
    <div
      class="text__body text__neutral-dark-grey text-center"
      style="margin-bottom: 24px"
    >
      Mulai buat strategimu sendiri untuk lebih efektif hadapi pemicu cemas
    </div>
    <div class="flex justify-center">
      <button
        class="btn__large btn__accent"
        @click="() => this.$router.push('/strategi/input-category')"
      >
        Buat Strategi
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Strategi"
};
</script>

<style></style>
