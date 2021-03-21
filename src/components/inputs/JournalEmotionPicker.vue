<template>
  <div>
    <JournalEmotionButton
      v-for="(emotion, index) in emotionList"
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

const emotionLabelList = [
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
];

export default {
  name: "JournalEmotionPicker",
  components: { JournalEmotionButton },
  props: {
    selectedEmotion: Array
  },
  data() {
    return {
      emotionList: emotionLabelList
    };
  },
  methods: {
    selectEmotion(emotion) {
      this.$emit("choose-emotion", emotion);
    },
    isSelected(emotion) {
      return this.selectedEmotion.indexOf(emotion) > -1;
    },
    test(emotion) {
      console.log(emotion);
    }
  }
};
</script>
