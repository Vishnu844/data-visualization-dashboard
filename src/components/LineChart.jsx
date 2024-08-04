import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart,
  LinearScale,
  CategoryScale,
  LineElement,
  Tooltip,
  PointElement,
} from "chart.js";
import "./charts.css";
Chart.register(LinearScale, CategoryScale, Tooltip, PointElement, LineElement);

const LineChart = ({ title, labels, data, label }) => {
  const LineChartData = {
    labels: labels,
    datasets: [
      {
        label,
        data,
        fill: false,
        borderColor: "#ff71b8",
        tension: 0.1,
      },
    ],
  };
  return (
    <>
      <h3>{title}</h3>
      <Line
        data={LineChartData}
        options={{
          responsive: true,
        }}
      />
    </>
  );
};

export default LineChart;
