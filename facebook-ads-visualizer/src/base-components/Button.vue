<template>
  <v-btn
    @click.prevent="clicked"
    class="rounded-lg "
    fluid
    block
    width="50%"
    :outlined="this.outlined"
    :loading="loading"
    :color="color"
    elevation="6"
  >
    {{ title }}
  </v-btn>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Button",

  props: {
    title: {
      type: String,
      required: true,
    },

    color: {
      type: String,
      required: false,
      default: "#66dba8",
    },

    loading: {
      type: Boolean,
      required: false,
      default: false
    },

    outlined: {
      type: Boolean,
      required: false,
      default: false,
    },
    width: {
      type: Number,
      required: false,
    },
  },
  methods: {
    clicked() {
      this.$emit("clicked-button");
    },
  },

});
</script>

<style scoped lang="scss"></style>
