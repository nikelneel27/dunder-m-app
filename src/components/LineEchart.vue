<template>
  <div id="main-line-chart"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  mounted() {
    var chartDom = document.getElementById("main-line-chart");
    var myChart = echarts.init(chartDom);
    var option;

    // function data() {
    //   var x;
    //   var data = [];

    //   for (x = 0; x < 20; x++) {
    //     data = x;
    //     console.log(data);
    //   }
    //   return data;
    // }

    option = {
      xAxis: {
        type: "category",
        data: ["Nov 2021", "Nov 2022", "Nov 2023", "Nov 2024", "Nov 2025"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: [0, 25000, 50000, 75000, 100000],
          type: "line",
        },
      ],
    };

    option && myChart.setOption(option);
  },
};
</script>

<style scoped>
#main-line-chart {
  width: 100%;
  height: 300px;
}
</style>




