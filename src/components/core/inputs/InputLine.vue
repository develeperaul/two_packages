<template>
  <div :class="`input__${color}`">
    <input :id="id" :type="type" placeholder=" " />
    <label :for="id">{{ label }}</label>
  </div>
</template>

<script>
export default {
  name: "input-line",
  props: {
    color: {
      type: String,
      default: "black",
    },
    label: {
      type: String,
      required: true,
    },
    id: {
      type: [String, Number],
      required: true,
    },
    type: {
      type: String,
      default: "text",
    },
    //   textError: {
    //     type: String,
    //     default: undefined,
    //   },
    //   readonly: {
    //     type: Boolean,
    //     default: false,
    //   },
    //   isPwd: {
    //     type: Boolean,
    //     default: false,
    //   },
    // placeholder: {
    //   required: true,
    //   type: String,
    // },
    //   modelValue: {
    //     type: [String, Number],
    //     default: "",
    //   },
    //   error: {
    //     type: Boolean,
    //     default: false,
    //   },
  },
  // emits: ["update:modelValue"],
};
</script>
<style lang="scss" scoped>
div {
  position: relative;
  width: 100%;
}
.input {
  &__black {
    & > input {
      color: #000;
      border-bottom: 2px solid #000;
    }
    & > label {
      color: #000;
    }

    & > input:focus {
      color: $primary;
      border-bottom: 2px solid $primary;
    }

    & > input:focus ~ label {
      color: $primary;
    }
  }

  &__white {
    & > input {
      color: #fff;
      border-bottom: 2px solid #fff;
    }
    & > label {
      color: #fff;
    }

    & > input:focus {
      color: #000;
      border-bottom: 2px solid #000;
    }

    & > input:focus ~ label {
      color: #000;
    }
  }
}

input {
  width: 100%;
  border: none;
  padding: 8px;
  margin-top: 16px;
  padding-left: 0px;
  // color: #000;
  font-size: 14px;
  // border-bottom: 2px solid #000;
  background: transparent;
  outline: none;
}

label {
  /*   padding-left: 1rem; */
  position: absolute;
  left: 0;
  bottom: 8px;

  // transform: translateY(46px);
  font-size: 14px;
  transform-origin: left top;
  cursor: text;

  transition: all 0.3s;
}

// input:focus,
// input:not(:placeholder-shown) {
//   // border-bottom: 2px solid $primary;
// }

input:focus ~ label,
input:not(:placeholder-shown) ~ label {
  padding: 0;

  transform: translateY(-100%) scale(0.8);
}
</style>
