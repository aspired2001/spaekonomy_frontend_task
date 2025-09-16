import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  BarController,
  LineController,
  Legend,
  Tooltip,
} from "chart.js";
import { Chart } from "react-chartjs-2";
import { Card } from "../ui/Card";
import { ChartData } from "../../types/useChartData.types";

// ✅ Register both controllers + elements
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  BarController,
  LineController,
  Legend,
  Tooltip
);

interface IncomeChartProps {
  data: ChartData[];
  selectedPeriod: string;
}

export const IncomeChart: React.FC<IncomeChartProps> = ({ data }) => {
  const labels = data.map((d) => d.month);

  const chartData = {
    labels,
    datasets: [
      {
        type: "bar" as const,
        label: "income",
        data: data.map((d) => d.income),
        backgroundColor: "#a855f7",
        borderRadius: 6,
        yAxisID: "yRight",
      },
      {
        type: "line" as const,
        label: "momGrowth",
        data: data.map((d) => d.growth),
        borderColor: "#dc2626",
        backgroundColor: "#dc2626",
        yAxisID: "yLeft",
        tension: 0.4,
        pointRadius: 4,
        pointBackgroundColor: "#dc2626",
        pointHoverRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false as const,
    scales: {
      yLeft: {
        position: "left" as const,
        min: -100,
        max: 100,
        ticks: {
          callback: (val: any) => `${val}%`,
          color: "#9ca3af",
          font: { size: 11 },
        },
        grid: { drawOnChartArea: false },
      },
      yRight: {
        position: "right" as const,
        beginAtZero: true,
        ticks: {
          callback: (val: any) => `$${val / 1000}k`,
          color: "#9ca3af",
          font: { size: 11 },
        },
      },
      x: {
        ticks: { color: "#6b7280", font: { size: 12 } },
        grid: { display: false },
      },
    },
    plugins: {
      legend: {
        position: "bottom" as const,
        labels: { color: "#6b7280", boxWidth: 12, boxHeight: 12, font: { size: 11 } },
      },
      tooltip: {
        callbacks: {
          label: function (context: any) {
            if (context.dataset.label === "income") {
              return `$${context.parsed.y}`;
            } else {
              return `${context.parsed.y}%`;
            }
          },
        },
      },
    },
  };

  return (
    <Card className="p-6">
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-gray-900">Income Trend</h3>
        <p className="text-xs text-gray-500">
          Your monthly income and growth for the last 6 months.
        </p>

        <div className="h-64">
          <Chart type="bar" data={chartData} options={options} />
        </div>
      </div>
    </Card>
  );
};
