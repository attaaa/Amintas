<template>
  <div class="track" :class="[state ? 'on' : '']">
    <div class="inner-track"></div>
  </div>
</template>

<script>
export default {
  name: "Track",
  props: {
    state: Boolean
  }
};
</script>

<style>
.track {
  width: 39px;
  height: 24px;
  background: #f1f2f5;
  border: 1px solid #dedede;
  border-radius: 26.25px;
  position: relative;
}

.inner-track {
  width: 12px;
  height: 12px;
  background: #a3a5a7;
  border-radius: 75px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 6px;
  transition: 0.3s ease-out;
}

.track.on {
  background: #f2f6ff;
}

.track.on .inner-track {
  left: 21px;
  background: #5c7ccd;
}
</style>
