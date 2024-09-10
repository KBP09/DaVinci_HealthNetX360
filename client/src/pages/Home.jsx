import React, { useEffect, useState } from 'react'
import CarouselComponent from '@/components/DashBoard/Carousel'
import CountingEffect from '@/components/shared/CountingEffect';
import AppointList from '@/components/DashBoard/AppointList';
import MedicineAlert from '@/components/DashBoard/MedicineAlert';
import FeaturesList from '@/components/DashBoard/FeatureList';

const Home = () => {
    const [progress, setProgress] = useState(0);
    useEffect(() => {
        const timeout = setTimeout(() => {
            setProgress(80);
        }, 0);

        return () => clearTimeout(timeout);
    }, []);

    function getCurrentTime() {
        const date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';
      
        // Convert 24-hour format to 12-hour format
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        
        // Add leading zero to minutes if necessary
        minutes = minutes < 10 ? '0' + minutes : minutes;
      
        const formattedTime = `${hours < 10 ? '0' + hours : hours}:${minutes} ${ampm}`;
        return formattedTime;
      }

      function getFormattedDate() {
        const date = new Date();
        const options = { month: 'long', day: '2-digit' };
        return date.toLocaleDateString('en-US', options);
      }

    return (
        <section className='pt-[75px] flex h-full p-3 gap-4 overflow-hidden'>
            <section className='w-[70%] h-full flex gap-4'>
                <div className='w-1/3 neuro-2 h-full'>
                    <FeaturesList />
                   
                </div>
                <div className='h-full flex flex-col gap-4 w-2/3 pb-4'>
                    <div className='h-1/2 neuro-2 w-full'>
                    <AppointList />
                    </div>
                    <div className='h-1/2 neuro-2 w-full'>
                        <MedicineAlert />
                    </div>
                </div>
            </section>
            <section className='w-[30%] h-[100%] flex flex-col gap-2'>
                <div className='border-2 rounded-3xl h-1/2 w-full flex flex-col gap-4 neuro p-6'>
                    <div className='flex h-12 w-full gap-6 items-center'>
                        <span className='h-12 w-12 bg-slate-200 flex items-center justify-center rounded-full p-2'>
                            <img src="https://img.icons8.com/?size=100&id=916&format=png&color=000000" className='h-8 w-8' alt="run-icon" />
                        </span>
                        <span className='flex flex-col'>
                            <p className='text-xl font-semibold'>Running</p>
                            <p className='text-sm w-[160px] text-zinc-400'>Activity for {getFormattedDate()}</p>
                        </span>
                        <p className='self-start ml-20 text-sm font-semibold'>{getCurrentTime()}</p>
                    </div>
                    <div className="flex justify-between items-center bg-gray-100 rounded-full p-1 w-full max-w-4xl">
                        <div className="bg-white h-10 w-full rounded-full relative">
                            <div
                                className="bg-slate-300 h-10 rounded-full flex items-center p-4 transition-all duration-1000"
                                style={{ width: `${progress}%` }}
                            >
                                <p className="text-gray-600 font-medium absolute">2300 STEPS LEFT</p>
                            </div>
                        </div>
                    </div>

                    <div className='flex h-12 w-full gap-3 items-center p-2'>
                        <p className='text-5xl w-[150px] font-semibold'>
                            <CountingEffect />
                        </p>
                        <span className='flex flex-col items-center justify-end pt-4'>
                            <img className='h-4 w-4' src="https://img.icons8.com/?size=100&id=39712&format=png&color=888080" alt="" />
                            <p className='text-sm font-bold text-slate-400'>Steps</p>
                        </span>
                    </div>

                    <div className='w-full rounded-[2rem] h-16 bg-gray-100 flex items-center'>
                        <div className='flex w-1/3 justify-center items-center gap-2'>
                            <img className='h-6 w-6' src="https://img.icons8.com/?size=100&id=Y4UYZXwFMypB&format=png&color=848080" alt="" />
                            <div>
                                <p className='text-sm font-semibold text-gray-400'>Distance</p>
                                <p className='font-semibold'>2.1km</p>
                            </div>
                        </div>
                        <div className='flex w-1/3 justify-center items-center gap-2'>
                            <img className='h-6 w-6' src="https://i.ibb.co/8rbSFDz/time.png" alt="" />
                            <div>
                                <p className='text-sm font-semibold text-gray-400'>Time</p>
                                <p className='font-semibold'>1h 23m</p>
                            </div>
                        </div>
                        <div className='flex w-1/3 justify-center items-center gap-2' >
                            <img className='h-6 w-6' src="https://img.icons8.com/?size=100&id=10022&format=png&color=848080" alt="" />
                            <div>
                                <p className='text-sm font-semibold text-gray-400'>Burned</p>
                                <p className='font-semibold'>1208 kCal</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='border-2 rounded-3xl h-1/2 w-full neuro'>
                    <CarouselComponent />
                </div>
            </section>
        </section>
    )
}

export default Home
