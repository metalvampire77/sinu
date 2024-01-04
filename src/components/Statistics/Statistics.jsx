// Statistics.jsx

import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import "./Statistics.css"; // Import the CSS file

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// ...
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top", // Remove 'as const'
    },
    title: {
      display: true,
      text: "Turnover Statistics",
    },
  },
};

// ...

// Your custom data
const turnoverData = {
  labels: [
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
    "2021",
    "2022",
    "2023",
  ],
  datasets: [
    {
      label: "Turnover",
      data: [
        240000, 300000, 330000, 350000, 380000, 400000, 450000, 500000, 550000,
        350000, 450000, 950000, 700000, 680000, 550000, 700000, 700000, 850000,
        800000, 950000, 1800000, 2400000, 1600000,
      ],
      borderColor: "rgba(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

export function Statistics() {
  return (
    <div className="chart-container">
      <Line options={options} data={turnoverData} />
    </div>
  );
}
