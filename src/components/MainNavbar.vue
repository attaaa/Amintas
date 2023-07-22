<template>
  <div>
    <div class="nav row full-width">
      <div
        class="nav-item col full-height relative-position"
        :class="{ active: $route.path === '/' }"
        v-ripple
        @click="changeUrl('/')"
      >
        <div class="absolute-center text-center vertical-middle">
          <img
            svg-inline
            class="nav-item--icon"
            src="assets/icons/kognitif.svg"
          />
          <div class="nav-item--text">Kognitif</div>
        </div>
      </div>

      <div
        class="nav-item col full-height relative-position"
        :class="{ active: $route.path === '/edukasi' }"
        v-ripple
        @click="changeUrl('/edukasi')"
      >
        <div class="absolute-center text-center vertical-middle">
          <img
            svg-inline
            class="nav-item--icon fill-neutral"
            src="assets/icons/edukasi.svg"
          />
          <div class="nav-item--text text__neutral">Edukasi</div>
        </div>
      </div>

      <div class="nav-item col full-height relative-position">
        <div
          class="absolute-center text-center vertical-middle mid-nav"
          v-ripple
          @click="toggleMidAction()"
        >
          <img
            svg-inline
            class="nav-item--icon absolute-center"
            src="assets/icons/penanganan.svg"
          />
        </div>
      </div>

      <div
        class="nav-item col full-height relative-position"
        :class="{
          active:
            $route.path === '/strategi' || $route.path === '/strategi-active'
        }"
        v-ripple
        @click="changeUrl('/strategi')"
      >
        <div class="absolute-center text-center vertical-middle">
          <img
            svg-inline
            class="nav-item--icon"
            src="assets/icons/strategi.svg"
          />
          <div class="nav-item--text">Strategi</div>
        </div>
      </div>

      <div
        class="nav-item col full-height relative-position"
        :class="{ active: $route.path === '/me' }"
        v-ripple
        @click="changeUrl('/me')"
      >
        <div class="absolute-center text-center vertical-middle">
          <img svg-inline class="nav-item--icon" src="assets/icons/me.svg" />
          <div class="nav-item--text">Saya</div>
        </div>
      </div>
    </div>

    <div
      class="nav-mid-action items-center justify-center"
      :class="[showMidAction ? 'flex' : 'hidden']"
    >
      <div
        class="action-item column items-center"
        @click="$router.replace('/relaksasi')"
      >
        <div class="action-item--icon bg-primary" style="margin-bottom: 8px">
          <img
            svg-inline
            src="assets/icons/navbar/wind.svg"
            class="fill-white"
            style="width: 24px;"
          />
        </div>
        <div class="action-item--label text__title-5">
          Relaksasi
        </div>
      </div>
      <div
        class="action-item column items-center"
        @click="$router.replace('/journal/input')"
      >
        <div class="action-item--icon bg-primary" style="margin-bottom: 8px">
          <img
            svg-inline
            src="assets/icons/navbar/diary.svg"
            class="fill-white"
            style="width: 24px;"
          />
        </div>
        <div class="action-item--label text__title-5">
          Jurnal
        </div>
      </div>
      <div class="action-item column items-center" @click="showPopUpCall()">
        <div class="action-item--icon bg-negative" style="margin-bottom: 8px">
          <img
            svg-inline
            src="assets/icons/navbar/call.svg"
            class="fill-white relative-position"
            style="width: 24px;"
            v-ripple
          />
        </div>
        <div class="action-item--label text__title-5">
          Telp. Darurat
        </div>
      </div>
    </div>

    <div class="bg-action" :class="{ hidden: !showMidAction }"></div>

    <PopUp ref="popUpCall" style="z-index: 999;" :enable-pan-area="false">
      <!-- illustration -->
      <div
        class="placeholder-illustration flex"
        style="height: 188px; margin-top: 8px;"
      >
        <img
          style="width: 100%; border-radius: 8px"
          src="img/popup_emergency-call.png"
        />
      </div>

      <span
        class="block text__primary text__title-3 full-width text-center"
        style="margin-top: 24px; margin-bottom: 16px;"
        >Hubungi Nomor Darurat?
      </span>
      <p
        class="text__body text__neutral-dark-grey text-center"
        style="margin-bottom: 48px"
      >
        Kamu akan terhubung dengan orang yang dapat membantumu. Apakah kamu
        yakin ingin melanjutkannya?
      </p>

      <div class="pop-up--action row">
        <button
          class="btn__large btn__alert-secondary col-auto relative-position text__alert"
          @click="hidePopUpCall()"
          v-ripple
        >
          Batal
        </button>
        <div style="width: 16px;"></div>
        <button
          class="btn__large btn__accent col relative-position "
          @click="callNumber()"
          v-ripple
        >
          Hubungi
        </button>
      </div>
    </PopUp>
  </div>
</template>

<style lang="scss">
@import url("MainNavbar.scss");
</style>

<script>
import ClickOutside from "vue-click-outside";
import PopUp from "components/bottomsheet/PopUp";

export default {
  name: "MainNavbar",
  components: { PopUp },
  data() {
    return {
      showMidAction: false
    };
  },
  methods: {
    changeUrl(urlName) {
      if (urlName !== this.$route.path) this.$router.replace(urlName);
    },
    toggleMidAction() {
      this.showMidAction = !this.showMidAction;
    },
    showPopUpCall() {
      this.showMidAction = false;
      this.$refs.popUpCall.setState("open");
    },
    hidePopUpCall() {
      this.$refs.popUpCall.setState("close");
    },
    callNumber() {
      this.window.plugins.CallNumber.callNumber(
        this.onSuccessCall,
        this.onErrorCall,
        "3636",
        false
      );
    },
    onSuccessCall(result) {
      console.log("success: " + result);
    },
    onErrorCall(result) {
      console.log("error: " + result);
    }
  },
  directives: {
    ClickOutside
  }
};
</script>
