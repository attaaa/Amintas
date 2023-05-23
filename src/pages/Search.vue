<template>
  <div class="search-page">
    <!-- search input -->
    <div class="flex items-center" style="margin-bottom: 16px;">
      <div style="height: 24px" @click="$router.back()">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.6661 10.6666H8.54191L12.9437 6.28357C13.1949 6.03271 13.336 5.69246 13.336 5.33769C13.336 4.98291 13.1949 4.64266 12.9437 4.3918C12.6926 4.14093 12.3519 4 11.9967 4C11.6415 4 11.3008 4.14093 11.0496 4.3918L4.38018 11.053C4.25874 11.1797 4.16355 11.3291 4.10006 11.4926C3.96665 11.817 3.96665 12.1808 4.10006 12.5051C4.16355 12.6686 4.25874 12.818 4.38018 12.9448L11.0496 19.6059C11.1736 19.7308 11.3211 19.8299 11.4837 19.8975C11.6462 19.9652 11.8206 20 11.9967 20C12.1728 20 12.3471 19.9652 12.5097 19.8975C12.6722 19.8299 12.8197 19.7308 12.9437 19.6059C13.0688 19.4821 13.168 19.3347 13.2357 19.1724C13.3034 19.01 13.3383 18.8359 13.3383 18.66C13.3383 18.4842 13.3034 18.31 13.2357 18.1477C13.168 17.9853 13.0688 17.838 12.9437 17.7142L8.54191 13.3311H18.6661C19.0199 13.3311 19.3592 13.1907 19.6093 12.9409C19.8595 12.6911 20 12.3522 20 11.9989C20 11.6455 19.8595 11.3067 19.6093 11.0568C19.3592 10.807 19.0199 10.6666 18.6661 10.6666Z"
            fill="#5C7CCD"
          />
        </svg>
      </div>
      <SearchField
        v-model="searchQuery"
        :auto-focus="true"
        :detect-outside-click="true"
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
