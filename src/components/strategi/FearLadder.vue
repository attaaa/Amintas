<template>
  <div class="fear-ladder">
    <div class="fear-ladder__text text__body" :class="readOnly ? '' : status">
      {{ text }}
    </div>

    <div class="fear-ladder__level" :class="readOnly ? '' : status">
      <div class="fear-ladder__level-label">Level</div>
      <div class="fear-ladder__level-value">{{ level }}</div>
    </div>

    <div
      class="fear-ladder__checkbox"
      :class="status"
      @click="status === 'active' && $emit('toggle-check')"
    >
      <img
        class="checkbox-icon"
        svg-inline
        src="assets/icons/general/checked.svg"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "FearLadder",
  props: {
    text: String,
    level: Number,
    checked: Boolean,
    disabled: Boolean,
    status: String,
    readOnly: Boolean
  }
};
</script>

<style lang="scss" scoped>
.fear-ladder {
  width: 100%;
  display: flex;
  align-items: center;

  &__text {
    flex-grow: 1;
    width: calc(100% - 81.13px);
    word-wrap: break-word;

    &.inactive {
      color: #a3a5a7;
    }

    &.finished {
      text-decoration: line-through;
    }
  }

  &__level {
    display: grid;
    place-items: center;
    margin-left: 12px;
    margin-right: 16px;

    &-label {
      font-size: 12px;
      line-height: 18px;
      letter-spacing: 0.02em;
      color: #a3a5a7;
    }

    &-value {
      font-size: 16px;
      font-weight: 700;
      line-height: 24px;
      color: #5c7ccd;
    }

    &.inactive,
    &.finished {
      visibility: hidden;
    }
  }

  &__checkbox {
    flex-shrink: 0;
    width: 24px;
    height: 24px;
    background: #f1f2f5;
    border: 1px solid #c4c4c8;
    border-radius: 4px;
    display: grid;
    place-items: center;
    overflow: hidden;

    .checkbox-icon {
      width: 100%;
      height: 100%;
      display: none;
    }

    &.inactive {
      border: none;
      background: #dedede;
    }

    &.active {
      border: 1px solid #c4c4c8;
      background: #f1f2f5;
    }

    &.pending {
      border: 1px solid #5c7ccd;

      .checkbox-icon {
        display: block;

        .icon {
          fill: #5c7ccd;
        }

        .bg {
          fill: transparent;
        }
      }
    }

    &.finished {
      border: none;

      .checkbox-icon {
        display: block;

        .bg {
          fill: #5c7ccd;
        }

        .icon {
          fill: #f2f6ff;
        }
      }
    }
  }
}
</style>
