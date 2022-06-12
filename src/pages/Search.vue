<template>
  <div class="search-page">
    <!-- search input -->
    <div class="flex align-items-center" style="margin-bottom: 16px;">
      <img
        @click="goBack()"
        src="assets/icons/general/arrow-left.svg"
        svg-inline
        style="width: 24px; fill: #5C7CCD;"
      />
      <SearchField
        v-model="searchQuery"
        :auto-focus="true"
        @updateValue="updateSearchQuery"
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
        :filter-active="!!filter.mood"
        :selected-filter="filter.mood"
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
                  >
                    1 Sep 2021
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
                  >
                    1 Sep 2021
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
      <DatePicker></DatePicker>
    </div>

    <div
      style="margin-bottom: 16px ;margin-inline: -16px; width: calc(100vw + 32px); height: 8px; background-color: #ffffff; box-shadow: 0px 2px 4px -1px rgba(48, 48, 48, 0.08);"
    ></div>

    <!-- illustration -->
    <div v-if="!searchResults" style="padding: 32px 24px;">
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
      v-else-if="searchResults[0]"
      :journal-data-list="searchResults"
      class="col scroll hide-scrollbar"
      style="padding-bottom: 100px;"
    >
    </JournalPreviewItemList>
  </div>
</template>

<script>
import SearchField from "components/inputs/SearchField";
import FilterAccess from "components/inputs/FilterAccess";
import JournalPreviewItemList from "src/components/JournalPreviewItemList";
import DatePicker from "components/inputs/DatePicker";

// import filterData from "../data/filter.json";
// const filterMoodList = filterData.mood;

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
      searchResults: null
    };
  },
  methods: {
    goBack() {
      this.$router.back();
    },
    tempSelectMood(moodIdx) {
      this.tempFilter.mood = filterMoodList[moodIdx];
    },
    tempSelectDate(dateIdx) {
      this.tempFilter.date = filterDateList[dateIdx];
    },
    selectMood(tempMood) {
      this.filter.mood = tempMood;
      this.$refs.filterMood.closePopUp();
    },
    selectDate(tempDate) {
      this.filter.date = tempDate;
      this.$$refs.filterDate.closePopUp();
    },
    updateSearchQuery(searchQuery) {
      this.searchQuery = searchQuery;
      this.searchJournals();
    },
    searchJournals() {
      const listJournals = this.$store.state.journal.journalDataList;

      this.searchResults = listJournals.map(journal => {
        if (
          journal.story.title
            .toLowerCase()
            .includes(this.searchQuery.toLowerCase())
        ) {
          return journal;
        }
      });
    }
  }
};
</script>

<style lang="scss">
.search-page {
  padding: 22px 16px;
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
