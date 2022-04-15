<template>
  <span class="input-text-area-titled">
    <div
      class="full-width text__title-4 text__neutral"
      :class="{ inputed: inputVar.title !== '' }"
      style="margin-bottom: 12px;"
      role="textbox"
      contenteditable
      spellcheck="false"
      ref="title_input"
      @input="onChangeStory('title', $event)"
      @blur="onInputBlur('title', $event)"
      @click="onClick(placeholder.title, $event)"
    >
      {{ inputVar.title !== "" ? inputVar.title : placeholder.title }}
    </div>
    <div
      class="full-width text__body text__neutral"
      :class="{ inputed: inputVar.content !== '' }"
      role="textbox"
      contenteditable
      spellcheck="false"
      @input="onChangeStory('content', $event)"
      @blur="onInputBlur('content', $event)"
      @click="onClick(placeholder.content, $event)"
    >
      {{ inputVar.content !== "" ? inputVar.content : placeholder.content }}
    </div>
  </span>
</template>

<style lang="scss">
.input-text-area-titled {
  width: 100%;
  // min-width: 100%;
  // border: 1px solid #5c7ccd;
  box-sizing: border-box;
  // border-radius: 8px;
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
    onClick(placeholderText, event) {
      if (event.target.innerHTML.trim() === placeholderText) {
        event.target.innerHTML = "";
      }
    },
    onChangeStory(inputType, event) {
      let text = event.target.innerHTML.trim();
      let inputStory = Object.assign({}, this.inputVar);

      if (inputType === "title") {
        inputStory.title = text;
      } else if (inputType === "content") {
        inputStory.content = text;
      }

      this.$emit("input-story-listener", inputStory);
    },
    onInputBlur(inputType, event) {
      if (event.target.innerHTML === "") {
        if (inputType === "title") {
          event.target.innerHTML = this.placeholder.title;
        } else if (inputType === "content") {
          event.target.innerHTML = this.placeholder.content;
        }
      }
    }
  }
};
</script>
