<template>
  <div>
    <FillLayout
      title="Aktivitas atau situasi apa yang akan kamu lakukan?"
      :showAction="true"
      :showBantuan="true"
      :bantuanHeight="484"
      :bantuanContent="markdownToHtml"
      labelNextAction="Aktifkan Strategi"
      :handleNextAction="
        () => {
          this.$refs.popUpAktifkan.setState('open');
        }
      "
    >
      <div
        v-if="levels"
        class="full-width overflow-hidden"
        style="padding-inline: 16px"
      >
        <div
          v-for="(level, index) of levels"
          :key="index"
          @click="selectIdx(index)"
        >
          <TableLadderLevel
            :label="strategiInputData.activities[index]"
            :custom-val="levels[index]"
          />
          <div class="divider" style="margin: 12px 0 16px" />
        </div>
      </div>
    </FillLayout>
    <!-- POP UP LEVEL SELECTION -->
    <SwipeableBottomSheet
      ref="popUpLevel"
      :can-close="true"
      :open-top="getHeightForPopUp(312)"
      :swipeable="false"
      :use-drag-icon="false"
      :use-overlay="true"
      style="position: fixed"
      default-state="close"
    >
      <div ref="popUpLevelContent">
        <div class="popup-level--header flex items-center">
          <div
            class="flex items-center"
            style="padding: 4px; margin-right: 12px;"
          >
            <img src="assets/icons/general/close.svg" />
          </div>
          <div class="text__title-3 text__neutral-black">
            Level Ketakutan
          </div>
        </div>
        <!-- level list input -->
        <div
          class="popup-level--input-container flex text__headline text__neutral-black"
        >
          <div
            class="level-input--item"
            v-for="input of levels_input"
            :key="'ilvl' + input"
            @click="selectValue(input)"
          >
            {{ input }}
          </div>
        </div>
        <div class="popup-level--action">
          <button
            class="btn__large btn__accent full-width"
            @click="activateLevel()"
          >
            Pilih
          </button>
        </div>
      </div>
    </SwipeableBottomSheet>

    <!-- POP UP AKTIFKAN CONFIRMATION -->
    <SwipeableBottomSheet
      ref="popUpAktifkan"
      default-state="close"
      :open-top="getHeightForPopUp(420)"
      :use-overlay="true"
      :can-close="true"
      :use-drag-icon="false"
    >
      <div class="info-content" style="padding: 24px 16px 0;">
        <div class="text-center bg-secondary" style="border-radius: 8px;">
          <img style="height: 156px;" src="/img/popup-activation.png" />
        </div>
        <div
          class="text__primary text__title-2 text-center"
          style="margin-top: 24px; margin-bottom: 12px;"
        >
          Distorsi Kognitif?
        </div>

        <p
          class="text-center text__body text__neutral-dark-grey"
          style="margin-bottom: 48px"
        >
          Strategi akan disimpan dan aktif. Apakah kamu yakin ingin mengaktifkan
          strategi?
        </p>

        <div class="row items-end ">
          <button
            class="btn__large btn__alert-secondary col-auto relative-position"
            v-ripple
          >
            Batal
          </button>
          <div style="width: 16px;"></div>
          <button
            class="btn__large btn__accent col relative-position"
            @click="activateStrategi()"
            v-ripple
          >
            Aktifkan
          </button>
        </div>
      </div>
    </SwipeableBottomSheet>
  </div>
</template>

<script>
import TableLadderLevel from "src/components/strategi/TableLadderLevel.vue";
import FillLayout from "src/layouts/FillLayout.vue";

import DistorsiKognitif from "!!raw-loader!../../data/info/DistorsiKognitif.md";
import { marked } from "marked";
import SwipeableBottomSheet from "src/components/SwipeableBottomSheet.vue";

export default {
  name: "StrategiInputLevel",
  components: { FillLayout, TableLadderLevel, SwipeableBottomSheet },
  data() {
    return {
      levels: null,
      levels_input: null,
      selected_idx: null,
      curr_selected_level: null
    };
  },
  mounted() {
    this.levels = [...this.strategiInputData.activities.map(_ => 0)];
    this.levels_input = [
      ...this.strategiInputData.activities.map((_, idx) => idx + 1)
    ];
  },
  methods: {
    getHeightForPopUp(height) {
      return window.innerHeight - height;
    },
    selectIdx(idx) {
      this.selected_idx = idx;
      this.$refs.popUpLevel.setState("open");
      return;
    },
    selectValue(input_val) {
      const temp = [...this.levels];
      temp[this.selected_idx] = input_val;
      this.levels = [...temp];
      this.curr_selected_level = input_val;
      return;
    },
    activateLevel() {
      this.$store.dispatch("strategi/updateInputStrategi", {
        ...this.strategiInputData,
        levels: this.levels
      });

      const temp2 = [...this.levels_input];
      temp2.splice(this.curr_selected_level - 1, this.curr_selected_level);
      this.levels_input = [...temp2];

      this.$refs.popUpLevel.setState("close");
      return;
    },
    activateStrategi() {
      this.$store.dispatch("strategi/activateStrategi");
      this.$router.push("/strategi");
    }
  },
  computed: {
    strategiInputData() {
      return this.$store.state.strategi.strategiInputData;
    },
    markdownToHtml() {
      return marked(DistorsiKognitif);
    }
  }
};
</script>

<style>
.popup-level--header {
  padding: 16px;
  background: #ffffff;
  box-shadow: 0px 1px 4px -2px rgba(48, 48, 48, 0.08);
  border-radius: 0px;
}

.popup-level--input-container {
  height: 162px;
  overflow: scroll;
}

.popup-level--action {
  padding: 16px 16px 24px;
  background: #ffffff;
  box-shadow: 0px 2px 4px 1px rgba(48, 48, 48, 0.08);
}

.level-input--item {
  width: 100%;
  text-align: center;
  padding: 4px;
}
</style>
