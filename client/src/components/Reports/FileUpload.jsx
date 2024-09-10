import React from 'react';

const FileUpload = ({ onFileChange }) => {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    onFileChange(file); 
  };

  return (
    <div className="max-w-sm">
      <label htmlFor="file-input" className="sr-only">Choose file</label>
      <input
        type="file"
        name="file" 
        id="file-input"
        className="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500"
        onChange={handleFileChange}
      />
    </div>
  );
};

export default FileUpload;
