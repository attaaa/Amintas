<template>
  <div class="">
    <!-- header navigation -->
    <div style="margin: 16px 12px;" @click="() => this.$router.push()">
      <img
        svg-inline
        class="fill-primary"
        src="assets/icons/general/arrow-left.svg"
        style="width: 24px; height: 24px;"
      />
    </div>

    <!-- text title -->
    <p
      class="text__title-3 text-center"
      style="margin-bottom: 56px; width: 296px; margin-left: auto; margin-right: auto;"
    >
      Bagaimana suasana hatimu saat ini?
    </p>

    <!-- mood selector -->
    <JournalMoodPicker v-on="$listeners" :selected-mood="journalData.mood" />

    <!-- action -->
    <div class="action">
      <button class="btn__large btn__accent full-width">
        Simpan
      </button>
    </div>
  </div>
</template>

<script>
import JournalMoodPicker from "components/inputs/JournalMoodPicker";

export default {
  name: "JournalEditMood",
  components: { JournalMoodPicker },
  props: {
    selectedMood: String
  },
  methods: {},
  computed: {
    journalData() {
      return this.$store.getters["journal/getJournalData"](
        this.$route.params.id
      )[0];
    }
  }
};
</script>

<style>
.action {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 16px 16px 24px;

  position: absolute;
  width: 100%;
  height: 88px;
  left: 0px;
  bottom: 0px;

  background: #ffffff;
  box-shadow: 0px 2px 4px 1px rgba(48, 48, 48, 0.08);
}
</style>
