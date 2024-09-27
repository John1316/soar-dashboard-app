import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

const DashboardLayout = () => {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <div className="main-content">
        <Header />
        {/* This is where the routed components will be rendered */}
        <Outlet />
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default DashboardLayout;
