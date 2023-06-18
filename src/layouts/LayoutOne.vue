// layout with back button and image header
<template>
  <div class="container-scroll">
    <div class="header">
      <div
        class="btn"
        @click="backRoutes ? $router.replace(backRoutes) : $router.back()"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.6661 10.6666H8.54191L12.9437 6.28357C13.1949 6.03271 13.336 5.69246 13.336 5.33769C13.336 4.98291 13.1949 4.64266 12.9437 4.3918C12.6926 4.14093 12.3519 4 11.9967 4C11.6415 4 11.3008 4.14093 11.0496 4.3918L4.38018 11.053C4.25874 11.1797 4.16355 11.3291 4.10006 11.4926C3.96665 11.817 3.96665 12.1808 4.10006 12.5051C4.16355 12.6686 4.25874 12.818 4.38018 12.9448L11.0496 19.6059C11.1736 19.7308 11.3211 19.8299 11.4837 19.8975C11.6462 19.9652 11.8206 20 11.9967 20C12.1728 20 12.3471 19.9652 12.5097 19.8975C12.6722 19.8299 12.8197 19.7308 12.9437 19.6059C13.0688 19.4821 13.168 19.3347 13.2357 19.1724C13.3034 19.01 13.3383 18.8359 13.3383 18.66C13.3383 18.4842 13.3034 18.31 13.2357 18.1477C13.168 17.9853 13.0688 17.838 12.9437 17.7142L8.54191 13.3311H18.6661C19.0199 13.3311 19.3592 13.1907 19.6093 12.9409C19.8595 12.6911 20 12.3522 20 11.9989C20 11.6455 19.8595 11.3067 19.6093 11.0568C19.3592 10.807 19.0199 10.6666 18.6661 10.6666Z"
            fill="#5C7CCD"
          />
        </svg>
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
