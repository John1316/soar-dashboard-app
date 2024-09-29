import { Outlet , useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import {routes} from '../routes';
import { GlobalContext } from '../context/GlobalContext';
import { useContext } from 'react';
const DashboardLayout = () => {
  const location = useLocation();
  const globalContext = useContext(GlobalContext)
  const {
    isMenuOpen,
    handleMenuToggle
  } = globalContext as GlobalContextProps
  return (
    <div className="layout">
      <Header name={routes[location.pathname as keyof typeof routes] || 'Page Not Found'} />
      <Sidebar />
      <div className="layout__content">
        <div className="layout__content--page">
          <Outlet />
        </div>
      </div>
      <div className={`layout__content--layer-${isMenuOpen ? `active`: ``}`} onClick={handleMenuToggle}></div>
    </div>
  );
};

export default DashboardLayout;
