'use client'

import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      label: "Monthly Sales",
      data: [30, 45, 60, 50, 70, 90],
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      borderColor: "rgba(75, 192, 192, 1)",
      borderWidth: 1,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    tooltip: {
      callbacks: {
        label: (tooltipItem) => `Sales: $${tooltipItem.raw}`,
      },
    },
  },
};

export default function StatisticPage() {
  return (
    <div className="flex-1 p-6 bg-gray-100 border border-gray-300 rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">
        Statistics Overview
      </h1>

      <div className="mb-6">
        <h2 className="text-xl font-medium text-gray-700 mb-2">
          Monthly Sales
        </h2>
        <div className="bg-white p-4 border border-gray-300 rounded-lg shadow-sm">
          <Bar data={data} options={options} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 border border-gray-300 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Total Revenue
          </h3>
          <p className="text-gray-600 text-2xl">$12,345</p>
        </div>
        <div className="bg-white p-4 border border-gray-300 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Total Orders
          </h3>
          <p className="text-gray-600 text-2xl">567</p>
        </div>
      </div>
    </div>
  );
}
