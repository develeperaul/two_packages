<template>
  <div :class="`bg__alert bg__alert_${color}`">
    <slot></slot>
  </div>
</template>

<script>
export default {
  // name: 'ComponentName',
  setup() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.bg {
  &__alert {
    padding: 16px;
    color: #ffffff;
    font-size: 12px;
    &_positive {
      background-color: $positive;
    }
    &_negative {
      background: $negative;
    }
  }
}
</style>
