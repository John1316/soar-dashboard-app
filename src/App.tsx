import './style.scss'
import 'swiper/css'; // Swiper styles
import 'swiper/css/pagination'; // Optional: for pagination if needed
import 'swiper/css/navigation'; // Optional: for navigation if needed
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import Home from './pages/Home';
import Setting from './pages/Setting';
import MyCreditCards from './pages/MyCreditCards';
function App() {
  
  return (
    <Router>
      <Routes>
        {/* Wrap all dashboard routes in DashboardLayout */}
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Home />} />
          <Route path="setting" element={<Setting />} />
          <Route path="creditCards" element={<MyCreditCards />} />
          {/* Add more routes as needed */}
        </Route>
      </Routes>
    </Router>
  )
}

export default App
