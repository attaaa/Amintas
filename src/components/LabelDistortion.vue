<template>
  <div class="flex items-center distortion-icon-loader">
    <DistortionIconLoader
      :distortion-name="labelText"
      style="width: 24px;"
    />
    <span class="text__primary text__body flex" style="margin-left: 8px;">{{
      labelText
    }}</span>
  </div>
</template>

<style lang="scss">
.distortion-icon-loader {
  background: #f2f6ff;
  border-radius: 14px;
  padding: 4px 8px;
}
</style>

<script>
import DistortionIconLoader from "components/utils/DistortionIconLoader";

export default {
  name: "LabelDistortion",
  components: { DistortionIconLoader },
  props: {
    labelText: String
  }
};
</script>
