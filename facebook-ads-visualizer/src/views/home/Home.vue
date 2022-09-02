<template>
  <v-container fluid class="main-container">

    <v-row class="pt-5" justify="center" align-content="center">
      <v-col cols="12">
        <CpcCampaignChart
          :dates="this.rangeDates"
          :x-axis="this.xAxis"
          :y-axis="this.yAxis"
        ></CpcCampaignChart>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import faceBookCampaignController from "@/services/client/campaigns/FacebookCampaignController";
import CpcCampaignChart from "@/views/home/CpcCampaignChart.vue";
import dateService from "@/services/date/FnsDateService";

export default Vue.extend({
  name: "Home",
  components: {
    CpcCampaignChart,
  },
  data() {
    return new (class {
      rangeDates: Array<Date> = [
        dateService.subDurationOnDate(new Date(), { years: 1 }),
        new Date(),
      ];
      xAxis: Array<string> = [];
      yAxis: Array<number> = [];
    })();
  },

  async mounted() {
    const campaignResponse =
      await faceBookCampaignController.getAllCampaignsByRange(
        this.rangeDates[0],
        this.rangeDates[1]
      );

    this.xAxis = campaignResponse.data.map((e) => e.campaign_name);
    this.yAxis = campaignResponse.data
      .map((e) => e.cpc)
      .map((e) => parseFloat(e));
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
