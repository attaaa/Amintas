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

<style lang="scss" scoped>
.search-field {
  &--icon {
    position: absolute;
    top: 10px;
    left: 10px;
    fill: $color-neutral-grey;
  }

  &--text {
    border-radius: 6px;
    padding-top: 8px;
    padding-bottom: 8px;
    padding-left: 40px;
    padding-right: 42px;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.02em;
    border: none;
    background: #f1f2f5;
    border: 1px solid #dedede;
    box-sizing: border-box;

    &:focus {
      outline: none;
    }
  }

  &--icon-cancel {
    position: absolute;
    top: 10px;
    right: 12px;
    fill: $color-neutral-grey;
  }

  ::-webkit-input-placeholder {
    /* Edge */
    color: $color-neutral-grey;
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: $color-neutral-grey;
  }

  ::placeholder {
    color: $color-neutral-grey;
  }
}
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
