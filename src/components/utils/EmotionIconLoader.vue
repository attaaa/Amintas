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
    src="assets/icons/emotion/Percaya Diri.svg"
  />
  <img
    v-else-if="iconName === 'bersemangat'"
    svg-inline
    src="assets/icons/emotion/Bersemangat.svg"
  />
  <img
    v-else-if="iconName === 'terpenuhi'"
    svg-inline
    src="assets/icons/emotion/Terpenuhi.svg"
  />
  <img
    v-else-if="iconName === 'bersyukur'"
    svg-inline
    src="assets/icons/emotion/Bersyukur.svg"
  />
  <img
    v-else-if="iconName === 'senang'"
    svg-inline
    src="assets/icons/emotion/Senang.svg"
  />
  <img
    v-else-if="iconName === 'terinspirasi'"
    svg-inline
    src="assets/icons/emotion/Terinspirasi.svg"
  />
  <img
    v-else-if="iconName === 'dicintai'"
    svg-inline
    src="assets/icons/emotion/Dicintai.svg"
  />
  <img
    v-else-if="iconName === 'termotivasi'"
    svg-inline
    src="assets/icons/emotion/Termotivasi.svg"
  />
  <img
    v-else-if="iconName === 'optimis'"
    svg-inline
    src="assets/icons/emotion/Optimis.svg"
  />
  <img
    v-else-if="iconName === 'tenang'"
    svg-inline
    src="assets/icons/emotion/Tenang.svg"
  />
  <img
    v-else-if="iconName === 'bangga'"
    svg-inline
    src="assets/icons/emotion/Bangga.svg"
  />
  <img
    v-else-if="iconName === 'santai'"
    svg-inline
    src="assets/icons/emotion/Santai.svg"
  />
  <img
    v-else-if="iconName === 'lega'"
    svg-inline
    src="assets/icons/emotion/Lega.svg"
  />
  <img
    v-else-if="iconName === 'puas'"
    svg-inline
    src="assets/icons/emotion/Puas.svg"
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
