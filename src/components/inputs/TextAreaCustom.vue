<template>
  <div class="text-area-custom--container" :class="{ disabled: disabled }">
    <div
      ref="textAreaCustom"
      class="input-text-area full-width text__body text__neutral"
      :class="{ inputed: value !== '' }"
      role="textbox"
      :contenteditable="!disabled"
      spellcheck="false"
      @input="onInput"
    ></div>
    <span
      ref="placeholder"
      v-if="value === '' && placeholder"
      class="placeholder text__body-text text__neutral-gray"
      contenteditable="false"
    >
      {{ placeholder }}
    </span>
  </div>
</template>

<style lang="scss" scoped>
.text-area-custom--container {
  width: 100%;
  height: fit-content;
  border: 1px solid #dedede;
  box-sizing: border-box;
  border-radius: 6px;
  background: #f1f2f5;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.02em;
  position: relative;

  &.disabled {
    background: #dedede;
  }

  .input-text-area {
    width: 100%;
    padding: 8px 12px;
    min-height: 90px;
    max-height: 138px;
    overflow-y: scroll;
    background: none;
    color: #303030;
    position: relative;
    z-index: 2;

    &:focus {
      outline: none;
    }
  }

  .placeholder {
    position: absolute;
    top: 8px;
    left: 12px;
    color: #c4c4c8;
    pointer-events: none;
    user-select: none;
    z-index: 1;
  }
}
</style>

<script>
export default {
  name: "TextAreaCustom",
  props: {
    value: String,
    placeholder: String,
    disabled: Boolean
  },
  data: function() {
    return {
      isFocus: false
    };
  },
  methods: {
    onInput() {
      let text = this.$refs.textAreaCustom.innerText || "";
      if (text !== this.placeholder) {
        this.$emit("input", text);
      }
    }
  }
};
</script>
