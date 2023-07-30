<template>
  <div style="height: 100vh; overflow: hidden;">
    <div style="padding: 16px 12px;">
      <div @click="$refs.popupBack.$refs.popup.setState('open')">
        <img
          svg-inline
          class="fill-primary"
          src="assets/icons/general/arrow-left.svg"
        />
      </div>
    </div>

    <div
      class="text-center text__title-3 text__neutral-black"
      style="padding: 4px 32px;"
    >
      Pilihlah kategori dari pemicu cemasmu
    </div>

    <div style="padding: 40px 24px; margin-inline: auto;">
      <!-- playlist -->
      <div class="playlist row">
        <!-- container for spacing -->
        <div
          v-for="pemicu in pemicuList"
          :key="pemicu.id"
          class="playlist-item col-6"
        >
          <!-- actual playlist item -->
          <div
            :class="{
              active: selectedPemicu == pemicu.id,
              inactive: selectedPemicu !== null && selectedPemicu !== pemicu.id
            }"
            @click="selectedPemicu = pemicu.id"
          >
            <div class="playlist-item--bg">
              <img :src="pemicu.img" />
            </div>
            <div class="playlist-item--text text__title-4 text__primary">
              {{ pemicu.name }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="journal-input--action col-auto"
      :class="[selectedPemicu !== null ? 'show-action' : 'hide-action']"
    >
      <button
        class="btn__large btn__accent full-width"
        @click="nextInputStrategi()"
      >
        Lanjut
      </button>
    </div>

    <PopupAction ref="popupBack" />
  </div>
</template>

<script>
import { pemicuList } from "../../data/strategi/StrategiInputChoice";
import PopupAction from "src/components/shared/PopupAction.vue";

export default {
  name: "StrategiInputCategory",
  components: {
    PopupAction
  },
  data() {
    return {
      pemicuList,
      selectedPemicu: null
    };
  },
  computed: {
    strategiInputData() {
      return this.$store.state.strategi.strategiInputData;
    }
  },
  mounted() {
    this.selectedPemicu = this.strategiInputData.category;
  },
  methods: {
    nextInputStrategi() {
      this.$store.dispatch("strategi/updateInputStrategi", {
        ...this.strategiInputData,
        category: this.selectedPemicu
      });
      this.$router.push("/strategi/input-story1");
    }
  }
};
</script>

<style scoped>
.playlist-item {
  height: 180px;
  margin-bottom: 16px;
  position: relative;
  overflow: hidden;
  border-radius: 16px;
}

.playlist-item > div {
  width: calc(100% - 8px);
  height: 180px;
  position: relative;
  overflow: hidden;
  border-radius: 16px;
  border: 2px solid transparent;
  background-color: #f2f6ff;
}

.playlist-item > div.active {
  border: 2px solid #5c7ccd;
}

.playlist-item > div.inactive {
  background-color: #dedede;
}

.playlist-item:nth-child(even) {
  display: flex;
  justify-content: flex-end;
}

.playlist-item--bg {
  width: 100%;

  position: absolute;
  top: 0;
  left: 0;

  z-index: 1;
}

.playlist-item--bg img {
  width: 100%;
  object-fit: cover;
}

.playlist-item--text {
  width: calc(100%);
  padding: 12px 16px;

  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 10;
  box-sizing: border-box;

  text-align: center;
}

.journal-input--action {
  box-shadow: 0px 2px 4px 1px rgba(48, 48, 48, 0.12);
  padding: 16px 16px 24px 16px;
  background-color: #fff;
  position: relative;
  z-index: 40px;
  position: absolute;
  width: 100%;
}

.journal-input--action.hide-action {
  bottom: -88px;
}

.journal-input--action.show-action {
  bottom: 0;
  transition: bottom 500ms cubic-bezier(0.465, 0.183, 0.153, 0.946);
}
</style>
