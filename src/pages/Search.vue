<template>
  <div class="search-page">
    <!-- search input -->
    <div class="flex items-center" style="margin-bottom: 16px;">
      <div @click="$router.back()">
        <div>
          <img svg-inline src="assets/icons/general/arrow-left.svg" />
        </div>
      </div>
      <SearchField
        :value="searchQuery"
        placeholder="Cari jurnal ceritamu"
        :auto-focus="true"
        :detect-outside-click="true"
        @clearInputSearch="clearInput"
        @updateValue="updateSearchQuery"
        @enter="submitSearchQuery"
        style="flex: 1 0 0; margin-left: 16px"
      >
      </SearchField>
    </div>
    <!-- filter input -->
    <div class="flex">
      <!-- filter mood -->
      <FilterAccess
        ref="filterMood"
        :content-height="560"
        :filter-active="!!filter.mood"
        :selected-filter="filter.mood"
        @removeFilter="filter.mood = null"
        label="Pilih Mood"
        style="margin-right: 8px;"
      >
        <div style="padding: 16px;">
          <div class="flex items-center" style="margin-bottom: 24px">
            <img
              @click="() => this.$refs.filterMood.closePopUp()"
              src="assets/icons/general/close.svg"
              style="margin-right: 12px;"
              svg-inline
            />
            <div class="text__title-3 text__neutral-black">
              Mau lihat mood apa?
            </div>
          </div>

          <div class="filter-mood-container">
            <div
              v-for="(filterMood, idx) in filterMoodList"
              :key="filterMood.id"
              class="filter-mood-item"
            >
              <div
                class="flex items-center"
                @click="tempSelectMood(idx)"
                style="margin-bottom: 16px;"
              >
                <img
                  :src="filterMood.icon"
                  style="margin-right: 12px; width: 32px;"
                  svg-inline
                />
                <div class="text__headline text__neutral-black">
                  {{ filterMood.name }}
                </div>
                <div class="radio-button q-ml-auto">
                  <div
                    v-if="
                      tempFilter.mood && tempFilter.mood.id === filterMood.id
                    "
                    class="selected"
                  ></div>
                </div>
              </div>

              <div class="divider" style="margin-bottom: 16px"></div>
            </div>
          </div>

          <button
            :class="{ btn__active: !!tempFilter.mood }"
            class="btn text__title-4"
            @click="selectMood(tempFilter.mood)"
          >
            Terapkan
          </button>
        </div>
      </FilterAccess>
      <!-- filter tanggal -->
      <FilterAccess
        ref="filterDate"
        :content-height="452"
        :filter-active="!!filter.date"
        :selected-filter="filter.date"
        @removeFilter="filter.date = null"
        label="Pilih Tanggal"
        style="margin-right: 8px;"
      >
        <div style="padding: 16px;">
          <div class="flex items-center" style="margin-bottom: 24px">
            <img
              @click="() => this.$refs.filterDate.closePopUp()"
              src="assets/icons/general/close.svg"
              style="margin-right: 12px;"
              svg-inline
            />
            <div class="text__title-3 text__neutral-black">
              Pilih tanggal
            </div>
          </div>

          <div class="filter-mood-container">
            <div
              v-for="(filterDate, idx) in filterDateList"
              :key="'filter-date' + idx"
              class="filter-mood-item"
            >
              <div
                class="flex items-center"
                @click="tempSelectDate(idx)"
                style="margin-bottom: 16px;"
              >
                <div class="text__headline text__neutral-black">
                  {{ filterDate.name }}
                </div>
                <div class="radio-button q-ml-auto">
                  <div
                    v-if="
                      tempFilter.date &&
                        tempFilter.date.name === filterDate.name
                    "
                    class="selected"
                  ></div>
                </div>
              </div>

              <!-- custom date range -->
              <div v-if="idx === 3" class="row justify-between">
                <div
                  :class="{
                    'text__neutral-grey':
                      !tempFilter.date ||
                      tempFilter.date.name !== filterDate.name
                  }"
                >
                  <div
                    class="text__title-4"
                    :class="{
                      'text__neutral-dark-grey':
                        tempFilter.date &&
                        tempFilter.date.name === filterDate.name
                    }"
                  >
                    Mulai dari
                  </div>
                  <div
                    style="padding-bottom: 4px; margin-top: 8px; border-bottom: 2px solid #F1F2F5"
                    :class="{
                      'text__neutral-black':
                        tempFilter.date &&
                        tempFilter.date.name === filterDate.name
                    }"
                    @click="openDatePicker('from')"
                  >
                    {{ formatDate(customDateRange.from) }}
                  </div>
                </div>
                <div
                  :class="{
                    'text__neutral-grey':
                      !tempFilter.date ||
                      tempFilter.date.name !== filterDate.name
                  }"
                >
                  <div
                    class="text__title-4"
                    :class="{
                      'text__neutral-dark-grey':
                        tempFilter.date &&
                        tempFilter.date.name === filterDate.name
                    }"
                  >
                    Hingga
                  </div>
                  <div
                    style="padding-bottom: 4px; margin-top: 8px; border-bottom: 2px solid #F1F2F5"
                    :class="{
                      'text__neutral-black':
                        tempFilter.date &&
                        tempFilter.date.name === filterDate.name
                    }"
                    @click="openDatePicker('to')"
                  >
                    {{ formatDate(customDateRange.to) }}
                  </div>
                </div>
              </div>

              <div
                v-if="idx !== 3"
                class="divider"
                style="margin-bottom: 16px"
              ></div>
            </div>
          </div>

          <button
            :class="{ btn__active: !!tempFilter.date }"
            class="btn text__title-4"
            @click="selectDate(tempFilter.date)"
          >
            Terapkan
          </button>
        </div>
      </FilterAccess>
      <!-- custom date -->
      <DatePicker
        ref="datePicker"
        :date-state="currentDateState"
        :curr-selected-date="tempSelectedDate"
        :minDate="minDate"
        @submit="handleDatePickerSubmit"
        @close="$refs.filterDate.openSelection()"
      ></DatePicker>
    </div>

    <div
      style="margin-bottom: 16px ;margin-inline: -16px; width: calc(100vw + 32px); height: 8px; background-color: #ffffff; box-shadow: 0px 2px 4px -1px rgba(48, 48, 48, 0.08);"
    ></div>

    <!-- illustration -->
    <div v-if="showNoResult" style="padding: 32px 24px;">
      <div class="placeholder-illustration" style="height: 188px; margin: 8px;">
        <img src="img/empty.png" style="height: 100%" />
      </div>
      <span
        class="block text__primary text__title-3 full-width text-center"
        style="margin-top: 24px; margin-bottom: 16px;"
      >
        Maaf pencarianmu ngga ada
      </span>
      <p class="text__body text__neutral-dark-grey text-center">
        Tenang saja, kamu boleh coba cari lagi pake kolom pencarian di atas
      </p>
    </div>
    <div v-else-if="filteredResults.length === 0" style="padding: 32px 24px;">
      <div class="placeholder-illustration" style="height: 188px; margin: 8px;">
        <img src="~assets/img/empty_nothing.png" style="height: 100%" />
      </div>
      <span
        class="block text__primary text__title-3 full-width text-center"
        style="margin-top: 24px; margin-bottom: 16px;"
        >Yuk lihat kembali ceritamu</span
      >
      <p class="text__body text__neutral-dark-grey text-center">
        Temukan beragam cerita dalam jurnal yang pernah kamu bagikan
      </p>
    </div>
    <JournalPreviewItemList
      v-else-if="filteredResults.length > 0"
      :journal-data-list="filteredResults"
      class="col scroll hide-scrollbar"
      style="padding-bottom: 100px;"
    />
  </div>
