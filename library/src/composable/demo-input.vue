<template>

  <input type="text" v-model="computedValue" />

</template>

<script>
import { computed, defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "ElInput",
  setup(props, ctx) {
    const computedValue = computed({
      get: () => props.value,
      set: val => {
        ctx.emit("change", val);
      }
    });

    return {
      computedValue
    };
  }
});
</script>

<style>

</style>
