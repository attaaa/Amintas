<template>
  <LayoutLatihan
    headerImg="img/restrukturisasi/sesi1_latihan2_detail.png"
    :showAction="formDisabled"
    :labelNextAction="'Aktifkan Latihan'"
    :handleNextAction="showAktivasiLatihan"
    :showSecondaryAction="showSecondaryAction"
    :activeDoneButton="activeDoneButton"
    :handleSave="saveData"
    :handleDone="doneLatihan"
    :hasChanges="hasChanges"
    backPath="/restrukturisasi/sesi1"
    @aktivasiLatihan="aktivasiLatihan()"
    @selesaikanLatihan="selesaikanLatihan()"
  >
    <h1 class="text__title-2 text__primary q-ma-none q-mt-md q-mb-sm">
      Catatan Pikiran Negatif
    </h1>
    <p class="text__body text__neutral-black" style="margin-bottom: 12px">
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
      <div class="informasi-title">
        <span class="text__title-3">Catatan 1</span>
        <div class="informasi-title--decor" />
      </div>

      <div class="q-mb-md ">
        <label
          class="text__title-4 text__neutral-black"
          style="margin-bottom: 8px"
        >
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
        <label
          class="text__title-4 text__neutral-black"
          style="margin-bottom: 8px"
        >
          Pikiran
        </label>
        <TextAreaCustom
          :disabled="formDisabled"
          v-model="form.catatan1.pikiran"
          class="q-mt-sm"
          placeholder="Pikiran negatif yang muncul"
        />
      </div>

      <div class="q-mb-md ">
        <label
          class="text__title-4 text__neutral-black"
          style="margin-bottom: 8px"
        >
          Faktor Pikiran
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

      <div class="informasi-title" style="margin-top: 24px">
        <span class="text__title-3">Catatan 2</span>
        <div class="informasi-title--decor" />
      </div>

      <div class="q-mb-md ">
        <label
          class="text__title-4 text__neutral-black"
          style="margin-bottom: 8px"
        >
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
        <label
          class="text__title-4 text__neutral-black"
          style="margin-bottom: 8px"
        >
          Pikiran
        </label>
        <TextAreaCustom
          :disabled="formDisabled"
          v-model="form.catatan2.pikiran"
          class="q-mt-sm"
          placeholder="Pikiran negatif yang muncul"
        />
      </div>

      <div class="q-mb-md ">
        <label
          class="text__title-4 text__neutral-black"
          style="margin-bottom: 8px"
        >
          Faktor Pikiran
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

      <div class="informasi-title" style="margin-top: 24px">
        <span class="text__title-3">Catatan 3</span>
        <div class="informasi-title--decor" />
      </div>

      <div class="q-mb-md ">
        <label
          class="text__title-4 text__neutral-black"
          style="margin-bottom: 8px"
        >
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
        <label
          class="text__title-4 text__neutral-black"
          style="margin-bottom: 8px"
        >
          Pikiran
        </label>
        <TextAreaCustom
          :disabled="formDisabled"
          v-model="form.catatan3.pikiran"
          class="q-mt-sm"
          placeholder="Pikiran negatif yang muncul"
        />
      </div>

      <div class="q-mb-md ">
        <label
          class="text__title-4 text__neutral-black"
          style="margin-bottom: 8px"
        >
          Faktor Pikiran
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
      return !this.latihanFinished && !this.formDisabled;
      // return !_.isEqual(this.storeObj, this.form);
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
    },
    hasChanges() {
      return !_.isEqual(this.storeObj, this.form);
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

      this.$store.commit("restrukturisasi/setLatihanAktif", {
        active: true,
        name: "Catatan Pikiran Negatif",
        path: "/restrukturisasi/sesi1",
        img: "img/restrukturisasi/sesi1_latihan2_detail.png"
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

      // clear latihan aktif
      this.$store.commit("restrukturisasi/setLatihanAktif", {
        active: false,
        name: "",
        path: "",
        img: ""
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
