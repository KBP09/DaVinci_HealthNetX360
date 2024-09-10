"use client";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CarouselComponent = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const navigate = useNavigate();
    const slides = [
        { id: 1, content: "Get Your Report Analysis", imgUrl: "https://i.ibb.co/r0hWvXk/reports.png", bgColor: "" },
        { id: 2, content: "Track Your Content Consumption", imgUrl: "https://i.ibb.co/fFH1CM2/content.png", bgColor: "" },
        { id: 3, content: "Lifestyle Recommendations and Health Tips", imgUrl: "https://i.ibb.co/zmCJTG0/tips.png", bgColor: "" },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 300000);
        return () => clearInterval(interval);
    }, [slides.length]);

    const handleClick = (e) => {
        e.preventDefault();
        const id= e.target.id;
        if(id === '1'){
            console.log('Get Your Report Analysis');
        }
        if(id === '2'){
            console.log('Track Your Content Consumption');
        }
        if(id === '3'){
            console.log('Lifestyle Recommendations and Health Tips');
        }
        navigate('/mindmap');
    }

    return (
        <div className="relative h-full onClick={(e) => { handleClick(e) }} z-10 rounded-3xl w-full overflow-hidden">
            <div className="flex h-full transition-transform duration-500" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {slides.map((slide) => (
                    <div key={slide.id} onClick={(e) => { handleClick(e) }} className={`w-full text-black h-full p-4 flex-shrink-0 flex-col flex items-center justify-center text-2xl ${slide.bgColor}`}>
                        <p className="text-2xl text-center font-semibold text-blue-500">{slide.content}</p>
                        <img className="w-full h-[250px] rounded-lg" src={slide.imgUrl} alt="" />
                    </div>
                ))}
            </div>
            <div className="absolute inset-0 flex justify-between items-center p-3">
                <button
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 bg-opacity-50 text-white"
                    onClick={() => setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1))}
                >
                    &lt;
                </button>
                <button
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 bg-opacity-50 text-white"
                    onClick={() => setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)}
                >
                    &gt;
                </button>
            </div>
        </div>
    );
};

export default CarouselComponent;
