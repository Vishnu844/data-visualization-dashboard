import React from "react";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import "./charts.css";
Chart.register(ArcElement, Tooltip, Legend);

const PieChart = ({ title, label, labels, data }) => {
  const pieChartData = {
    labels: labels,
    datasets: [
      {
        label: label,
        data: data,
        backgroundColor: [...Array(labels.length)].map(
          () =>
            `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(
              Math.random() * 255
            )}, ${Math.floor(Math.random() * 255)}, 0.6)`
        ),
      },
    ],
  };
  return (
    <>
      <h3>{title}</h3>
      <Pie
        data={pieChartData}
        options={{
          responsive: true,
        }}
      />
    </>
  );
};

export default PieChart;
