<template>
  <div class="search-field relative-position">
    <img svg-inline src="assets/icons/search.svg" class="search-field--icon" />
    <input
      type="text"
      name="search_journal_preview"
      placeholder="Cari jurnal ceritamu"
      class="search-field--text full-width"
      v-model="search_input"
      autocomplete="off"
      ref="search_input"
    />
    <img
      svg-inline
      src="assets/icons/cancel.svg"
      class="search-field--icon-cancel"
      v-if="search_input !== ''"
      @click="clearInput()"
    />
  </div>
</template>

<style lang="scss">
@import url("SearchField.scss");
</style>

<script>
export default {
  name: "SearchField",
  props: {
    autoFocus: Boolean
  },
  data() {
    return {
      search_input: ""
    };
  },
  mounted() {
    if (this.autoFocus) this.$refs.search_input.focus();
  },
  methods: {
    clearInput() {
      this.search_input = "";
    }
  }
};
</script>
