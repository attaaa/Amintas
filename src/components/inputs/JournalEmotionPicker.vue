<template>
  <div>
    <JournalEmotionButton
      v-for="(emotion, index) in emotionList[emotionState]"
      :key="index"
      :emotion="emotion"
      :is-selected="isSelected(emotion)"
      style="margin-bottom: 8px;"
      @click.native="selectEmotion(emotion)"
    />
  </div>
</template>

<script>
import JournalEmotionButton from "components/inputs/JournalEmotionButton";

const emotionLabelList = {
  negatif: [
    "marah",
    "kecewa",
    "malu",
    "hampa",
    "frustasi",
    "menyesal",
    "putus asa",
    "kesepian",
    "gugup",
    "kewalahan",
    "sedih",
    "takut",
    "stress",
    "khawatir"
  ],
  positif: [
    "percaya diri",
    "bersemangat",
    "terpenuhi",
    "bersyukur",
    "tenang",
    "terinspirasi",
    "dicintai",
    "termotivasi",
    "optimis",
    // "tenang",
    "bangga",
    "santai",
    "lega",
    "puas"
  ]
};

export default {
  name: "JournalEmotionPicker",
  components: { JournalEmotionButton },
  props: {
    selectedEmotion: Array,
    emotionState: String
  },
  data() {
    return {
      emotionList: emotionLabelList
    };
  },
  methods: {
    selectEmotion(emotion) {
      this.$emit("choose-emotion", emotion);

      // find if in selected emotion contains negatif emotion
      if (this.emotionState === "negatif") {
        const isContainsNegatif = this.selectedEmotion.some(item =>
          emotionLabelList["negatif"].includes(item)
        );
        this.$emit("select-emotion-negatif", isContainsNegatif);
      }
    },
    isSelected(emotion) {
      return this.selectedEmotion.indexOf(emotion) > -1;
    }
  }
};
</script>
