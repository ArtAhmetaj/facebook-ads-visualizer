<template>
  <v-footer dark padless>
    <v-card class="flex" flat tile>
      <v-card-title class="cyan">
        <strong class="subheading"
          >Get connected with us on social networks!</strong
        >

        <v-spacer></v-spacer>
        <div v-for="(value, key) in this.icons" :key="key">
          <v-btn :href="value" target="_blank" class="mx-4" dark icon>
            <v-icon size="24px">
              {{ key }}
            </v-icon>
          </v-btn>
        </div>
      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>Causalytics</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Footer",
  data() {
    return new (class {
      icons: Record<string, string> = {
        "mdi-facebook": "https://www.facebook.com/causalytics",
        "mdi-twitter": "https://twitter.com/causalytics?lang=en",
        "mdi-linkedin":
          "https://www.linkedin.com/company/causalytics/?originalSubdomain=fi",
      };
    })();
  },

  methods: {},
});
</script>
