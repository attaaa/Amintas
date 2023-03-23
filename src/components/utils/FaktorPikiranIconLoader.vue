<template>
  <img
    v-if="iconName === 'diri sendiri'"
    svg-inline
    :src="`img/restrukturisasi/factor/diri-sendiri-${size}.svg`"
  />
  <img
    v-else-if="iconName === 'masa depan'"
    svg-inline
    :src="`img/restrukturisasi/factor/masa-depan-${size}.svg`"
  />
  <img
    v-else-if="iconName === 'situasi'"
    svg-inline
    :src="`img/restrukturisasi/factor/situasi-${size}.svg`"
  />
</template>

<script>
export default {
  name: "FaktorPikrianIconLoader",
  props: {
    iconName: String,
    // 18 | 24
    size: {
      type: Number,
      default: 18
    }
  }
};
</script>
