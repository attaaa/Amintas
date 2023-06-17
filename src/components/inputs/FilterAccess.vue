<template>
  <div :class="{ active: filterActive }" class="filter-access">
    <img
      v-if="filterActive && selectedFilter.icon"
      :src="selectedFilter.icon"
      style="margin-right: 8px; width: 18px; height: 18px"
      svg-inline
    />
    <div class="filter-label text__footnote " @click="openSelection()">
      {{ selectedFilter ? selectedFilter.name : this.label }}
    </div>
    <img
      v-if="!filterActive"
      @click="openSelection()"
      src="assets/icons/general/arrow-dropdown.svg"
      style="fill: #C4C4C8"
      svg-inline
    />
    <div
      style="display: grid; place-items: center"
      v-else
      @click="$emit('removeFilter')"
    >
      <img
        src="assets/icons/general/close.svg"
        style="width: 8px; fill: #5C7CCD"
        svg-inline
      />
    </div>

    <SwipeableBottomSheet
      ref="popUpFilter"
      :can-close="true"
      :open-top="helperHalfTop()"
      :swipeable="false"
      :use-drag-icon="false"
      :use-overlay="true"
      style="position: fixed"
      default-state="close"
    >
      <div ref="popUpContent">
        <slot></slot>
      </div>
    </SwipeableBottomSheet>
  </div>
</template>

<style lang="scss">
.filter-access {
  width: fit-content;
  padding: 8px 12px;

  display: flex;
  align-items: center;
  gap: 8px;

  border-radius: 6px;
  border: 1px solid #dedede;

  .filter-label {
    color: #a3a5a7;
  }

  &.active {
    color: #5c7ccd;
    background: #f2f6ff;
    border: 1px solid #5c7ccd;
  }

  &.active .filter-label {
    font-weight: 600;
    color: #5c7ccd;
  }
}
</style>

<script>
import SwipeableBottomSheet from "components/SwipeableBottomSheet";

export default {
  name: "FilterAccess",
  components: { SwipeableBottomSheet },
  props: {
    label: {
      type: String,
      default: "label"
    },
    contentHeight: Number,
    filterActive: Boolean,
    selectedFilter: Object
  },
  methods: {
    openSelection() {
      this.$refs.popUpFilter.setState("open");
    },
    helperHalfTop() {
      return window.innerHeight - this.contentHeight;
    },
    closePopUp() {
      this.$refs.popUpFilter.setState("close");
    }
  }
};
</script>
