<template>
  <q-page class="sender">
    <!-- content -->
    <div class="sender__top">
      <q-img
        src="logo_3.svg"
        fit="scale-down"
        spinner-color="primary"
        width="50%"
        spinner-size="50px"
        class="reg__logo"
      />

      <input-line v-bind="{ color: 'white', label: 'Имя', id: 'name' }" />

      <input-line v-bind="{ color: 'white', label: 'Телефон', id: 'phone' }" />
    </div>
    <div class="sender__bottom">
      <base-button color="secondary_primary">Отправить смс</base-button>
    </div>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
};
</script>
<style lang="scss">
.sender {
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
  }
}
</style>
