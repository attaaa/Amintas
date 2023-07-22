<template>
  <div style="height: 100vh; overflow: hidden;">
    <div style="padding: 16px 12px;">
      <div @click="() => this.$refs.popUpCancel.setState('open')">
        <img
          src="assets/icons/general/arrow-left.svg"
          svg-inline
          style="width: 24px; fill: #5C7CCD;"
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
            :class="selectedPemicu == pemicu.id && 'active'"
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

    <PopUp ref="popUpCancel" :enable-pan-area="false">
      <!-- illustration -->
      <div
        class="placeholder-illustration flex"
        style="height: 188px; margin: 8px;"
      >
        <img
          style="width: 100%; border-radius: 8px;"
          src="img/popup_end_process.png"
        />
      </div>

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
          @click="$router.replace('/strategi')"
          v-ripple
        >
          Tingalkan Halaman
        </button>
        <div style="width: 16px;"></div>
        <button
          class="btn__large btn__secondary text__primary col-auto relative-position "
          @click="() => this.$refs.popUpCancel.setState('close')"
          v-ripple
        >
          Tidak
        </button>
      </div>
    </PopUp>
  </div>
</template>

<script>
import { pemicuList } from "../../data/strategi/StrategiInputChoice";
import PopUp from "components/bottomsheet/PopUp";
export default {
  name: "StrategiInputCategory",
  components: {
    PopUp
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
      this.$router.replace("/strategi/input-story1");
    }
  }
};
</script>

<style>
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