</template>

<script>
import SearchField from "components/inputs/SearchField";
import FilterAccess from "components/inputs/FilterAccess";
import JournalPreviewItemList from "src/components/JournalPreviewItemList";
import DatePicker from "components/inputs/DatePicker";
import { formatDate } from "../helper/formatDate";

import { FILTER } from "../data/filter";

const filterMoodList = FILTER.mood;
const filterDateList = FILTER.date;

export default {
  name: "Search",
  components: { SearchField, FilterAccess, JournalPreviewItemList, DatePicker },
  data() {
    return {
      searchQuery: "",
      filterMoodList: filterMoodList,
      filterDateList: filterDateList,
      // temp
      tempFilter: {
        mood: null,
        date: null
      },
      // new
      filter: {
        mood: null,
        date: null
      },
      searchResults: [],
      selectedDateRange: {
        from: null,
        to: null
      },
      // from or to from selectedDateRange
      currentDateState: null,
      customDateRange: {
        from: null,
        to: null
      },
      tempSelectedDate: null,
      minDate: null,
      activeSearch: false
    };
  },
  computed: {
    filteredResults() {
      if (!this.filter.mood && !this.filter.date && this.searchQuery === "")
        return [];

      let filteredResult = [...this.searchResults];
      if (this.filter.mood && this.filter.mood.id !== "all") {
        filteredResult = this.searchResults.filter(
          journal => journal.mood === this.filter.mood.id
        );
      }

      if (this.filter.date && this.filter.date.id !== 0) {
        // console.log(this.filter.date);
        // console.log(filteredResult);
        filteredResult = this.searchResults.filter(
          journal =>
            new Date(journal.created_date) >= this.filter.date.dateRange.from &&
            new Date(journal.created_date) <= this.filter.date.dateRange.to
        );
      }

      return filteredResult;
    },
    showNoResult() {
      if (!this.filter.mood && !this.filter.date) return false;
      return this.activeSearch && this.filteredResults.length === 0;
    }
  },
  created() {
    this.customDateRange = {
      from: new Date(),
      to: new Date()
    };
  },
  methods: {
    tempSelectMood(moodIdx) {
      this.tempFilter.mood = this.filterMoodList[moodIdx];
    },
    tempSelectDate(dateIdx) {
      this.tempFilter.date = this.filterDateList[dateIdx];
    },
    selectMood(tempMood) {
      this.filter.mood = tempMood;
      this.$refs.filterMood.closePopUp();
      this.searchJournals();
      // this.activeSearch = true;
    },
    selectDate(tempDate) {
      this.filter.date = tempDate;
      if (tempDate.id === 3) {
        this.filter.date.dateRange = {
          from: this.customDateRange.from,
          to: this.customDateRange.to
        };
      }
      this.$refs.filterDate.closePopUp();
      this.searchJournals();
      // this.activeSearch = true;
    },
    updateSearchQuery(searchQuery) {
      this.searchQuery = searchQuery;
      // this.activeSearch = true;
    },
    searchJournals() {
      const listJournals = this.$store.state.journal.journalDataList;

      this.searchResults = listJournals.filter(
        journal =>
          (journal.story.title &&
            journal.story.title
              .toLowerCase()
              .includes(this.searchQuery.toLowerCase())) ||
          journal.story.detail
            .toLowerCase()
            .includes(this.searchQuery.toLowerCase())
      );

      this.activeSearch = true;
    },
    openDatePicker(dateState) {
      if (!this.tempFilter.date || this.tempFilter.date.value !== 1) return;

      this.$refs.filterDate.closePopUp();
      this.currentDateState = dateState;

      if (dateState === "from") this.minDate = null;
      else this.minDate = this.customDateRange["from"];

      this.tempSelectedDate = this.customDateRange[dateState];
      this.$nextTick(() => {
        this.$refs.datePicker.setState("open");
      });
    },
    formatDate,
    handleDatePickerSubmit(datePickerOutput) {
      this.customDateRange[datePickerOutput.type] = datePickerOutput.value;

      if (
        datePickerOutput.type === "from" &&
        this.customDateRange.from > this.customDateRange.to
      ) {
        this.customDateRange.to = this.customDateRange.from;
      }

      this.$refs.datePicker.setState("close");
      this.$refs.filterDate.openSelection();
    },
    clearInput() {
      this.searchQuery = "";
    },
    submitSearchQuery() {
      this.searchJournals();
    }
  }
};
</script>

<style lang="scss" scoped>
.search-page {
  padding: 12px;
  height: 100vh;
  box-sizing: border-box;
}
.radio-button {
  display: grid;
  place-items: center;

  width: 24px;
  height: 24px;
  left: 304px;
  top: 4px;
  background: #f1f2f5;
  border-radius: 24px;
  border: 1px solid #5c7ccd;

  .selected {
    width: 16px;
    height: 16px;

    background: #5c7ccd;
    border-radius: 24px;
  }
}
.divider {
  width: 100%;
  height: 2px;
  background: #f1f2f5;
  border-radius: 2px;
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
