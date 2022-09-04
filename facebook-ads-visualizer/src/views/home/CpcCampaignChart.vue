<template>
  <LineChart
    :title-input="this.chartTitle"
    :chart-data="this.chartData"
  ></LineChart>
</template>

<script lang="ts">
import Vue from "vue";
import LineChart from "@/base-components/charts/line-chart";
import { ChartData, ChartDataSets } from "chart.js";
import getRandomColor from "../../utils/color-utils";

export default Vue.extend({
  name: "CpcCampaignChart",
  components: {
    LineChart,
  },

  props: {
    dates: {
      type: Array,
      required: true,
    },
    xAxis: {
      type: Array,
      required: true,
    },
    yAxis: {
      type: Object as () => Record<string, number[]>,
      required: true,
    },
  },

  methods: {
    getMappedChartYAxisFromDate(): ChartDataSets[] {
      const results = [];
      for (const campaign in this.yAxis) {
        const randomColor = getRandomColor();
        results.push({
          borderColor: randomColor,
          borderWidth: 2,
          pointHoverBackgroundColor: "red",
          fill: true,
          label: campaign,
          data: this.yAxis[campaign],
        });
      }
      return results;
    },
  },
  computed: {
    chartData(): ChartData {
      return {
        labels: (this.xAxis as string[]).map((v, i) => `${i + 1}W`),

        datasets: this.getMappedChartYAxisFromDate(),
      };
    },

    chartTitle(): string {
      //TODO: can create a seperate model here
      const dates = this.dates as Array<Date>;
      return `Campaign statistics from ${dates[0].toLocaleDateString(
        this.$i18n.locale
      )} to ${dates[1].toLocaleDateString(this.$i18n.locale)}`;
    },
  },
});
</script>

<style scoped lang="scss"></style>
