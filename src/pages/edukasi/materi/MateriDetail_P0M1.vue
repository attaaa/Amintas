<template>
  <div class="fl-wrapper">
    <div class="fl-header">
      <!-- BACK BUTTON -->
      <div class="back-btn" @click="$router.back()">
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_232_79102)">
            <g clip-path="url(#clip0_232_79102)">
              <g opacity="0.88" filter="url(#filter1_d_232_79102)">
                <rect
                  x="3"
                  y="3"
                  width="24"
                  height="24"
                  rx="12"
                  fill="#F2F6FF"
                />
              </g>
              <path
                d="M21.6661 13.6666H11.5419L15.9437 9.28357C16.1949 9.03271 16.336 8.69246 16.336 8.33769C16.336 7.98291 16.1949 7.64266 15.9437 7.3918C15.6926 7.14093 15.3519 7 14.9967 7C14.6415 7 14.3008 7.14093 14.0496 7.3918L7.38018 14.053C7.25874 14.1797 7.16355 14.3291 7.10006 14.4926C6.96665 14.817 6.96665 15.1808 7.10006 15.5051C7.16355 15.6686 7.25874 15.818 7.38018 15.9448L14.0496 22.6059C14.1736 22.7308 14.3211 22.8299 14.4837 22.8975C14.6462 22.9652 14.8206 23 14.9967 23C15.1728 23 15.3471 22.9652 15.5097 22.8975C15.6722 22.8299 15.8197 22.7308 15.9437 22.6059C16.0688 22.4821 16.168 22.3347 16.2357 22.1724C16.3034 22.01 16.3383 21.8359 16.3383 21.66C16.3383 21.4842 16.3034 21.31 16.2357 21.1477C16.168 20.9853 16.0688 20.838 15.9437 20.7142L11.5419 16.3311H21.6661C22.0199 16.3311 22.3592 16.1907 22.6093 15.9409C22.8595 15.6911 23 15.3522 23 14.9989C23 14.6455 22.8595 14.3067 22.6093 14.0568C22.3592 13.807 22.0199 13.6666 21.6661 13.6666Z"
                fill="#5C7CCD"
              />
            </g>
          </g>
          <defs>
            <filter
              id="filter0_d_232_79102"
              x="0"
              y="0"
              width="30"
              height="30"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feMorphology
                radius="1"
                operator="erode"
                in="SourceAlpha"
                result="effect1_dropShadow_232_79102"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="2" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.188235 0 0 0 0 0.188235 0 0 0 0 0.188235 0 0 0 0.04 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_232_79102"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_232_79102"
                result="shape"
              />
            </filter>
            <filter
              id="filter1_d_232_79102"
              x="0"
              y="0"
              width="30"
              height="30"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feMorphology
                radius="1"
                operator="erode"
                in="SourceAlpha"
                result="effect1_dropShadow_232_79102"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="2" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.188235 0 0 0 0 0.188235 0 0 0 0 0.188235 0 0 0 0.04 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_232_79102"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_232_79102"
                result="shape"
              />
            </filter>
            <clipPath id="clip0_232_79102">
              <rect x="3" y="3" width="24" height="24" rx="12" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <!-- IMAGE -->
      <img src="img/education_p0m1_head.png" />
    </div>
    <div class="fl-main">
      <!-- TITLE -->
      <h1 class="title">
        Teknik Pernapasan 4-7-8
      </h1>
      <!-- TEXT DETAIL -->
      <div class="fl-main--detail">
        <p style="margin-bottom: 12px">
          Teknik pernapasan 4-7-8 adalah pola pernapasan yang dikembangkan oleh
          Dr. Andrew Weil. Teknik ini didasarkan pada teknik yoga kuno yang
          disebut pranayama, teknik yoga yang membantu praktisi mengendalikan
          pernapasan mereka.
        </p>

        <p>
          Jika dipraktikkan secara teratur, teknik ini akan memungkinkanmu
          merasa sangat rileks bahkan hingga dapat tertidur dalam waktu yang
          lebih cepat dari biasanya.
        </p>

        <h2>Infografis Terkait</h2>
        <Carousel :imgList="imgList" />

        <h2>Cara Kerja 4-7-8</h2>
        <p style="margin-top: 12px">
          Teknik pernapasan ini dirancang untuk membawa tubuh kita masuk ke
          keadaan relaksasi yang dalam. Hal ini menggunakan pola khusus yang
          melibatkan menahan napas selama jangka waktu tertentu, untuk
          memungkinkan tubuhmu dapat mengisi kembali oksigennya. Teknik seperti
          ini dapat memberikan dorongan oksigen yang sangat dibutuhkan organ dan
          jaringan tubuhmu.
        </p>

        <p style="margin-bottom: 16px">
          Praktik relaksasi ini juga membantu mengembalikan keseimbangan tubuh,
          dan mengatur respon 'lawan-atau-lari' yang kita rasakan saat stres
          muncul. Ini akan sangat membantu jika kamu mengalami kesulitan tidur,
          akibat kecemasan atau kekhawatiran tentang apa yang terjadi hari ini,
          ataupun tentang apa yang mungkin terjadi besok. Pikiran dan
          kekhawatiran yang berputar-putar dapat membuat kita tidak dapat
          beristirahat dengan baik.
        </p>

        <img src="img/education_p0m1_body_a.png" />

        <p style="margin-bottom: 12px">
          Teknik ini memaksa pikiran dan tubuh untuk fokus pada pengaturan
          napas, daripada mengulangi bayangan kekhawatiran yang muncul dan
          mengganggu pikiranmu.
        </p>

        <p>
          Kebanyakan orang juga mengklaim teknik ini dapat menenangkan jantung
          yang berdebar kencang atau menenangkan saraf tubuh yang lelah. Dr Weil
          bahkan menggambarkannya sebagai "obat penenang alami untuk sistem
          saraf."
        </p>

        <div
          class="text__headline text__neutral-black"
          style="margin-bottom: 8px"
        >
          Konsep Teknik Pernapasan 4-7-8 dapat dipadukan dengan metode lain,
          seperti:
        </div>
        <!-- Numbering Bullet Atta -->
        <ul class="text__body">
          <li>
            <strong> Pernapasan alternatif, </strong>
            melibatkan pernapasan masuk dan keluar udara dari satu lubang hidung
            sambil menutup lubang hidung yang lainnya
          </li>
          <li>
            <strong>Meditasi kesadaran diri, </strong>
            melibatkan pernapasan secara terfokus sambil memandu pikiranmu untuk
            memperhatikan kondisimu saat itu
          </li>
          <li>
            <strong>Visualisasi, </strong>
            memfokuskan pikiranmu pada jalur dan pola pernapasan natural
          </li>
          <li>
            <strong>Imajinasi tearah </strong>
            mendorongmu untuk fokus pada memori menyenangkan atau cerita bahagia
            yang akan mengalihkan pikiranmu dari kekhawatiran sembari mengatur
            napas
          </li>
        </ul>

        <p>
          Orang yang mengalami gangguan tidur ringan, kecemasan, dan stres
          mungkin akan merasa teknik ini bermanfaat untuk mengatasi gangguan
          mereka dan masuk ke kondisi rileks. Seiring waktu dan dengan konsisten
          untuk terus melakukannya, akan membuat efeknya semakin lebih
          kuat. Pada awalnya, efeknya mungkin tidak begitu erasa, bahkan mungkin
          merasa sedikit pusing saat pertama kali mencobanya.
        </p>

        <h2>Langkah-Langkahnya</h2>

        <p style="margin-top: 12px;margin-bottom: 16px">
          Untuk melatih teknik pernapasan 4-7-8, carilah tempat untuk duduk atau
          berbaring dengan nyaman. Pastikan kamu mempraktikkannya dengan postur
          yang baik, terutama saat memulainya. Jika kamu menggunakan teknik
          untuk tertidur, berbaring adalah yang terbaik.
        </p>

        <img src="img/education_p0m1_body_b.png" />

        <p>
          Bersiaplah untuk memulainya dengan meletakkan ujung lidahmu ke
          langit-langit mulut, tepat di belakang gigi depan bagian atas. Kamu
          harus memastikan lidahmu tetap pada tempatnya selama melakukan teknik
          ini. Perlu sering mencoba untuk tidak menggerakkan lidah saat kamu
          menghembuskan napas. Beberapa orang merasa lebih mudah menghembuskan
          napas pada Teknik 4-7-8 ini saat mereka mengerutkan bibir, mungkin
          kamu dapat mencobanya jika merasa kesulitan.
        </p>

        <div
          class="text__headline text__neutral-black"
          style="margin-bottom: 8px"
        >
          Langkah-langkah berikut harus dilakukan dalam siklus satu napas:
        </div>

        <!--Numbering Number Atta -->
        <ol>
          <li style="margin-bottom: 8px">
            Pertama, biarkan bibirmu terbuka. Buatlah suara mendengus dan
            hembuskan napas sepenuhnya melalui mulutmu.
          </li>
          <li style="margin-bottom: 8px">
            Selanjutnya, tutup bibirmu tarik napas tanpa suara melalui hidung
            sembari menghitung sampai empat di kepalamu.
          </li>
          <li style="margin-bottom: 8px">
            Kemudian, selama tujuh detik, tahan napasmu. Lalu buang napas
            sembari mendengus lagi dari mulutmu selama delapan detik.
          </li>
        </ol>

        <p>
          Saat kamu menarik napas lagi, berarti kamu memulai siklus napas yang
          baru. Ulangi pola ini sebanyak empat siklus setiap kali melakukan
          Teknik Pernapasan 4-7-8.
        </p>

        <h2>Video Terkait</h2>
        <div class="video">
          <iframe
            title="video"
            width="100%"
            height="100%"
            type="text/html"
            src="https://www.youtube.com/embed/8LaO3T6h6MM?ps=docs&controls=0&disablekb=1&fs=0&modestbranding=1&playsinline=1&color=white&iv_load_policy=3"
            frameborder="0"
          ></iframe>
          <div class="video__btn-play" role="button" aria-label="play video">
            <img src="img/btn-video-play.png" />
          </div>
        </div>
      </div>
      <!-- INFORMASI MATERI -->
      <div class="informasi-materi">
        <div class="informasi-title">
          <span class="text__title-4">Informasi Materi</span>
          <div class="informasi-title--decor" />
        </div>
        <Collapse label="Sumber">
          <!-- <template v-slot:preview="">
            Sumber
          </template> -->
          <template v-slot:content="">
            <p style="margin-bottom: 0">
              Materi adalah hasil saduran artikel asli berjudul “What is the
              4-7-8 Breathing Technique?”, yang telah dipublikasikan pada laman
              Healthline.
            </p>
          </template>
        </Collapse>

        <div style="height: 8px;"></div>

        <Collapse label="Penulis">
          <!-- <template v-slot:preview="">
            Sumber
          </template> -->
          <template v-slot:content="">
            <div class="row no-wrap" style="padding-top: 8px;">
              <img
                src="img/education_material_author_ana.png"
                style="width: 40px; height: 40px; border-radius: 50%; margin-right: 12px;"
              />
              <div>
                <div>Ana Gotter, BA</div>
                <div>Penulis dan Pemasaran Konten</div>
                <div>Florida State University</div>
              </div>
            </div>

            <div class="row no-wrap" style="padding-top: 8px;">
              <img
                src="img/education_material_author_gabriel.png"
                style="width: 40px; height: 40px; border-radius: 50%; margin-right: 12px;"
              />
              <div>
                <div>Gabrielle Juliano-Villani, LCSW</div>
                <div>Pekerja Sosial Klinis</div>
                <div>Metropolitan State University of Denver</div>
              </div>
            </div>
          </template>
        </Collapse>

        <div style="height: 8px;"></div>

        <Collapse label="Peninjau">
          <!-- <template v-slot:preview="">
            Sumber
          </template> -->
          <template v-slot:content="">
            <div class="row no-wrap" style="padding-top: 8px;">
              <img
                src="img/education_material_reviewer_timothy.png"
                style="width: 40px; height: 40px; border-radius: 50%; margin-right: 12px;"
              />
              <div>
                <div>Timothy J. Legg, Ph.D., CRNP</div>
                <div>Psikolog dan Praktisi Perawat Psikiatri</div>
                <div>Touro College, California Southern University</div>
              </div>
            </div>

            <div class="row no-wrap" style="padding-top: 8px;">
              <img
                src="img/education_material_reviewer_rayj.png"
                style="width: 40px; height: 40px; border-radius: 50%; margin-right: 12px;"
              />
              <div>
                <div>Rajy Abulhosn, MD</div>
                <div>Konsultan Medis</div>
                <div>University of Washington</div>
              </div>
            </div>
          </template>
        </Collapse>
      </div>
    </div>
  </div>
</template>

<script>
import Collapse from "components/strategi/Collapse.vue";
import Carousel from "components/shared/Carousel.vue";

export default {
  name: "MateriDetial_P0M1",
  components: { Collapse, Carousel },
  data() {
    return {
      imgList: [
        "img/infografis/infografis1.png",
        "img/infografis/infografis2.png",
        "img/infografis/infografis3.png",
        "img/infografis/infografis4.png"
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.informasi-materi {
  margin: 24px 0;

  p {
    font-family: "Nunito Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.02em;
    color: #303030;
  }

  .informasi-title {
    display: flex;
    align-items: center;
    margin-bottom: 12px;

    span {
      padding-right: 12px;
    }

    &--decor {
      content: "";
      flex: 1 1 0;
      height: 2px;
      background-color: #ffcb4d;
    }
  }
}

.video {
  position: relative;

  &__btn-play {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
