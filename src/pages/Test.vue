<template>
  <div
    style="width: 100%; display: grid; place-items: center; margin-top: 40px"
  >
    <video controls style="width: 75%">
      <source src="/test.mp4" type="video/mp4" />
    </video>
    <button class="btn btn__md btn__primary" @click="showToast()">
      show toast
    </button>
  </div>
</template>

<script>
export default {
  name: "Test",
  methods: {
    showToast() {
      // this.$store.commit("app/setToastShow", false);
      this.$store.dispatch("app/showToast", "text toast");
    }
  }
};
</script>
