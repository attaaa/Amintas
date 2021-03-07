<template>
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
      <div class="absolute-center text-center vertical-middle mid-nav" v-ripple>
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
        <img svg-inline class="nav-item--icon" src="assets/icons/bantuan.svg" />
        <div class="nav-item--text">Bantuan</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import url("MainNavbar.scss");
</style>

<script>
export default {
  name: "MainNavbar",
  data() {
    return {
      activeUrl: "kognitif"
    };
  },
  methods: {
    changeUrl(urlName) {
      this.activeUrl = urlName;
    }
  }
};
</script>
