import React from 'react'
import { useNavigate } from 'react-router-dom'

const AppointList = () => {
  const navigate = useNavigate()

  const handleRedirect = (e) => {
    e.preventDefault()
    navigate('/appointment')
  }

  return (
    <div className='h-full w-full p-4'>
      <div className='flex h-12 justify-between items-center'>
        <h3 className='text-xl font-semibold'>Upcoming Appointments</h3>
        <button className='bg-blue-600 px-3 h-12 rounded-lg text-white font-semibold' onClick={handleRedirect}>New Appointment</button>
      </div>
      <div className='py-4 h-[calc(100%-50px)] overflow-scroll'>
        <div>
          <div className='flex justify-between items-center p-4 border-b-2'>
            <div>
              <p className='font-semibold'>Dr. John Doe</p>
              <p className='text-gray-400'>Cardiologist</p>
            </div>
            <div>
              <p className='text-gray-400'>09:00 AM</p>
              <p className='text-gray-400'>Today</p>
            </div>
          </div>
          <div className='flex justify-between items-center p-4 border-b-2'>
            <div>
              <p className='font-semibold'>Dr. John Doe</p>
              <p className='text-gray-400'>Cardiologist</p>
            </div>
            <div>
              <p className='text-gray-400'>09:00 AM</p>
              <p className='text-gray-400'>Today</p>
            </div>
          </div>
          <div className='flex justify-between items-center p-4 border-b-2'>
            <div>
              <p className='font-semibold'>Dr. John Doe</p>
              <p className='text-gray-400'>Cardiologist</p>
            </div>
            <div>
              <p className='text-gray-400'>09:00 AM</p>
              <p className='text-gray-400'>Today</p>
            </div>
          </div>
          <div className='flex justify-between items-center p-4 border-b-2'>
            <div>
              <p className='font-semibold'>Dr. John Doe</p>
              <p className='text-gray-400'>Cardiologist</p>
            </div>
            <div>
              <p className='text-gray-400'>09:00 AM</p>
              <p className='text-gray-400'>Today</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppointList
