<template>
  <div style="padding: 16px">
    <template v-if="strategiData">
      <!-- header -->
      <div
        class="row justify-between items-center"
        style="margin-bottom: 24px;"
      >
        <div class="text__title-1 text__primary">
          Strategi
        </div>

        <!-- HELP BUTTON -->
        <div class="flex">
          <div @click="$router.push('/strategi/history')" class="q-mr-sm">
            <img svg-inline src="assets/icons/general/history.svg" />
          </div>
          <div @click="$refs.popUpHelp.setState('half')">
            <img src="assets/icons/bantuan-24.svg" />
          </div>
        </div>
      </div>

      <!-- title -->
      <div class="row" style="margin-bottom: 16px">
        <img
          :src="trigger_category[strategiData.category].img"
          style="margin-right: 12px"
        />
        <div class="col-grow text__neutral-black">
          <div class="text__title-2">
            {{ strategiData.story_penyebab.title }}
          </div>
          <div class="text__footnote">
            <span>{{ trigger_category[strategiData.category].title }}</span>
            <span style="margin-inline: 8px; color: #DEDEDE">|</span>
            <span>{{ strategiData.date.split("-")[0] }}</span>
          </div>
        </div>
      </div>

      <!-- DETAIL -->
      <Collapse style="margin-bottom: 12px" label="Detail Cerita">
        <template v-slot:content>
          <div>
            {{ strategiData.story_penyebab.detail }}
          </div>
        </template>
      </Collapse>

      <!-- TUJUAN -->
      <Collapse style="margin-bottom: 12px" label="Tujuan">
        <template v-slot:content>
          <div>
            {{ strategiData.story_tujuan }}
          </div>
        </template>
      </Collapse>

      <!-- TANGGA KETAKUTAN -->
      <Collapse style="margin-bottom: 12px" label="Tangga Ketakutan">
        <template v-slot:preview>
          <FearLadder
            v-if="activeActivityIdx >= 0"
            :text="strategiData.activities[activeActivityIdx].name"
            :level="strategiData.activities[activeActivityIdx].level"
            :checked="strategiData.activities[activeActivityIdx].checked"
            :status="
              selectedActivityIdx === activeActivityIdx
                ? 'pending'
                : strategiData.activities[activeActivityIdx].status
            "
            @toggle-check="onToggleCheck(activeActivityIdx)"
          />
        </template>
        <template v-slot:content>
          <template v-for="(activity, idx) of strategiData.activities">
            <FearLadder
              style="margin-top: 12px"
              :key="idx"
              :text="activity.name"
              :level="activity.level"
              :checked="activity.checked"
              :status="
                selectedActivityIdx === idx ? 'pending' : activity.status
              "
            />
          </template>
        </template>
      </Collapse>

      <!-- TUJUAN -->
      <Collapse
        style="margin-bottom: 12px"
        label="Tips Buatmu"
        :default-open="true"
      >
        <template v-slot:content>
          <ul>
            <li class="text__body q-mb-sm">
              Relaksasi dapat membantumu lebih rileks sebelum menghadapinya.
            </li>
            <li class="text__body">
              Jika kesulitan, cobalah beristirahat dan kembali saat merasa
              nyaman.
            </li>
          </ul>
        </template>
      </Collapse>

      <!-- POP UP SELESAIKAN ACTIVITY CONFIRMATION -->
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
            {{ popupTitle }}
          </div>

          <p
            class="text-center text__body text__neutral-dark-grey"
            style="margin-bottom: 48px"
          >
            {{ popupDesc }}
          </p>

          <div class="row items-end ">
            <button
              class="btn__large btn__alert-secondary col-auto relative-position"
              @click="cancelActivation()"
              v-ripple
            >
              Batal
            </button>
            <div style="width: 16px;"></div>
            <button
              class="btn__large btn__accent col relative-position"
              @click="verifyActivation()"
              v-ripple
            >
              Aktifkan
            </button>
          </div>
        </div>
      </SwipeableBottomSheet>

      <div
        class="btn-logout text__title-4 text__alert"
        @click="onDeleteStrategi()"
      >
        Hapus Jurnal
      </div>

      <!-- pop up help -->
      <SwipeableBottomSheet
        ref="popUpHelp"
        default-state="close"
        :half-top="getHeightForPopUp(460)"
        :use-overlay="true"
        :can-close="true"
        :swipeable="true"
      >
        <q-scroll-area
          class="column "
          style="height: 100vh; padding: 16px; padding-top: 4px; padding-bottom: 0 !important;"
        >
          <div
            class="info-content"
            style="padding-bottom: 40px;"
            v-html="markdownToHtml()"
          ></div>
        </q-scroll-area>
      </SwipeableBottomSheet>
    </template>
  </div>
