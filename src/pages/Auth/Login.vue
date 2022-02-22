<template>
  <q-page class="login">
    <!-- content -->
    <div class="login__top">
      <q-img
        src="logo_3.svg"
        fit="scale-down"
        spinner-color="primary"
        width="50%"
        spinner-size="50px"
        class="reg__logo"
      />

      <input-line v-bind="{ color: 'white', label: 'Телефон', id: 'phone' }" />
      <input-line
        v-bind="{ color: 'white', label: 'Пароль', id: 'password' }"
      />
    </div>
    <div class="login__bottom">
      <base-button color="secondary_primary login__button">Войти</base-button>
      <router-link :to="{ name: 'auth' }" class="login__link">
        <span>Забыли пароль</span>
      </router-link>
      <div class="login__line"></div>
      <router-link :to="{ name: 'auth' }" class="login__link">
        <span>Зарегистрироваться</span>
      </router-link>
    </div>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
};
</script>
<style lang="scss">
.login {
  background-color: $primary;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  &__top {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__bottom {
    width: 100%;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  &__button {
    margin-bottom: 40px;
  }
  &__line {
    background-color: #fff;
    height: 1px;
    width: 80%;
    margin: 20px 0;
  }
  &__link {
    text-transform: uppercase;
    color: #fff;
    letter-spacing: 0.3px;
  }
}
</style>
