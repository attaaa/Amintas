<template>
  <div>
    <FillLayout
      title="Aktivitas atau situasi apa yang akan kamu lakukan?"
      :showAction="showAction"
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
          :key="`activity-${index}`"
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
            @click="cancelLevel"
          >
            <img src="assets/icons/general/close.svg" />
          </div>
          <div class="text__title-3 text__neutral-black">
            Level Ketakutan
          </div>
        </div>
        <!-- level list input -->
        <div
          class="popup-level--input-container text__headline text__neutral-black"
        >
          <div
            class="level-input--item"
            v-for="(input, index) of levels_input"
            :key="'ilvl' + input"
            @click="selectValue(input, index)"
            :class="curr_selected_level_idx == index ? 'active' : ''"
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
          <img style="height: 156px;" src="/img/popup_activation.png" />
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
            @click="() => this.$refs.popUpAktifkan.setState('close')"
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
      curr_levels_input: null,
      curr_selected_level: null,
      curr_selected_level_idx: null
    };
  },
  computed: {
    strategiInputData() {
      return this.$store.state.strategi.strategiInputData;
    },
    markdownToHtml() {
      return marked(DistorsiKognitif);
    },
    showAction() {
      if (this.levels) {
        for (let i = 0; i < this.levels.length; i++) {
          if (this.levels === 0) return false;
        }
        return true;
      }

      return false;
    }
  },
  mounted() {
    console.log("strategi input data", this.strategiInputData);
    this.levels = this.strategiInputData.levels;
    console.log(this.levels);
    if (!this.levels) {
      console.log("go in this");
      this.levels = [...this.strategiInputData.activities.map(_ => 0)];
      this.curr_levels_input = [
        ...this.strategiInputData.activities.map((_, idx) => idx + 1)
      ];
      return;
    }

    this.levels = [...this.strategiInputData.levels];
    this.curr_levels_input = [];

    // this.levels_input = [
    //   ...this.strategiInputData.activities.map((_, idx) => idx + 1)
    // ];
  },
  methods: {
    getHeightForPopUp(height) {
      return window.innerHeight - height;
    },
    selectIdx(idx) {
      // build level selection
      console.log("curr levels input", this.curr_levels_input);
      const curr_level_selected = this.levels[idx];
      console.log("curr levels selected", curr_level_selected);
      console.log(this.curr_levels_input.indexOf(curr_level_selected));
      if (
        curr_level_selected &&
        this.curr_levels_input.indexOf(curr_level_selected) == -1
      ) {
        console.log("activites already selected level");
        const temp = [...this.curr_levels_input];
        this.levels_input = [];
        temp.forEach(level => {
          if (curr_level_selected > level) {
            this.levels_input.push(curr_level_selected);
          }
          this.levels_input.push(level);
        });
      } else {
        this.levels_input = [...this.curr_levels_input];
      }

      this.selected_idx = idx;
      this.$refs.popUpLevel.setState("open");
      return;
    },
    selectValue(input_val, idx) {
      this.curr_selected_level = input_val;
      this.curr_selected_level_idx = idx;
      return;
    },
    activateLevel() {
      const temp = [...this.levels];
      temp[this.selected_idx] = this.curr_selected_level;
      this.levels = [...temp];

      this.$store.dispatch("strategi/updateInputStrategi", {
        ...this.strategiInputData,
        levels: this.levels
      });

      const temp2 = [...this.levels_input];
      temp2.splice(this.curr_selected_level_idx, 1);
      this.curr_levels_input = [...temp2];

      this.curr_selected_level = null;
      ``;
      this.curr_selected_level_idx = null;

      this.$refs.popUpLevel.setState("close");
      return;
    },
    cancelLevel() {
      this.curr_selected_level = null;
      this.curr_selected_level_idx = null;
      this.$refs.popUpLevel.setState("close");
    },
    activateStrategi() {
      this.$store.dispatch("strategi/activateStrategi");
      this.$router.push("/strategi");
    }
  }
};
</script>

<style lang="scss">
.popup-level--header {
  padding: 16px;
  background: #ffffff;
  box-shadow: 0px 1px 4px -2px rgba(48, 48, 48, 0.08);
  border-radius: 0px;
}

.popup-level--input-container {
  height: 162px;
  overflow: scroll;
  padding-inline: 16px;
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
  border-radius: 4px;

  &.active {
    background-color: #f1f2f5;
  }

  &:nth-child(1) {
    margin-top: 16px;
  }
}
</style>
