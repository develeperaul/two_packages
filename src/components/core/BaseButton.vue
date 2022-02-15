<template>
  <button
    :type="type"
    :class="`btn btn__${color} btn__round_${round}  color-${textcolor}`"
    class="tw-flex tw-items-center"
  >
    <span v-if="hasSlot('default')" class="btn__text" :class="`py-${py}`">
      <slot> </slot>
    </span>
    <span v-if="hasSlot('spinner')" class="btn__spinner">
      <slot name="spinner"> </slot>
    </span>
  </button>
</template>

<script>
export default {
  name: "base-button",
  props: {
    type: {
      type: String,
      default: "button",
    },
    color: {
      type: String,
      default: "primary",
    },
    py: {
      type: String,
      default: "lg",
    },
    textcolor: {
      type: String,
      default: "white",
    },
    round: {
      type: String,
      default: "lg",
    },
  },
  setup(props, { slots }) {
    const hasSlot = (name) => !!slots[name];
    return { hasSlot };
  },
};
</script>
<style lang="scss" scoped>
.btn {
  width: 100%;
  border: none;
  padding-left: 10px;
  font-size: 12px;
  height: 48px;
  &__text,
  &__spinner {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 11px 0 12px 0;
  }

  &__round {
    &_lg {
      border-radius: 50px;
      font-weight: 500;
    }
    &_md {
      border-radius: 10px;
      font-weight: 600;
    }
  }
  &__primary {
    background-color: $primary;
    color: #ffffff;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  }
  &__secondary {
    color: #393939;
    background-color: $secondary;
  }
  &__positive {
    color: #ffffff;
    background-color: $positive;
  }
  &__white {
    background-color: #ffffff;
    color: $secondary;
  }
}

.py {
  &-lg {
    padding-top: 13px;
    padding-bottom: 16px;
  }
  &-md {
    padding: 5px;
    padding-bottom: 8px;
  }
}
</style>
