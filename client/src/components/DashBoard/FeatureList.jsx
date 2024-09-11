import React from 'react';
import { useNavigate } from 'react-router-dom';

const FeaturesList = () => {
    const navigate = useNavigate();

    
    const features = [
        { id: 3, name: 'Mental Health Exercises', description: 'Access exercises to improve your mental health.', path: '/mental-health-exercises' },
        { id: 4, name: 'Lifestyle Recommendations', description: 'Improve your lifestyle with expert recommendations.', path: '/lifestyle-recommendations' },
        { id: 1, name: 'Report Analysis', description: 'Analyze reports and extract insights.', path: '/reportanalysis' },
        { id: 2, name: 'Content Tracking', description: 'Track content consumption and generate insights.', path: '/track-content' },
    ];

    const handleFeatureClick = (path) => {
        navigate(path);
    };

    return (
        <div className="w-full p-6 h-full">
            <h2 className="text-2xl font-bold mb-4">Explore Features</h2>
            <ul className="list-none h-[calc(100%-30px)] overflow-scroll" >
                {features.map((feature) => (
                    <li key={feature.id} className="mb-4">
                        <button
                            onClick={() => handleFeatureClick(feature.path)}
                            className="w-full flex justify-between items-center p-4 border rounded-lg bg-white shadow-md hover:bg-gray-100 transition duration-300"
                        >
                            <div>
                                <h3 className="text-xl font-semibold">{feature.name}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                            <span className="text-blue-500 font-bold">&gt;</span> {/* Arrow icon */}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FeaturesList;
