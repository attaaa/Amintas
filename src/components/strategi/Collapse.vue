<template>
  <div class="collapse">
    <div class="collapse-header" @click="active = !active">
      <div class="collapse-title text__headline text__neutral-black">
        {{ label }}
      </div>
      <div class="collapse-icon" :class="[active ? 'active' : '']">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.3674 11.0264C13.1778 11.2149 12.9213 11.3207 12.654 11.3207C12.3867 11.3207 12.1302 11.2149 11.9406 11.0264L8.30804 7.44444L4.72604 11.0264C4.53645 11.2149 4.27999 11.3207 4.01267 11.3207C3.74535 11.3207 3.48889 11.2149 3.29931 11.0264C3.20447 10.9324 3.12919 10.8205 3.07782 10.6972C3.02645 10.5738 3 10.4416 3 10.308C3 10.1744 3.02645 10.0422 3.07782 9.91887C3.12919 9.79557 3.20447 9.68365 3.29931 9.58959L7.58961 5.29928C7.68368 5.20444 7.79559 5.12917 7.9189 5.0778C8.0422 5.02642 8.17446 4.99998 8.30804 4.99998C8.44161 4.99998 8.57387 5.02642 8.69718 5.0778C8.82048 5.12917 8.93239 5.20444 9.02646 5.29928L13.3674 9.58959C13.4622 9.68365 13.5375 9.79557 13.5888 9.91887C13.6402 10.0422 13.6667 10.1744 13.6667 10.308C13.6667 10.4416 13.6402 10.5738 13.5888 10.6972C13.5375 10.8205 13.4622 10.9324 13.3674 11.0264Z"
            fill="#5C7CCD"
          />
        </svg>
      </div>
    </div>
    <!-- PREVIEW -->
    <div class="collapse-preview" :class="[active ? 'hide' : '']">
      <slot name="preview"></slot>
    </div>
    <!-- CONTENT -->
    <div class="collapse-content" :class="[active ? 'active' : '']">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Collapse",
  props: {
    label: String,
    defaultOpen: Boolean
  },
  data() {
    return {
      active: false
    };
  },
  mounted() {
    this.active = this.defaultOpen;
  }
};
</script>

<style scoped>
.collapse {
  width: 100%;
  padding: 16px;
  background-color: #f2f6ff;
  text-align: left;
  border-radius: 8px;
}

.collapse-header {
  width: 100%;
  display: flex;
  align-items: center;

  position: relative;
  cursor: pointer;
  z-index: 10;
}

.collapse-title {
  flex-grow: 1;
}

.collapse-icon {
  transform: rotate(180deg);
  transition: 0.1s ease-in;
}

.collapse-icon.active {
  transform: rotate(0deg);
}

.collapse-preview {
  display: block;
}

.collapse-preview.hide {
  display: none;
}

.collapse-content {
  height: 0px;
  overflow: hidden;

  transition: 0.2s ease-out;
}

.collapse-content.active {
  height: fit-content;
  transition: 0.2s ease-out;
}
</style>
