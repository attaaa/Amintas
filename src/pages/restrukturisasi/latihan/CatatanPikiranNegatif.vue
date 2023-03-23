<template>
  <LayoutOne
    headerImg="/img/restrukturisasi/sesi1_latihan2_detail.png"
    :showAction="formDisabled"
    labelNextAction="Aktivasi Latihan"
    :handleNextAction="showAktivasiLatihan"
    :showSecondaryAction="showSecondaryAction"
    :activeDoneButton="activeDoneButton"
    :handleSave="saveData"
    :handleDone="doneLatihan"
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

    <!-- POPUP AKTIVASI -->
    <SwipeableBottomSheet
      ref="popUpAktifkan"
      default-state="close"
      :open-top="getHeightForPopUp(444)"
      :use-overlay="true"
      :can-close="true"
      :use-drag-icon="false"
    >
      <div class="info-content" style="padding: 24px 16px 0;">
        <div class="text-center bg-secondary" style="border-radius: 8px;">
          <img style="height: 156px;" src="/img/popup_activation.png" />
        </div>
        <div
          class="text__primary text__title-2 text-center"
          style="margin-top: 24px; margin-bottom: 12px;"
        >
          Aktifkan Latihan?
        </div>

        <p
          class="text-center text__body text__neutral-dark-grey"
          style="margin-bottom: 48px"
        >
          Kamu jadi dapat berlatih melawan pikiran mengganggu. Apakah kamu yakin
          ingin mengaktifkan latihan?
        </p>

        <div class="row items-end ">
          <button
            class="btn__large btn__alert-secondary col-auto relative-position"
            @click="() => this.$refs.popUpAktifkan.setState('close')"
            v-ripple
          >
            Batal
          </button>
          <div style="width: 16px;"></div>
          <button
            class="btn__large btn__accent col relative-position"
            @click="aktivasiLatihan()"
            v-ripple
          >
            Aktifkan
          </button>
        </div>
      </div>
    </SwipeableBottomSheet>
    <!--

    -->

    <!-- POPUP DONE -->
    <SwipeableBottomSheet
      ref="popUpDone"
      default-state="close"
      :open-top="getHeightForPopUp(420)"
      :use-overlay="true"
      :can-close="true"
      :use-drag-icon="false"
    >
      <div class="info-content" style="padding: 24px 16px 0;">
        <div class="text-center bg-secondary" style="border-radius: 8px;">
          <img style="height: 156px;" src="/img/popup_finishing.png" />
        </div>
        <div
          class="text__primary text__title-2 text-center"
          style="margin-top: 24px; margin-bottom: 12px;"
        >
          Selesaikan Latihan?
        </div>

        <p
          class="text-center text__body text__neutral-dark-grey"
          style="margin-bottom: 48px"
        >
          Jawabanmu akan disimpan pada latihan ini. Apakah kamu yakin ingin
          melanjutkannya?
        </p>

        <div class="row items-end ">
          <button
            class="btn__large btn__alert-secondary col-auto relative-position"
            @click="() => this.$refs.popUpDone.setState('close')"
            v-ripple
          >
            Batal
          </button>
          <div style="width: 16px;"></div>
          <button
            class="btn__large btn__accent col relative-position"
            @click="selesaikanLatihan()"
            v-ripple
          >
            Lanjutkan
          </button>
        </div>
      </div>
    </SwipeableBottomSheet>
  </LayoutOne>
</template>

<script>
import LayoutOne from "../../../layouts/LayoutOne.vue";
import SwipeableBottomSheet from "src/components/SwipeableBottomSheet.vue";
import TextAreaCustom from "src/components/inputs/TextAreaCustom.vue";

export default {
  components: { LayoutOne, TextAreaCustom, SwipeableBottomSheet },
  computed: {
    formDisabled() {
      return !this.$store.state.restrukturisasi.statusLatihan.sesi1
        .latihan2Form;
    },
    showSecondaryAction() {
      return (
        !this.$store.state.restrukturisasi.statusLatihan.sesi1
          .latihan2Finished &&
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
  }
};
</script>
