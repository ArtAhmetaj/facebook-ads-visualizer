<template>
  <v-progress-circular indeterminate :size="this.size" color="primary" />
</template>

<script lang="ts">
// vue plugins
import Vue from "vue";

export default Vue.extend({
  name: "LoadingIndicator",
  props: {
    size: {
      type: Number,
      required: true,
    },
  },
});
</script>

<style scoped></style>
