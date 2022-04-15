<template>
  <div>
    <div class="home-container">
      <!-- HEADER -->
      <div class="home-header">
        <span class="text__title-1 text__primary">Edukasi</span>
      </div>

      <div>
        <SearchField />
      </div>
    </div>
  </div>
</template>

<script>
import SearchField from "components/inputs/SearchField";
export default {
  name: "Edukasi",
  components: { SearchField }
};
</script>
