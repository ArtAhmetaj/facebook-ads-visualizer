<template>
  <LineChart
    :title-input="this.chartTitle"
    :chart-data="this.chartData"
  ></LineChart>
</template>

<script lang="ts">
import Vue from "vue";
import LineChart from "@/base-components/charts/line-chart";
import { ChartData } from "chart.js";
import divideLabelIfMultiLine from "@/utils/chart-utils";

export default Vue.extend({
  name: "CpcCampaignChart",
  components: {
    LineChart
  },

  props: {
    dates: {
      type: Array,
      required: true
    },
    xAxis: {
      type: Array,
      required: true
    },
    yAxis: {
      type: Array,
      required: true
    }
  },
  computed: {
    chartData(): ChartData {
      return {
        labels: (this.xAxis as string[]).map(divideLabelIfMultiLine),

        datasets: [
          {
            backgroundColor: "rgb(255, 99, 132, 0.5)",
            borderColor: "rgb(255, 99, 132)",
            borderWidth: 2,
            fill: true,
            label: "Cost per Click",
            data: this.yAxis as number[]
          }

        ]
      };
    },

    chartTitle(): string {
      //TODO: can create a seperate model here
      const dates = this.dates as Array<Date>;
      return `Campaign statistics from ${dates[0].toLocaleDateString(
        this.$i18n.locale
      )} to ${dates[1].toLocaleDateString(this.$i18n.locale)}`;
    }
  }

});
</script>

<style scoped lang="scss"></style>
