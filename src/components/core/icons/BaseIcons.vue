<template>
  <svg
    v-if="name == 'box'"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <g id="box" transform="translate(-26 -948)">
      <path
        id="box-2"
        data-name="box"
        d="M1.985-15.913a.758.758,0,0,1,.281-.281.507.507,0,0,1,.356-.056l9.367,1.2L8.542-9.357a.609.609,0,0,1-.3.262.487.487,0,0,1-.375,0l-7.418-2.1a.57.57,0,0,1-.412-.337.561.561,0,0,1,.037-.525ZM23.9-12.054a.561.561,0,0,1,.037.525.57.57,0,0,1-.412.337l-7.418,2.1a.487.487,0,0,1-.375,0,.609.609,0,0,1-.3-.262l-3.447-5.695,9.367-1.2a.507.507,0,0,1,.356.056.758.758,0,0,1,.281.281Zm-7.943,4.2a1.531,1.531,0,0,0,.487-.075L21.58-9.394v6.669a1.117,1.117,0,0,1-.262.731,1.294,1.294,0,0,1-.637.431L12.551.46a2.287,2.287,0,0,1-1.161,0L3.3-1.564a1.294,1.294,0,0,1-.637-.431A1.117,1.117,0,0,1,2.4-2.725V-9.394L7.53-7.933a1.531,1.531,0,0,0,.487.075,1.736,1.736,0,0,0,.9-.244,2.139,2.139,0,0,0,.674-.618l2.4-4.009,2.4,4.009a2.139,2.139,0,0,0,.674.618A1.736,1.736,0,0,0,15.96-7.858Z"
        transform="translate(26.011 968.261)"
        fill="#393939"
      />
      <rect
        id="Прямоугольник_1470"
        data-name="Прямоугольник 1470"
        width="24"
        height="24"
        transform="translate(26 948)"
        fill="none"
      />
    </g>
  </svg>
</template>

<script>
export default {
  name: "base-icons",
  props: {
    name: {
      type: String,
      required: true,
    },
    //   isActive: {
    //     type: Boolean,
    //     default: false,
    //   },
  },
  // computed: {
  //   fill() {
  //     return this.isActive ? "#264796" : "#a9abb0";
  //   },
  // },
};
</script>
