<template>
  <LineChart title-input="CPC on all campaigns per week" :chart-data="this.getChartData"></LineChart>
</template>

<script lang="ts">
import Vue from "vue";
import LineChart from "@/base-components/charts/line-chart";
import { ChartData } from "chart.js";

export default Vue.extend({
  name: "CpcCampaignChart",
  components: {
    LineChart
  },

  props: {
    xAxis: {
      type: Object as () => string[],
      required: true
    },
    yAxis: {
      type: Object as () => number[],
      required: true
    }
  },
  computed: {
    getChartData(): ChartData {
      return {
        labels: this.xAxis,

        datasets: [
          {
            fill: false,
            label: "",
            borderColor: "red",
            data: this.yAxis
          }
        ]
      };
    }
  }
});
</script>

<style scoped lang="scss"></style>
