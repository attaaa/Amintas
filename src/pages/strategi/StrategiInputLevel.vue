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
        v-if="activities.length > 0"
        class="full-width overflow-hidden"
        style="padding-inline: 16px"
      >
        <div
          v-for="(activity, index) of activities"
          :key="`activity-${index}`"
          @click="selectIdx(index)"
        >
          <TableLadderLevel
            :label="activity.name"
            :custom-val="activity.level"
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
            @click="closePopup()"
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
            v-for="level of availableLevels"
            :key="'ilvl' + level"
            @click="selectValue(level)"
            :class="tempSelectedLevel == level ? 'active' : ''"
          >
            {{ level }}
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
          <img style="height: 156px;" src="img/popup_activation.png" />
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
      activities: [
        {
          name: "",
          level: ""
        }
      ],
      idxSelectedArr: null,
      availableLevels: [],
      tempSelectedLevel: null
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
      return this.activities.every(activity => activity.level !== null);
    }
  },
  created() {
    this.availableLevels = Array.from({ length: 10 }, (_, index) => index + 1);
    this.activities = [...this.strategiInputData.activities];
  },
  methods: {
    getHeightForPopUp(height) {
      return window.innerHeight - height;
    },
    selectIdx(idx) {
      this.idxSelectedArr = idx;
      this.$refs.popUpLevel.setState("open");
    },
    selectValue(level) {
      this.tempSelectedLevel = level;
    },
    activateLevel() {
      const tempActivities = JSON.parse(JSON.stringify(this.activities));
      console.log(tempActivities);
      tempActivities[this.idxSelectedArr].level = this.tempSelectedLevel;

      this.activities = [...tempActivities];
      this.availableLevels = this.availableLevels.filter(
        level => level !== this.tempSelectedLevel
      );

      this.closePopup();
    },
    closePopup() {
      this.idxSelectedArr = null;
      this.tempSelectedLevel = null;
      this.$refs.popUpLevel.setState("close");
    },
    activateStrategi() {
      this.$store.dispatch("strategi/updateInputStrategi", {
        ...this.strategiInputData,
        activities: [...this.activities]
      });
      this.$store.dispatch("strategi/activateStrategi");
      this.$store.commit("strategi/sortActivity");
      this.$router.replace("/strategi");
    }
  }
};
</script>

<style lang="scss" scoped>
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
