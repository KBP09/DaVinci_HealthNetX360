import React, { useState } from 'react'
import './App.css'
import Navbar from './components/shared/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* <Route path='/landing' element={<LandingPage />} /> */}
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<div>Dashboard</div>} />
        <Route path='/about' element={<div>About Us</div>} />
        <Route path='/contact' element={<div>Contact Us</div>} />
        {/* <Route path='/track-content' element={<MindMap />} />
        <Route path='/appointment' element={<Appointment />} />
        <Route path='/reportanalysis' element={<AnalyseReport />} />
        <Route path='/mental-health-exercises' element={<MentalHealthPage />} /> */}
        <Route path='/login' element={<Login />} />
      </Routes>
    </Router>
  )
}


export default App