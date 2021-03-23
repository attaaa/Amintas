<template>
  <span class="input-text-area-titled">
    <div
      class="full-width text__title-4 text__neutral"
      :class="{ inputed: inputVar.title !== '' }"
      style="margin-bottom: 12px;"
      role="textbox"
      contenteditable="true"
      spellcheck="false"
      @input="onChangeStory"
      @focus="onInputFocus(placeholder.title, $event)"
      @blur="onInputBlur"
    >
      {{ inputVar.title !== "" ? inputVar.title : placeholder.title }}
    </div>
    <div
      class="full-width text__body text__neutral"
      role="textbox"
      contenteditable="true"
      spellcheck="false"
    >
      Tuliskan ceritamu disini
    </div>
  </span>
</template>

<style lang="scss">
.input-text-area-titled {
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
  name: "TextAreaTitled",
  props: {
    inputVar: Object
  },
  data() {
    return {
      placeholder: {
        title: "Judul untuk ceritamu",
        content: "Tuliskan ceritamu disini"
      }
    };
  },
  methods: {
    onChangeStory(event) {
      let text = event.target.innerHTML.trim();
      this.$emit("input-title-listener", text);
      if (text === "") {
        event.target.innerHTML = "Judul untuk ceritamu";
      }
    },
    onInputFocus(placeholderText, event) {
      if (event.target.innerHTML.trim() === placeholderText) {
        event.target.innerHTML = "";
      }
    },
    onInputBlur(event) {
      if (event.target.innerHTML === "") {
        event.target.innerHTML = "Judul untuk ceritamu";
      }
    }
  }
};
</script>
