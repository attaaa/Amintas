<template>
  <div>
    <div class="home-container">
      <!-- HEADER -->
      <div class="home-header">
        <span class="text__title-1 text__primary">Kognitif</span>
        <img svg-inline src="assets/icons/notification.svg" />
      </div>

      <div class="home-card">
        <div class="home-card--text">
          <p class="text__headline text-white">
            Ayo lawan pikiran salah mengganggu di kepalamu!
          </p>
          <button class="btn__small btn__accent">Buka modul</button>
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
          v-if="journalData"
        >
          <SearchField
            style="margin-bottom: 24px"
            @click.native="goToSearchPage()"
          />
          <JournalPreviewItemList />
        </SwipeableBottomSheet>

        <!-- journal data empty -->
        <SwipeableBottomSheet
          ref="bottomSheet"
          default-state="static"
          :open-top="280"
          v-if="!journalData"
        >
          <!-- illustration -->
          <div
            class="placeholder-illustration flex"
            style="height: 188px; margin: 8px;"
          ></div>

          <span
            class="block text__primary text__title-3 full-width text-center"
            style="margin-top: 24px; margin-bottom: 16px;"
            >Jurnalmu masih kosong</span
          >
          <p class="text__body text__neutral-dark-grey text-center">
            Kamu bisa mulai menulis ceritamu untuk mengungkap pikiran
            mengganggumu
          </p>
        </SwipeableBottomSheet>
      </div>
    </div>
  </div>
</template>

<script>
import SwipeableBottomSheet from "components/SwipeableBottomSheet";
import SearchField from "components/inputs/SearchField";
import JournalPreviewItemList from "components/JournalPreviewItemList";

export default {
  name: "Home",
  components: {
    SwipeableBottomSheet,
    SearchField,
    JournalPreviewItemList
  },
  data() {
    return {
      journalData: 1
    };
  },
  methods: {
    goToSearchPage() {
      this.$router.push("search");
    }
  }
};
</script>
