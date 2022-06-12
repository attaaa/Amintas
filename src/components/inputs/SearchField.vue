<template>
  <div class="search-field relative-position">
    <img class="search-field--icon" src="assets/icons/search.svg" svg-inline />
    <input
      ref="search_input"
      :value="searchValue"
      class="search-field--text full-width"
      name="search_journal_preview"
      type="text"
      @input="e => this.$emit('updateValue', e.target.value)"
      placeholder="Cari jurnal ceritamu"
      autocomplete="off"
    />
    <img
      v-if="search_input !== ''"
      class="search-field--icon-cancel"
      @click="clearInput()"
      src="assets/icons/cancel.svg"
      svg-inline
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
      search_input: "",
      searchValue: null
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
