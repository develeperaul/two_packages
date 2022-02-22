<template>
  <q-layout view="hHh Lpr fFf" class="">
    <!-- Be sure to play with the Layout demo on docs -->

    <!-- (Optional) The Header -->
    <!-- <q-header>
      <q-toolbar>
        <q-toolbar-title> Header </q-toolbar-title>
      </q-toolbar>
    </q-header> -->

    <!-- (Optional) The Footer -->
    <q-footer style="background: white" class="footer__nav p-content">
      <NavLink to="sending" name="Отправки" />
      <NavLink to="notice" name="Оповещения" />
      <NavLink to="search" name="Поиск" />
      <NavLink to="profile" name="Профиль" />
      <NavLink to="menu" name="Меню" :link="false" @click="toggleLeftDrawer" />
    </q-footer>

    <!-- (Optional) A Drawer; you can add one more with side="right" or change this one's side -->
    <q-drawer v-model="leftDrawerOpen" side="left" bordered class="bg-grey-2">
      <!-- QScrollArea is optional -->
      <q-scroll-area class="fit q-pa-sm">
        <!-- Content here -->
      </q-scroll-area>
    </q-drawer>

    <q-page-container class="tw-flex tw-flex-col tw-h-screen">
      <!-- This is where pages get injected -->
      <router-view />
      <router-view name="helper" />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";
import NavLink from "src/components/NavLink";
export default {
  // name: 'LayoutName',
  components: { NavLink },
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
