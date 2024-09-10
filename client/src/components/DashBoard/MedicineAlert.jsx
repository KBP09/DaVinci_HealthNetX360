import React from 'react';
import { MedDialog } from './MedDialog';

const MedicineAlert = () => {
  return (
    <div className="w-full h-full p-4">
      <div className="flex h-12 justify-between items-center">
        <h3 className="text-xl font-semibold">Medicine Alerts</h3>
        <MedDialog/>
        {/* <button className="bg-[#1B4965] px-4 h-12 rounded-lg text-white font-semibold">Add Alert</button> */}
      </div>
      
      {/* Set a fixed height or max-height for the scrollable area */}
      <div className="py-4 h-[calc(100%-48px)] overflow-y-auto">
        <div className="flex justify-between items-center p-4 border-b-2">
          <div>
            <p className="font-semibold">Paracetamol</p>
            <p className="text-gray-400">Take 1 tablet after meal</p>
          </div>
          <div>
            <p className="text-gray-400">09:00 AM</p>
            <p className="text-gray-400">Today</p>
          </div>
        </div>

        <div className="flex justify-between items-center p-4 border-b-2">
          <div>
            <p className="font-semibold">Paracetamol</p>
            <p className="text-gray-400">Take 1 tablet after meal</p>
          </div>
          <div>
            <p className="text-gray-400">09:00 AM</p>
            <p className="text-gray-400">Today</p>
          </div>
        </div>

        <div className="flex justify-between items-center p-4 border-b-2">
          <div>
            <p className="font-semibold">Paracetamol</p>
            <p className="text-gray-400">Take 1 tablet after meal</p>
          </div>
          <div>
            <p className="text-gray-400">09:00 AM</p>
            <p className="text-gray-400">Today</p>
          </div>
        </div>

        <div className="flex justify-between items-center p-4 border-b-2">
          <div>
            <p className="font-semibold">Paracetamol</p>
            <p className="text-gray-400">Take 1 tablet after meal</p>
          </div>
          <div>
            <p className="text-gray-400">09:00 AM</p>
            <p className="text-gray-400">Today</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicineAlert;
