<template>
  <div class="search-field relative-position">
    <img
      class="search-field--icon"
      src="assets/icons/search.svg"
      svg-inline
      style="pointer-events: none;"
    />
    <input
      ref="search_input"
      :value="value"
      class="search-field--text full-width"
      name="search_journal_preview"
      type="text"
      @input="e => this.$emit('updateValue', e.target.value)"
      :placeholder="placeholder"
      @keyup.enter="onKeyupEnter"
      autocomplete="off"
    />
    <div
      class="search-field--icon-cancel"
      v-if="showResetButton"
      @click="clearInput"
    >
      <img
        style="pointer-events: none;"
        src="assets/icons/cancel.svg"
        svg-inline
      />
    </div>
  </div>
</template>

<style lang="scss">
@import url("SearchField.scss");
</style>

<script>
export default {
  name: "SearchField",
  props: {
    autoFocus: Boolean,
    placeholder: String,
    value: String,
    detectOutsideClick: Boolean
  },
  data() {
    return {
      search_input: null,
      showResetButton: false
    };
  },
  mounted() {
    if (this.autoFocus) {
      this.$refs.search_input.focus();
      this.showResetButton = true;
    }

    if (this.detectOutsideClick)
      document.addEventListener("click", this.handleShowResetButton);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.handleShowResetButton);
  },
  methods: {
    handleShowResetButton(e) {
      try {
        e.stopPropagation();
        e.preventDefault();
        // console.log(e);
        const target = e.target;
        if (target && target?.parentNode?.className?.includes("search-field")) {
          this.$refs.search_input.focus();
          this.showResetButton = true;
        } else {
          this.showResetButton = false;
        }
      } catch (error) {
        console.error(error);
      }
    },
    clearInput() {
      this.$emit("clearInputSearch");
    },
    onKeyupEnter() {
      this.$emit("enter");
      this.showResetButton = false;
      this.$refs.search_input.blur();
    }
    // blurEvent(e) {
    //   console.log(e);
    // }
  }
};
</script>
