import Header from './Header';
import InfoCard from './InfoCard';
import BarChart from './BarChart';
import '../styles/Dashboard.css';

function Dashboard() {
    return (
        <div className="dashboard">
            <Header />
            <div className="cards-container">
                <InfoCard title="Users" value="2,500" />
                <InfoCard title="Sales" value="$10,000" />
                <InfoCard title="Orders" value="150" />

            </div>
            <BarChart />
        </div>
    );
}

export default Dashboard;