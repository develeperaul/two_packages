<template>
  <svg
    v-if="name == 'sending'"
    :class="{ active: isActive }"
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

  <svg
    v-if="name == 'notice'"
    :class="{ active: isActive }"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <g id="alarm" transform="translate(-101 -617)">
      <rect
        id="Прямоугольник_1471"
        data-name="Прямоугольник 1471"
        width="24"
        height="24"
        transform="translate(101 617)"
        fill="none"
      />
      <path
        id="Контур_3915"
        data-name="Контур 3915"
        d="M18.365.3a3.057,3.057,0,0,1,.994,2.2,2.743,2.743,0,0,1-.843,2.009,2.793,2.793,0,0,1-2.053.843H12.445A2.73,2.73,0,0,1,9.679,8.125,2.73,2.73,0,0,1,6.914,5.359H2.9A2.793,2.793,0,0,1,.843,4.516,2.743,2.743,0,0,1,0,2.507,3.057,3.057,0,0,1,.994.3a4.955,4.955,0,0,0,.691-.821,4.227,4.227,0,0,0,.562-1.469,14.243,14.243,0,0,0,.216-2.722,7.048,7.048,0,0,1,.8-3.306,7.313,7.313,0,0,1,2.182-2.55,6.907,6.907,0,0,1,3.111-1.275,1.264,1.264,0,0,1-.259-.778,1.329,1.329,0,0,1,.411-.972A1.329,1.329,0,0,1,9.679-14a1.329,1.329,0,0,1,.972.411,1.329,1.329,0,0,1,.411.972,1.264,1.264,0,0,1-.259.778,6.907,6.907,0,0,1,3.111,1.275A7.313,7.313,0,0,1,16.1-8.015a7.048,7.048,0,0,1,.8,3.306,14.243,14.243,0,0,0,.216,2.722,4.227,4.227,0,0,0,.562,1.469A4.955,4.955,0,0,0,18.365.3ZM9.679,6.4a1.033,1.033,0,0,0,1.037-1.037H8.642A1.033,1.033,0,0,0,9.679,6.4Zm6.784-3.111a.74.74,0,0,0,.756-.5.768.768,0,0,0-.194-.886A12,12,0,0,1,15.9.562a6.244,6.244,0,0,1-.778-1.945,15.42,15.42,0,0,1-.3-3.327,5.025,5.025,0,0,0-.691-2.571,5.116,5.116,0,0,0-1.88-1.88,5.025,5.025,0,0,0-2.571-.691,5.025,5.025,0,0,0-2.571.691,5.116,5.116,0,0,0-1.88,1.88,5.025,5.025,0,0,0-.691,2.571,14.812,14.812,0,0,1-.3,3.284A6.229,6.229,0,0,1,3.457.562,11.994,11.994,0,0,1,2.333,1.9a.768.768,0,0,0-.194.886.74.74,0,0,0,.756.5Z"
        transform="translate(103 632)"
        fill="#393939"
      />
    </g>
  </svg>

  <svg
    v-if="name == 'search'"
    :class="{ active: isActive }"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <g id="seach" transform="translate(-176 -950)">
      <path
        id="seach-2"
        data-name="seach"
        d="M19.727-.2A.9.9,0,0,1,20,.469a.9.9,0,0,1-.273.664L18.633,2.227a.943.943,0,0,1-1.328,0L13.4-1.68a.9.9,0,0,1-.273-.664v-.625a7.872,7.872,0,0,1-5,1.719A7.891,7.891,0,0,1,4.043-2.344,8.209,8.209,0,0,1,1.094-5.293,7.891,7.891,0,0,1,0-9.375a7.891,7.891,0,0,1,1.094-4.082,8.209,8.209,0,0,1,2.949-2.949A7.891,7.891,0,0,1,8.125-17.5a7.891,7.891,0,0,1,4.082,1.094,8.209,8.209,0,0,1,2.949,2.949A7.891,7.891,0,0,1,16.25-9.375a7.872,7.872,0,0,1-1.719,5h.625a.9.9,0,0,1,.664.273Zm-11.6-4.18a4.958,4.958,0,0,0,2.52-.664,4.864,4.864,0,0,0,1.816-1.816,4.958,4.958,0,0,0,.664-2.52,4.958,4.958,0,0,0-.664-2.52,4.864,4.864,0,0,0-1.816-1.816,4.958,4.958,0,0,0-2.52-.664,4.958,4.958,0,0,0-2.52.664,4.864,4.864,0,0,0-1.816,1.816,4.958,4.958,0,0,0-.664,2.52,4.958,4.958,0,0,0,.664,2.52A4.864,4.864,0,0,0,5.605-5.039,4.958,4.958,0,0,0,8.125-4.375Z"
        transform="translate(178 969.5)"
        fill="#393939"
      />
      <rect
        id="Прямоугольник_1472"
        data-name="Прямоугольник 1472"
        width="24"
        height="24"
        transform="translate(176 950)"
        fill="none"
      />
    </g>
  </svg>

  <svg
    v-if="name == 'profile'"
    :class="{ active: isActive }"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <g id="profile" transform="translate(-252 -950)">
      <path
        id="profile-2"
        data-name="profile"
        d="M12.266-5.625a5.123,5.123,0,0,1,2.617.7A5.191,5.191,0,0,1,16.8-3.008a5.123,5.123,0,0,1,.7,2.617V.625a1.808,1.808,0,0,1-.547,1.328,1.808,1.808,0,0,1-1.328.547H1.875A1.808,1.808,0,0,1,.547,1.953,1.808,1.808,0,0,1,0,.625V-.391A5.123,5.123,0,0,1,.7-3.008,5.191,5.191,0,0,1,2.617-4.922a5.123,5.123,0,0,1,2.617-.7,4.436,4.436,0,0,1,1.328.273q.547.156.9.234A6.585,6.585,0,0,0,8.75-5a6.585,6.585,0,0,0,1.289-.117q.352-.078.9-.234A4.436,4.436,0,0,1,12.266-5.625ZM15.625.625V-.391a3.229,3.229,0,0,0-1-2.363,3.229,3.229,0,0,0-2.363-1,3.311,3.311,0,0,0-.781.156,8.57,8.57,0,0,1-2.715.469,8.927,8.927,0,0,1-2.754-.469,3.875,3.875,0,0,0-.781-.156,3.229,3.229,0,0,0-2.363,1,3.229,3.229,0,0,0-1,2.363V.625ZM8.75-6.25a5.429,5.429,0,0,1-2.812-.762A5.733,5.733,0,0,1,3.887-9.062a5.429,5.429,0,0,1-.762-2.812,5.429,5.429,0,0,1,.762-2.812,5.733,5.733,0,0,1,2.051-2.051A5.429,5.429,0,0,1,8.75-17.5a5.429,5.429,0,0,1,2.813.762,5.733,5.733,0,0,1,2.051,2.051,5.429,5.429,0,0,1,.762,2.813,5.429,5.429,0,0,1-.762,2.813,5.733,5.733,0,0,1-2.051,2.051A5.429,5.429,0,0,1,8.75-6.25Zm0-9.375a3.616,3.616,0,0,0-2.656,1.094A3.616,3.616,0,0,0,5-11.875,3.616,3.616,0,0,0,6.094-9.219,3.616,3.616,0,0,0,8.75-8.125a3.616,3.616,0,0,0,2.656-1.094A3.616,3.616,0,0,0,12.5-11.875a3.616,3.616,0,0,0-1.094-2.656A3.616,3.616,0,0,0,8.75-15.625Z"
        transform="translate(255 969.5)"
        fill="#393939"
      />
      <rect
        id="Прямоугольник_1473"
        data-name="Прямоугольник 1473"
        width="24"
        height="24"
        transform="translate(252 950)"
        fill="none"
      />
    </g>
  </svg>

  <svg
    v-else-if="name === 'menu'"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <g id="menu" transform="translate(-328 -952)">
      <path
        id="menu-2"
        data-name="menu"
        d="M.625-12.344a.608.608,0,0,1-.449-.176A.608.608,0,0,1,0-12.969v-1.562a.608.608,0,0,1,.176-.449.608.608,0,0,1,.449-.176h16.25a.608.608,0,0,1,.449.176.608.608,0,0,1,.176.449v1.563a.608.608,0,0,1-.176.449.608.608,0,0,1-.449.176Zm0,6.25A.608.608,0,0,1,.176-6.27.608.608,0,0,1,0-6.719V-8.281A.608.608,0,0,1,.176-8.73a.608.608,0,0,1,.449-.176h16.25a.608.608,0,0,1,.449.176.608.608,0,0,1,.176.449v1.563a.608.608,0,0,1-.176.449.608.608,0,0,1-.449.176Zm0,6.25A.608.608,0,0,1,.176-.02.608.608,0,0,1,0-.469V-2.031A.608.608,0,0,1,.176-2.48a.608.608,0,0,1,.449-.176h16.25a.608.608,0,0,1,.449.176.608.608,0,0,1,.176.449V-.469a.608.608,0,0,1-.176.449.608.608,0,0,1-.449.176Z"
        transform="translate(331 971.156)"
        fill="#393939"
      />
      <rect
        id="Прямоугольник_1474"
        data-name="Прямоугольник 1474"
        width="24"
        height="24"
        transform="translate(328 952)"
        fill="none"
      />
    </g>
  </svg>
</template>

<script>
export default {
  name: "nav-icons",
  props: {
    name: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  // computed: {
  //   fill() {
  //     return this.isActive ? "#264796" : "#a9abb0";
  //   },
  // },
};
</script>
<style lang="scss" scoped>
.active path {
  fill: $primary;
}
</style>
