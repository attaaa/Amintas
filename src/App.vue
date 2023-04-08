<template>
  <div id="q-app">
    <!-- <transition
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
      appear
      :duration="300"
    >
      <router-view />
    </transition> -->
    <router-view />
    <div v-if="toast.show" class="toast-notification">
      {{ toast.text }}
    </div>
  </div>
</template>
<script>
export default {
  name: "App",
  computed: {
    toast() {
      return this.$store.state.app.toast;
    }
  }
};
</script>

<style lang="scss" scoped>
.toast-notification {
  position: fixed;
  left: 50%;
  bottom: -10px;
  transform: translateX(-50%);
  padding: 4px 8px;
  background: #303030;
  box-shadow: 0px 2px 4px 1px rgba(48, 48, 48, 0.08);
  border-radius: 12px;
  color: #ffffff;
  z-index: 999999;
  opacity: 0;
  animation: toastShow 3s;
}

@keyframes toastShow {
  0% {
    opacity: 0;
  }
  30% {
    opacity: 1;
    bottom: 80px;
  }
  80% {
    opacity: 1;
    bottom: 80px;
  }
  100% {
    opacity: 0;
  }
}
</style>
