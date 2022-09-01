// chart libraries
import { Line, mixins } from "vue-chartjs";
import { ChartData, ChartOptions } from "chart.js";

const { reactiveProp } = mixins;

// vue plugins
import Vue from "vue";

export default Vue.extend({
  extends: Line,
  mixins: [reactiveProp],
  data() {
    return new (class {
      options: ChartOptions = {
        legend: {
          display: false,
        },
        responsive: true,
        layout: {
          padding: 0,
        },
        maintainAspectRatio: false,
        title: {
          display: true,
          text: "",
          fontSize: 26,
          fontColor: "#00295B",
        },
      };
    })();
  },

  props: {
    chartData: Object as () => ChartData,
    titleInput: {
      type: String,
      required: true,
    },
  },
  mounted() {
    if (this.options && this.options.title) {
      this.options.title.text = this.titleInput;
    }
    (this as unknown as Line).renderChart(this.chartData, this.options);
  },
});
