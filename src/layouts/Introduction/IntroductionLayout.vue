<template>
  <q-layout class="tw-flex tw-flex-col tw-justify-between">
    <div class="p-content pt header__introduction">
      <q-icon
        name="arrow_back"
        size="16pt"
        color="primary"
        @click="$router.push({ name: 'auth' })"
      ></q-icon>
    </div>

    <router-view class="tw-flex-grow" />
  </q-layout>
</template>

<script>
import { ref } from "vue";

export default {
  // name: 'LayoutName',

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
};
</script>
<style scoped>
.header__introduction {
  padding-bottom: 60px;
}
</style>
