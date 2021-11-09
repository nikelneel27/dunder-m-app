<template>
  <div id="main"></div>
</template>

<script>
import * as echarts from "echarts";

export default {
  data() {
    return {
      option: {
        // legend: {},
        xAxis: [
          {
            type: "category",
            axisLine: {
              show: false,
            },
            grid: {
              show: false,
            },
            axisLabel: {
              show: true,
            },
            axisTick: {
              show: false,
            },
            data: ["Year1", "Year2", "Year3", "Year4"],
          },
        ],
        yAxis: [
          {
            type: "value",
            axisLine: {
              show: false,
            },
            grid: {
              show: false,
            },
            splitLine: {
              show: false,
            },

            axisLabel: {
              show: false,
            },
          },
        ],
        series: [
          {
            name: "Base Salary",
            type: "bar",
            stack: "Ad",
            barWidth: 75,
            barGap: 40,
            barCategoryGap: "57%",

            data: [100000, 100000, 100000, 100000, 100000],
            itemStyle: {
              barBorderRadius: [0, 0, 20, 20],
              color: "rgb(19, 204, 165)",
            },
          },
          {
            name: "Equity ",
            type: "bar",
            stack: "Ad",
            barWidth: 75,
            barGap: 40,
            barCategoryGap: "57%",
            groupPadding: 5,
            data: [77500, 77500, 77500, 77500, 77500],
            itemStyle: {
              color: "rgb(255, 199, 66)",
            },
          },
          {
            name: "Sign-on Bonus",
            type: "bar",
            stack: "Ad",
            barWidth: 75,
            barGap: 40,
            barCategoryGap: "57%",
            data: [10000, 0, 0, 0, 0],
            itemStyle: {
              color: "rgb(85, 99, 203)",
            },
          },
          {
            name: "Target Bonus",
            type: "bar",
            stack: "Ad",
            barWidth: 75,
            barGap: 40,
            barCategoryGap: "57%",
            data: [0, 0, 0, 0, 0],
            itemStyle: {
              color: "rgb(108, 122, 255)",
            },
          },
          {
            name: "Benefits",
            type: "bar",
            stack: "Ad",
            data: [20400, 19400, 21000, 22000, 23000],
            barWidth: 75,
            barGap: 40,
            barCategoryGap: "57%",
            itemStyle: {
              barBorderRadius: [20, 20, 0, 0],
              color: "rgb(255, 68, 141)",
            },
          },
        ],
      },
    };
  },
  mounted() {
    var chartDom = document.getElementById("main");
    this.myChart = echarts.init(chartDom, null, { renderer: "svg" });

    this.option && this.myChart.setOption(this.option);
  },
  props: {
    value1: {
      type: Number,
      default: 0,
    },
    value2: {
      type: Number,
      default: 0,
    },
  },
  watch: {
    value1(val) {
      this.updateCharts(val);
    },
    value2(val) {
      this.updateCharts(val);
    },
  },
  methods: {
    updateCharts(val) {
      const updatedSeries = this.option.series.map((item) => {
        const data = item.data.map((value) => value * val);
        return {
          ...item,
          data,
        };
      });
      this.option = { ...this.option, series: updatedSeries };
      this.myChart.setOption(this.option);
      console.log(this.option);
    },
  },
};
</script>

<style scoped>
#main {
  width: 100%;
  height: 300px;
}

@media (min-width: 560px) {
}
</style>




