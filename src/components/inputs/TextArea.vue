<template>
  <span class="input-text-area">
    <div
      class="full-width text__body text__neutral"
      :class="{ inputed: inputVar !== '' }"
      role="textbox"
      contenteditable="true"
      spellcheck="false"
      @input="onChangeStory"
      @focus="onInputFocus"
      @blur="onInputBlur"
    >
      {{ inputVar !== "" ? inputVar : placeholder }}
    </div>
  </span>
</template>

<style lang="scss">
.input-text-area {
  max-width: 100%;
  min-width: 100%;
  border: 1px solid #5c7ccd;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 12px 16px;

  div:focus {
    outline: none;
  }

  .inputed {
    color: #303030 !important;
  }
}
</style>

<script>
export default {
  name: "TextArea",
  props: {
    inputVar: String,
    placeholder: String
  },
  methods: {
    onChangeStory(event) {
      let text = event.target.innerHTML.trim();
      if (text !== this.placeholder) {
        this.$emit("input-listener", text);
      }
    },
    onInputFocus(event) {
      if (event.target.innerHTML.trim() === this.placeholder) {
        event.target.innerHTML = "";
      }
    },
    onInputBlur(event) {
      if (event.target.innerHTML === "") {
        event.target.innerHTML = this.placeholder;
      }
    }
  }
};
</script>
