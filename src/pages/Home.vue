<template>
  <div>
    <div class="home-container">
      <!-- HEADER -->
      <div class="home-header">
        <span class="text__title-1 text__primary q-mx-auto">Amintas</span>
      </div>

      <div class="home-card">
        <div class="home-card--text">
          <p class="text__headline text-white">
            Yuk lawan pikiran mengganggu di kepalamu!
          </p>
          <button class="btn__small btn__accent" @click="openModul()">
            Buka modul
          </button>
        </div>
        <div class="home-card--img">
          <img svg-inline src="assets/home-card.svg" />
        </div>
      </div>

      <div>
        <!-- journal data present -->
        <SwipeableBottomSheet
          ref="bottomSheet"
          default-state="half"
          :swipeable="true"
          v-if="journalDataList.length > 0"
        >
          <div
            class="column"
            style="height: 100vh; padding: 16px; padding-bottom: 0 !important;"
          >
            <SearchField
              class="col-auto"
              style="margin-bottom: 24px"
              @click.native="goToSearchPage()"
            />
            <JournalPreviewItemList
              class="col scroll hide-scrollbar"
              style="padding-bottom: 100px;"
            />
          </div>
        </SwipeableBottomSheet>

        <!-- journal data empty -->
        <SwipeableBottomSheet
          v-else
          ref="bottomSheet"
          :open-top="280"
          :use-drag-icon="false"
        >
          <div style="padding: 32px 24px;">
            <!-- illustration -->
            <div
              class="placeholder-illustration"
              style="height: 188px; margin: 8px;"
            >
              <img src="~assets/img/empty_nothing.png" style="height: 100%" />
            </div>
            <span
              class="block text__primary text__title-3 full-width text-center"
              style="margin-top: 24px; margin-bottom: 16px;"
              >Jurnalmu masih kosong</span
            >
            <p class="text__body text__neutral-dark-grey text-center">
              Kamu bisa mulai menulis ceritamu untuk mengungkap pikiran
              mengganggumu
            </p>
          </div>
        </SwipeableBottomSheet>
      </div>
    </div>
  </div>
</template>

<script>
import SwipeableBottomSheet from "components/SwipeableBottomSheet";
import SearchField from "components/inputs/SearchField";
import JournalPreviewItemList from "components/JournalPreviewItemList";
import { generateTimeStamp } from "src/helper/generateDate.js";

export default {
  name: "Home",
  components: {
    SwipeableBottomSheet,
    SearchField,
    JournalPreviewItemList
  },
  methods: {
    goToSearchPage() {
      this.$router.push("search");
    },
    openModul() {}
  },
  computed: {
    journalDataList() {
      return this.$store.state.journal.journalDataList;
    }
  }
};
</script>
