<template>
  <div class="journal-input column full-height no-scroll relative-position">
    <div class="journal-input--content col">
      <JournalInputMood
        v-if="inputState === 'mood'"
        :selected-mood="journalData.mood"
        @change-mood="selectMood"
        @go-back="$router.replace('/')"
      />
      <JournalInputEmotion
        v-else-if="inputState === 'emotion'"
        class="full-height"
        :selected-emotion="journalData.emotions"
        @select-emotion-negatif="selectEmotionNegatif"
        @choose-emotion="selectEmotion"
        @go-back="goBack()"
      />
      <JournalInputStory
        v-else-if="inputState === 'story'"
        class="full-height"
        :input-var="journalData.story"
        @input-story-listener="onChangeStory"
        @go-back="goBack()"
      />
      <JournalInputIdentif
        v-else-if="inputState === 'identification'"
        class="full-height"
        :input-var="journalData.identification"
        :placeholder="placeholder.identification"
        @input-listener="onInputIdentification"
        @go-back="goBack()"
        @skip-input="goNext()"
      />
      <JournalInputDistortion
        v-else-if="inputState === 'distortion'"
        class="full-height"
        :selected-distortion="journalData.distortions"
        @choose-distortion="onSelectDistortion"
        @go-back="goBack()"
        @skip-input="goNext()"
      />
      <JournalInputChallenge
        v-else-if="inputState === 'challenge'"
        class="full-height"
        :input-var="journalData.challenge"
        :placeholder="placeholder.challenge"
        @input-listener="onInputChallenge"
        @go-back="goBack()"
        @skip-input="goNext()"
      />
      <JournalInputAlternative
        v-else-if="inputState === 'alternative'"
        class="full-height"
        :input-var="journalData.alternative"
        :placeholder="placeholder.alternative"
        @input-listener="onInputAlternative"
        @go-back="goBack()"
        @skip-input="goNext()"
      />
    </div>
    <div
      class="journal-input--action col-auto"
      :class="[nextButtonActive ? 'show-action' : 'hide-action']"
    >
      <button class="btn__large btn__accent full-width" @click="goNext()">
        Lanjut
      </button>
    </div>
    <PopUp ref="popUpSubmit" :enable-pan-area="false">
      <!-- illustration -->
      <div
        class="placeholder-illustration flex"
        style="height: 188px; margin: 8px;"
      >
        <img
          style="width: 100%; border-radius: 8px"
          src="img/popup_finishing.png"
        />
      </div>

      <span
        class="block text__primary text__title-3 full-width text-center"
        style="margin-top: 24px; margin-bottom: 16px;"
        >Simpan Jurnal?
      </span>
      <p
        class="text__body text__neutral-dark-grey text-center"
        style="margin-bottom: 48px"
      >
        Cerita di dalamnya akan disimpan. Apakah kamu yakin ingin menyimpan
        ceritamu?
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

    <PopUp ref="popUpCancel">
      <!-- illustration -->
      <div
        class="placeholder-illustration flex"
        style="height: 188px; margin: 8px;"
      ></div>

      <span
        class="block text__primary text__title-3 full-width text-center"
        style="margin-top: 24px; margin-bottom: 16px;"
        >Buang Perubahan?
      </span>
      <p
        class="text__body text__neutral-dark-grey text-center"
        style="margin-bottom: 48px"
      >
        Perubahanmu di sini belum tersimpan. Apakah kamu yakin ingin
        meninggalkan halaman ini?
      </p>

      <div class="pop-up--action row">
        <button
          class="btn__large btn__alert col relative-position text-white"
          @click="$router.replace('/')"
          v-ripple
        >
          Tingalkan Halaman
        </button>
        <div style="width: 16px;"></div>
        <button
          class="btn__large btn__secondary text__primary col-auto relative-position "
          @click="hidePopUpCancel()"
          v-ripple
        >
          Tidak
        </button>
      </div>
    </PopUp>
  </div>
</template>

