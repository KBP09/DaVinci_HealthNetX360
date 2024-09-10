import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = ({dataset}) => {
  const data = {
    labels: ['Education', 'Entertainment', 'News', 'Social Media', 'Health'],
    datasets: [
      {
        label: 'Content Consumption (hours)',
        data: dataset || [0, 0, 0, 0, 0],
        backgroundColor: ['#81c784', '#fff176', '#64b5f6', '#e57373', '#ba68c8'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Content Type',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Hours',
        },
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default BarChart;
