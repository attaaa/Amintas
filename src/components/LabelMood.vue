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
    <!-- positif -->
    <img
      svg-inline
      class="label-mood--icon"
      src="assets/icons/emotion/percaya-diri.svg"
      v-if="useImg && labelText.toLowerCase() === 'percaya diri'"
    />
    <img
      svg-inline
      class="label-mood--icon"
      src="assets/icons/emotion/bersemangat.svg"
      v-if="useImg && labelText.toLowerCase() === 'bersemangat'"
    />
    <img
      svg-inline
      class="label-mood--icon"
      src="assets/icons/emotion/terpenuhi.svg"
      v-if="useImg && labelText.toLowerCase() === 'terpenuhi'"
    />
    <img
      svg-inline
      class="label-mood--icon"
      src="assets/icons/emotion/bersyukur.svg"
      v-if="useImg && labelText.toLowerCase() === 'bersyukur'"
    />
    <img
      svg-inline
      class="label-mood--icon"
      src="assets/icons/emotion/tenang.svg"
      v-if="useImg && labelText.toLowerCase() === 'tenang'"
    />
    <img
      svg-inline
      class="label-mood--icon"
      src="assets/icons/emotion/terinspirasi.svg"
      v-if="useImg && labelText.toLowerCase() === 'terinspirasi'"
    />
    <img
      svg-inline
      class="label-mood--icon"
      src="assets/icons/emotion/dicintai.svg"
      v-if="useImg && labelText.toLowerCase() === 'dicintai'"
    />
    <img
      svg-inline
      class="label-mood--icon"
      src="assets/icons/emotion/termotivasi.svg"
      v-if="useImg && labelText.toLowerCase() === 'termotivasi'"
    />
    <img
      svg-inline
      class="label-mood--icon"
      src="assets/icons/emotion/optimis.svg"
      v-if="useImg && labelText.toLowerCase() === 'optimis'"
    />
    <img
      svg-inline
      class="label-mood--icon"
      src="assets/icons/emotion/bangga.svg"
      v-if="useImg && labelText.toLowerCase() === 'bangga'"
    />
    <img
      svg-inline
      class="label-mood--icon"
      src="assets/icons/emotion/santai.svg"
      v-if="useImg && labelText.toLowerCase() === 'santai'"
    />
    <img
      svg-inline
      class="label-mood--icon"
      src="assets/icons/emotion/lega.svg"
      v-if="useImg && labelText.toLowerCase() === 'lega'"
    />
    <img
      svg-inline
      class="label-mood--icon"
      src="assets/icons/emotion/puas.svg"
      v-if="useImg && labelText.toLowerCase() === 'puas'"
    />
    <span class="text text__footnote text__primary">{{ labelText }}</span>
  </div>
</template>

<style lang="scss" scoped>
.label-mood {
  border-radius: 12px;
  padding: 4px 8px;
  background: #f2f6ff;
  text-transform: capitalize;

  &--icon {
    width: 18px;
    height: 18px;
    margin-right: 4px;
  }
}
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
