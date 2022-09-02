<template>
  <BarChart
    title-input="All clicks on campaign per week"
    :chart-data="this.getChartData"
  ></BarChart>
</template>

<script lang="ts">
import Vue from "vue";
import BarChart from "@/base-components/charts/bar-chart";
import { ChartData } from "chart.js";

export default Vue.extend({
  name: "AllClicksBarChart",
  components: {
    BarChart,
  },

  props: {
    xAxis: {
      type: Object as () => string[],
      required: true,
    },
    yAxis: {
      type: Object as () => number[],
      required: true,
    },
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
            data: this.yAxis,
          },
        ],
      };
    },
  },
});
</script>

<style scoped lang="scss"></style>
