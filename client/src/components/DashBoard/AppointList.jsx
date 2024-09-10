import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AppointList = () => {
  const [appointments, setAppointments] = useState([]);
  const navigate = useNavigate();

  const handleRedirect = (e) => {
    e.preventDefault();
    navigate('/appointment');
  };

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get('http://localhost:3000/appointments');
        setAppointments(response.data);
      } catch (error) {
        console.error('Error fetching appointments:', error);
      }
    };

    fetchAppointments();
  }, []);

  return (
    <div className='h-full w-full p-4'>
      <div className='flex h-12 justify-between items-center'>
        <h3 className='text-xl font-semibold'>Upcoming Appointments</h3>
        <button className='bg-blue-600 px-3 h-12 rounded-lg text-white font-semibold' onClick={handleRedirect}>New Appointment</button>
      </div>
      <div className='py-4 h-[calc(100%-50px)] overflow-scroll'>
        {appointments.length > 0 ? (
          appointments.map((appointment, index) => (
            <div key={index} className='flex justify-between items-center p-4 border-b-2'>
              <div>
                <p className='font-semibold'>{appointment.doctorName}</p>
                <p className='text-gray-400'>Cardiologist</p> {/* Adjust as necessary */}
              </div>
              <div>
                <p className='text-gray-400'>{appointment.appointmentTime}</p>
                <p className='text-gray-400'>{appointment.appointmentDay}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No upcoming appointments.</p>
        )}
      </div>
    </div>
  );
};

export default AppointList;
