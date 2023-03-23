<template>
  <div class="picker-container" tabindex="0" @blur="onBlur">
    <div
      class="trigger text__body text__neutral-grey"
      :class="{ disabled: disabled }"
      @click="onClick"
    >
      <span v-if="value.length === 0">{{
        placeholder || "Placeholder Text"
      }}</span>
      <div v-else class="picker-option for-placeholder">
        <div class="option-list selected">
          <template v-for="iValue in value">
            <Tray :key="iValue">
              <FaktorPikiranIconLoaderVue :icon-name="options[iValue].icon" />
              <div class="option-item--text text__title-5 text-white">
                {{ options[iValue].name }}
              </div>
            </Tray>
          </template>
        </div>
      </div>
    </div>
    <div class="picker-main" :class="{ hide: !showPicker }">
      <!--  -->
      <!--  -->
      <!--  -->

      <div class="picker-selected">
        <div
          v-if="value.length === 0"
          class="picker-selected--none text__body text__neutral-grey"
        >
          Pilih faktor pikiran yang teridentifikasi
        </div>
        <div v-else class="picker-option">
          <div class="option-list selected">
            <template v-for="iValue in value">
              <Tray
                :key="iValue"
                :show-remove="true"
                @remove="unSelectOption(options[iValue].id)"
              >
                <FaktorPikiranIconLoaderVue :icon-name="options[iValue].icon" />
                <div class="option-item--text text__title-5 text-white">
                  {{ options[iValue].name }}
                </div>
              </Tray>
            </template>
          </div>
        </div>
      </div>
      <!--  -->
      <!--  -->
      <!--  -->

      <div class="picker-option">
        <div class="text__footnote text__neutral-grey q-mb-md">
          Faktor yang mempengaruhi pikiran negatif
        </div>
        <div class="option-list">
          <template v-for="(option, index) in options">
            <Tray
              :key="index"
              v-if="!value.includes(option.id)"
              @click.native="selectOption(option.id)"
            >
              <FaktorPikiranIconLoaderVue :icon-name="option.icon" />
              <div class="option-item--text text__title-5 text-white">
                {{ option.name }}
              </div>
            </Tray>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Tray from "src/components/Tray";
import FaktorPikiranIconLoaderVue from "src/components/utils/FaktorPikiranIconLoader";

export default {
  name: "Picker",
  components: { Tray, FaktorPikiranIconLoaderVue },
  props: {
    placeholder: String,
    value: Array,
    options: Array,
    disabled: Boolean
  },
  data: function() {
    return {
      showPicker: false
    };
  },
  methods: {
    onClick() {
      if (this.disabled) return;
      this.showPicker = true;
    },
    onBlur() {
      this.showPicker = false;
    },
    selectOption(optionId) {
      this.$emit("input", optionId);
    },
    unSelectOption(optionId) {
      this.$emit("unSelect", optionId);
    }
  }
};
</script>

<style lang="scss" scoped>
.picker-container {
  position: relative;
  z-index: 3;
}
.trigger {
  width: 100%;
  padding: 8px 12px;
  // height: 40px;
  background: #f1f2f5;
  border: 1px solid #dedede;
  border-radius: 6px;
  position: relative;
  z-index: 3;

  &.disabled {
    background: #dedede;
  }
}
.picker-main {
  width: 100%;
  position: absolute;
  z-index: 4;
  bottom: 0%;
  background-color: #ffffff;
  box-shadow: 0px 2px 4px 1px rgba(48, 48, 48, 0.08);
  border-radius: 6px;
  // display: none;
  &.hide {
    display: none;
  }
}

.picker-selected {
  background: #f1f2f5;
  border-radius: 6px 6px 0px 0px;

  &--none {
    padding: 8px 12px;
    line-height: 34px;
  }
}

.picker-option {
  padding: 12px 16px;

  &.for-placeholder {
    padding: 0;
  }
}

.option-list {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 8px;

  &.selected {
    flex-direction: row;
  }
}

.option-item {
  width: fit-content;
  display: flex;
  align-items: center;
  padding: 8px 12px;
  background: #5c7ccd;
  border-radius: 6px;

  &--remove {
    margin-left: 10px;
  }
}
</style>
