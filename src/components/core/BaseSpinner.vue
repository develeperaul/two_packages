<template>
  <svg
    :style="spinnerSize"
    xmlns="http://www.w3.org/2000/svg"
    width="25.092"
    height="25.092"
    viewBox="0 0 25.092 25.092"
  >
    <g
      id="Сгруппировать_856"
      data-name="Сгруппировать 856"
      transform="translate(25.092) rotate(90)"
    >
      <g id="Сгруппировать_284" data-name="Сгруппировать 284" opacity="0.5">
        <path
          id="Контур_289"
          data-name="Контур 289"
          d="M12.546,25.092A12.546,12.546,0,1,1,25.092,12.546,12.553,12.553,0,0,1,12.546,25.092Zm0-22.3A9.758,9.758,0,1,0,22.3,12.546,9.757,9.757,0,0,0,12.546,2.788Z"
          fill="#fff"
        />
      </g>
      <path
        id="Контур_290"
        data-name="Контур 290"
        d="M12.546,0V2.788a9.758,9.758,0,1,1-9.758,9.758H0A12.546,12.546,0,1,0,12.546,0Z"
        fill="#fff"
      />
      <animateTransform
        attributeType="xml"
        attributeName="transform"
        type="rotate"
        from="0 12.546 12.546"
        to="360 12.546 12.546"
        dur="0.8s"
        repeatCount="indefinite"
      />
    </g>
  </svg>
</template>

<script>
export default {
  name: "base-spinner",
  props: {
    size: {
      type: String,
      default: "25px",
    },
  },
  computed: {
    spinnerSize() {
      return {
        width: this.size,
        height: this.size,
      };
    },
  },
};
</script>

<style lang="scss" scoped></style>
