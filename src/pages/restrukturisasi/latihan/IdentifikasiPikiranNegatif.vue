<template>
  <LayoutLatihan
    headerImg="img/restrukturisasi/sesi1_latihan1_detail.png"
    :showAction="formDisabled"
    :labelNextAction="'Aktivasi Latihan'"
    :handleNextAction="showAktivasiLatihan"
    :showSecondaryAction="showSecondaryAction"
    :activeDoneButton="activeDoneButton"
    :handleSave="saveData"
    :handleDone="doneLatihan"
    @aktivasiLatihan="aktivasiLatihan()"
    @selesaikanLatihan="selesaikanLatihan()"
  >
    <h1 class="text__title-2 text__primary q-ma-none q-mt-md q-mb-sm">
      Identifikasi Pikiran Negatif
    </h1>
    <p class="text__body text__neutral-black">
      Pada latihan pertama ini, kamu diminta untuk mengidentifikasi pikiran yang
      muncul dalam kepalamu berdasarkan suatu peristiwa. Coba renungi dengan
      seksama, jika skenario ini benar terjadi padamu dan melibatkan teman
      dekatmu.
    </p>
    <p class="text__body text__neutral-black">
      Ungkapkan pikiran yang muncul dalam kepalamu pada situasi itu. Kemudian
      coba identifikasi faktor yang melatarbelakangi pikiran negatif tersebut!
    </p>

    <div class="custom-header">
      <h2 class="text__title-3 text__neutral-black">Skenario</h2>
      <div class="custom-header--line"></div>
    </div>
    <p class="text__body text__neutral-black">
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
          <label class="text__title-4 text__neutral-black">
            Pikiran
          </label>
          <TextAreaCustom
            :disabled="formDisabled"
            v-model="pikiran"
            class="q-mt-sm"
            placeholder="Pikiran negatif yang muncul"
          />
        </div>
        <div>
          <label class="text__title-4 text__neutral-black">
            Faktor Pikiran
          </label>
          <Picker
            placeholder="Pilih faktor pikiran yang teridentifikasi"
            :options="options"
            :disabled="formDisabled"
            :value="selectedOptionsIdx"
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
      pikiran: "",
      selectedOptionsIdx: []
    };
  },
  computed: {
    formDisabled() {
      return !this.$store.state.restrukturisasi.statusLatihan.sesi1
        .latihan1Form;
    },
    showSecondaryAction() {
      return (
        !this.$store.state.restrukturisasi.statusLatihan.sesi1
          .latihan1Finished &&
        (!!this.pikiran || this.selectedOptionsIdx.length > 0)
      );
    },
    activeDoneButton() {
      return !!this.pikiran && this.selectedOptionsIdx.length > 0;
    },
    latihanFinished() {
      return this.$store.state.restrukturisasi.statusLatihan.sesi1
        .latihan1Finished;
    }
  },
  created() {
    console.log("mounted");
    if (!this.latihanFinished) console.log("setLatihanAktif");
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
        path: "/restrukturisasi/sesi1"
      });
      this.$store.dispatch("app/showToast", "Latihan telah di aktifkan");
    },
    getHeightForPopUp(height) {
      return window.innerHeight - height;
    },
    // main
    selectOption(optionId) {
      const temp = [...this.selectedOptionsIdx];
      this.selectedOptionsIdx = [...temp, optionId];
      // this.selectedOptionsIdx.push(optionId);
      // this.$store.commit("restrukturisasi/setSesiLatihanSelectedOptionsIdx", {
      //   sesiLatihan: "sesi1Latihan1",
      //   optionId: optionId
      // });
    },
    unSelectOption(optionId) {
      const idx = this.selectedOptionsIdx.indexOf(optionId);
      if (idx !== -1) this.selectedOptionsIdx.splice(idx, 1);
      // this.$store.commit("restrukturisasi/unSetSesiLatihanSelectedOptionsIdx", {
      //   sesiLatihan: "sesi1Latihan1",
      //   optionId: optionId
      // });
    },
    saveData() {
      this.$store.commit("restrukturisasi/setLatihanData", {
        sesiLatihan: "sesi1Latihan1",
        data: {
          pikiran: this.pikiran,
          selectedOptionsIdx: this.selectedOptionsIdx
        }
      });
      this.$router.back();
    },
    doneLatihan() {
      this.$refs.popUpDone.setState("open");
    },
    selesaikanLatihan() {
      // save data first
      this.$store.commit("restrukturisasi/setLatihanData", {
        sesiLatihan: "sesi1Latihan1",
        data: {
          pikiran: this.pikiran,
          selectedOptionsIdx: this.selectedOptionsIdx
        }
      });

      // set status to finished
      this.$store.commit("restrukturisasi/setFinishedLatihan", {
        sesi: "sesi1",
        currSesiLatihanFinished: "latihan1Finished",
        nextSesiLatihan: "latihan2"
      });
    }
  },
  mounted() {
    // get saved data if exist
    const savedData = this.$store.state.restrukturisasi.sesi1Latihan1;
    if (savedData) {
      this.pikiran = savedData.pikiran;
      this.selectedOptionsIdx = savedData.selectedOptionsIdx;
    }
  }
};
</script>

<style lang="scss" scoped>
.custom-header {
  display: flex;
  gap: 12px;
  align-items: center;
  margin-top: 12px;
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
