import React, { useState } from 'react';
import axios from 'axios'; // Import axios
import "../components/Appointment/appointment.css";
import searchlens from "../assets/Appointment/searchlens.png";
import location from "../assets/Appointment/location.png";
import ladka from "../assets/Appointment/ladka.png";
import { useNavigate } from 'react-router-dom';

export default function Appointment() {
  const [hospital, setHospital] = useState('');
  const [sortOrder, setSortOrder] = useState('');
  const navigate = useNavigate();

  const doctor1 = {
    name: 'Dr Kanak B Pandey',
    specialty: 'Orthopaedic Surgeon',
    experience: '8 years exp',
    hospital: 'ABC Hospital',
    languages: 'English, हिंदी',
    degrees: 'MBBS, MS, DNB',
    day: 'Tuesday',
    time: '9:00 am'
  };
  const doctor2 = {
    name: 'Dr Kanak Bhavneshwar Pandey',
    specialty: 'Orthopaedic Surgeon',
    experience: '100+ years exp',
    hospital: 'AIIMS',
    languages: 'English, हिंदी',
    degrees: 'MBBS, MS',
    day: 'Tuesday',
    time: '9:00 am'
  };

  const bookAppointment = async (doctor) => {
    try {
      // Sending data to the server using axios
      const res = await axios.post('http://localhost:3000/appointment', {
        doctorName: doctor.name,
        appointmentDay: doctor.day,
        appointmentTime: doctor.time
      });

      if (res.data === "done") {
        alert('Appointment booked successfully!');
        navigate("/");
      }
    } catch (error) {
      console.error('Error booking appointment:', error);
      alert('Failed to book appointment. Please try again.');
    }
  };

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

      <div className="KBP_container11">
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

          {/* Doctor 1 */}
          <div className="KBP_doctor-card">
            <div className="KBP_doctor-info">
              <div className="KBP_profile-pic">
                <img src={ladka} alt={doctor1.name} className="KBP_doctor-img" />
              </div>
              <div>
                <h4>{doctor1.name}</h4>
                <p>{doctor1.specialty} | {doctor1.experience}</p>
                <p><i className="fa fa-map-marker" aria-hidden="true"></i> {doctor1.hospital}</p>
                <p><i className="fa fa-language" aria-hidden="true"></i> {doctor1.languages}</p>
                <p><i className="fa fa-graduation-cap" aria-hidden="true"></i> {doctor1.degrees}</p>
              </div>
            </div>
            <div className="KBP_appointment">
              <p>{doctor1.day}</p>
              <p>{doctor1.time}</p>
              <button
                className="KBP_book-btn"
                onClick={() => bookAppointment(doctor1)}
              >
                BOOK APPOINTMENT
              </button>
            </div>
          </div>

          {/* Doctor 2 */}
          <div className="KBP_doctor-card">
            <div className="KBP_doctor-info">
              <div className="KBP_profile-pic">
                <img src={ladka} alt={doctor2.name} className="KBP_doctor-img" />
              </div>
              <div>
                <h4>{doctor2.name}</h4>
                <p>{doctor2.specialty} | {doctor2.experience}</p>
                <p><i className="fa fa-map-marker" aria-hidden="true"></i> {doctor2.hospital}</p>
                <p><i className="fa fa-language" aria-hidden="true"></i> {doctor2.languages}</p>
                <p><i className="fa fa-graduation-cap" aria-hidden="true"></i> {doctor2.degrees}</p>
              </div>
            </div>
            <div className="KBP_appointment">
              <p>{doctor2.day}</p>
              <p>{doctor2.time}</p>
              <button
                className="KBP_book-btn"
                onClick={() => bookAppointment(doctor2)}
              >
                BOOK APPOINTMENT
              </button>
            </div>
          </div>
        </div>

        <div className="KBP_help-section">
          <div className="KBP_help-banner">
            <p>Need Help?<br />1860 500 1066</p>
          </div>
        </div>
      </div>
    </div>
  );
}
