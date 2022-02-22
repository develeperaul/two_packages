<template>
  <router-link
    v-if="link"
    :to="{ name: to }"
    class="link"
    v-slot="{ isExactActive }"
  >
    <nav-icons :name="to" :isActive="isExactActive" />
    {{ name }}
  </router-link>
  <span v-else class="nav-menu">
    <nav-icons :name="to" />
    Меню
  </span>
</template>

<script>
export default {
  // name: 'ComponentName',
  props: {
    to: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    link: {
      type: Boolean,
      default: true,
    },
  },
  setup() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.link {
  display: flex;
  flex-direction: column;
  align-items: center;
}
a {
  color: #000;
}
a.router-link-exact-active {
  color: $primary;
}
</style>
