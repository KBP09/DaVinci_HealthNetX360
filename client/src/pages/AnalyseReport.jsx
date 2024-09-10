import React, { useState } from 'react';
import FileUpload from '@/components/Reports/FileUpload';
import RadioButtons from '@/components/Reports/RadioButtons';
import BasicBars from '@/components/Reports/Graph';
import BasicTable from '@/components/Reports/Table';

const AnalyseReport = () => {
    const [showInput, setShowInput] = useState(true);
    const [selectedValue, setSelectedValue] = useState('');
    const [file, setFile] = useState(null);

    const handleFileChange = (selectedFile) => {
        setFile(selectedFile);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowInput(false);

        const formData = new FormData();
        formData.append('file', file); 

        fetch('http://localhost:3000/api/v1/reports/predict_chest', {
            method: 'POST',
            body: formData,
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    };

    return (
        <section className="pt-[80px] w-full px-32 h-full">
            <h4 className="text-4xl font-semibold">Efficient Medical Report Analysis</h4>
            <p className="pt-4 font-semibold text-gray-500">
                Our platform utilizes advanced machine learning algorithms to identify and analyze medical test images
            </p>
            {showInput && (
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <div className="pt-12 w-[400px]">
                        <FileUpload onFileChange={handleFileChange} />
                    </div>
                    <div className="pt-4 w-[250px]">
                        <RadioButtons selectedValue={selectedValue} setSelectedValue={setSelectedValue} />
                    </div>
                    <button className="h-12 w-[300px] rounded-lg text-lg font-semibold text-gray-100 hover:bg-blue-500 bg-blue-600">
                        Analyse Report
                    </button>
                </form>
            )}
            {!showInput && (
                <>
                    <div className="w-full flex pt-8 h-[500px] gap-4">
                        <div className="w-1/2 border-2 h-full flex justify-center items-center rounded-lg">
                            <BasicBars />
                        </div>
                        <div className="w-1/2 border-2 h-full rounded-lg p-4">
                            <h4 className="text-3xl text-center">Disease-Probability</h4>
                            <BasicTable />
                        </div>
                    </div>
                    <div className="w-full h-[400px] border-2 mt-4 rounded-lg p-2">
                        <h5 className="text-center text-4xl font-semibold">Detailed Summary</h5>
                        <div className="h-[80%]" />
                    </div>
                </>
            )}
        </section>
    );
};

export default AnalyseReport;
