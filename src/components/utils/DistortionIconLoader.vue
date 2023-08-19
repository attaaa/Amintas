<template>
  <img
    :src="
      require('assets/icons/distortion/' +
        this.distortionName.replace(/\s+/g, '_').toLowerCase() +
        '.png')
    "
    :style="
      'width: ' +
        iconWidth +
        'px !important;' +
        'height: ' +
        iconWidth +
        'px !important'
    "
  />
</template>

<script>
export default {
  name: "DistortionIconLoader",
  props: {
    distortionName: String,
    iconWidth: Number
  }
};
</script>
