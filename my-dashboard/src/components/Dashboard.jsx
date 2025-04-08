import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import InfoCard from './InfoCard';
import BarChart from './BarChart';  // You'd need to adapt this to the available data

function Dashboard() {
  const [data, setData] = useState({ users: '0', sales: '$0', orders: '0' });  // Initialize as strings

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch user data from JSONPlaceholder
        const usersResponse = await axios.get('[https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users)');
        const userCount = usersResponse.data.length;  // Get the number of users

        // Mock sales and order data (for demonstration)
        const mockData = {
          sales: '$5000',
          orders: '75',
        };

        setData({
          users: String(userCount), // Convert to string
          sales: mockData.sales,
          orders: mockData.orders,
        });
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle error (e.g., set default values or show an error message)
        setData({ users: '0', sales: '$0', orders: '$0' });
      }
    };

    fetchData();
  }, []);

  return (
    <div className="dashboard">
      <Header />
      <div className="cards-container">
        <InfoCard title="Users" value={data.users} />
        <InfoCard title="Sales" value={data.sales} />
        <InfoCard title="Orders" value={data.orders} />
      </div>
      <BarChart />
        {/* Assuming BarChart is adapted to use the fetched data */}
    </div>
  );
}

export default Dashboard;