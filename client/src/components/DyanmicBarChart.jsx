import React from 'react';
import { Bar } from 'react-chartjs-2';
import Chart from "chart.js/auto";
import "chartjs-adapter-date-fns";
import { CategoryScale, LinearScale, BarController, BarElement } from "chart.js";
Chart.register(CategoryScale, LinearScale, BarController, BarElement);


const DynamicBarChart = ({ data }) => {

  // Set chart data
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: data.title,
        data: data.values,
        backgroundColor: data.colors,
      }
    ]
  };

  // Set chart options
  const chartOptions = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  };

  return (
    <Bar data={chartData} options={chartOptions} />
  );
};

export default DynamicBarChart;
