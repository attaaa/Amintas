<template>
  <div>
    <img 
      svg-inline
      :src="imgUr"
    />
  </div>
</template>

<style lang="scss">
img {
  fill: aqua;
}
</style>

<script>

export default {
  name: "TestLayout",
  components: {},
  data() {
    return {
      imgUr: "./icons/"
    };
  },
  mounted() {
    this.imgUr += "bantuan.svg"
  }
};
</script>
