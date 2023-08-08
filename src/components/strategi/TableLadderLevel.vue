<template>
  <div class="full-width row items-center position-relative no-wrap">
    <div
      class="col-grow text__body text__neutral-black"
      style="width: calc(100% - 44px);"
    >
      {{ label }}
    </div>
    <div style="width: 44px;" class="row items-center">
      <!-- <input
        :class="{ selected: customVal && customVal !== 0 }"
        type="number"
        :value="customVal || 0"
        disabled
      /> -->
      <div
        class="level-container"
        :class="{ selected: customVal && customVal !== 0 }"
      >
        <div>{{ customVal || 0 }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TableLadderLevel",
  props: {
    label: String,
    customVal: Number
  }
};
</script>

<style lang="scss" scoped>
input,
.level-container {
  width: 100%;
  height: 40px;

  text-align: center;

  background: #f1f2f5;
  color: #c4c4c8;
  border: 1px solid #dedede;
  border-radius: 6px;

  display: grid;
  place-items: center;

  &.selected {
    color: #303030 !important;
  }
}
</style>
