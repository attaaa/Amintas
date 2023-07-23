// layout with back button and image header
<template>
  <div class="container-scroll">
    <div class="header">
      <div
        class="btn"
        @click="backRoutes ? $router.replace(backRoutes) : $router.back()"
      >
        <img svg-inline src="assets/icons/general/arrow-left.svg" />
      </div>
      <img :src="headerImg" />
    </div>
    <div class="main">
      <slot></slot>
    </div>
    <!--  -->
  </div>
</template>

<script>
export default {
  props: {
    headerImg: {
      type: String,
      default: "#"
    },
    backRoutes: String
  }
};
</script>

<style lang="scss" scoped>
.header {
  position: relative;
  width: 100%;
  height: 200px;
  background: #f2f6ff;
  border-radius: 0px 0px 16px 16px;
  overflow: hidden;

  .btn {
    position: relative;
    z-index: 10;
    display: inline-block;
    margin: 16px 12px;
  }

  img {
    position: absolute;
    height: 100%;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    object-fit: cover;
    z-index: 0;
  }
}

.main {
  padding: 16px;
}
</style>
