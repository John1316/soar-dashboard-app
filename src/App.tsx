import './style.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import Home from './pages/Home';
import Setting from './pages/Setting';

function App() {

  return (
    <Router>
      <Routes>
        {/* Wrap all dashboard routes in DashboardLayout */}
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Home />} />
          <Route path="setting" element={<Setting />} />
          {/* <Route path="profile" element={<Profile />} /> */}
          {/* Add more routes as needed */}
        </Route>
      </Routes>
    </Router>
  )
}

export default App
