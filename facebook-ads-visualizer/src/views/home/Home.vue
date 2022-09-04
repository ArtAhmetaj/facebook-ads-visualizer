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
import dateService from "@/services/business/date/FnsDateService";
import {
  getCampaignMapFromNames,
  groupAllCampaignsBasedOnDuration,
} from "@/services/helpers/campaign-helper";

export default Vue.extend({
  name: "Home",
  components: {
    CpcCampaignChart,
  },
  data() {
    return new (class {
      rangeDates: Array<Date> = [
        new Date("2021-01-01"),
        new Date("2022-01-01"),
      ];
      xAxis: Array<string> = [];
      yAxis: Record<string, number[]> = {};
    })();
  },

  async mounted() {
    const campaigns =
      await faceBookCampaignController.getAllCampaignsByRangeGroupedByDuration(
        this.rangeDates[0],
        this.rangeDates[1],
        7
      );

    const allDates = dateService
      .getAllDatesInRangeForDuration(this.rangeDates[0], this.rangeDates[1], {
        weeks: 1,
      })
      .map((e) => e.toLocaleDateString("en-CA"));

    const groupedCampaigns = groupAllCampaignsBasedOnDuration(campaigns);
    const campaignNames = Array.from(
      new Set(campaigns.map((e) => e.campaign_name))
    );
    const campaignMapping = getCampaignMapFromNames(campaignNames);
    //TODO: offload this to chart itself to deal missing cartesian values
    for (const date of allDates) {
      const campaignValues = groupedCampaigns[date];
      for (const campaign in campaignMapping) {
        campaignMapping[campaign].push(
          campaignValues && campaignValues[campaign]
            ? campaignValues[campaign]
            : 0
        );
      }
    }
    this.xAxis = allDates;
    this.yAxis = campaignMapping;
  },

});
</script>

<style scoped lang="scss">
.main-container {
  max-width: 90%;
  padding-top: 5em;
}
</style>
