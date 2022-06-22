<template>
  <div class="container">
    <div class="input-container">
      <textarea
        class="input text__body"
        placeholder="Aktivitas atau situasi hadapi pemicu"
        v-model="modelInput"
      ></textarea>
    </div>
    <div class="action">
      <button v-if="isLast" class="add" @click="handleAdd(model)">
        <img src="/assets/icons/btn_add.svg" />
      </button>
      <button
        v-if="!(isFirst && isLast)"
        class="remove"
        @click="handleRemove(idx)"
      >
        <img src="/assets/icons/btn_remove.svg" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TableLadderActivity",
  props: {
    idx: Number,
    model: String,
    isLast: Boolean,
    isFirst: Boolean,
    handleAdd: Function,
    handleRemove: Function
  },
  computed: {
    modelInput: {
      get() {
        return this.model;
      },
      set(val) {
        this.$emit("input", val);
      }
    }
  }
};
</script>

<style>
.container {
  width: 100%;
  display: flex;
}

.input-container {
  height: 64px;

  flex-grow: 1;
  margin-right: 12px;
}

.input {
  width: 100%;
  height: 100%;
  padding: 8px 12px;
  color: #303030;
  background: #f1f2f5;
  border: 1px solid #dedede;
  border-radius: 6px;

  resize: none;
}

.action {
  width: 24px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 16px;
  font-weight: bold;
}

.action button {
  width: 24px;
  height: 24px;
  padding: 0;
}

.action button:nth-child(2) {
  margin-top: auto;
}
</style>
