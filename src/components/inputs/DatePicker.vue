<template>
  <SwipeableBottomSheet
    ref="datePickerPopUp"
    :can-close="true"
    :open-top="helperHalfTop()"
    :swipeable="false"
    :use-drag-icon="false"
    :use-overlay="true"
    style="position: fixed"
    default-state="open"
  >
    <div style="padding: 16px;">
      <div class="flex items-center" style="margin-bottom: 24px">
        <img
          @click="() => this.$refs.datePickerPopUp.closePopUp()"
          src="assets/icons/general/close.svg"
          style="margin-right: 12px;"
          svg-inline
        />
        <div class="text__title-3 text__neutral-black">
          Hingga
        </div>
      </div>

      <!-- date picker -->
      <div class="date-picker">
        <div class="date-picker--day">
          <div v-for="n in 10" :key="'day' + n">{{ n }}</div>
        </div>
        <div class="date-picker--month">
          <div>January</div>
          <div>February</div>
          <div>March</div>
        </div>
        <div class="datepicker--year">
          <div>2020</div>
          <div>2021</div>
          <div>2022</div>
          <div>2023</div>
        </div>
      </div>

      <button
        :class="{ btn__active: false }"
        class="btn text__title-4"
        @click="() => this.$refs.datePickerPopUp.closePopUp()"
      >
        Terapkan
      </button>
    </div>
  </SwipeableBottomSheet>
</template>

<script>
import SwipeableBottomSheet from "../SwipeableBottomSheet";
import { CUSTOM_DATE } from "../../data/filter";

export default {
  components: { SwipeableBottomSheet },
  name: "DatePicker",
  data() {
    return {
      customDate: CUSTOM_DATE
    };
  },
  methods: {
    helperHalfTop() {
      return window.innerHeight - 312;
    }
  }
};
</script>

<style lang="scss">
.date-picker {
  width: 100%;
  height: 162px;

  display: flex;
  justify-content: space-between;
  position: relative;

  &--day,
  &--month,
  &--year {
    height: 100%;
    overflow: scroll;
    text-align: center;

    // hide scrollbar
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }

    > div {
      padding: 4px 0;
    }
  }

  &--day {
  }

  &--month {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
  }

  &--year {
  }
}
</style>
