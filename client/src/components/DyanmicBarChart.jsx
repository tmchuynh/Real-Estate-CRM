import React from 'react';
import { Bar } from 'react-chartjs-2';
import Chart from "chart.js/auto";
import "chartjs-adapter-date-fns";
import { CategoryScale, LinearScale, BarController, BarElement } from "chart.js";
Chart.register(CategoryScale, LinearScale, BarController, BarElement);


const DynamicBarChart = ({ data }) => {
  const { labels, datasets } = data;

  const chartData = {
    labels,
    datasets: datasets.map((dataset) => ({
      label: dataset.label,
      backgroundColor: dataset.backgroundColor,
      borderColor: dataset.borderColor,
      borderWidth: 1,
      hoverBackgroundColor: dataset.hoverBackgroundColor,
      hoverBorderColor: dataset.hoverBorderColor,
      data: dataset.data,
    })),
  };

  const chartOptions = {
    maintainAspectRatio: false,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
        },
      }],
    },
    legend: {
      display: true,
      position: 'bottom',
      labels: {
        usePointStyle: true,
        fontSize: 12,
      },
    },
  };

  return (
    <Bar data={chartData} options={chartOptions} />
  );
};


export default DynamicBarChart;