</template>

<script>
import { TRIGGER_CATEGORY } from "src/data/strategi/StrategiModel";
import Collapse from "src/components/strategi/Collapse.vue";
import FearLadder from "src/components/strategi/FearLadder.vue";
import SwipeableBottomSheet from "src/components/SwipeableBottomSheet.vue";
import { generateTimeStamp } from "src/helper/generateDate";
import { marked } from "marked";
import Strategi from "!!raw-loader!../../data/info/Strategi.md";

export default {
  components: { Collapse, FearLadder, SwipeableBottomSheet },
  name: "StrategiActive",
  data() {
    return {
      trigger_category: TRIGGER_CATEGORY,
      activationPending: false,
      selectedActivityIdx: null,
      // popup
      popupTitle: "Tandai Aktivitas Berhasil?",
      popupDesc:
        "Aktivitas akan ditandai berhasil. Apakah kamu yakin ingin melanjutkannya?"
    };
  },
  computed: {
    strategiData() {
      return this.$store.state.strategi.strategiActive;
    },
    activeActivityIdx() {
      return this.strategiData.activities.findIndex(
        activity => activity.status === "active"
      );
    }
  },
  created() {
    // if (!this.activeActivity) {
    //   this.autoActiveActivity();
    // }
  },
  methods: {
    getHeightForPopUp(height) {
      return window.innerHeight - height;
    },

    autoActiveActivity() {
      const lowestXIndex = this.strategiData.activities.findIndex(
        obj =>
          obj.level ===
          Math.min(...this.strategiData.activities.map(obj => obj.level))
      );

      this.$store.commit("strategi/setActivityStatus", {
        activityIndex: lowestXIndex,
        status: "active"
      });
    },

    async onToggleCheck(idx) {
      if (this.activationPending) return;

      this.activationPending = true;
      this.selectedActivityIdx = idx;
      setTimeout(() => {
        if (this.selectedActivityIdx === 0) {
          this.popupTitle = "Selesaikan Strategi?";
          this.popupDesc =
            "Aktivitas terakhirmu akan ditandai berhasil?. Apakah kamu yakin ingin melanjutkannya?";
        }

        this.$refs.popUpAktifkan.setState("open");

        this.activationPending = false;
      }, 500);
    },

    verifyActivation() {
      this.$store.commit("strategi/setActivityChecked", {
        activityIndex: this.selectedActivityIdx,
        checked: true
      });

      this.$refs.popUpAktifkan.setState("close");

      if (this.selectedActivityIdx === 0) {
        const strategiData = {
          ...this.strategiData,
          created_at: generateTimeStamp(),
          created_date: new Date()
        };
        this.$store.commit("strategi/storeStrategi", strategiData);
        this.$store.commit("strategi/clearActiveStrategi");
        this.$router.replace({ path: "/strategi", query: { popupDone: "1" } });
        return;
      }

      this.selectedActivityIdx = null;
    },

    cancelActivation() {
      this.selectedActivityIdx = null;
      this.$refs.popUpAktifkan.setState("close");
    },

    onDeleteStrategi() {
      this.$store.commit("strategi/clearActiveStrategi");
      this.$router.replace("/strategi");
    },

    // content inside bottom sheet helper
    markdownToHtml() {
      return marked(Strategi);
    }
  }
};
</script>

<style lang="scss" scoped>
.tangga-ketakutan--item {
  margin-bottom: 16px;
  display: flex;
  align-items: center;
}

.tangga-ketakutan--label {
  flex-grow: 1;
}

.tangga-ketakutan--level {
  width: 32px;
  margin-left: 12px;
  margin-right: 16px;
  text-align: center;
}

.tangga-ketakutan--checkbox {
  width: 24px;
  height: 24px;
  position: relative;
}

.tangga-ketakutan--checkbox > div {
  width: 100%;
  height: 100%;
}

.tangga-ketakutan--checkbox input {
  position: absolute;
  opacity: 0;
}

.tangga-ketakutan--checkbox label {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  position: relative;
  cursor: pointer;
}

.tangga-ketakutan--checkbox label::before {
  content: "";
  width: 24px;
  height: 24px;
  display: inline-block;

  background: #f1f2f5;

  border: 1px solid #c4c4c8;
  border-radius: 4px;
}

.tangga-ketakutan--checkbox input:checked + label::before {
  border: 1px solid #5c7ccd;
}

.tangga-ketakutan--checkbox img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
}

.tangga-ketakutan--checkbox input:checked + img {
  opacity: 1 !important;
}

.btn-logout {
  margin: 0 auto;
  margin-top: 36px;
  padding: 12px 16px;
  width: fit-content;
  border-radius: 6px;
}
</style>
