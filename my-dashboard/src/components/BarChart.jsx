import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function BarChart() {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr'],
    datasets: [
      {
        label: 'Sales',
        data: [12, 19, 3, 5],
        backgroundColor: '#1976d2',
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