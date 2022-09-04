<template>
  <div id="header">
    {{ text }}
  </div>
</template>

<script lang="ts">
// vue plugins
import Vue from "vue";

export default Vue.extend({
  name: "MainHeader",
  props: {
    text: {
      type: String,
      required: true,
    },
  },
});
</script>

<style scoped>
#header {
  font-weight: bold;
  color: #00295b;
}
</style>
