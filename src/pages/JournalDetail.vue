<template>
  <div class="journal-detail hide-scrollbar">
    <div
      class="journal-detail--header"
      style="padding: 16px; margin-bottom: 8px;"
    >
      <div
        class="flex justify-between items-center"
        style="margin-bottom: 30px;"
      >
        <img
          svg-inline
          src="assets/icons/general/arrow-left.svg"
          style="width: 24px; fill: #5C7CCD;"
          @click="goBack()"
        />
        <button class="btn__primary btn__small text-white">Edit</button>
      </div>

      <div class="flex">
        <MoodIconLoader mood="sangat buruk" style="margin-right: 16px;" />
        <div class="flex-column justify-between">
          <span class="text__title-2">Sangat Buruk</span>
          <div class="text__footnote">
            <span style="margin-right: 8px">Sabtu, 31 Okt 2020</span>
            <span>21:06</span>
          </div>
        </div>
      </div>
    </div>

    <div style="padding: 16px;">
      <div style="margin-bottom: 16px">
        <div class="text__title-3" style="margin-bottom: 8px">
          Emosi
        </div>
        <div class="flex">
          <LabelMood
            label-text="marah"
            style="margin-right: 8px; margin-bottom: 8px"
          />
          <LabelMood
            label-text="malu"
            style="margin-right: 8px; margin-bottom: 8px"
          />
          <LabelMood
            label-text="putus asa"
            style="margin-right: 8px; margin-bottom: 8px"
          />
          <LabelMood
            label-text="kewalahan"
            style="margin-right: 8px; margin-bottom: 8px"
          />
        </div>
      </div>

      <div style="margin-bottom: 24px;">
        <div class="text__title-3" style="margin-bottom: 8px">
          Detail Cerita
        </div>
        <div class="content-detail">
          <div class="text__title-4 text__primary" style="margin-bottom: 4px">
            Manusia Menyebalkan
          </div>
          <div class="text__body">
            Selayaknya manusia, kita seringkali kesulitan mengungkapkan dengan
            tepat apa yang sebenarnya sedang kita rasakan. Hal yang aneh
            tentunya, mengingat ada banyak ‘diksi’ yang menggambarkan setiap
            emosi manusia. Misal kata-kata seperti tegang, kesal, sedih, dan
            frustasi yang menggambarkan perasaan buruk yang kita rasakan,
            sedangkan kata-kata seperti senang, puas, bersemangat, dan gembira
            menggambarkan kebahagiaan.
          </div>
        </div>
      </div>

      <div style="margin-bottom: 24px;">
        <div class="text__title-3" style="margin-bottom: 8px">
          Pikiran Negatif
        </div>
        <div class="content-detail">
          <div class="text__body">
            Selayaknya manusia, kita seringkali kesulitan mengungkapkan dengan
            tepat apa yang sebenarnya sedang kita rasakan. Hal yang aneh
            tentunya, mengingat ada banyak ‘diksi’ yang menggambarkan setiap
            emosi manusia. Misal kata-kata seperti tegang, kesal, sedih, dan
            frustasi yang menggambarkan perasaan buruk yang kita rasakan,
            sedangkan kata-kata seperti senang, puas, bersemangat, dan gembira
            menggambarkan kebahagiaan.
          </div>
        </div>
      </div>

      <div style="margin-bottom: 24px;">
        <div class="text__title-3" style="margin-bottom: 8px">
          Distorsi Kognitif
        </div>
        <div class="column">
          <div class="row">
            <LabelDistortion label-text="All-or-None Thinking" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.journal-detail {
  &--header {
    background-color: #f2f6ff;
    border-radius: 0px 0px 24px 24px;
  }

  .content-detail {
    padding: 16px;
    background-color: #f2f6ff;
    border-radius: 8px;
  }
}
</style>

<script>
import MoodIconLoader from "components/utils/MoodIconLoader";
import LabelMood from "components/LabelMood";
import LabelDistortion from "components/LabelDistortion";

export default {
  name: "JournalDetail",
  components: { MoodIconLoader, LabelMood, LabelDistortion },
  methods: {
    goBack() {
      this.$router.back();
    }
  }
};
</script>
