<template>
  <SwipeableBottomSheet
    ref="datePickerPopUp"
    :can-close="true"
    :open-top="helperHalfTop()"
    :swipeable="false"
    :use-drag-icon="false"
    :use-overlay="true"
    style="position: fixed"
    default-state="close"
  >
    <div style="padding: 16px;">
      <div class="flex items-center" style="margin-bottom: 24px">
        <div
          @click="
            $refs.datePickerPopUp.setState('close');
            $emit('close');
          "
        >
          <img
            src="assets/icons/general/close.svg"
            style="margin-right: 12px;"
            svg-inline
            class="fill-neutral"
          />
        </div>
        <div class="text__title-3 text__neutral-black">
          {{ dateState === "from" ? "Mulai dari" : "Hingga" }}
        </div>
      </div>

      <!-- date picker -->
      <div class="date-picker">
        <div class="date-picker--month" ref="monthContainer">
          <div class="selection-container">
            <div
              v-for="(month, index) in 12"
              :key="index"
              class="date-picker--selection"
              :class="{
                selected: index === selectedDate.month,
                disable: minDate && minDate.getMonth() > index
              }"
              @click="
                (!minDate || minDate.getMonth() - 1 < index) &&
                  select('month', index)
              "
            >
              {{ formatMonth(index) }}
            </div>
          </div>
        </div>

        <div class="date-picker--day" ref="dayContainer">
          <div class="selection-container">
            <div
              v-for="day in availableDays"
              :key="day"
              class="date-picker--selection"
              :class="{
                selected: day === selectedDate.day,
                disable:
                  minDate &&
                  minDate.getMonth() >= selectedDate.month &&
                  minDate.getDate() > day
              }"
              @click="
                !(
                  minDate &&
                  minDate.getMonth() >= selectedDate.month &&
                  minDate.getDate() > day
                ) && select('day', day)
              "
            >
              {{ day }}
            </div>
          </div>
        </div>

        <div class="date-picker--year" ref="yearContainer">
          <div class="selection-container">
            <div
              v-for="year in availableYears"
              :key="year"
              class="date-picker--selection"
              :class="{
                selected: year === selectedDate.year,
                disable: minDate && minDate.getFullYear() > year
              }"
              @click="
                (!minDate || minDate.getFullYear() - 1 < year) &&
                  select('year', year)
              "
            >
              {{ year }}
            </div>
          </div>
        </div>
      </div>

      <button class="btn btn__active text__title-4" @click="submit">
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
  props: {
    dateState: String,
    currSelectedDate: Date,
    minDate: Date
  },
  data() {
    return {
      customDate: CUSTOM_DATE,
      selectedDate: {
        day: null,
        month: null,
        year: null
      },
      availableYears: [],
      availableDays: []
    };
  },
  computed: {
    // disableDaySelection() {
    //   return this.minDate && this.minDate.getDate()
    // }
  },
  watch: {
    "selectedDate.year"() {
      this.updateDaysInMonth();
    },
    "selectedDate.month"() {
      this.updateDaysInMonth();
    }
  },
  methods: {
    select(type, value) {
      // console.log(type, value);
      this.selectedDate[type] = value;
      if (this.minDate && type === "month") {
        this.selectedDate.day = this.minDate.getDate();
      }
    },

    setState(state) {
      this.$refs.datePickerPopUp.setState(state);
      // console.log(this.currSelectedDate);
      if (state === "open") {
        this.availableYears = this.getYearsRange(2010, 2030);
        if (!this.currSelectedDate) {
          const currDate = new Date();
          this.selectedDate.month = currDate.getMonth();
          this.selectedDate.year = currDate.getFullYear();
          this.selectedDate.day = currDate.getDate();

          this.$nextTick(() => {
            this.scrollSelectedElementIntoView(this.$refs.dayContainer);
            this.scrollSelectedElementIntoView(this.$refs.monthContainer);
            this.scrollSelectedElementIntoView(this.$refs.yearContainer);
          });
        } else {
          this.selectedDate.month = this.currSelectedDate.getMonth();
          this.selectedDate.year = this.currSelectedDate.getFullYear();
          this.selectedDate.day = this.currSelectedDate.getDate();

          this.$nextTick(() => {
            this.scrollSelectedElementIntoView(this.$refs.dayContainer);
            this.scrollSelectedElementIntoView(this.$refs.monthContainer);
            this.scrollSelectedElementIntoView(this.$refs.yearContainer);
          });
        }
      }
    },
    formatMonth(month) {
      const monthList = [
        "Januari",
        "Februari",
        "Maret",
        "April",
        "Mei",
        "Juni",
        "Juli",
        "Agustus",
        "September",
        "Oktober",
        "November",
        "Desember"
      ];
      return monthList[month];
    },
    updateDaysInMonth() {
      const { year, month } = this.selectedDate;
      if (year !== null && month !== null) {
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        this.availableDays = Array.from(
          { length: daysInMonth },
          (_, index) => index + 1
        );
      } else {
        this.availableDays = [];
      }
    },
    getYearsRange(startYear, endYear) {
      return Array.from(
        { length: endYear - startYear + 1 },
        (_, index) => startYear + index
      );
    },

    submit() {
      this.$emit("submit", {
        type: this.dateState,
        value: new Date(
          this.selectedDate.year,
          this.selectedDate.month,
          this.selectedDate.day
        )
      });
    },

    scrollSelectedElementIntoView(refs) {
      const selectedElement = refs.querySelector(".selected");

      // Scroll the selected element into view if it exists
      if (selectedElement) {
        const container = refs;
        const containerWidth = container.clientWidth;
        const elementWidth = selectedElement.offsetWidth;
        const elementOffsetLeft = selectedElement.offsetLeft;

        // Calculate the scrollLeft value to center the element
        const scrollLeft =
          elementOffsetLeft - (containerWidth - elementWidth) / 2;

        container.scrollLeft = scrollLeft;
      }
    },
    helperHalfTop() {
      return window.innerHeight - 358;
    }
  }
};
</script>

<style lang="scss" scoped>
.date-picker {
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  gap: 32px;

  &--day,
  &--month,
  &--year {
    width: 100%;
    overflow-x: scroll;
    white-space: nowrap;

    // display: flex;

    // hide scrollbar
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }

    .selection-container {
      display: flex;
      gap: 16px;
    }

    .date-picker--selection {
      flex-shrink: 0;
      padding: 4px;
      font-size: 16px;
      line-height: 24px;
      display: grid;
      place-items: center;

      letter-spacing: 0.02em;
      color: #303030;

      &.selected {
        background: #f2f6ff;
        border: 1px solid #5c7ccd;
        border-radius: 6px;
        font-weight: 700;
        color: #5c7ccd;
      }

      &.disable {
        color: #dedede;
      }
    }
  }

  &--day {
    .date-picker--selection {
      width: 56px;
      height: 56px;
      font-size: 20px;
      line-height: 30px;
    }
  }
}

.btn {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 48px;
  padding: 12px 16px;
  margin-top: 32px;
  border-radius: 6px;

  background: #dedede;
  color: #a3a5a7;

  &__active {
    background: #ffcb4d;
    color: #303030;
  }
}
</style>
