<template>
  <div>
    <input id="email" type="email" placeholder=" " />
    <label for="email">Email</label>
  </div>
</template>

<script>
export default {
  name: "input-line",
  // props: {
  //   textError: {
  //     type: String,
  //     default: undefined,
  //   },
  //   type: {
  //     type: String,
  //     default: "text",
  //   },
  //   readonly: {
  //     type: Boolean,
  //     default: false,
  //   },
  //   isPwd: {
  //     type: Boolean,
  //     default: false,
  //   },
  //   placeholder: {
  //     required: true,
  //     type: String,
  //   },
  //   modelValue: {
  //     type: [String, Number],
  //     default: "",
  //   },
  //   error: {
  //     type: Boolean,
  //     default: false,
  //   },
  // },
  // emits: ["update:modelValue"],
};
</script>
<style lang="scss" scoped>
div {
  position: relative;
  width: 100%;
}

input {
  width: 100%;
  border: none;
  padding: 8px;
  margin-top: 16px;
  padding-left: 0px;
  color: #000;
  font-size: 14px;
  border-bottom: 2px solid #000;
  outline: none;
}

label {
  /*   padding-left: 1rem; */
  color: #000;
  position: absolute;
  left: 0;
  bottom: 8px;

  // transform: translateY(46px);
  font-size: 14px;
  transform-origin: left top;
  cursor: text;

  transition: all 0.3s;
}

input:focus {
  color: $primary;
  border-bottom: 2px solid $primary;
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
input:focus ~ label {
  color: $primary;
}
</style>
