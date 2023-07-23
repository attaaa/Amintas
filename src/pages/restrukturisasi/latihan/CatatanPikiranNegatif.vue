<template>
  <LayoutLatihan
    headerImg="img/restrukturisasi/sesi1_latihan2_detail.png"
    :showAction="formDisabled"
    :labelNextAction="'Aktivasi Latihan'"
    :handleNextAction="showAktivasiLatihan"
    :showSecondaryAction="showSecondaryAction"
    :activeDoneButton="activeDoneButton"
    :handleSave="saveData"
    :handleDone="doneLatihan"
    backPath="/restrukturisasi/sesi1"
    @aktivasiLatihan="aktivasiLatihan()"
    @selesaikanLatihan="selesaikanLatihan()"
  >
    <h1 class="text__title-2 text__primary q-ma-none q-mt-md q-mb-sm">
      Catatan Pikiran Negatif
    </h1>
    <p class="text__body text__neutral-black">
      Setelah kita mencoba dengan suatu skenario. Pada latihan ini, kita akan
      berlatih menggunakan keadaan yang lebih dekat denganmu. Kamu diminta untuk
      mencatat 3 peristiwa di keseharianmu dalam seminggu terakhir yang
      mempengaruhi perasaan negatifmu. Jika kesulitan mengingatnya, kamu boleh
      mengidentifikasi peristiwa dalam beberapa hari kedepan, tapi jangan lupa
      ya, untuk menyelesaikan latihanmu!
    </p>
    <p class="text__body text__neutral-black">
      Setelah mendeskripsikan peristiwanya, tentu ungkapkan juga pikiran negatif
      di kepalamu pada saat situasi itu. Kemudian identifikasi faktor yang
      melatarbelakangi pikiran negatif tersebut!
    </p>

    <!-- FORM -->

    <template v-if="!latihanFinished">
      <div class="custom-header">
        <h2 class="text__title-3 text__neutral-black">Catatan 1</h2>
        <div class="custom-header--line"></div>
      </div>

      <div class="q-mb-md ">
        <label class="text__title-4 text__neutral-black">
          Peristiwa
        </label>
        <TextAreaCustom
          :disabled="formDisabled"
          v-model="form.catatan1.peristiwa"
          class="q-mt-sm"
          placeholder="Peristiwa yang memicu perasaanmu"
        />
      </div>

      <div class="q-mb-md ">
        <label class="text__title-4 text__neutral-black">
          Pikiran
        </label>
        <TextAreaCustom
          :disabled="formDisabled"
          v-model="form.catatan1.pikiran"
          class="q-mt-sm"
          placeholder="Pikiran yang memicu perasaanmu"
        />
      </div>

      <div class="q-mb-md ">
        <label class="text__title-4 text__neutral-black">
          Peristiwa
        </label>
        <Picker
          :options="options"
          :disabled="formDisabled"
          :value="form.catatan1.faktorPikiran"
          @input="
            optionId => {
              selectOption('catatan1', optionId);
            }
          "
          @unSelect="
            optionId => {
              unSelectOption('catatan1', optionId);
            }
          "
          class="q-mt-sm"
          placeholder="Pilih faktor pikiran yang teridentifikasi"
        />
      </div>

      <div class="custom-header">
        <h2 class="text__title-3 text__neutral-black">Catatan 2</h2>
        <div class="custom-header--line"></div>
      </div>

      <div class="q-mb-md ">
        <label class="text__title-4 text__neutral-black">
          Peristiwa
        </label>
        <TextAreaCustom
          :disabled="formDisabled"
          v-model="form.catatan2.peristiwa"
          class="q-mt-sm"
          placeholder="Peristiwa yang memicu perasaanmu"
        />
      </div>

      <div class="q-mb-md ">
        <label class="text__title-4 text__neutral-black">
          Pikiran
        </label>
        <TextAreaCustom
          :disabled="formDisabled"
          v-model="form.catatan2.pikiran"
          class="q-mt-sm"
          placeholder="Pikiran yang memicu perasaanmu"
        />
      </div>

      <div class="q-mb-md ">
        <label class="text__title-4 text__neutral-black">
          Peristiwa
        </label>
        <Picker
          :options="options"
          :disabled="formDisabled"
          :value="form.catatan2.faktorPikiran"
          @input="
            optionId => {
              selectOption('catatan2', optionId);
            }
          "
          @unSelect="
            optionId => {
              unSelectOption('catatan2', optionId);
            }
          "
          class="q-mt-sm"
          placeholder="Pilih faktor pikiran yang teridentifikasi"
        />
      </div>

      <div class="custom-header">
        <h2 class="text__title-3 text__neutral-black">Catatan 3</h2>
        <div class="custom-header--line"></div>
      </div>

      <div class="q-mb-md ">
        <label class="text__title-4 text__neutral-black">
          Peristiwa
        </label>
        <TextAreaCustom
          :disabled="formDisabled"
          v-model="form.catatan3.peristiwa"
          class="q-mt-sm"
          placeholder="Peristiwa yang memicu perasaanmu"
        />
      </div>

      <div class="q-mb-md ">
        <label class="text__title-4 text__neutral-black">
          Pikiran
        </label>
        <TextAreaCustom
          :disabled="formDisabled"
          v-model="form.catatan3.pikiran"
          class="q-mt-sm"
          placeholder="Pikiran yang memicu perasaanmu"
        />
      </div>

      <div class="q-mb-md ">
        <label class="text__title-4 text__neutral-black">
          Peristiwa
        </label>
        <Picker
          :options="options"
          :disabled="formDisabled"
          :value="form.catatan3.faktorPikiran"
          @input="
            optionId => {
              selectOption('catatan3', optionId);
            }
          "
          @unSelect="
            optionId => {
              unSelectOption('catatan3', optionId);
            }
          "
          class="q-mt-sm"
          placeholder="Pilih faktor pikiran yang teridentifikasi"
        />
      </div>
    </template>

    <template v-else>
      <Latihan2View />
    </template>
    <!--

     -->
  </LayoutLatihan>
