<template>
  <div class="fl-wrapper">
    <div class="fl-header">
      <div class="back-btn" @click="$router.replace('/edukasi')">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.6661 6.66663H4.54191L8.94374 2.28357C9.19491 2.03271 9.33602 1.69246 9.33602 1.33769C9.33602 0.98291 9.19491 0.642664 8.94374 0.391799C8.69256 0.140934 8.35189 0 7.99668 0C7.64146 0 7.30079 0.140934 7.04961 0.391799L0.380176 7.05298C0.258738 7.17968 0.163545 7.32908 0.10006 7.49261C-0.0333532 7.81696 -0.0333532 8.18077 0.10006 8.50511C0.163545 8.66865 0.258738 8.81805 0.380176 8.94475L7.04961 15.6059C7.17362 15.7308 7.32115 15.8299 7.48369 15.8975C7.64624 15.9652 7.82059 16 7.99668 16C8.17276 16 8.34711 15.9652 8.50966 15.8975C8.6722 15.8299 8.81973 15.7308 8.94374 15.6059C9.06876 15.4821 9.16799 15.3347 9.23571 15.1724C9.30343 15.01 9.3383 14.8359 9.3383 14.66C9.3383 14.4842 9.30343 14.31 9.23571 14.1477C9.16799 13.9853 9.06876 13.838 8.94374 13.7142L4.54191 9.3311H14.6661C15.0199 9.3311 15.3592 9.19074 15.6093 8.9409C15.8595 8.69105 16 8.35219 16 7.99886C16 7.64553 15.8595 7.30667 15.6093 7.05683C15.3592 6.80699 15.0199 6.66663 14.6661 6.66663Z"
            fill="#5C7CCD"
          />
        </svg>
      </div>
      <img src="img/education_material_prolog2.png" />
    </div>

    <div class="fl-main">
      <div class="text__title-2 text__primary" style="margin-bottom: 12px">
        Kecemasan Mahasiswa
      </div>
      <div class="fl-main--detail">
        <p>
          Untukmu yang ingin tahu lebih tentang rasa cemas yang biasanya kamu
          rasakan selama menjalani keseharian di perkuliahan. Tentang
          perasaanmu, darimana asalnya rasa itu, dan berbagai hal yang bisa
          membantumu merasa lebih baik.
        </p>
      </div>
    </div>

    <div class="edukasi-detail--footer" style="padding: 16px">
      <div
        class="text__title-3 text__neutral-black"
        style="margin-bottom: 12px"
      >
        Materi
      </div>
      <div>
        <div
          class="material-item flex items-center"
          @click="() => this.$router.replace('/materi/detail')"
        >
          <img src="img/education_display_mat1_p2m1.png" />
          <div class="text__headline text__primary">
            Kecemasan akan Perpisahan
          </div>
        </div>
        <div class="material-item flex items-center">
          <img src="img/education_display_mat1_p2m2.png" />
          <div class="text__headline text__primary">
            Kecemasan Sosial
          </div>
        </div>
        <div class="material-item flex items-center">
          <img src="img/education_display_mat1_p2m3.png" />
          <div class="text__headline text__primary">
            Kecemasan Antisipatif
          </div>
        </div>
        <div class="material-item flex items-center">
          <img src="img/education_display_mat1_p2m4.png" />
          <div class="text__headline text__primary">
            Kecemasan terhadap Ujian
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "KecemasanMahasiswa"
};
</script>

<style>
.material-item {
  padding: 12px 16px;
  margin-bottom: 8px;

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  gap: 12px;

  background: #f2f6ff;
  border-radius: 8px;
}

.material-item img {
  border-radius: 20px;
}
</style>
