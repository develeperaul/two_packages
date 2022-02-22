<template>
  <div class="toggle-item" :class="{ 'toggle-item__active': isActive }">
    <span>{{ name }}</span>
    <span class="line" :class="{ line__active: isActive }"></span>
  </div>
  <!-- <div class="toggle-item">
    <span>История</span>
    <span class="line"></span>
  </div> -->
</template>

<script setup>
import { computed } from "vue";
const props = defineProps({
  name: { type: String, required: true },
  componentName: { type: String, required: true },
  tabName: { type: String, required: true },
});
const isActive = computed(() =>
  props.componentName === props.tabName ? true : false
);
</script>
<style lang="scss" scoped>
.toggle {
  &-list {
    display: flex;
    justify-content: space-between;
    text-transform: uppercase;
    letter-spacing: 0.3px;
  }
  &-item {
    padding-top: 12px;
    padding-bottom: 12px;
    width: 100%;
    text-align: center;
    position: relative;
    &__active {
      color: $primary;
    }
  }
}
.line {
  position: absolute;
  display: block;
  width: 100%;
  height: 2px;
  background: #f5f5f5;
  bottom: 0;
  &__active {
    position: absolute;
    display: block;
    width: 100%;
    height: 2px;
    background: $primary;
    bottom: 0;
    // border-bottom: 2px solid $primary;
  }
}
</style>
