<template>
  <div class="full-width row items-center position-relative">
    <div class="col-grow text__body text__neutral-black">
      {{ label }}
    </div>
    <div style="width: 44px;" class="row items-center">
      <input
        :class="{ selected: customVal }"
        type="number"
        :value="customVal || 0"
        disabled
      />
    </div>
    <!-- <SwipeableBottomSheet
      ref="popUpFilter"
      :can-close="true"
      :open-top="helperHalfTop()"
      :swipeable="false"
      :use-drag-icon="false"
      :use-overlay="true"
      style="position: fixed"
      default-state="half"
    >
      <div ref="popUpContent">
        <slot></slot>
      </div>
    </SwipeableBottomSheet> -->
  </div>
</template>

<script>
import SwipeableBottomSheet from "../SwipeableBottomSheet.vue";
export default {
  components: {},
  name: "TableLadderLevel",
  props: {
    label: String,
    customVal: Number
  }
};
</script>

<style lang="scss">
input {
  width: 100%;
  height: 40px;

  text-align: center;

  background: #f1f2f5;
  border: 1px solid #dedede;
  border-radius: 6px;

  &.selected {
    color: #303030;
  }
}
</style>
