<template>
  <LayoutOne
    headerImg="/img/restrukturisasi/sesi1_latihan1_detail.png"
    :showAction="true"
    labelNextAction="Aktivasi Latihan"
    :handleNextAction="aktivasiLatihan"
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
          :disabled="formDisabled"
          v-model="faktorPikiran"
          class="q-mt-sm"
        />
      </div>
    </div>
    <!--

     -->

    <!-- POPUP -->
    <PopUp ref="popUpAktivasi" :enable-pan-area="false">
      <!-- illustration -->
      <img
        style="width: 100%; border-radius: 8px;"
        src="/img/popup_end_process.png"
      />

      <span
        class="block text__primary text__title-3 full-width text-center"
        style="margin-top: 24px; margin-bottom: 16px;"
        >Buang Perubahan?
      </span>
      <p
        class="text__body text__neutral-dark-grey text-center"
        style="margin-bottom: 48px"
      >
        Perubahanmu di sini belum tersimpan. Apakah kamu yakin ingin
        meninggalkan halaman ini?
      </p>

      <div class="pop-up--action row">
        <button
          class="btn__large btn__alert col relative-position text-white"
          @click="$router.back()"
          v-ripple
        >
          Tingalkan Halaman
        </button>
        <div style="width: 16px;"></div>
        <button
          class="btn__large btn__secondary text__primary col-auto relative-position "
          @click="$refs.popUpCancel.setState('close')"
          v-ripple
        >
          Tidak
        </button>
      </div>
    </PopUp>
  </LayoutOne>
</template>

<script>
import Picker from "src/components/inputs/Picker.vue";
import TextAreaCustom from "src/components/inputs/TextAreaCustom.vue";
import LayoutOne from "../../../layouts/LayoutOne.vue";
import PopUp from "components/bottomsheet/PopUp";

export default {
  components: { LayoutOne, TextAreaCustom, Picker, PopUp },
  data: function() {
    return {
      pikiran: "",
      faktorPikiran: []
    };
  },
  computed: {
    formDisabled() {
      return !this.$store.state.restrukturisasi.statusLatihan.sesi1
        .latihan1Form;
    }
  },
  methods: {
    aktivasiLatihan() {
      this.$refs.popUpAktivasi.setState("open");
      // this.$store.commit("restrukturisasi/setStatusLatihan", {
      //   sesi: "sesi1",
      //   latihanName: "latihan1Form",
      //   value: true
      // });
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

textarea {
  width: 100%;
  height: 88px;
  border: 1px solid #dedede;
  border-radius: 6px;
}

input[type="text"] {
  width: 100%;
  padding: 8px 12px;
  /* Neutral/Extrasoft Grey */
  background: #f1f2f5;
  /* Neutral/Soft Grey */
  border: 1px solid #dedede;
  border-radius: 6px;
  /* Body/Body Text */
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */
  letter-spacing: 0.02em;
}
</style>
