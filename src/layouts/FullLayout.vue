<template>
  <div class="full-layout">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "FullLayout"
};
</script>

<style lang="scss" scoped>
.full-layout {
  height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;
  position: relative;
}
</style>
