<template>
  <div class="journal-input column full-height">
    <div class="journal-input--content col">
      <JournalInputMood @change-mood="selectMood" />
    </div>
    <div class="journal-input--action col-auto">
      <button
        class="btn__large btn__disabled text__neutral-dark-grey full-width"
        v-if="!nextButtonActive"
        disabled
      >
        Lanjut
      </button>
      <button class="btn__large btn__accent full-width" v-else>
        Lanjut
      </button>
    </div>
  </div>
</template>

<style lang="scss">
.journal-input {
  &--content {
    padding: 22px 16px 0 16px;
  }

  &--action {
    box-shadow: 0px 2px 4px 1px rgba(48, 48, 48, 0.12);
    padding: 16px 16px 24px 16px;
  }
}
</style>

<script>
import JournalInputMood from "components/journal/JournalInputMood";

export default {
  name: "JournalInput",
  components: { JournalInputMood },
  data() {
    return {
      nextButtonActive: false,
      selectedMood: ""
    };
  },
  methods: {
    selectMood(moodName) {
      this.selectedMood = moodName;
      this.nextButtonActive = true;
      console.log(this.selectedMood);
    }
  }
};
</script>
