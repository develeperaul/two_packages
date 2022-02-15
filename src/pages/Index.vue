<template>
  <q-page class="flex flex-center">
    <input-line />
    <input-round placeholder="что то написаноывывыв">
      <template v-slot:after> a </template>
      <template v-slot:before> d </template>
    </input-round>

    <base-button>
      <template v-slot:spinner>
        <base-spinner />
      </template>
    </base-button>
    <base-button> 1 </base-button>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageIndex",
});
</script>
