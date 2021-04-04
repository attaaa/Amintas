<template>
  <div>
    <div class="nav row full-width">
      <div
        class="nav-item col full-height relative-position"
        :class="{ active: activeUrl === 'kognitif' }"
        v-ripple
        @click="changeUrl('kognitif')"
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
        :class="{ active: activeUrl === 'edukasi' }"
        v-ripple
        @click="changeUrl('edukasi')"
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
        :class="{ active: activeUrl === 'strategi' }"
        v-ripple
        @click="changeUrl('strategi')"
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
        :class="{ active: activeUrl === 'bantuan' }"
        v-ripple
        @click="changeUrl('bantuan')"
      >
        <div class="absolute-center text-center vertical-middle">
          <img
            svg-inline
            class="nav-item--icon"
            src="assets/icons/bantuan.svg"
          />
          <div class="nav-item--text">Bantuan</div>
        </div>
      </div>
    </div>

    <div
      class="nav-mid-action items-center justify-center"
      :class="[showMidAction ? 'flex' : 'hidden']"
    >
      <div class="action-item column items-center">
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
        @click="goTo('/journal/input')"
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
      <div class="action-item column items-center">
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
  </div>
</template>

<style lang="scss">
@import url("MainNavbar.scss");
</style>

<script>
import ClickOutside from "vue-click-outside";

export default {
  name: "MainNavbar",
  data() {
    return {
      activeUrl: "kognitif",
      showMidAction: false
    };
  },
  methods: {
    changeUrl(urlName) {
      this.activeUrl = urlName;
    },
    toggleMidAction() {
      this.showMidAction = !this.showMidAction;
    },
    goTo(path) {
      this.$router.push(path);
    }
  },
  directives: {
    ClickOutside
  }
};
</script>
