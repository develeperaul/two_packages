<template>
  <HeaderComponent>
    <h2>Ваши отправки</h2>
  </HeaderComponent>
  <div class="toggle-list">
    <Toggle
      @click="changeTab(Actual)"
      v-bind="{
        name: 'Актульные',
        componentName: Actual.name,
        tabName: tab.name,
      }"
    />
    <Toggle
      @click="changeTab(History)"
      v-bind="{
        name: 'История',
        componentName: History.name,
        tabName: tab.name,
      }"
    />
  </div>
  <div :style="{ 'margin-top': spaceBottomLink }" class="tw-flex-grow">
    <div>hi gays</div>

    <component class="p-content" :is="tab"></component>
  </div>
</template>

<script setup>
import { ref, markRaw, onMounted } from "vue";
import Actual from "src/components/sender/sending/SendingActual.vue";
import History from "src/components/sender/sending/SendingHistory.vue";
import Toggle from "src/components/ToggleComponent.vue";
import HeaderComponent from "src/components/HeaderComponent.vue";
const tab = ref(null);
const spaceBottomLink = ref("0px");
const changeTab = (name) => {
  tab.value = markRaw(name);
};
onMounted(() => {
  spaceBottomLink.value = `${
    document.querySelector(".toggle-list").offsetHeight
  }px`;
});
window.onresize = function (event) {
  spaceBottomLink.value = `${
    document.querySelector(".toggle-list").offsetHeight
  }px`;
};
changeTab(Actual);
</script>
<style lang="scss" scoped>
.toggle {
  &-list {
    position: fixed;
    width: 100%;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    text-transform: uppercase;
    letter-spacing: 0.3px;
    z-index: 2000;
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
