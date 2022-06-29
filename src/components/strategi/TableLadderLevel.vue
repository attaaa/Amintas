<template>
  <div class="full-width row items-center">
    <div class="col-grow text__body text__neutral-black">
      {{ label }}
    </div>
    <div style="width: 44px;" class="row items-center">
      <input
        type="text"
        placeholder="0"
        :value="value"
        @input="$emit('input', $event.target.value)"
        disabled
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "TableLadderLevel",
  props: {
    label: String,
    value: String
  }
};
</script>

<style>
input {
  width: 100%;
  height: 40px;

  text-align: center;

  background: #f1f2f5;
  border: 1px solid #dedede;
  border-radius: 6px;
}
</style>
