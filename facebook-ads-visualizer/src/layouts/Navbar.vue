<template>
  <v-app-bar app color="black" dark>
    <div class="d-flex align-center">
      <v-img
        alt="Causalytics logo"
        src="../assets/images/main-logo.png"
        transition="scale-transition"
      />
    </div>

    <v-spacer></v-spacer>

    <v-btn href="https://causalytics.ai" target="_blank" text>
      <span >Go to website</span>
      <v-icon>mdi-open-in-new</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from "vue";
import ImageConstants from "@/constants/image-constants";

export default Vue.extend({
  name: "Navbar",

  computed: {
    getLogoPath(): string {
      return require(ImageConstants.mainLogo);
    }
  },
  components: {}
});
</script>

<style lang="scss" scoped></style>
