<template>
  <div style="width: 280px;">
    <JournalDistortionButton
      v-for="(distortion, index) in distortionList"
      style="margin-bottom: 8px;"
      :key="index"
      :distortion="distortion"
      :is-selected="isSelected(distortion)"
      @click.native="selectDistortion(distortion.title)"
    />
  </div>
</template>

<script>
import JournalDistortionButton from "components/inputs/JournalDistortionButton";

const distortionLabelList = [
  {
    title: "All-or-None Thinking",
    desc: `“Semuanya selalu mengecewakanku”`
  },
  {
    title: "Overgeneralization",
    desc: `“Aku ditolak, aku akan selalu sendiri”`
  },
  {
    title: "Mental Filter",
    desc: `“Aku belum selesai, pasti nilaiku jelek”`
  },
  {
    title: "Disqualifying the Positive",
    desc: `“Pujian darinya itu, tidak ada artinya”`
  },
  {
    title: "Mind Reading",
    desc: `“Dia hanya lewat, pasti membenciku”`
  },
  {
    title: "Fortune Teller Error",
    desc: `“Pasti dia akan berpikir aku berisik”`
  },
  {
    title: "Magnification",
    desc: `“Aku gagal, semua akan membenciku”`
  },
  {
    title: "Minimization",
    desc: `“Beasiswa itu hanya keberuntungan”`
  },
  {
    title: "Emotional Reasoning",
    desc: `“Aku menyesal, pasti aku telah salah”`
  },
  {
    title: "Should Statements",
    desc: `“Harusnya dia datang lebih cepat”`
  },
  {
    title: "Labeling",
    desc: `“Aku adalah orang yang selalu gagal”`
  },
  {
    title: "Mislabeling",
    desc: `“Kerjaku hanya makan. Seperti babi”`
  },
  {
    title: "Personalization",
    desc: `“Itu pasti salahku, aku menasihatinya”`
  }
];

export default {
  name: "JournalDistortionPicker",
  props: {
    selectedDistortion: Array
  },
  data() {
    return {
      distortionList: distortionLabelList
    };
  },
  components: {
    JournalDistortionButton
  },
  methods: {
    selectDistortion(distortionTitle) {
      this.$emit("choose-distortion", distortionTitle);
    },
    isSelected(distortion) {
      return this.selectedDistortion.indexOf(distortion.title) > -1;
    }
  }
};
</script>
