<template>
  <div class="journal-input-mood">
    <!-- header navigation -->
    <div style="margin-bottom: 24px;">
      <img
        svg-inline
        class="fill-primary"
        src="assets/icons/general/arrow-left.svg"
        style="width: 24px; height: 24px;"
        @click="goBack()"
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
    <JournalMoodPicker v-on="$listeners" :selected-mood="selectedMood" />
  </div>
</template>

<script>
import JournalMoodPicker from "components/inputs/JournalMoodPicker";

export default {
  name: "JournalInputMood",
  components: { JournalMoodPicker },
  props: {
    selectedMood: String
  },
  methods: {
    goBack() {
      this.$emit("go-back", true);
    }
  }
};
</script>
