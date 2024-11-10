import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, LinearScale, CategoryScale } from 'chart.js';
import annotationPlugin from 'chartjs-plugin-annotation';


const data = [
  { percentile: 0, value: 1 },
  { percentile: 10, value: 2 },
  { percentile: 25, value: 5 },
  { percentile: 50, value: 15 },
  { percentile: 60, value: 20 },
  { percentile: 72, value: 30 }, // Average
  { percentile: 90, value: 8 },  // Your percentile
  { percentile: 100, value: 1 },
];

const Chart = ({percentile}) => {
  return (
    <div>
    <PercentileGraph userPercentile={percentile}/>
  </div>
  );
}

export default Chart;


ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, annotationPlugin);

const PercentileGraph = ({ userPercentile }) => {
  const data = {
    labels: Array.from({ length: 11 }, (_, i) => i * 10), // X-axis labels (0, 10, 20,..., 100)
    datasets: [
      {
        label: 'Engineers Percentile',
        data: [1, 2, 5, 10, 25, 72, 55, 25, 10, 2, 1], // Main data points
        borderColor: '#7c8cc5',
        backgroundColor: 'rgba(124, 140, 197, 0.2)',
        borderWidth: 1,
        pointRadius: 3,
        fill: true,
      },
      {
        label: 'Your Percentile',
        data: Array(11).fill(null).map((_, i) => (i * 10 === userPercentile ? 90 : null)), // Highlight point
        borderColor: '#ff6384',
        backgroundColor: '#ff6384',
        pointRadius: 6,
        pointHoverRadius: 8,
        showLine: false, // Only show the point, not a connecting line
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        enabled: true,
        callbacks: {
          label: function (context) {
            const point = context.raw;
            return [
              `Percentile: ${point.x}%`,
              `Number of Students: ${point.numberOfStudents}`,
            ];
          },
        },
      },
      annotation: {
        annotations: {
          userPercentileLine: {
            type: 'line',
            xMin: userPercentile / 10,
            xMax: userPercentile / 10,
            borderColor: '#808080',
            borderWidth: 1,
            label: {
              content: 'your percentile',
              enabled: true,
              position: 'top',
              backgroundColor: '#808080',
              color: '#000',
              padding: 6,
            },
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text : '',
        },
        grid: { display: false },
      },
      y: {
        display : false,
        title: {
          display: false,
          text : '',
        },
        ticks: { display: false },
        grid: { display: false },
        beginAtZero: true,
      },
    },
    elements: {
      line: {
        tension: 0.4, // Smoothing the line
      },
    },
  };
   
  return (
    <div className="xs:w-[90%] lg:w-[100%] h-[20rem]">
      <Line data={data} options={options} />
    </div>
  );
};

