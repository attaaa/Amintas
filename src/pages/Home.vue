<template>
  <div>
    <div class="home-container">
      <!-- HEADER -->
      <div class="home-header">
        <span class="text__title-1 text__primary q-mx-auto">Amintas</span>
      </div>

      <template v-if="!latihanAktif.active">
        <div class="home-card">
          <div class="home-card--text">
            <p class="text__headline text-white">
              Yuk lawan pikiran mengganggu di kepalamu!
            </p>
            <button
              class="btn__small btn__accent"
              @click="$router.push('restrukturisasi')"
            >
              Buka modul
            </button>
          </div>
          <div class="home-card--img">
            <img src="img/module_access_main.png" />
          </div>
        </div>
      </template>
      <template v-else>
        <div class="home-card active">
          <div class="home-card--text">
            <div class="text__title-5 text__neutral-grey q-mb-xs">
              Latihan aktif:
            </div>
            <p class="text__headline text-primary">
              {{ latihanAktif.name }}
            </p>
            <button
              class="btn__small btn__primary text-white"
              @click="$router.push(latihanAktif.path)"
            >
              Buka Sesi
            </button>
          </div>
          <div class="home-card--img">
            <img :src="latihanAktif.img" />
          </div>
        </div>
      </template>

      <div>
        <!-- journal data present -->
        <SwipeableBottomSheet
          ref="bottomSheet"
          default-state="half"
          :z-index="50"
          :swipeable="true"
          v-if="journalDataList.length > 0"
          @stateChange="
            state => {
              journalListBottomSheetState = state;
            }
          "
        >
          <div
            class="column"
            style="height: 100vh; padding: 16px; padding-bottom: 0 !important; padding-top: 8px;"
          >
            <SearchField
              class="col-auto"
              style="margin-bottom: 24px"
              placeholder="Cari jurnal ceritamu"
              @click.native="$router.push('/search')"
            />
            <JournalPreviewItemList
              class="col scroll hide-scrollbar"
              style="padding-bottom: 100px;"
              :journal-data-list="journalDataList"
              :style="{
                paddingBottom:
                  journalListBottomSheetState === 'half' ? '350px' : '80px'
              }"
            />
          </div>
        </SwipeableBottomSheet>

        <!-- journal data empty -->
        <SwipeableBottomSheet
          v-else
          ref="bottomSheet"
          :open-top="280"
          :use-drag-icon="false"
          :z-index="50"
        >
          <div style="padding: 32px 24px;">
            <!-- illustration -->
            <div
              class="placeholder-illustration"
              style="height: 188px; margin: 8px;"
            >
              <img src="~assets/img/empty_nothing.png" style="height: 100%" />
            </div>
            <span
              class="block text__primary text__title-3 full-width text-center"
              style="margin-top: 24px; margin-bottom: 16px;"
              >Jurnalmu masih kosong</span
            >
            <p class="text__body text__neutral-dark-grey text-center">
              Kamu bisa mulai menulis ceritamu untuk mengungkap pikiran
              mengganggumu
            </p>
          </div>
        </SwipeableBottomSheet>
      </div>
    </div>

    <Instruction ref="instruction" :instructionList="instructionList" />
  </div>
</template>

<script>
import SwipeableBottomSheet from "components/SwipeableBottomSheet";
import SearchField from "components/inputs/SearchField";
import JournalPreviewItemList from "components/JournalPreviewItemList";
import Instruction from "src/components/shared/Instruction";

const instructionList = [
  {
    id: 0,
    img: "img/instructions/home/akses-bantuan.png",
    title: "Akses Bantuan",
    description:
      "Lebih tenang saat cemas muncul dengan relaksasi, tulis keluh-kesah keseharianmu pada jurnal, dan hubungi telepon darurat saat cemasmu tidak terkendali"
  },
  {
    id: 1,
    img: "img/instructions/home/pikiran.png",
    title: "Pikiran",
    description:
      "Baca kembali jurnal yang telah kamu tulis, dan akses modul untuk melawan pikiran mengganggu yang kamu temui"
  },
  {
    id: 2,
    img: "img/instructions/home/edukasi.png",
    title: "Edukasi",
    description:
      "Temukan informasi tertentu pada kumpulan topik berisi materi terkait, lalu akses materi teknik yang akan bantu kamu lebih tenang"
  },
  {
    id: 3,
    img: "img/instructions/home/strategi.png",
    title: "Strategi",
    description:
      "Buat strategi untuk hadapi pemicu secara terencana, dan lakukan tiap aktivitas  pada tangga ketakutan di dalamnya"
  },
  {
    id: 4,
    img: "img/instructions/home/mulai-atasi-cemasmu.png",
    title: "Mulai Atasi Cemasmu",
    description:
      "Dengan amintas kamu dapat menangani perasaan cemas mengganggu yang muncul di keseharianmu"
  }
];

export default {
  name: "Home",
  components: {
    SwipeableBottomSheet,
    SearchField,
    JournalPreviewItemList,
    Instruction
  },
  data() {
    return {
      journalListBottomSheetState: "half",
      instructionList
    };
  },
  computed: {
    account() {
      return this.$store.state.account.account;
    },
    isLoggedIn() {
      return this.$store.state.account.isLoggedIn;
    },
    journalDataList() {
      return this.$store.state.journal.journalDataList;
    },
    latihanAktif() {
      return this.$store.state.restrukturisasi.latihanAktif;
    }
  },
  mounted() {
    if (!this.account || !this.account.name || !this.isLoggedIn) {
      this.$router.replace("onboarding");
    } else {
      if (!this.$store.state.account.homeVisited) {
        const timeOut = setTimeout(() => {
          this.$store.commit("account/setHomeVisited");
          this.$refs.instruction.setState("open");
        }, 800);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.home-card {
  overflow: hidden;
  position: relative;

  &.active {
    background-color: #f2f6ff;

    .home-card--text p {
      height: 48px;
      line-clamp: 2;
    }
  }
}

.home-card--text {
  z-index: 2;
}

.home-card--img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  text-align: right;
  pointer-events: none;

  img {
    width: 100%;
    height: 100%;
  }
}

.home-card.active {
  .home-card--img {
    height: 100%;
    width: auto;
    left: unset;
    right: -28px;
  }
}
</style>
