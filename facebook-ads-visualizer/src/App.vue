<template>
  <v-app>
    <Navbar />
    <v-main>
      <router-view />
    </v-main>
    <Footer />
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Navbar from "@/layouts/Navbar.vue";
import Footer from "@/layouts/Footer.vue";

export default Vue.extend({
  name: "App",

  data: () => ({}),
  components: { Navbar, Footer },
});
</script>