</template>

<script>
import _ from "lodash";
import LayoutLatihan from "src/layouts/LayoutLatihan";
import Picker from "src/components/inputs/Picker";
import TextAreaCustom from "src/components/inputs/TextAreaCustom";
//
import Latihan2View from "src/components/restrukturisasi/sesi1/latihan2/Latihan2View";

const faktorPikiranList = [
  {
    id: 0,
    icon: "diri sendiri",
    name: "Diri sendiri"
  },
  {
    id: 1,
    icon: "masa depan",
    name: "Masa depan"
  },
  {
    id: 2,
    icon: "situasi",
    name: "Situasi"
  }
];

export default {
  components: {
    LayoutLatihan,
    TextAreaCustom,
    Picker,
    Latihan2View
  },
  data: function() {
    return {
      options: faktorPikiranList,

      // form data
      // peristiwa: "",
      // pikiran: "",
      // selectedOptionsIdx: []

      form: {
        catatan1: {
          peristiwa: "",
          pikiran: "",
          faktorPikiran: []
        },
        catatan2: {
          peristiwa: "",
          pikiran: "",
          faktorPikiran: []
        },
        catatan3: {
          peristiwa: "",
          pikiran: "",
          faktorPikiran: []
        }
      }
    };
  },
  computed: {
    storeObj() {
      return this.$store.state.restrukturisasi.sesi1Latihan2;
    },
    formDisabled() {
      return !this.$store.state.restrukturisasi.statusLatihan.sesi1
        .latihan2Form;
    },
    showSecondaryAction() {
      return !_.isEqual(this.storeObj, this.form);
    },
    activeDoneButton() {
      return Object.values(this.form).every(
        catatan =>
          catatan.peristiwa !== "" &&
          catatan.pikiran !== "" &&
          catatan.faktorPikiran.length > 0
      );
    },
    latihanFinished() {
      return this.$store.state.restrukturisasi.statusLatihan.sesi1
        .latihan2Finished;
    }
  },
  methods: {
    showAktivasiLatihan() {
      this.$refs.popUpAktifkan.setState("open");
    },
    aktivasiLatihan() {
      this.$store.commit("restrukturisasi/setStatusLatihan", {
        sesi: "sesi1",
        latihanName: "latihan2Form",
        value: true
      });
      this.$store.dispatch("app/showToast", "Latihan telah di aktifkan");
    },
    getHeightForPopUp(height) {
      return window.innerHeight - height;
    },
    // main
    selectOption(catatan, optionId) {
      const temp = [...this.form[catatan].faktorPikiran];
      this.form[catatan].faktorPikiran = [...temp, optionId];
      // this.selectedOptionsIdx.push(optionId);
      // this.$store.commit("restrukturisasi/setSesiLatihanSelectedOptionsIdx", {
      //   sesiLatihan: "sesi1Latihan1",
      //   optionId: optionId
      // });
    },
    unSelectOption(catatan, optionId) {
      const temp = [...this.form[catatan].faktorPikiran];
      const idx = temp.indexOf(optionId);
      if (idx !== -1) temp.splice(idx, 1);
      // this.$store.commit("restrukturisasi/unSetSesiLatihanSelectedOptionsIdx", {
      //   sesiLatihan: "sesi1Latihan1",
      //   optionId: optionId
      // });
      this.form[catatan].faktorPikiran = [...temp];
    },
    saveData() {
      const data = { ...this.form };
      this.$store.commit("restrukturisasi/setLatihanData", {
        sesiLatihan: "sesi1Latihan2",
        data: data
      });
      this.$router.replace("/restrukturisasi/sesi1");
    },
    doneLatihan() {
      this.$refs.popUpDone.setState("open");
    },
    selesaikanLatihan() {
      // save data first
      this.$store.commit("restrukturisasi/setLatihanData", {
        sesiLatihan: "sesi1Latihan2",
        data: JSON.parse(JSON.stringify(this.form))
      });

      // set status to finished
      this.$store.commit("restrukturisasi/setFinishedLatihan", {
        sesi: "sesi1",
        currSesiLatihanFinished: "latihan2Finished"
      });

      // enable sesi 2
      this.$store.commit("restrukturisasi/setStatusSesi", "sesi2");
    }
  },
  mounted() {
    this.form = JSON.parse(JSON.stringify(this.storeObj));
  }
};
</script>

<style lang="scss" scoped>
.custom-header {
  display: flex;
  gap: 12px;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 12px;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }

  div {
    background-color: #ffcb4d;
    height: 1px;
    flex-basis: 0;
    flex-grow: 1;
  }
}

.material-item {
  padding: 12px 16px;
  margin-bottom: 8px;

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;

  background: #f2f6ff;
  border-radius: 8px;

  div {
    height: 72px;
    flex-basis: 0;
    flex-grow: 1;

    div {
      display: flex;
      align-items: center;
    }
  }
}

.material-item img {
  border-radius: 20px;
}

// textarea {
//   width: 100%;
//   height: 88px;
//   border: 1px solid #dedede;
//   border-radius: 6px;
// }

// input[type="text"] {
//   width: 100%;
//   padding: 8px 12px;
//   /* Neutral/Extrasoft Grey */
//   background: #f1f2f5;
//   /* Neutral/Soft Grey */
//   border: 1px solid #dedede;
//   border-radius: 6px;
//   /* Body/Body Text */
//   font-size: 16px;
//   line-height: 24px;
//   /* identical to box height, or 150% */
//   letter-spacing: 0.02em;
// }
</style>
