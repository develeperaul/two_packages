<template>
  <!-- content -->
  <q-carousel
    swipeable
    v-model="slide"
    navigation
    ref="carousel"
    height="100%"
    transition-prev="slide-right"
    transition-next="slide-left"
    class="main-carousel"
  >
    <q-carousel-slide v-for="(i, index) in steps" :key="index" :name="index">
      <div class="tw-flex tw-flex-col tw-justify-center tw-items-center">
        <q-img
          :src="`steps/step_${i.img}.svg`"
          spinner-color="primary"
          spinner-size="182px"
          height="300px"
          width="100%"
          fit="none"
          position="bottom"
          class="tw-mb-10"
        />
        <p class="text-center p-content" v-html="i.text"></p>
      </div>
    </q-carousel-slide>

    <template v-slot:navigation-icon="{ active }">
      <div v-if="active" class="tw-mx-1 env-b">
        <span class="circle__active"></span>
      </div>
      <div v-else class="tw-mx-1 env-b">
        <span class="circle"></span>
      </div>
    </template>

    <template v-slot:control>
      <q-carousel-control
        position="bottom"
        :offset="[0, 0]"
        class="tw-flex tw-justify-between env-b p-content"
      >
        <span
          @click="$refs.carousel.previous()"
          class="control__text"
          :class="[slide === 0 ? 'tw-text-gray-light' : 'tw-text-slide-color']"
          >{{ slide === 0 ? "ПРОПУСТИТЬ" : "НАЗАД" }}</span
        >
        <span class="control__text" @click="nextSlide"
          >{{ slide === steps.length - 1 ? "ЗАВЕРШИТЬ" : "ДАЛЕЕ" }}{{ r }}</span
        >
      </q-carousel-control>
    </template>
  </q-carousel>
</template>

<script>
const steps = [
  {
    img: "1",
    text: "Приложение «Две посылки» <br> доставляем на раз, два, три",
  },
  {
    img: "2_courier",
    text: "Создайте маршрут, дату Вашей поездки и количество перевозимых Вами посылок. Отправитель оплатит отправку через наш сервис и передаст Вам посылку. Далее совершите Вашу запланированную поездку и передайте посылку получателю, после чего деньги поступят на Ваш счет.",
  },
  {
    img: "3_courier",
    text: "Зарабатывайте на поездках. Больше посылок, больше заработок.",
  },
];
export default {
  // name: 'PageName',
  data() {
    return {
      steps,
      slide: 0,
      autoplay: false,
    };
  },
  methods: {
    nextSlide() {
      if (this.slide === 5) {
        this.closeScreen();
      } else {
        this.$refs.carousel.next();
      }
    },
    closeScreen() {
      localStorage.setItem("start", 1);
      // this.$router.push({ name: "register_courier" });
    },
  },
};
</script>
<style lang="scss" scoped>
.main-carousel .q-carousel__navigation--bottom {
  bottom: 0 !important;
}
.control__text {
  color: $primary;
  font-size: 12px;
  font-weight: 600;
  padding-bottom: 35px;
}
</style>
