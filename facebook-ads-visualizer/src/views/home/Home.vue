<template>
  <v-container fluid class="main-container">
    <v-row> </v-row>
    <v-row justify="center" align-content="center">
      <v-col cols="12">
        <CpcCampaignChart x-axis="" y-axis=""></CpcCampaignChart>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import faceBookCampaignController from "@/services/client/campaigns/FacebookCampaignController";
import CpcCampaignChart from "@/views/home/CpcCampaignChart.vue";

export default Vue.extend({
  name: "Home",
  components: {
    CpcCampaignChart,
  },
  data() {
    return new (class {})();
  },

  mounted() {
    const data = faceBookCampaignController.getAllCampaignsByRange(
      new Date(),
      new Date()
    );

    // const xAxis =
  },

  methods: {},
});
</script>

<style scoped lang="scss">
.main-container {
  max-width: 90%;
  padding-top: 5em;
}
</style>
