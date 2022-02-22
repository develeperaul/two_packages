<template>
  <q-layout view="hHh Lpr fFf" class="tw-flex tw-flex-col tw-justify-between">
    <q-header class="tw-flex tw-items-center p-content pt pb header__register">
      <q-icon
        name="arrow_back"
        size="16pt"
        color="white"
        @click="goToPage"
        class="tw-mr-6"
      ></q-icon>
      <h2 class="tw-text-white">{{ currentRoute }}</h2>
    </q-header>
    <q-page-container>
      <router-view
        class="p-content"
        :style="
          $route.name !== 'agreement_sender' ? { 'padding-top': '32px' } : ''
        "
      />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref, computed, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
const headerText = {
  agreement_sender: {
    title: "Пользовательское соглашение",
    from: { name: "auth" },
  },
  reg_courier: {
    title: "Регистрация курьера",
    from: { name: "auth" },
  },
  reg_sender: {
    title: "Регистрация",
    from: { name: "agreement_sender" },
  },
  confirmation: {
    title: "Регистрация",
    from: { name: "reg_sender" },
  },
  login: {
    title: "Вход",
    from: { name: "auth" },
  },
};

export default {
  // name: 'LayoutName',

  setup() {
    const $route = useRoute();
    const $router = useRouter();
    const leftDrawerOpen = ref(false);
    const currentRoute = computed(() => headerText[$route.name].title);
    const goToPage = () => {
      $router.push(headerText[$route.name].from);
    };
    return {
      currentRoute,
      goToPage,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
};
</script>
<style lang="scss">
.header__register {
  background-color: $primary;
}
</style>
