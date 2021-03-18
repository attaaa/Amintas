<template>
  <img :src="iconUrl" :style="'width:' + iconWidth + 'px !important'" />
</template>

<script>
export default {
  name: "DistortionIconLoader",
  props: {
    distortionName: String,
    iconWidth: Number
  },
  data() {
    return {
      iconUrl: "./icons/distortion/"
    };
  },
  mounted() {
    this.iconUrl +=
      this.distortionName.replace(/\s+/g, "_").toLowerCase() + ".png";
    console.log(this.iconUrl);
  }
};
</script>
