<template>
  <div>
    <img
      :src="iconUrl"
      class="full-width"
    />
  </div>
</template>

<script>
export default {
  name: "DistortionIconLoader",
  props: {
    distortionName: String
  },
  data() {
    return {
      iconUrl: "./icons/distortion/"
    }
  },
  mounted() {
    this.iconUrl += this.distortionName.replace(/\s+/g, '_').toLowerCase() + ".png";
    console.log(this.iconUrl);
  }
};
</script>
