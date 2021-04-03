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
        :input-var="identification"
        :placeholder="placeholder.identification"
        @input-listener="onInputIdentification"
        @go-back="goBack()"
        @skip-input="goNext()"
      />
      <JournalInputDistortion
        v-else-if="inputState === 'distortion'"
        class="full-height"
        :selected-distortion="selectedDistortion"
        @choose-distortion="onSelectDistortion"
        @go-back="goBack()"
        @skip-input="goNext()"
      />
      <JournalInputChallenge
        v-else-if="inputState === 'challenge'"
        class="full-height"
        :input-var="challenge"
        :placeholder="placeholder.challenge"
        @input-listener="onInputChallenge"
        @go-back="goBack()"
        @skip-input="goNext()"
      />
      <JournalInputAlternative
        v-else-if="inputState === 'alternative'"
        class="full-height"
        :input-var="alternative"
        :placeholder="placeholder.alternative"
        @input-listener="onInputAlternative"
        @go-back="goBack()"
        @skip-input="goNext()"
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
    <PopUp ref="popUpSubmit">
      <!-- illustration -->
      <div
        class="placeholder-illustration flex"
        style="height: 188px; margin: 8px;"
      ></div>

      <span
        class="block text__primary text__title-3 full-width text-center"
        style="margin-top: 24px; margin-bottom: 16px;"
        >Simpan Perubahan?
      </span>
      <p
        class="text__body text__neutral-dark-grey text-center"
        style="margin-bottom: 48px"
      >
        Jawabanmu akan terekam pada sesi latihan ini. Apakah kamu yakin ingin
        menyudahi sesi latihan?
      </p>

      <div class="pop-up--action row">
        <button
          class="btn__large btn__alert-secondary col-auto relative-position"
          @click="hidePopUpSubmit"
          v-ripple
        >
          Batal
        </button>
        <div style="width: 16px;"></div>
        <button
          class="btn__large btn__accent col relative-position"
          @click="submitJournal"
          v-ripple
        >
          Simpan
        </button>
      </div>
    </PopUp>
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
import JournalInputChallenge from "components/journal/JournalInputChallenge";
import JournalInputAlternative from "components/journal/JournalInputAlternative";
import PopUp from "components/bottomsheet/PopUp";
import { generateTimeStamp } from "src/helper/generateDate";

export default {
  name: "JournalInput",
  components: {
    JournalInputMood,
    JournalInputEmotion,
    JournalInputStory,
    JournalInputIdentif,
    JournalInputDistortion,
    JournalInputChallenge,
    JournalInputAlternative,
    PopUp
  },
  data() {
    return {
      inputStateList: [
        "mood",
        "emotion",
        "story",
        "identification",
        "distortion",
        "challenge",
        "alternative"
      ],
      inputState: "mood",
      nextButtonActive: false,
      placeholder: {
        identification: "Tulis pikiran mengganggumu disini",
        challenge: "Tulis tantangan terhadap pikiranmu",
        alternative: "Tulis alternatif pikiran dari ceritamu"
      },
      // input data model
      selectedMood: "",
      selectedEmotion: [],
      story: {
        title: "",
        content: ""
      },
      identification: "",
      selectedDistortion: [],
      challenge: "",
      alternative: ""
    };
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
      this.identification = identification;
      if (this.identification !== "") {
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

      this.nextButtonActive = this.selectedDistortion.length > 0;
    },
    onInputChallenge(challenge) {
      this.challenge = challenge;
      if (this.challenge !== "") {
        this.nextButtonActive = true;
      }
    },
    onInputAlternative(alternative) {
      this.alternative = alternative;
      if (this.alternative !== "") {
        this.nextButtonActive = true;
      }
    },
    goNext() {
      const currInputState = this.inputState;
      const idx = this.inputStateList.indexOf(currInputState);

      if (idx === this.inputStateList.length - 1) {
        this.$refs.popUpSubmit.setState("open");
        return;
      }

      this.inputState = this.inputStateList[idx + 1];
      this.nextButtonActive = false;

      this.checkInputed();
    },
    goBack() {
      const currInputState = this.inputState;
      const idx = this.inputStateList.indexOf(currInputState);
      if (idx > 0) {
        this.inputState = this.inputStateList[idx - 1];
        this.checkInputed();
      } else {
        this.$router.back();
      }
    },
    checkInputed() {
      if (this.inputState === "mood" && this.selectedMood !== "") {
        this.nextButtonActive = true;
      } else if (
        this.inputState === "emotion" &&
        this.selectedEmotion.length > 0
      ) {
        this.nextButtonActive = true;
      } else if (
        this.inputState === "story" &&
        this.story.title !== "" &&
        this.story.content !== ""
      ) {
        this.nextButtonActive = true;
      } else if (
        this.inputState === "identification" &&
        this.indentification !== ""
      ) {
        this.nextButtonActive = true;
      } else if (
        this.inputState === "distortion" &&
        this.selectedDistortion.length > 0
      ) {
        this.nextButtonActive = true;
      } else if (this.inputState === "challenge" && this.challenge !== "") {
        this.nextButtonActive = true;
      } else if (this.inputState === "alternative" && this.alternative !== "") {
        this.nextButtonActive = true;
      } else {
        this.nextButtonActive = false;
      }
    },
    hidePopUpSubmit() {
      this.$refs.popUpSubmit.setState("close");
    },
    submitJournal() {
      let journalDataInput = {
        id: Date.now(),
        created_at: generateTimeStamp(),
        mood: this.selectedMood,
        emotions: this.selectedEmotion,
        story: this.story,
        identification: this.identification,
        distortions: this.selectedDistortion,
        challenge: this.challenge,
        alternative: this.alternative
      };

      this.$store.dispatch("journal/addJournal", journalDataInput);
      this.$router.push("/");
    }
  }
};
</script>
