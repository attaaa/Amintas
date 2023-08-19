<template>
  <div>
    <FillLayout
      :bantuanContent="markdownToHtml"
      :bantuanHeight="484"
      :handleNextAction="handleNextAction"
      :showAction="checkInputValid()"
      :showBantuan="true"
      :onBackCallback="onBackCallback"
      title="Aktivitas atau situasi apa yang akan kamu lakukan?"
    >
      <div
        v-if="activities"
        class="full-width overflow-hidden"
        style="padding-inline: 16px"
      >
        <div class="col full-width overflow-hidden">
          <TableLadderActivity
            v-for="(activity, index) in activities"
            style="margin-bottom: 12px"
            :handle-add="handleAdd"
            :handle-remove="handleRemove"
            :idx="index"
            :removeDisabled="activities.length === 1"
            :key="index"
            :model="activities[index].name"
            @input="val => onInput(val, index)"
          />
        </div>
      </div>

      <template v-slot:action>
        <div class="fill-action col-auto show-action">
          <div class="row items-end ">
            <button
              class="btn__large btn__secondary col relative-position"
              @click="handleAdd()"
              v-ripple
            >
              Tambah
            </button>
            <div style="width: 16px;"></div>
            <button
              class="btn__large btn__accent col relative-position"
              :disabled="!checkInputValid()"
              @click="handleNextAction()"
              v-ripple
            >
              Lanjut
            </button>
          </div>
        </div>
      </template>

      <PopupAction ref="popupDelete" img="assets/img/delete_trash.png">
        <template v-slot:title>Hapus Baris?</template>
        <template v-slot:description>
          Jawabanmu akan terhapus. Apakah kamu yakin ingin menghapus baris ini?
        </template>
        <template v-slot:action>
          <button
            class="btn__large btn__alert-secondary col-auto relative-position"
            @click="$refs.popupDelete.$refs.popup.setState('close')"
            v-ripple
          >
            Batal
          </button>
          <div style="width: 16px;"></div>
          <button
            class="btn__large btn__accent col relative-position"
            @click="submitRemove()"
            v-ripple
          >
            Hapus Baris
          </button>
        </template>
      </PopupAction>
    </FillLayout>
  </div>
</template>

<script>
import TableLadderActivity from "src/components/strategi/TableLadderActivity.vue";
import FillLayout from "src/layouts/FillLayout.vue";

import StrategiActivities from "!!raw-loader!../../data/info/StrategiActivities.md";
import { marked } from "marked";

import PopupAction from "src/components/shared/PopupAction.vue";

export default {
  name: "StrategiInputActivities",
  components: { FillLayout, TableLadderActivity, PopupAction },
  data() {
    return {
      activities: [
        { name: "", level: null, status: "inactive", checked: false }
      ],
      tempIdx: null
    };
  },
  computed: {
    strategiInputData() {
      return this.$store.state.strategi.strategiInputData;
    },
    markdownToHtml() {
      return marked(StrategiActivities);
    }
  },
  created() {
    this.activities = JSON.parse(
      JSON.stringify(this.strategiInputData.activities)
    );
  },
  methods: {
    checkInputValid() {
      for (let activity of this.activities) {
        if (activity.name === "") {
          return false;
        }
      }
      return true;
    },
    handleAdd() {
      this.activities = [
        ...this.activities,
        { name: "", level: null, status: "inactive", checked: false }
      ];
    },
    handleRemove(idx) {
      this.tempIdx = idx;
      this.$refs.popupDelete.$refs.popup.setState("open");
    },
    submitRemove() {
      this.activities.splice(this.tempIdx, 1);

      this.$refs.popupDelete.$refs.popup.setState("close");
      this.tempIdx = null;
    },
    handleNextAction() {
      this.$store.dispatch("strategi/updateInputStrategi", {
        ...this.strategiInputData,
        activities: [...this.activities]
      });
      this.$router.push("/strategi/input-level");
    },
    onInput(val, index) {
      this.activities[index].name = val;
    },

    onBackCallback() {
      this.$store.dispatch("strategi/updateInputStrategi", {
        ...this.strategiInputData,
        activities: [...this.activities]
      });
    }
  }
};
</script>
