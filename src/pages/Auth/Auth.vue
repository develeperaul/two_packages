<template>
  <q-page class="tw-flex tw-flex-col tw-justify-between auth">
    <div class="tw-flex tw-flex-col tw-items-center">
      <q-img
        src="logo_2.svg"
        fit="scale-down"
        spinner-color="primary"
        width="50%"
        spinner-size="50px"
        class="auth__logo"
      />
      <p class="tw-text-center auth__text">
        Вас приветствует, «Две посылки». <br />
        доставляем на раз, два, три.
      </p>
    </div>
    <div>
      <base-button
        class="tw-mb-6"
        @click="() => $router.push({ name: 'sender' })"
        >я хочу отправлять посылки</base-button
      >
      <base-button
        class="tw-mb-6"
        @click="() => $router.push({ name: 'courier' })"
        >я хочу доставлять посылки</base-button
      >
      <base-button color="white">
        <template v-slot:text> УЖЕ ЗАРЕГИСТРИРОВАНЫ? ВОЙТИ </template>
      </base-button>
    </div>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
};
</script>
<style lang="scss" scoped>
.auth {
  padding-top: 73px;
  padding-bottom: 46px;
  &__text {
  }
  &__logo {
    margin-bottom: 41px;
  }
}
</style>
