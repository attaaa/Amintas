<template>
  <LayoutLatihan
    headerImg="img/restrukturisasi/sesi1_latihan1_detail.png"
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
      Identifikasi Pikiran Negatif
    </h1>
    <p class="text__body text__neutral-black" style="margin-bottom: 12px">
      Pada latihan pertama ini, kamu diminta untuk mengidentifikasi pikiran yang
      muncul dalam kepalamu berdasarkan suatu peristiwa. Coba renungi dengan
      seksama, jika skenario ini benar terjadi padamu dan melibatkan teman
      dekatmu.
    </p>
    <p class="text__body text__neutral-black">
      Ungkapkan pikiran yang muncul dalam kepalamu pada situasi itu. Kemudian
      coba identifikasi faktor yang melatarbelakangi pikiran negatif tersebut!
    </p>

    <div class="informasi-title" style="margin-bottom: 12px">
      <span class="text__title-3">Skenario</span>
      <div class="informasi-title--decor" />
    </div>
    <p class="text__body text__neutral-black" style="margin-bottom: 12px">
      Seorang teman meminta bantuanmu untuk mempersiapkan wawancara magang di
      perusahaan favoritnya. Kamu membantunya semalam suntuk mempersiapkan
      berbagai hal, agar dia berhasil besok pagi.
    </p>
    <p class="text__body text__neutral-black">
      Dua hari berlalu, kemudian dia menemuimu. Dia memberi kabar bahwa dia
      kacau saat wawancara, dia tidak dapat menjawab beberapa pertanyaan
      penting, dan tidak lolos untuk magang di sana. Kamu pun merasa sedih dan
      merasa bertanggung jawab atas kegagalannya.
    </p>
    <!--

     -->

    <!-- FORM -->
    <template v-if="!latihanFinished">
      <div class="latihan-form">
        <div class="q-mb-md ">
          <label
            class="text__title-4 text__neutral-black"
            style="margin-bottom: 8px"
          >
            Pikiran
          </label>
          <TextAreaCustom
            :disabled="formDisabled"
            v-model="form.pikiran"
            class="q-mt-sm"
            placeholder="Pikiran negatif yang muncul"
          />
        </div>
        <div>
          <label
            class="text__title-4 text__neutral-black"
            style="margin-bottom: 8px"
          >
            Faktor Pikiran
          </label>
          <Picker
            placeholder="Pilih faktor pikiran yang teridentifikasi"
            :options="options"
            :disabled="formDisabled"
            :value="form.selectedOptionsIdx"
            @input="selectOption"
            @unSelect="unSelectOption"
            class="q-mt-sm"
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
import LayoutLatihan from "src/layouts/LayoutLatihan";
import Picker from "src/components/inputs/Picker";
import TextAreaCustom from "src/components/inputs/TextAreaCustom";
//
import Latihan1View from "src/components/restrukturisasi/sesi1/latihan1/Latihan1View";
import _ from "lodash";

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

      // form data
      form: {
        pikiran: "",
        selectedOptionsIdx: []
      }
    };
  },

  computed: {
    storeObj() {
      return this.$store.state.restrukturisasi.sesi1Latihan1;
    },
    formDisabled() {
      return !this.$store.state.restrukturisasi.statusLatihan.sesi1
        .latihan1Form;
    },
    showSecondaryAction() {
      return (
        !this.latihanFinished &&
        !this.formDisabled &&
        (!!this.form.pikiran || this.form.selectedOptionsIdx.length > 0)
      );
    },
    activeDoneButton() {
      return !!this.form.pikiran && this.form.selectedOptionsIdx.length > 0;
    },
    latihanFinished() {
      return this.$store.state.restrukturisasi.statusLatihan.sesi1
        .latihan1Finished;
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
        latihanName: "latihan1Form",
        value: true
      });
      this.$store.commit("restrukturisasi/setLatihanAktif", {
        active: true,
        name: "Identifikasi Pikiran Negatif",
        path: "/restrukturisasi/sesi1",
        img: "img/restrukturisasi/sesi1_latihan1_detail.png"
      });
      this.$store.dispatch("app/showToast", "Latihan telah di aktifkan");
    },
    getHeightForPopUp(height) {
      return window.innerHeight - height;
    },
    // main
    selectOption(optionId) {
      const temp = [...this.form.selectedOptionsIdx];
      this.form.selectedOptionsIdx = [...temp, optionId];
    },
    unSelectOption(optionId) {
      const idx = this.form.selectedOptionsIdx.indexOf(optionId);
      if (idx !== -1) this.form.selectedOptionsIdx.splice(idx, 1);
    },
    saveData() {
      this.$store.commit("restrukturisasi/setLatihanData", {
        sesiLatihan: "sesi1Latihan1",
        data: {
          pikiran: this.form.pikiran,
          selectedOptionsIdx: this.form.selectedOptionsIdx
        }
      });
      this.$router.replace("/restrukturisasi/sesi1");
    },
    doneLatihan() {
      this.$refs.popUpDone.setState("open");
    },
    selesaikanLatihan() {
      // save data first
      this.$store.commit("restrukturisasi/setLatihanData", {
        sesiLatihan: "sesi1Latihan1",
        data: JSON.parse(JSON.stringify(this.form))
      });

      // set status to finished
      this.$store.commit("restrukturisasi/setFinishedLatihan", {
        sesi: "sesi1",
        currSesiLatihanFinished: "latihan1Finished",
        nextSesiLatihan: "latihan2"
      });

      // enable latihan 2
      this.$store.commit("restrukturisasi/enableLatihan", {
        sesi: "sesi1",
        latihan: 1
      });

      // clear latihan aktif
      this.$store.commit("restrukturisasi/setLatihanAktif", {
        active: false,
        name: "",
        path: "",
        img: ""
      });
    }
  },
  mounted() {
    // get saved data if exist
    this.form = JSON.parse(JSON.stringify(this.storeObj));
  }
};
</script>
