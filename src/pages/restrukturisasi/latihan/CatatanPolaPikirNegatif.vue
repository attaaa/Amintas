<template>
  <LayoutLatihan
    headerImg="img/restrukturisasi/sesi2_latihan1_detail.png"
    :showAction="formDisabled"
    :labelNextAction="'Aktifkan Latihan'"
    :handleNextAction="showAktivasiLatihan"
    :showSecondaryAction="showSecondaryAction"
    :activeDoneButton="activeDoneButton"
    :handleSave="saveData"
    :handleDone="doneLatihan"
    backPath="/restrukturisasi/sesi2"
    @aktivasiLatihan="aktivasiLatihan()"
    @selesaikanLatihan="selesaikanLatihan()"
  >
    <h1 class="text__title-2 text__primary q-ma-none q-mt-md q-mb-sm">
      Catatan Pola Pikir Negatif
    </h1>
    <p class="text__body text__neutral-black">
      Pada latihan ini, kamu diminta kembali mencatat 3 peristiwa keseharianmu
      dalam seminggu terakhir yang memicu perasaan negatif. Jika kamu merasa
      kesulitan, kamu boleh mengidentifikasinya dalam beberapa hari kedepan,
      ataupun menggunakan peristiwa pada latihan di sesi sebelumnya. Namun yang
      paling penting, pastikan kamu menyelesaikan latihan ini ya!
    </p>
    <p class="text__body text__neutral-black">
      Bila kamu telah menjelaskan peristiwanya, identifikasi juga pikiran
      negatif di kepalamu pada situasi itu. Lalu identifikasi distorsi kognitif
      dari pikiran tersebut!
    </p>

    <!-- FORM -->

    <template v-if="!latihanFinished">
      <div class="catatan-group">
        <div class="informasi-title">
          <span class="text__title-3">Catatan 1</span>
          <div class="informasi-title--decor" />
        </div>

        <div class="q-mb-md ">
          <label class="text__title-4 text__neutral-black">
            A: Activation Event
          </label>
          <TextAreaCustom
            :disabled="formDisabled"
            v-model="form.catatan1.activationEvent"
            class="q-mt-sm"
            placeholder="Peristiwa yang memicu perasaanmu"
          />
        </div>

        <div class="q-mb-md ">
          <label class="text__title-4 text__neutral-black">
            B: Belief
          </label>
          <TextAreaCustom
            :disabled="formDisabled"
            v-model="form.catatan1.belief"
            class="q-mt-sm"
            placeholder="Pikiran yang memicu perasaanmu"
          />
        </div>

        <div class="q-mb-md ">
          <label class="text__title-4 text__neutral-black">
            C: Consequence
          </label>
          <TextAreaCustom
            :disabled="formDisabled"
            v-model="form.catatan1.consequence"
            class="q-mt-sm"
            placeholder="Perasaan negatif yang mengganggu"
          />
        </div>

        <div class="q-mb-md ">
          <label class="text__title-4 text__neutral-black">
            Distorsi Kognitif
          </label>
          <Picker
            :options="options"
            :disabled="formDisabled"
            :value="form.catatan1.distorsiKognitif"
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
            placeholder="Pilih distorsi kognitif yang teridentifikasi"
          />
        </div>
      </div>
      <!--
        catatan 2
       -->
      <div class="catatan-group">
        <div class="informasi-title">
          <span class="text__title-3">Catatan 2</span>
          <div class="informasi-title--decor" />
        </div>

        <div class="q-mb-md ">
          <label class="text__title-4 text__neutral-black">
            A: Activation Event
          </label>
          <TextAreaCustom
            :disabled="formDisabled"
            v-model="form.catatan2.activationEvent"
            class="q-mt-sm"
            placeholder="Peristiwa yang memicu perasaanmu"
          />
        </div>

        <div class="q-mb-md ">
          <label class="text__title-4 text__neutral-black">
            B: Belief
          </label>
          <TextAreaCustom
            :disabled="formDisabled"
            v-model="form.catatan2.belief"
            class="q-mt-sm"
            placeholder="Pikiran yang memicu perasaanmu"
          />
        </div>

        <div class="q-mb-md ">
          <label class="text__title-4 text__neutral-black">
            C: Consequence
          </label>
          <TextAreaCustom
            :disabled="formDisabled"
            v-model="form.catatan2.consequence"
            class="q-mt-sm"
            placeholder="Perasaan negatif yang mengganggu"
          />
        </div>

        <div class="q-mb-md ">
          <label class="text__title-4 text__neutral-black">
            Distorsi Kognitif
          </label>
          <Picker
            :options="options"
            :disabled="formDisabled"
            :value="form.catatan2.distorsiKognitif"
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
            placeholder="Pilih distorsi kognitif yang teridentifikasi"
          />
        </div>
      </div>
      <!--
        catatan 3
       -->
      <div class="catatan-group">
        <div class="informasi-title">
          <span class="text__title-3">Catatan 3</span>
          <div class="informasi-title--decor" />
        </div>

        <div class="q-mb-md ">
          <label class="text__title-4 text__neutral-black">
            A: Activation Event
          </label>
          <TextAreaCustom
            :disabled="formDisabled"
            v-model="form.catatan3.activationEvent"
            class="q-mt-sm"
            placeholder="Peristiwa yang memicu perasaanmu"
          />
        </div>

        <div class="q-mb-md ">
          <label class="text__title-4 text__neutral-black">
            B: Belief
          </label>
          <TextAreaCustom
            :disabled="formDisabled"
            v-model="form.catatan3.belief"
            class="q-mt-sm"
            placeholder="Pikiran yang memicu perasaanmu"
          />
        </div>

        <div class="q-mb-md ">
          <label class="text__title-4 text__neutral-black">
            C: Consequence
          </label>
          <TextAreaCustom
            :disabled="formDisabled"
            v-model="form.catatan3.consequence"
            class="q-mt-sm"
            placeholder="Perasaan negatif yang mengganggu"
          />
        </div>

        <div class="q-mb-md ">
          <label class="text__title-4 text__neutral-black">
            Distorsi Kognitif
          </label>
          <Picker
            :options="options"
            :disabled="formDisabled"
            :value="form.catatan3.distorsiKognitif"
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
            placeholder="Pilih distorsi kognitif yang teridentifikasi"
          />
        </div>
      </div>
    </template>

    <template v-else>
      <Latihan1View />
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
import Latihan1View from "src/components/restrukturisasi/sesi2/latihan1/Latihan1View";

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
    Latihan1View
  },
  data: function() {
    return {
      options: faktorPikiranList,
      form: {
        catatan1: {
          activationEvent: "",
          belief: "",
          consequence: "",
          distorsiKognitif: []
        },
        catatan2: {
          activationEvent: "",
          belief: "",
          consequence: "",
          distorsiKognitif: []
        },
        catatan3: {
          activationEvent: "",
          belief: "",
          consequence: "",
          distorsiKognitif: []
        }
      }
    };
  },
  computed: {
    storeObj() {
      return this.$store.state.restrukturisasi.sesi2Latihan1;
    },
    formDisabled() {
      return !this.$store.state.restrukturisasi.statusLatihan.sesi2
        .latihan1Form;
    },
    showSecondaryAction() {
      return !this.latihanFinished;
      // return !_.isEqual(this.storeObj, this.form) && !this.formDisabled;
    },
    activeDoneButton() {
      return Object.values(this.form).every(
        catatan =>
          catatan.activationEvent !== "" &&
          catatan.belief !== "" &&
          catatan.consequence !== "" &&
          catatan.distorsiKognitif.length > 0
      );
    },
    latihanFinished() {
      return this.$store.state.restrukturisasi.statusLatihan.sesi2
        .latihan1Finished;
    }
  },
  methods: {
    showAktivasiLatihan() {
      this.$refs.popUpAktifkan.setState("open");
    },
    aktivasiLatihan() {
      this.$store.commit("restrukturisasi/setStatusLatihan", {
        sesi: "sesi2",
        latihanName: "latihan1Form",
        value: true
      });

      this.$store.commit("restrukturisasi/setLatihanAktif", {
        active: true,
        name: "Catatan Pola Pikir Negatif",
        path: "/restrukturisasi/sesi2",
        img: "img/restrukturisasi/sesi2_latihan1_detail.png"
      });

      this.$store.dispatch("app/showToast", "Latihan telah di aktifkan");
    },
    getHeightForPopUp(height) {
      return window.innerHeight - height;
    },
    // main
    selectOption(catatan, optionId) {
      const temp = [...this.form[catatan].distorsiKognitif];
      this.form[catatan].distorsiKognitif = [...temp, optionId];
    },
    unSelectOption(catatan, optionId) {
      const temp = [...this.form[catatan].distorsiKognitif];
      const idx = temp.indexOf(optionId);
      if (idx !== -1) temp.splice(idx, 1);
      this.form[catatan].distorsiKognitif = [...temp];
    },
    saveData() {
      const data = { ...this.form };
      this.$store.commit("restrukturisasi/setLatihanData", {
        sesiLatihan: "sesi2Latihan1",
        data: data
      });
      this.$router.replace("/restrukturisasi/sesi2");
    },
    doneLatihan() {
      this.$refs.popUpDone.setState("open");
    },
    selesaikanLatihan() {
      // save data first
      this.$store.commit("restrukturisasi/setLatihanData", {
        sesiLatihan: "sesi2Latihan1",
        data: JSON.parse(JSON.stringify(this.form))
      });

      // set status to finished
      this.$store.commit("restrukturisasi/setFinishedLatihan", {
        sesi: "sesi2",
        currSesiLatihanFinished: "latihan1Finished"
      });

      // enable sesi 3
      this.$store.commit("restrukturisasi/setStatusSesi", "sesi3");

      this.$store.commit("restrukturisasi/setLatihanAktif", {
        active: false,
        name: "",
        path: "",
        img: ""
      });
    }
  },
  mounted() {
    if (!this.formDisabled) {
      console.log(this.storeObj);
      this.form = JSON.parse(JSON.stringify(this.storeObj));
    }
  }
};
</script>
