<template>
  <div class="journal-input column full-height no-scroll">
    <div class="journal-input--content col">
      <JournalInputMood
        v-if="inputState === 'mood'"
        :selected-mood="selectedMood"
        @change-mood="selectMood"
        @go-back="goBack()"
      />
      <JournalInputEmotion
        v-else-if="inputState === 'emotion'"
        class="full-height"
        :selected-emotion="selectedEmotion"
        @choose-emotion="selectEmotion"
        @go-back="goBack()"
      />
      <JournalInputStory
        v-else-if="inputState === 'story'"
        class="full-height"
        :input-var="story"
        @input-story-listener="onChangeStory"
        @go-back="goBack()"
      />
      <JournalInputIdentif
        v-else-if="inputState === 'identification'"
        class="full-height"
        :input-var="indentification"
        :placeholder="placeholder.indentification"
        @input-listener="onInputIdentification"
        @go-back="goBack()"
      />
      <JournalInputDistortion
        v-else-if="inputState === 'distortion'"
        class="full-height"
        :selected-distortion="selectedDistortion"
        @choose-distortion="onSelectDistortion"
        @go-back="goBack()"
      />
    </div>
    <div class="journal-input--action col-auto">
      <button
        v-if="!nextButtonActive"
        class="btn__large btn__disabled text__neutral-dark-grey full-width"
        disabled
      >
        Lanjut
      </button>
      <button
        v-else
        class="btn__large btn__accent full-width"
        @click="goNext()"
      >
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
    background-color: #fff;
  }
}
</style>

<script>
import JournalInputMood from "components/journal/JournalInputMood";
import JournalInputEmotion from "components/journal/JournalInputEmotion";
import JournalInputStory from "components/journal/JournalInputStory";
import JournalInputIdentif from "components/journal/JournalInputIdentif";
import JournalInputDistortion from "components/journal/JournalInputDistortion";

export default {
  name: "JournalInput",
  components: {
    JournalInputMood,
    JournalInputEmotion,
    JournalInputStory,
    JournalInputIdentif,
    JournalInputDistortion
  },
  data() {
    return {
      inputStateList: [
        "mood",
        "emotion",
        "story",
        "identification",
        "distortion"
      ],
      inputState: "",
      nextButtonActive: false,
      placeholder: {
        indentification: "Tulis pikiran mengganggumu disini"
      },
      // input data model
      selectedMood: "",
      selectedEmotion: [],
      story: {
        title: "",
        content: ""
      },
      indentification: "",
      selectedDistortion: []
    };
  },
  mounted() {
    this.inputState = "distortion";
  },
  methods: {
    selectMood(moodName) {
      this.selectedMood = moodName;
      this.nextButtonActive = true;
    },
    selectEmotion(emotion) {
      let currSelectedEmotion = this.selectedEmotion;
      const idx = currSelectedEmotion.indexOf(emotion);
      if (idx > -1) {
        currSelectedEmotion.splice(idx, 1);
        this.selectedEmotion = currSelectedEmotion;
      } else {
        currSelectedEmotion.push(emotion);
        this.selectedEmotion = currSelectedEmotion;
      }

      this.nextButtonActive = currSelectedEmotion.length > 0;
    },
    onChangeStory(story) {
      this.story = story;
      if (this.story.title !== "" && this.story.content !== "") {
        this.nextButtonActive = true;
      }
    },
    onInputIdentification(identification) {
      this.indentification = identification;
      if (this.indentification !== "") {
        this.nextButtonActive = true;
      }
    },
    onSelectDistortion(distortionTitle) {
      let currSelectedDistortion = this.selectedDistortion;
      const idx = currSelectedDistortion.indexOf(distortionTitle);
      if (idx > -1) {
        currSelectedDistortion.splice(idx, 1);
        this.selectedDistortion = currSelectedDistortion;
      } else {
        currSelectedDistortion.push(distortionTitle);
        this.selectedDistortion = currSelectedDistortion;
      }

      this.nextButtonActive = currSelectedDistortion.length > 0;
    },
    goNext() {
      const currInputState = this.inputState;
      const idx = this.inputStateList.indexOf(currInputState);
      this.inputState = this.inputStateList[idx + 1];
      this.nextButtonActive = false;

      if (this.inputState === "emotion" && this.selectedEmotion.length > 0) {
        this.nextButtonActive = true;
      } else if (
        this.inputState === "story" &&
        this.story.title !== "" &&
        this.story.content !== ""
      ) {
        this.nextButtonActive = true;
      } else if (
        this.inputState === "identification" &&
        this.identification !== ""
      ) {
        this.nextButtonActive = true;
      }
    },
    goBack() {
      const currInputState = this.inputState;
      const idx = this.inputStateList.indexOf(currInputState);
      if (idx > 0) {
        this.inputState = this.inputStateList[idx - 1];
        this.nextButtonActive = true;
      } else {
        this.$router.back();
      }
    }
  }
};
</script>
