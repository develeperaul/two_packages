<template>
  <div class="round">
    <span class="round__after">
      <slot name="after"></slot>
    </span>
    <input
      type="text"
      v-bind="{
        placeholder,
      }"
    />
    <span class="round__before">
      <slot name="before"></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: "input-round",
  props: {
    placeholder: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.round {
  width: 100%;
  position: relative;

  &__after,
  &__before {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  &__after {
    left: 16px;
  }
  &__before {
    right: 16px;
  }
}
input {
  width: 100%;
  border: none;
  outline: none;
  padding-top: 15px;
  padding-bottom: 17px;
  padding-left: 48px;
  padding-right: 48px;
  background-color: #f5f5f5;
  border-radius: 50px;
}
input:focus {
  color: $primary;
  border: none;
}
</style>
