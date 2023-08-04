<template>
  <img
    v-if="iconName === 'marah'"
    svg-inline
    src="assets/icons/emotion/angry.svg"
  />
  <img
    v-else-if="iconName === 'kecewa'"
    svg-inline
    src="assets/icons/emotion/dissapointed.svg"
  />
  <img
    v-else-if="iconName === 'malu'"
    svg-inline
    src="assets/icons/emotion/embrassed.svg"
  />
  <img
    v-else-if="iconName === 'hampa'"
    svg-inline
    src="assets/icons/emotion/empty.svg"
  />
  <img
    v-else-if="iconName === 'frustasi'"
    svg-inline
    src="assets/icons/emotion/frustated.svg"
  />
  <img
    v-else-if="iconName === 'menyesal'"
    svg-inline
    src="assets/icons/emotion/guilty.svg"
  />
  <img
    v-else-if="iconName === 'putus asa'"
    svg-inline
    src="assets/icons/emotion/hopeless.svg"
  />
  <img
    v-else-if="iconName === 'kesepian'"
    svg-inline
    src="assets/icons/emotion/lonely.svg"
  />
  <img
    v-else-if="iconName === 'gugup'"
    svg-inline
    src="assets/icons/emotion/nervous.svg"
  />
  <img
    v-else-if="iconName === 'kewalahan'"
    svg-inline
    src="assets/icons/emotion/overwhelmed.svg"
  />
  <img
    v-else-if="iconName === 'sedih'"
    svg-inline
    src="assets/icons/emotion/sad.svg"
  />
  <img
    v-else-if="iconName === 'takut'"
    svg-inline
    src="assets/icons/emotion/afraid.svg"
  />
  <img
    v-else-if="iconName === 'stress'"
    svg-inline
    src="assets/icons/emotion/stressed.svg"
  />
  <img
    v-else-if="iconName === 'khawatir'"
    svg-inline
    src="assets/icons/emotion/worried.svg"
  />

  <!-- Positif -->
  <img
    v-else-if="iconName === 'percaya diri'"
    svg-inline
    src="assets/icons/emotion/percaya-diri.svg"
  />
  <img
    v-else-if="iconName === 'bersemangat'"
    svg-inline
    src="assets/icons/emotion/bersemangat.svg"
  />
  <img
    v-else-if="iconName === 'terpenuhi'"
    svg-inline
    src="assets/icons/emotion/terpenuhi.svg"
  />
  <img
    v-else-if="iconName === 'bersyukur'"
    svg-inline
    src="assets/icons/emotion/bersyukur.svg"
  />
  <img
    v-else-if="iconName === 'senang'"
    svg-inline
    src="assets/icons/emotion/senang.svg"
  />
  <img
    v-else-if="iconName === 'terinspirasi'"
    svg-inline
    src="assets/icons/emotion/terinspirasi.svg"
  />
  <img
    v-else-if="iconName === 'dicintai'"
    svg-inline
    src="assets/icons/emotion/dicintai.svg"
  />
  <img
    v-else-if="iconName === 'termotivasi'"
    svg-inline
    src="assets/icons/emotion/termotivasi.svg"
  />
  <img
    v-else-if="iconName === 'optimis'"
    svg-inline
    src="assets/icons/emotion/optimis.svg"
  />
  <img
    v-else-if="iconName === 'tenang'"
    svg-inline
    src="assets/icons/emotion/tenang.svg"
  />
  <img
    v-else-if="iconName === 'bangga'"
    svg-inline
    src="assets/icons/emotion/bangga.svg"
  />
  <img
    v-else-if="iconName === 'santai'"
    svg-inline
    src="assets/icons/emotion/santai.svg"
  />
  <img
    v-else-if="iconName === 'lega'"
    svg-inline
    src="assets/icons/emotion/lega.svg"
  />
  <img
    v-else-if="iconName === 'puas'"
    svg-inline
    src="assets/icons/emotion/puas.svg"
  />
</template>

<script>
export default {
  name: "EmotionIconLoader",
  props: {
    iconName: String
  }
};
</script>
