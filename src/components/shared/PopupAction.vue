<template>
  <!-- POPUP BACK -->
  <SwipeableBottomSheet
    ref="popup"
    default-state="close"
    :open-top="getHeightForPopUp(420)"
    :use-overlay="true"
    :can-close="true"
    :use-drag-icon="false"
  >
    <div class="info-content" style="padding: 24px 16px 0;">
      <div class="text-center bg-secondary" style="border-radius: 8px;">
        <img style="height: 156px;" :src="img" />
      </div>
      <div
        class="text__primary text__title-2 text-center"
        style="margin-top: 24px; margin-bottom: 12px;"
      >
        <slot name="title">
          Tinggalkan Halaman?
        </slot>
      </div>

      <p
        class="text-center text__body text__neutral-dark-grey"
        style="margin-bottom: 48px"
      >
        <slot name="description">
          Perubahanmu belum tersimpan. Apakah kamu yakin ingin meninggalkan
          halaman?
        </slot>
      </p>

      <div class="row items-end ">
        <slot name="action">
          <button
            class="btn__large btn__secondary col relative-position"
            @click="$refs.popup.setState('close')"
            v-ripple
          >
            Batal
          </button>
          <div style="width: 16px;"></div>
          <button
            class="btn__large btn__alert col-auto relative-position text-white"
            @click="$router.back()"
            v-ripple
          >
            Tinggalkan Halaman
          </button>
        </slot>
      </div>
    </div>
  </SwipeableBottomSheet>
</template>

<script>
import SwipeableBottomSheet from "components/SwipeableBottomSheet";

export default {
  name: "PopupAction",
  props: {
    img: {
      type: String,
      default: "img/popup/tinggalkan_halaman.png"
    }
  },
  components: {
    SwipeableBottomSheet
  },
  methods: {
    getHeightForPopUp(height) {
      return window.innerHeight - height;
    }
  }
};
</script>