<style lang="scss" scoped>
.journal-input {
  &--content {
    padding: 22px 16px 0 16px;
  }

  &--action {
    box-shadow: 0px 2px 4px 1px rgba(48, 48, 48, 0.12);
    padding: 16px 16px 24px 16px;
    background-color: #fff;
    position: relative;
    z-index: 40px;

    &.hide-action {
      display: none;
      bottom: -88px;
    }

    &.show-action {
      bottom: 0;
      display: block;
      transition: bottom 500ms cubic-bezier(0.465, 0.183, 0.153, 0.946);
    }
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
      selectedEmotionNegatif: false,
      journalData: {
        id: 0,
        created_at: "",
        created_date: null,
        mood: "",
        emotions: [],
        story: {
          title: "",
          detail: ""
        },
        identification: "",
        distortions: [],
        challenge: "",
        alternative: ""
      }
    };
  },
  mounted() {
    if (this.$route.params.id !== undefined) {
      this.journalData = {
        ...this.$store.getters["journal/getJournalData"](
          this.$route.params.id
        )[0]
      };
      this.nextButtonActive = true;
    }
  },
  methods: {
    // helper for ui
    selectEmotionNegatif(state) {
      console.log(state);
      this.selectedEmotionNegatif = state;
    },

    selectMood(moodName) {
      this.journalData.mood = moodName;
      this.nextButtonActive = true;
    },
    selectEmotion(emotion) {
      let currSelectedEmotion = this.journalData.emotions;
      const idx = currSelectedEmotion.indexOf(emotion);
      if (idx > -1) {
        currSelectedEmotion.splice(idx, 1);
        this.journalData.emotions = currSelectedEmotion;
      } else {
        currSelectedEmotion.push(emotion);
        this.journalData.emotions = currSelectedEmotion;
      }

      this.nextButtonActive = currSelectedEmotion.length > 0;
    },
    onChangeStory(story) {
      this.journalData.story = story;
      if (this.journalData.story.detail !== "") {
        this.nextButtonActive = true;
      }
    },
    onInputIdentification(identification) {
      this.journalData.identification = identification;
      if (this.journalData.identification !== "") {
        this.nextButtonActive = true;
      }
    },
    onSelectDistortion(distortionTitle) {
      let currSelectedDistortion = this.journalData.distortions;
      const idx = currSelectedDistortion.indexOf(distortionTitle);
      if (idx > -1) {
        currSelectedDistortion.splice(idx, 1);
        this.journalData.distortions = currSelectedDistortion;
      } else {
        currSelectedDistortion.push(distortionTitle);
        this.journalData.distortions = currSelectedDistortion;
      }

      this.nextButtonActive = this.journalData.distortions.length > 0;
    },
    onInputChallenge(challenge) {
      this.journalData.challenge = challenge;
      if (this.journalData.challenge !== "") {
        this.nextButtonActive = true;
      }
    },
    onInputAlternative(alternative) {
      this.journalData.alternative = alternative;
      if (this.journalData.alternative !== "") {
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
        this.$refs.popUpCancel.setState("open");
      }
    },
    checkInputed() {
      if (this.inputState === "mood" && this.journalData.mood !== "") {
        this.nextButtonActive = true;
      } else if (
        this.inputState === "emotion" &&
        this.journalData.emotions.length > 0
      ) {
        this.nextButtonActive = true;
      } else if (
        this.inputState === "story" &&
        this.journalData.story.detail !== ""
      ) {
        this.nextButtonActive = true;
      } else if (
        this.inputState === "identification" &&
        this.journalData.identification !== ""
      ) {
        this.nextButtonActive = true;
      } else if (
        this.inputState === "distortion" &&
        this.journalData.distortions.length > 0
      ) {
        this.nextButtonActive = true;
      } else if (
        this.inputState === "challenge" &&
        this.journalData.challenge !== ""
      ) {
        this.nextButtonActive = true;
      } else if (
        this.inputState === "alternative" &&
        this.journalData.alternative !== ""
      ) {
        this.nextButtonActive = true;
      } else {
        this.nextButtonActive = false;
      }
    },
    hidePopUpSubmit() {
      this.$refs.popUpSubmit.setState("close");
    },
    submitJournal() {
      if (this.$route.params.id === undefined) {
        this.journalData.id = Date.now();
        this.journalData.created_at = generateTimeStamp();
        this.journalData.created_date = new Date();
        this.$store.dispatch("journal/addJournal", this.journalData);
        this.$store.dispatch("app/showToast", "Jurnal baru telah disimpan");
      } else {
        this.$store.dispatch("journal/updateJournal", this.journalData);
      }
      this.$router.replace("/");
    },
    hidePopUpCancel() {
      this.$refs.popUpCancel.setState("close");
    }
  }
};
</script>
