<template>
  <div class="edukasi-detail">
    <div class="edukasi-detail--header">
      <img src="/img/education_material_prolog1.png" />
    </div>

    <div class="edukasi-detail--content" style="padding: 16px">
      <div class="text__title-2 text__primary" style="margin-bottom: 12px">
        Cemas dan Gangguan
      </div>
      <div class="text__body text__neutral-black">
        Membantu menjawab rasa penasaran
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
        <div class="material-item flex items-center">
          <img src="/img/education_display_mat1.png" />
          <div class="text__headline text__primary">Teknik Pernapasan</div>
        </div>
        <div class="material-item flex items-center">
          <img src="/img/education_display_mat1.png" />
          <div class="text__headline text__primary">Teknik Pernapasan</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EdukasiDetail"
};
</script>

<style>
.edukasi-detail--header {
  width: 100%;
  height: 200px;
  border-radius: 0px 0px 16px 16px;
  overflow: hidden;
}

.edukasi-detail--header img {
  width: 100%;
  object-fit: cover;
}

.material-item {
  padding: 12px 16px;
  margin-bottom: 8px;

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;

  background: #f2f6ff;
  border-radius: 8px;
}

.material-item img {
  border-radius: 20px;
}
</style>
