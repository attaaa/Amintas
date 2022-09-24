<template>
  <div
    class="bar-single col-auto"
    :class="[buttonActive ? 'show-action' : 'hide-action']"
  >
    <button class="btn__large btn__accent full-width" @click="action">
      {{ label }}
    </button>
  </div>
</template>

<script>
export default {
  name: "BarSingle",
  props: {
    buttonActive: Boolean,
    label: String,
    action: {
      type: Function,
      default() {}
    }
  }
};
</script>

<style>
.bar-single {
  box-shadow: 0px 2px 4px 1px rgba(48, 48, 48, 0.12);
  padding: 16px 16px 24px 16px;
  background-color: #fff;
  position: absolute;
  width: 100%;
  z-index: 40px;
}

.bar-single.hide-action {
  bottom: -88px;
}

.bar-single.show-action {
  bottom: 0;
  transition: bottom 500ms cubic-bezier(0.465, 0.183, 0.153, 0.946);
}
</style>
