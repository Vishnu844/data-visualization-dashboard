import React from "react";
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

const StackedBarChart = ({ title, labels, datasets }) => {
  const stackedBarChartData = {
    labels,
    datasets,
  };
  return (
    <>
      <h3>{title}</h3>
      <Bar
        data={stackedBarChartData}
        options={{
          responsive: true,
          scales: {
            x: {
              stacked: true,
            },
            y: {
              stacked: true,
            },
          },
        }}
      />
    </>
  );
};

export default StackedBarChart;
