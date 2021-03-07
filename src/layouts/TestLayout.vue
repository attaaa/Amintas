<template>
  <div>
    <div class="test">
      <div>
        <h2>Test</h2>
      </div>
      <SwipeableBottomSheet ref="bottomSheet" :halfY="0.4" default-state="open">
        <div v-if="journalData">
          <SearchField />
          <JournalPreviewItem />
        </div>
        <div v-if="!journalData">
          test
        </div>
      </SwipeableBottomSheet>
    </div>
    <MainNavbar />
  </div>
</template>

<style lang="scss">
.test {
  box-sizing: border-box;
  margin-bottom: 64px;
  position: relative;
}
</style>

<script>
import MainNavbar from "components/MainNavbar";
import SwipeableBottomSheet from "components/SwipeableBottomSheet";
import SearchField from "components/inputs/SearchField";
import JournalPreviewItem from "components/JournalPreviewItem";

export default {
  name: "TestLayout",
  components: {
    MainNavbar,
    SwipeableBottomSheet,
    SearchField,
    JournalPreviewItem
  },
  data() {
    return {
      journalData: null
    };
  }
};
</script>
