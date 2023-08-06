<template>
  <LayoutLatihan
    headerImg="img/restrukturisasi/sesi3_latihan2_detail.png"
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
      Menjaga Keseimbangan Pikiran
    </h1>
    <p class="text__body text__neutral-black">
      Pada latihan ini, kita akan menggunakan peristiwa yang dituliskan Jane
      pada jurnalnya. Kamu diminta untuk mengurangi dampak pikiran negatif yang
      muncul yang berusaha mempengaruhi perasaan Jane. Kamu dapat melakukannya
      dengan menulis berbagai hal positif yang mungkin tidak disadari Jane pada
      peristiwa tersebut!
    </p>
    <p class="text__body text__neutral-black">
      Maka dari itu, coba tinjau dengan seksama 3 pikiran mengganggu berikut.
      Lalu bantu Jane untuk menyeimbangankan pikirannya!
    </p>

    <!-- FORM -->

    <template v-if="!latihanFinished">
      <!--
        pikiran 1
      -->
      <div class="catatan-group">
        <div class="informasi-title">
          <span class="text__title-3">Pikiran 1</span>
          <div class="informasi-title--decor" />
        </div>

        <p class="text__special-body text-center">
          “Mendapatkan beasiswa itu biasa saja (A), aku hanya beruntung (B)”
        </p>

        <div class="q-mb-md ">
          <label class="text__title-4 text__neutral-black">
            Pernyataan Positif
          </label>
          <TextAreaCustom
            :disabled="formDisabled"
            v-model="form.pikiran1.pernyataanPositif"
            class="q-mt-sm"
            placeholder="Hal positif yang dapat menyeimbangkan"
          />
        </div>
      </div>

      <!--
        pikiran 2
      -->
      <div class="catatan-group">
        <div class="informasi-title">
          <span class="text__title-3">Pikiran 2</span>
          <div class="informasi-title--decor" />
        </div>

        <p class="text__special-body text-center">
          “Temanku terlambat dari waktu janjian (A). Harusnya dia datang lebih
          cepat biar kami tidak buang-buang waktu (B)”
        </p>

        <div class="q-mb-md ">
          <label class="text__title-4 text__neutral-black">
            Pernyataan Positif
          </label>
          <TextAreaCustom
            :disabled="formDisabled"
            v-model="form.pikiran2.pernyataanPositif"
            class="q-mt-sm"
            placeholder="Hal positif yang dapat menyeimbangkan"
          />
        </div>
      </div>

      <!--
        pikiran 3
      -->
      <div class="catatan-group">
        <div class="informasi-title">
          <span class="text__title-3">Pikiran 3</span>
          <div class="informasi-title--decor" />
        </div>

        <p class="text__special-body text-center">
          “Aku terlambat mengumpulkan tugas dan dosenku tidak menerima tugasku
          (A), Aku memang orang gagal (B)”
        </p>

        <div class="q-mb-md ">
          <label class="text__title-4 text__neutral-black">
            Pernyataan Positif
          </label>
          <TextAreaCustom
            :disabled="formDisabled"
            v-model="form.pikiran3.pernyataanPositif"
            class="q-mt-sm"
            placeholder="Hal positif yang dapat menyeimbangkan"
          />
        </div>
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
import TextAreaCustom from "src/components/inputs/TextAreaCustom";
//
import Latihan2View from "src/components/restrukturisasi/sesi3/latihan2/Latihan2View";

export default {
  components: {
    LayoutLatihan,
    TextAreaCustom,
    Latihan2View
  },
  data: function() {
    return {
      form: {
        pikiran1: {
          pernyataanPositif: ""
        },
        pikiran2: {
          pernyataanPositif: ""
        },
        pikiran3: {
          pernyataanPositif: ""
        }
      }
    };
  },
  computed: {
    storeObj() {
      return this.$store.state.restrukturisasi.sesi3Latihan2;
    },
    formDisabled() {
      return !this.$store.state.restrukturisasi.statusLatihan.sesi3
        .latihan2Form;
    },
    showSecondaryAction() {
      return !_.isEqual(this.storeObj, this.form) && !this.formDisabled;
    },
    activeDoneButton() {
      return Object.values(this.form).every(
        pikiran => pikiran.pernyataanPositif !== ""
      );
    },
    latihanFinished() {
      return this.$store.state.restrukturisasi.statusLatihan.sesi3
        .latihan2Finished;
    }
  },
  methods: {
    showAktivasiLatihan() {
      this.$refs.popUpAktifkan.setState("open");
    },
    aktivasiLatihan() {
      this.$store.commit("restrukturisasi/setStatusLatihan", {
        sesi: "sesi3",
        latihanName: "latihan2Form",
        value: true
      });

      this.$store.commit("restrukturisasi/setLatihanAktif", {
        active: true,
        name: "Menjaga Keseimbangan Pikiran",
        path: "/restrukturisasi/sesi3",
        img: "img/restrukturisasi/sesi3_latihan2_detail.png"
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
        sesiLatihan: "sesi3Latihan2",
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
        sesiLatihan: "sesi3Latihan2",
        data: JSON.parse(JSON.stringify(this.form))
      });

      // set status to finished
      this.$store.commit("restrukturisasi/setFinishedLatihan", {
        sesi: "sesi3",
        currSesiLatihanFinished: "latihan2Finished"
      });

      // enable latihan 3
      this.$store.commit("restrukturisasi/enableLatihan", {
        sesi: "sesi3",
        latihan: 2
      });

      this.$store.commit("restrukturisasi/setLatihanAktif", {
        active: true,
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
