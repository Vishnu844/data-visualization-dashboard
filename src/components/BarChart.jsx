import { Bar } from "react-chartjs-2";
import {
  Chart,
  LinearScale,
  CategoryScale,
  BarElement,
  Tooltip,
} from "chart.js";
import "./charts.css";
Chart.register(LinearScale, CategoryScale, BarElement, Tooltip);

const BarChart = ({ title, labels, data, label }) => {
  const barChartData = {
    labels,
    datasets: [
      {
        label,
        data,
        backgroundColor: "#76b3fa",
        borderColor: "lightblue",
        borderWidth: 1,
      },
    ],
  };
  return (
    <>
      <h3>{title}</h3>
      <Bar
        data={barChartData}
        options={{
          responsive: true,
        }}
      />
    </>
  );
};

export default BarChart;
