<template>
  <div
    class="relative-position"
    style="width: 280px; height: 280px; margin: auto;"
  >
    <div class="bg-gauge">
      <img
        svg-inline
        style="width: 280px; height: 280px"
        src="assets/gauge-bg.svg"
      />
    </div>

    <q-circular-progress
      show-value
      reverse
      :value="100"
      size="280px"
      :thickness="0.29"
      color="primary"
      disable
      :angle="360"
    >
      <div class="column">
        <p class="text__title-3 text__primary" style="margin-bottom: 16px;">
          Bantuan <br />
          Relaksasi
        </p>
        <div class="text__footnote text__primary">
          <span class="label-putaran">4 Putaran</span>
        </div>
      </div>
    </q-circular-progress>
  </div>
</template>

<style lang="scss">
.label-putaran {
  padding: 4px 8px;
  border: 1px solid #5c7ccd;
  box-sizing: border-box;
  border-radius: 12px;
}
</style>

<script>
export default {
  name: "TimerButton"
};
</script>
