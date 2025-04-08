import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function BarChart() {
  const data = {
    labels: ['May', 'Jun', 'Jul', 'Aug'],
    datasets: [
      {
        label: 'Revenue',
        data: [25, 30, 15, 40],
        backgroundColor: '#4caf50',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: { legend: { position: 'top' } },
  };

  return (
    <div style={{ maxWidth: '600px', margin: '20px auto' }}>
      <Bar data={data} options={options} />
    </div>
  );
}

export default BarChart;