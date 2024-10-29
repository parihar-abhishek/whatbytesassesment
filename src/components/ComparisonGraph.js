// import { Line } from 'react-chartjs-2';
// import {
//   Chart as ChartJS,
//   LineElement,
//   LinearScale,
//   CategoryScale,
//   PointElement,
//   Tooltip,
//   Legend,
// } from 'chart.js';

// ChartJS.register(LineElement, LinearScale, CategoryScale, PointElement, Tooltip, Legend);

// export default function ComparisonGraph({ percentile }) {
//   const data = {
//     labels: ['Test 1', 'Test 2', 'Your Percentile'],
//     datasets: [
//       {
//         label: 'Percentile',
//         data: [70, 85, percentile],
//         fill: false,
//         borderColor: '#4F46E5', // Tailwind indigo-600 color
//         backgroundColor: 'rgba(79, 70, 229, 0.3)',
//         pointBackgroundColor: '#4F46E5',
//         pointBorderColor: '#4F46E5',
//         pointHoverBackgroundColor: '#FFFFFF',
//         pointHoverBorderColor: '#4F46E5',
//         pointRadius: 5,
//         pointHoverRadius: 7,
//         tension: 0.4, // Smoother curve
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         display: true,
//         position: 'top',
//         labels: {
//           font: {
//             size: 14,
//           },
//           color: 'gray',
//         },
//       },
//       tooltip: {
//         backgroundColor: '#4F46E5',
//         titleColor: '#FFFFFF',
//         bodyColor: '#FFFFFF',
//         padding: 10,
//       },
//     },
//     scales: {
//       y: {
//         beginAtZero: true,
//         max: 100,
//         grid: {
//           color: '#E5E7EB', // Tailwind gray-200 color
//           lineWidth: 1,
//         },
//         ticks: {
//           stepSize: 20,
//           font: {
//             size: 12,
//           },
//           color: '#6B7280', // Tailwind gray-600 color
//         },
//       },
//       x: {
//         grid: {
//           display: false,
//         },
//         ticks: {
//           font: {
//             size: 12,
//           },
//           color: '#6B7280',
//         },
//       },
//     },
//   };

//   return (
//     <div className="p-6 border border-gray-300 rounded-lg ">
//       <h3 className="text-xl font-semibold  text-gray-800 mb-4">Comparison Graph</h3>
//       <p className="text-gray-700 mb-4 text-sm">
//        <span className=" font-semibold"> You scored {percentile}% percentile </span>  which is lower than the <br /> average percentile 72% of all the engineers who took this assessment
//       </p>
//       <div className="h-96 w-full">
//         <Line data={data} options={options} />
//       </div>
//     </div>
//   );
// }



// import { Line } from 'react-chartjs-2';
// import {
//   Chart as ChartJS,
//   LineElement,
//   LinearScale,
//   CategoryScale,
//   PointElement,
//   Tooltip,
//   Legend,
// } from 'chart.js';

// ChartJS.register(LineElement, LinearScale, CategoryScale, PointElement, Tooltip, Legend);

// export default function ComparisonGraph({ percentile }) {
//   const data = {
//     labels: ['Test 1', 'Test 2', 'Your Percentile'],
//     datasets: [
//       {
//         label: 'Percentile',
//         data: [70, 85, percentile],
//         fill: false,
//         borderColor: '#4F46E5', // Tailwind indigo-600 color
//         backgroundColor: 'rgba(79, 70, 229, 0.3)',
//         pointBackgroundColor: '#4F46E5',
//         pointBorderColor: '#4F46E5',
//         pointHoverBackgroundColor: '#FFFFFF',
//         pointHoverBorderColor: '#4F46E5',
//         pointRadius: 5,
//         pointHoverRadius: 7,
//         tension: 0.4, // Smoother curve
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         display: true,
//         position: 'top',
//         labels: {
//           font: {
//             size: 14,
//           },
//           color: 'gray',
//         },
//       },
//       tooltip: {
//         backgroundColor: '#4F46E5',
//         titleColor: '#FFFFFF',
//         bodyColor: '#FFFFFF',
//         padding: 10,
//       },
//     },
//     scales: {
//       y: {
//         beginAtZero: true,
//         max: 100,
//         grid: {
//           color: '#E5E7EB', // Tailwind gray-200 color
//           lineWidth: 1,
//         },
//         ticks: {
//           stepSize: 20,
//           font: {
//             size: 12,
//           },
//           color: '#6B7280', // Tailwind gray-600 color
//         },
//       },
//       x: {
//         grid: {
//           display: false,
//         },
//         ticks: {
//           font: {
//             size: 12,
//           },
//           color: '#6B7280',
//         },
//       },
//     },
//   };

//   return (
//     <div className="p-4 md:p-6 border border-gray-300 rounded-lg">
//       <h3 className="text-xl font-semibold text-gray-800 mb-4">Comparison Graph</h3>
//       <p className="text-gray-700 mb-4 text-sm">
//         <span className="font-semibold">You scored {percentile}% percentile</span> which is lower than the <br /> average percentile 72% of all the engineers who took this assessment.
//       </p>
//       <div className="h-64 md:h-96 w-full"> {/* Responsive height */}
//         <Line data={data} options={options} />
//       </div>
//     </div>
//   );
// }




import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  LinearScale,
  CategoryScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(LineElement, LinearScale, CategoryScale, PointElement, Tooltip, Legend);

export default function ComparisonGraph({ percentile }) {
  const data = {
    labels: ['Test 1', 'Test 2', 'Your Percentile'],
    datasets: [
      {
        label: 'Percentile',
        data: [70, 85, percentile],
        fill: false,
        borderColor: '#4F46E5', // Tailwind indigo-600 color
        backgroundColor: 'rgba(79, 70, 229, 0.3)',
        pointBackgroundColor: '#4F46E5',
        pointBorderColor: '#4F46E5',
        pointHoverBackgroundColor: '#FFFFFF',
        pointHoverBorderColor: '#4F46E5',
        pointRadius: 5,
        pointHoverRadius: 7,
        tension: 0.4, // Smoother curve
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          font: {
            size: 14,
          },
          color: 'gray',
        },
      },
      tooltip: {
        backgroundColor: '#4F46E5',
        titleColor: '#FFFFFF',
        bodyColor: '#FFFFFF',
        padding: 10,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        grid: {
          color: '#E5E7EB', // Tailwind gray-200 color
          lineWidth: 1,
        },
        ticks: {
          stepSize: 20,
          font: {
            size: 12,
          },
          color: '#6B7280', // Tailwind gray-600 color
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 12,
          },
          color: '#6B7280',
        },
      },
    },
  };

  return (
    <div className="p-4 md:p-6 border border-gray-300 rounded-lg">
      <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-4">Comparison Graph</h3>
      <p className="text-gray-700 mb-4 text-sm md:text-base">
        <span className="font-semibold">You scored {percentile}% percentile</span> which is lower than the <br /> average percentile 72% of all the engineers who took this assessment.
      </p>
      <div className="h-64 md:h-96 w-full"> {/* Responsive height */}
        <Line data={data} options={options} />
      </div>
    </div>
  );
}
