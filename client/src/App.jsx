// import React, { useState } from 'react'
// import './App.css'
// import Navbar from './components/shared/Navbar'
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import MindMap from './pages/MindMap';
// import Appointment from './pages/Appointment';
// import Home from './pages/Home';
// import AnalyseReport from './pages/AnalyseReport';
// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path='/home' element={<Home/>} />
//         <Route path='/dashboard' element={<div>Dashboard</div>} />
//         <Route path='/about' element={<div>About Us</div>} />
//         <Route path='/contact' element={<div>Contact Us</div>} />
//         <Route path='/mindmap' element={<MindMap/>} />
//         <Route path='/appointment' element={<Appointment/>} />
//         <Route path='/reportanalysis' element={<AnalyseReport/>} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
import React, { useState } from 'react'
import './App.css'
import Navbar from './components/shared/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MindMap from './pages/MindMap';
import Appointment from './pages/Appointment';
import Home from './pages/Home';
import LandingPage from './pages/LandingPage';
import AnalyseReport from './pages/AnalyseReport';
import MentalHealthPage from './pages/MentalHealthPage';
import Login from './pages/Login';
import Signup from './pages/Signup';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/landing' element={<LandingPage/>} />
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<div>Dashboard</div>} />
        <Route path='/about' element={<div>About Us</div>} />
        <Route path='/contact' element={<div>Contact Us</div>} />
        <Route path='/track-content' element={<MindMap />} />
        <Route path='/appointment' element={<Appointment />} />
        <Route path='/reportanalysis' element={<AnalyseReport />} />
        <Route path='/mental-health-exercises' element={<MentalHealthPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </Router>
  )
}


export default App