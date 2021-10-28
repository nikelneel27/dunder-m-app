<script>
import { Line } from "vue-chartjs";

export default {
  extends: Line,
  mounted() {
    this.renderChart(
      {
        labels: ["Oct 2021", "Oct 2022", "Oct 2023", "Oct 2024", "Oct 2025"],
        datasets: [
          {
            label: "Data ",
            data: [
              10000, 20000, 30000, 40000, 50000, 60000, 70000, 90000, 100000,
            ],

            backgroundColor: "transparent",
            borderColor: "rgba(1, 116, 188, 0.50)",
            pointBackgroundColor: "rgba(171, 71, 188, 1)",
          },
        ],
      },

      {
        responsive: true,
        maintainAspectRatio: false,
        title: {
          display: false,
          text: "My Data",
        },
      }
    );
  },
};
</script>