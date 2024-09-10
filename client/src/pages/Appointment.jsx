import React, { useState } from 'react'
import "../components/Appointment/appointment.css"
import searchlens from "../assets/Appointment/searchlens.png"
import location from "../assets/Appointment/location.png"
import ladka from "../assets/Appointment/ladka.png"
import sort from "../assets/Appointment/sort.png"

export default function Appointment() {
  const [hospital, setHospital] = useState('');
  const [sortOrder, setSortOrder] = useState('');

  const doctors = [
    {
      name: 'Kartik Pokemon',
      specialty: 'Mood Swings',
      experience: '8 years exp',
      hospital: 'Apollo Cradle Moti Nagar',
      languages: 'English, हिंदी',
      degrees: 'MBBS, MS, DNB',
      availability: 'MON, WED, THU, SAT (11:00 AM–04:00 PM)'
    },
    {
      name: 'Dr Kanak Bhavneshwar Pandey',
      specialty: 'Orthopaedic Surgeon',
      experience: '100+ years exp',
      hospital: 'Apollo Spectra Hospitals Chirag Enclave',
      languages: 'English, हिंदी',
      degrees: 'MBBS, MS',
      availability: 'SUN | TUE, THU, SAT (11:00 AM–02:00 PM | 12:00 PM–04:00 PM)'
    }
  ];
  return (
    <div>
      <div className="KBP_searchP">
        <h1>Best Doctors In Delhi</h1>
        <div className="KBP_search-bar-container">
          <div className="KBP_search-input">
            <img src={searchlens} alt="Search" className="KBP_search-icon" />
            <input
              type="text"
              placeholder="Search by: Doctors, Specialities, Symptoms, Diseases & Treatments"
            />
          </div>
          <div className="KBP_hospital-select">
            <img src={location} alt="location" />
            <select
              value={hospital}
              onChange={(e) => setHospital(e.target.value)}
            >
              <option value="">Select Hospital</option>
              <option value="hospital1">Hospital 1</option>
              <option value="hospital2">Hospital 2</option>
            </select>
          </div>
        </div>
      </div>
      <div className="KBP_container">
        <div className="KBP_filters">
          <button className="KBP_filter-btn">FILTER</button>
          <select className="KBP_dropdown">
            <option>Speciality</option>
            <option>Cardiology</option>
            <option>Dermatology</option>
            {/* More options */}
          </select>
          <select className="KBP_dropdown">
            <option>Gender</option>
            <option>Male</option>
            <option>Female</option>
          </select>
          <select className="KBP_dropdown">
            <option>Language</option>
            <option>English</option>
            <option>Hindi</option>
          </select>
          <div className="KBP_sort">
            <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
              <option value="">Sort</option>
              <option value="exp-high-low">Experience High-Low</option>
              <option value="exp-low-high">Experience Low-High</option>
            </select>
          </div>
        </div>

        <div className="KBP_search-results">
          <h3>Search Result (433)</h3>
          {doctors.map((doctor, index) => (
            <div key={index} className="KBP_doctor-card">
              <div className="KBP_doctor-info">
                <div className="KBP_profile-pic">
                  <img src={ladka} alt={doctor.name} className="KBP_doctor-img" />
                </div>
                <div>
                  <h4>{doctor.name}</h4>
                  <p>{doctor.specialty} | {doctor.experience}</p>
                  <p><i className="fa fa-map-marker" aria-hidden="true"></i> {doctor.hospital}</p>
                  <p><i className="fa fa-language" aria-hidden="true"></i> {doctor.languages}</p>
                  <p><i className="fa fa-graduation-cap" aria-hidden="true"></i> {doctor.degrees}</p>
                </div>
              </div>
              <div className="KBP_appointment">
                <p>{doctor.availability}</p>
                <button className="KBP_book-btn">BOOK APPOINTMENT</button>
              </div>
            </div>
          ))}
        </div>

        <div className="KBP_help-section">
          <div className="KBP_help-banner">
            <p>Need Help?<br />1860 500 1066</p>
          </div>
        </div>
      </div>
    </div>
  )
}
