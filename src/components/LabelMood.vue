<template>
  <div class="label-mood flex items-center">
    <img
      svg-inline
      class="label-mood--img"
      src="assets/icons/label-mood--angry.svg"
      v-if="useImg && labelText.toLowerCase() === 'marah'"
    />
    <img
      svg-inline
      class="label-mood--img"
      src="assets/icons/label-mood--embrassed.svg"
      v-if="useImg && labelText.toLowerCase() === 'malu'"
    />
    <img
      svg-inline
      class="label-mood--img"
      src="assets/icons/label-mood--dissapointed.svg"
      v-if="useImg && labelText.toLowerCase() === 'kecewa'"
    />
    <img
      svg-inline
      class="label-mood--img"
      src="assets/icons/label-mood--empty.svg"
      v-if="useImg && labelText.toLowerCase() === 'hampa'"
    />
    <img
      svg-inline
      class="label-mood--img"
      src="assets/icons/label-mood--frustated.svg"
      v-if="useImg && labelText.toLowerCase() === 'frustasi'"
    />
    <img
      svg-inline
      class="label-mood--img"
      src="assets/icons/label-mood--guilty.svg"
      v-if="useImg && labelText.toLowerCase() === 'menyesal'"
    />
    <img
      svg-inline
      class="label-mood--img"
      src="assets/icons/label-mood--hopeless.svg"
      v-if="useImg && labelText.toLowerCase() === 'putus asa'"
    />
    <img
      svg-inline
      class="label-mood--img"
      src="assets/icons/label-mood--lonely.svg"
      v-if="useImg && labelText.toLowerCase() === 'kesepian'"
    />
    <img
      svg-inline
      class="label-mood--img"
      src="assets/icons/label-mood--nervous.svg"
      v-if="useImg && labelText.toLowerCase() === 'gugup'"
    />
    <img
      svg-inline
      class="label-mood--img"
      src="assets/icons/label-mood--overwhelmed.svg"
      v-if="useImg && labelText.toLowerCase() === 'kewalahan'"
    />
    <img
      svg-inline
      class="label-mood--img"
      src="assets/icons/label-mood--sad.svg"
      v-if="useImg && labelText.toLowerCase() === 'sedih'"
    />
    <img
      svg-inline
      class="label-mood--img"
      src="assets/icons/label-mood--afraid.svg"
      v-if="useImg && labelText.toLowerCase() === 'takut'"
    />
    <img
      svg-inline
      class="label-mood--img"
      src="assets/icons/label-mood--stressed.svg"
      v-if="useImg && labelText.toLowerCase() === 'stress'"
    />
    <img
      svg-inline
      class="label-mood--img"
      src="assets/icons/label-mood--stressed.svg"
      v-if="useImg && labelText.toLowerCase() === 'stress'"
    />
    <img
      svg-inline
      class="label-mood--img"
      src="assets/icons/label-mood--worried.svg"
      v-if="useImg && labelText.toLowerCase() === 'khawatir'"
    />
    <span class="label-mood--text text__footnote text__primary">{{
      labelText
    }}</span>
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
