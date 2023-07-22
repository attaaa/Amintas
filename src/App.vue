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
    <div v-if="toast.show" class="toast-notification" :class="toast.class">
      {{ toast.text }}
    </div>
  </div>
</template>
<script>
export default {
  name: "App",
  data: function() {
    return {
      lastBackPress: 0
    };
  },
  computed: {
    toast() {
      return this.$store.state.app.toast;
    }
  },
  mounted() {
    document.addEventListener("backbutton", this.onBackPress, false);

    // Override the default back button behavior
    document.addEventListener(
      "backbutton",
      function(e) {
        e.preventDefault();
      },
      false
    );
  },
  beforeDestroy() {
    document.removeEventListener("backbutton", this.onBackPress, false);
  },
  methods: {
    onBackPress() {
      const currentTime = new Date().getTime();
      const timeDifference = currentTime - this.lastBackPress;

      if (timeDifference < 2000) {
        // Adjust the time threshold as needed (in milliseconds)
        navigator.app.exitApp(); // This line will quit the app
      } else {
        this.lastBackPress = currentTime;
        this.$q.notify({
          message: "Press back again to exit",
          color: "negative",
          position: "top"
        });
      }
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
  animation: toastShow 2s;

  &--danger {
    background: #af3a3a;
  }
}

@keyframes toastShow {
  0% {
    opacity: 0;
  }
  40% {
    opacity: 1;
    bottom: 110px;
  }
  80% {
    opacity: 1;
    bottom: 110px;
  }
  100% {
    opacity: 0;
  }
}
</style>
