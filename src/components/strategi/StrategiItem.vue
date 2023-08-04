<template>
  <div>
    <!-- title -->
    <div class="row items-center" style="margin-bottom: 16px">
      <img
        :src="trigger_category[strategiData.category].img"
        style="margin-right: 12px"
      />
      <div class="col-grow text__neutral-black">
        <div class="text__title-2">
          {{ strategiData.story_penyebab.title }}
        </div>
        <!-- <div class="text__footnote">
          <span>{{ trigger_category[strategiData.category].title }}</span>
          <span style="margin-inline: 8px; color: #DEDEDE">|</span>
          <span>{{ strategiData.date.split("-")[0] }}</span>
        </div> -->
      </div>
      <div>{{ strategiData.date.split("-")[0].split(",")[1] }}</div>
    </div>

    <div class="note" style="margin-bottom: 12px">
      <div class="note__title text__headline text__neutral-black">
        Tujuan
      </div>
      <div class="note__content">
        {{ strategiData.story_penyebab.detail }}
      </div>
    </div>

    <div class="note" style="margin-bottom: 12px">
      <div class="note--title text__headline text__neutral-black">
        <div>
          Tangga Ketakutan
        </div>
        <div class="attached attached--accent">
          10 Level
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { TRIGGER_CATEGORY } from "src/data/strategi/StrategiModel";

export default {
  props: {
    strategiData: Object
  },
  data() {
    return {
      trigger_category: TRIGGER_CATEGORY
    };
  }
};
</script>

<style lang="scss" scoped>
.note {
  width: 100%;
  padding: 16px;
  background-color: #f2f6ff;
  text-align: left;
  border-radius: 8px;

  &--title {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
