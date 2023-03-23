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
</template>

<script>
export default {
  name: "EmotionIconLoader",
  props: {
    iconName: String
  }
};
</script>
