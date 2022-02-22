<template>
  <div
    class="tw-flex tw-flex-col tw-justify-end tw-items-center tw-text-center tw-flex-grow tw-mb-8"
  >
    <q-img
      src="logo_1.svg"
      fit="scale-down"
      spinner-color="primary"
      width="50%"
      spinner-size="50px"
      class="tw-mb-4"
    />
    <h2 class="title tw-mb-4">Необходимо отправить посылку в другой город?</h2>
    <p class="subtitle tw-mb-8">Наш сервис поможет вам</p>
    <base-button>НАЙТИ ПОСЫЛЬНОГО</base-button>
  </div>
</template>

<script>
export default {
  name: "SendingActual",
  setup() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.title {
  font-size: 20px;
  font-weight: 600;
}
.subtitle {
  font-size: 14px;
}
</style>
