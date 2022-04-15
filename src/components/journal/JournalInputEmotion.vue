<template>
  <div class="journal-input-emotion column">
    <!-- header navigation -->
    <div class="col-auto" style="margin-bottom: 24px;">
      <img
        svg-inline
        class="fill-primary"
        src="assets/icons/general/arrow-left.svg"
        style="width: 24px; height: 24px;"
        @click="goBack()"
      />
    </div>

    <div class="column col" style="width: 280px; margin: auto">
      <div
        class="col-auto text__title-3 text-center"
        style="margin-bottom: 24px"
      >
        Apa saja emosi yang kamu rasakan?
      </div>

      <div class="column col">
        <ButtonToggle
          class="col-auto"
          style="margin-bottom: 12px;"
          @change-emotion-state="changeEmotionState"
          :selected-state="emotionState"
        />
        <JournalEmotionPicker
          class="col scroll hide-scrollbar"
          :emotion-state="emotionState"
          :selected-emotion="selectedEmotion"
          @select-emotion-negatif="selectEmotionNegatif"
          v-on="$listeners"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ButtonToggle from "components/inputs/ButtonToggle";
import JournalEmotionPicker from "components/inputs/JournalEmotionPicker";

export default {
  name: "JournalInputEmotion",
  components: { ButtonToggle, JournalEmotionPicker },
  props: {
    selectedEmotion: Array
  },
  data() {
    return {
      emotionState: "negatif",
      selectedEmotionNegatif: false
    };
  },
  methods: {
    goBack() {
      this.$emit("go-back", true);
    },
    changeEmotionState(state) {
      this.emotionState = state;
    },
    selectEmotionNegatif(state) {
      console.log("select emotion negatif");
      this.$emit("select-emotion-negatif", state);
    }
  }
};
</script>
