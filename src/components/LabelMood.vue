<template>
  <div class="label-mood flex items-center">
    <img
      svg-inline
      class="label-mood--icon"
      src="assets/icons/emotion/angry.svg"
      v-if="useImg && labelText.toLowerCase() === 'marah'"
    />
    <img
      svg-inline
      class="label-mood--icon"
      src="assets/icons/emotion/embrassed.svg"
      v-if="useImg && labelText.toLowerCase() === 'malu'"
    />
    <img
      svg-inline
      class="label-mood--icon"
      src="assets/icons/emotion/dissapointed.svg"
      v-if="useImg && labelText.toLowerCase() === 'kecewa'"
    />
    <img
      svg-inline
      class="label-mood--icon"
      src="assets/icons/emotion/empty.svg"
      v-if="useImg && labelText.toLowerCase() === 'hampa'"
    />
    <img
      svg-inline
      class="label-mood--icon"
      src="assets/icons/emotion/frustated.svg"
      v-if="useImg && labelText.toLowerCase() === 'frustasi'"
    />
    <img
      svg-inline
      class="label-mood--icon"
      src="assets/icons/emotion/guilty.svg"
      v-if="useImg && labelText.toLowerCase() === 'menyesal'"
    />
    <img
      svg-inline
      class="label-mood--icon"
      src="assets/icons/emotion/hopeless.svg"
      v-if="useImg && labelText.toLowerCase() === 'putus asa'"
    />
    <img
      svg-inline
      class="label-mood--icon"
      src="assets/icons/emotion/lonely.svg"
      v-if="useImg && labelText.toLowerCase() === 'kesepian'"
    />
    <img
      svg-inline
      class="label-mood--icon"
      src="assets/icons/emotion/nervous.svg"
      v-if="useImg && labelText.toLowerCase() === 'gugup'"
    />
    <img
      svg-inline
      class="label-mood--icon"
      src="assets/icons/emotion/overwhelmed.svg"
      v-if="useImg && labelText.toLowerCase() === 'kewalahan'"
    />
    <img
      svg-inline
      class="label-mood--icon"
      src="assets/icons/emotion/sad.svg"
      v-if="useImg && labelText.toLowerCase() === 'sedih'"
    />
    <img
      svg-inline
      class="label-mood--icon"
      src="assets/icons/emotion/afraid.svg"
      v-if="useImg && labelText.toLowerCase() === 'takut'"
    />
    <img
      svg-inline
      class="label-mood--icon"
      src="assets/icons/emotion/stressed.svg"
      v-if="useImg && labelText.toLowerCase() === 'stress'"
    />
    <img
      svg-inline
      class="label-mood--icon"
      src="assets/icons/emotion/worried.svg"
      v-if="useImg && labelText.toLowerCase() === 'khawatir'"
    />
    <span class="text text__footnote text__primary">{{ labelText }}</span>
  </div>
</template>

<style lang="scss">
@import url("LabelMood.scss");
</style>

<script>
export default {
  name: "LabelMood",
  props: {
    useImgState: {
      type: Boolean,
      default: true
    },
    labelText: String
  },
  data() {
    return {
      useImg: this.useImgState
    };
  }
};
</script>
