<template>
  <LayoutLatihan
    headerImg="img/restrukturisasi/sesi3_latihan1_detail.png"
    :showAction="formDisabled"
    :labelNextAction="'Aktifkan Latihan'"
    :handleNextAction="showAktivasiLatihan"
    :showSecondaryAction="showSecondaryAction"
    :activeDoneButton="activeDoneButton"
    :handleSave="saveData"
    :handleDone="doneLatihan"
    backPath="/restrukturisasi/sesi3"
    @aktivasiLatihan="aktivasiLatihan()"
    @selesaikanLatihan="selesaikanLatihan()"
  >
    <h1 class="text__title-2 text__primary q-ma-none q-mt-md q-mb-sm">
      Bermain Peran: Reporter
    </h1>
    <p class="text__body text__neutral-black">
      Pada latihan ini, kamu diminta untuk menjabarkan satu peristiwa yang
      memicu perasaan negatifmu, beserta pikiran negatif yang mempengaruhi
      perasaan tersebut. Kamu boleh menggunakan catatan dari latihan di sesi
      sebelumnya, ataupun cerita dari jurnalmu di Amintas!
    </p>
    <p class="text__body text__neutral-black">
      Setelah menjabarkannya, kamu perlu menuliskan fakta yang kamu ketahui saat
      peristiwa itu terjadi. Kemudian coba analisa perbedaan dari pikiran
      negatif dan fakta yang kamu identifikasi, lalu coba tuliskan kesimpulan
      yang kamu dapatkan!
    </p>

    <!-- FORM -->

    <template v-if="!latihanFinished">
      <div class="catatan-group">
        <div class="informasi-title">
          <span class="text__title-3">Catatan</span>
          <div class="informasi-title--decor" />
        </div>

        <div class="q-mb-md ">
          <label class="text__title-4 text__neutral-black">
            Peristiwa dan Perasaan
          </label>
          <TextAreaCustom
            :disabled="formDisabled"
            v-model="form.catatan.peristiwa"
            class="q-mt-sm"
            placeholder="Peristiwa yang memicu perasaanmu"
          />
        </div>

        <div class="q-mb-md ">
          <label class="text__title-4 text__neutral-black">
            Pikiran Negatif
          </label>
          <TextAreaCustom
            :disabled="formDisabled"
            v-model="form.catatan.pikiranNegatif"
            class="q-mt-sm"
            placeholder="Pikiran yang memicu perasaanmu"
          />
        </div>

        <div class="q-mb-md ">
          <label class="text__title-4 text__neutral-black">
            Fakta
          </label>
          <TextAreaCustom
            :disabled="formDisabled"
            v-model="form.catatan.fakta"
            class="q-mt-sm"
            placeholder="Perasaan negatif yang mengganggu"
          />
        </div>

        <div class="q-mb-md ">
          <label class="text__title-4 text__neutral-black">
            Kesimpulan
          </label>
          <TextAreaCustom
            :disabled="formDisabled"
            v-model="form.catatan.kesimpulan"
            class="q-mt-sm"
            placeholder="Perasaan negatif yang mengganggu"
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
import TextAreaCustom from "src/components/inputs/TextAreaCustom";
//
import Latihan1View from "src/components/restrukturisasi/sesi3/latihan1/Latihan1View";

export default {
  components: {
    LayoutLatihan,
    TextAreaCustom,
    Latihan1View
  },
  data: function() {
    return {
      form: {
        catatan: {
          peristiwa: "",
          pikiranNegatif: "",
          fakta: "",
          kesimpulan: ""
        }
      }
    };
  },
  computed: {
    storeObj() {
      return this.$store.state.restrukturisasi.sesi3Latihan1;
    },
    formDisabled() {
      return !this.$store.state.restrukturisasi.statusLatihan.sesi3
        .latihan1Form;
    },
    showSecondaryAction() {
      return !this.latihanFinished;
      // return !_.isEqual(this.storeObj, this.form) && !this.formDisabled;
    },
    activeDoneButton() {
      return Object.values(this.form).every(
        catatan =>
          catatan.peristiwa !== "" &&
          catatan.pikiranNegatif !== "" &&
          catatan.fakta !== "" &&
          catatan.kesimpulan !== ""
      );
    },
    latihanFinished() {
      return this.$store.state.restrukturisasi.statusLatihan.sesi3
        .latihan1Finished;
    }
  },
  methods: {
    showAktivasiLatihan() {
      this.$refs.popUpAktifkan.setState("open");
    },
    aktivasiLatihan() {
      this.$store.commit("restrukturisasi/setStatusLatihan", {
        sesi: "sesi3",
        latihanName: "latihan1Form",
        value: true
      });

      this.$store.commit("restrukturisasi/setLatihanAktif", {
        active: true,
        name: "Bermain Peran: Reporter",
        path: "/restrukturisasi/sesi3",
        img: "img/restrukturisasi/sesi3_latihan1_detail.png"
      });

      this.$store.dispatch("app/showToast", "Latihan telah di aktifkan");
    },
    getHeightForPopUp(height) {
      return window.innerHeight - height;
    },
    // main
    saveData() {
      const data = { ...this.form };
      this.$store.commit("restrukturisasi/setLatihanData", {
        sesiLatihan: "sesi3Latihan1",
        data: data
      });
      this.$router.replace("/restrukturisasi/sesi3");
    },
    doneLatihan() {
      this.$refs.popUpDone.setState("open");
    },
    selesaikanLatihan() {
      // save data first
      this.$store.commit("restrukturisasi/setLatihanData", {
        sesiLatihan: "sesi3Latihan1",
        data: JSON.parse(JSON.stringify(this.form))
      });

      // set status to finished
      this.$store.commit("restrukturisasi/setFinishedLatihan", {
        sesi: "sesi3",
        currSesiLatihanFinished: "latihan1Finished"
      });

      // enable latihan 2
      this.$store.commit("restrukturisasi/enableLatihan", {
        sesi: "sesi3",
        latihan: 1
      });

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
      this.form = JSON.parse(JSON.stringify(this.storeObj));
    }
  }
};
</script>
