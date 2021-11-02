<template>
  <div id="main"></div>
</template>

<script>
import * as echarts from "echarts";

export default {
  mounted() {
    var chartDom = document.getElementById("main");
    var myChart = echarts.init(chartDom);
    var option;
    option = {
      //   legend: {},
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
          itemStyle: {
            boderRadius: 8,
          },
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
          data: [100000, 150000, 180000, 200000, 210000],
          itemStyle: {
            color: "rgb(19, 204, 165)",
            borderWidth: 1,
          },
        },
        {
          name: "Equity ",
          type: "bar",
          stack: "Ad",
          barWidth: 75,
          data: [387500, 400000, 420000, 445000, 550000],
          itemStyle: {
            color: "rgb(255, 199, 66)",
          },
        },
        {
          name: "Sign-on Bonus",
          type: "bar",
          stack: "Ad",
          barWidth: 75,
          data: [10000, 12000, 12200, 13000, 15000],
          itemStyle: {
            color: "rgb(85, 99, 203)",
          },
        },
        {
          name: "Target Bonus",
          type: "bar",
          stack: "Ad",
          barWidth: 75,
          data: [9900, 10900, 11200, 12000, 13000],
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
          itemStyle: {
            color: "rgb(255, 68, 141)",
          },
        },
        {
          itemStyle: {
            borderRadius: 18,
            borderColor: "red",
          },
        },
      ],
    };
    option && myChart.setOption(option);
  },
};
</script>

<style scoped>
#main {
  width: 100%;
  height: 300px;
}
</style>




