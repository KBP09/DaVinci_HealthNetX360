import React, { useState } from 'react';

const RadioButtons = ({selectedValue,setSelectedValue}) => {

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div className="flex flex-col">
      <label 
        className={`flex items-center rounded-full px-4 py-3 mb-2 cursor-pointer transition duration-300 ${selectedValue === 'value-2' ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
      >
        <input 
          type="radio" 
          id="value-2" 
          name="value-radio" 
          value="value-2"
          className="absolute w-0 h-0 opacity-0"
          checked={selectedValue === 'value-2'}
          onChange={handleChange}
        />
        <div 
          className={`w-5 h-5 rounded-full bg-gradient-to-br from-teal-400 to-blue-400 relative transition-transform duration-300 ${selectedValue === 'value-2' ? 'before:scale-0' : 'before:scale-110'} before:absolute before:inset-0 before:rounded-full before:bg-gray-200 before:transition-transform before:duration-300`}
        />
        <div className={`ml-4 text-gray-600 text-xl font-extrabold uppercase tracking-wider transition duration-300 ${selectedValue === 'value-2' ? 'text-gray-800' : ''}`}>
          Chest X-ray
        </div>
      </label>
      
      <label 
        className={`flex items-center rounded-full px-4 py-3 mb-2 cursor-pointer transition duration-300 ${selectedValue === 'value-3' ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
      >
        <input 
          type="radio" 
          id="value-3" 
          name="value-radio" 
          value="value-3"
          className="absolute w-0 h-0 opacity-0"
          checked={selectedValue === 'value-3'}
          onChange={handleChange}
        />
        <div 
          className={`w-5 h-5 rounded-full bg-gradient-to-br from-teal-400 to-blue-400 relative transition-transform duration-300 ${selectedValue === 'value-3' ? 'before:scale-0' : 'before:scale-110'} before:absolute before:inset-0 before:rounded-full before:bg-gray-200 before:transition-transform before:duration-300`}
        />
        <div className={`ml-4 text-gray-600 text-xl font-extrabold uppercase tracking-wider transition duration-300 ${selectedValue === 'value-3' ? 'text-gray-800' : ''}`}>
          Bone X-ray
        </div>
      </label>
      
      <label 
        className={`flex items-center rounded-full px-4 py-3 mb-2 cursor-pointer transition duration-300 ${selectedValue === 'value-4' ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
      >
        <input 
          type="radio" 
          id="value-4" 
          name="value-radio" 
          value="value-4"
          className="absolute w-0 h-0 opacity-0"
          checked={selectedValue === 'value-4'}
          onChange={handleChange}
        />
        <div 
          className={`w-5 h-5 rounded-full bg-gradient-to-br from-teal-400 to-blue-400 relative transition-transform duration-300 ${selectedValue === 'value-4' ? 'before:scale-0' : 'before:scale-110'} before:absolute before:inset-0 before:rounded-full before:bg-gray-200 before:transition-transform before:duration-300`}
        />
        <div className={`ml-4 text-gray-600 text-xl font-extrabold uppercase tracking-wider transition duration-300 ${selectedValue === 'value-4' ? 'text-gray-800' : ''}`}>
          Brain X-ray
        </div>
      </label>
    </div>
  );
};

export default RadioButtons;
