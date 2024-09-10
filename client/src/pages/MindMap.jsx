import React from 'react'
import BarChart from '@/components/MindMap/BarChart'

const MindMap = () => {

    const activeTab = (e) => {
        const tabs = document.querySelectorAll('h3')
        tabs.forEach(tab => {
            tab.classList.remove('text-blue-500')
            tab.classList.remove('border-b-4')
        })
        e.target.classList.add('text-blue-500')
        e.target.classList.add('border-b-4')
    }

    return (
        <section className='mt-[70px] mx-32 flex flex-col gap-6'>
            <div className='w-full pt-8 flex flex-col gap-3'>
                <h2 className='text-4xl font-semibold'>Understand Your Digital Consumption</h2>
                <p className='text-slate-400'>Our tool helps you analyze the type of content you engage with and its impact on your well-being</p>
            </div>
            <div className='border-b-2 border-slate-300'>
                <div className='flex gap-3 p-2'>
                    <h3 className='cursor-pointer pb-1 w-20 text-center font-semibold text-blue-500 border-b-4' onClick={activeTab}>Overview</h3>
                    <h3 className='cursor-pointer pb-1 w-20 text-center font-semibold' onClick={activeTab}>Details</h3>
                    <h3 className='cursor-pointer pb-1 w-20 text-center font-semibold' onClick={activeTab}>Solution</h3>
                </div>
            </div>
            <div className='w-full flex justify-around'>
                <div className='w-[250px] h-[120px] flex flex-col gap-2 p-4 pl-6 font-semibold  bg-zinc-200 rounded-lg'>
                    <h4>Total Time Spent</h4>
                    <span className='font-bold text-2xl'>9h 15m</span>
                </div>
                <div className='w-[250px] h-[120px] flex flex-col gap-2 p-4 pl-6 font-semibold bg-zinc-200 rounded-lg'>
                    <h4>Mental Health Impact</h4>
                    <span className='font-bold text-2xl'>2.3/5</span>
                </div>
                <div className='w-[250px] h-[120px] flex flex-col gap-2 p-4 pl-6 font-semibold bg-zinc-200 rounded-lg'>
                    <h4>Productivity</h4>
                    <span className='font-bold text-2xl'>2.5/5</span>
                </div>
                <div className='w-[250px] h-[120px] flex flex-col gap-2 p-4 pl-6 font-semibold bg-zinc-200 rounded-lg'>
                    <h4>Creativity</h4>
                    <span className='font-bold text-2xl'>3.1/5</span>
                </div>
            </div>
            <div className='w-full h-[650px] flex items-center justify-center  rounded-lg border-2 p-6 pt-0 mt-6 border-slate-300'>
                <div className='w-full h-[500px] flex flex-col gap-6'>
                    <span className='w-full'><h3 className='text-2xl'>Your Content Consumption</h3></span>
                    <BarChart />
                </div>
            </div>
            <div className='w-full flex flex-col gap-6'>
                <h4 className='text-2xl font-semibold'>Top Websites</h4>
                <div className='grid grid-cols-5 grid-rows-1 gap-4'>
                    <div className='w-[220px] h-[270px] p-2 border-0 rounded-lg'><img className='w-[200px] h-[200px] bg-slate-200 rounded-lg p-2' src='.\src\assets\MindMap\yt.png'></img></div>
                    <div className='w-[220px] h-[270px] p-2 border-0 rounded-lg'><img className='w-[200px] h-[200px] bg-slate-200 rounded-lg p-2' src='.\src\assets\MindMap\yt.png'></img></div>
                    <div className='w-[220px] h-[270px] p-2 border-0 rounded-lg'><img className='w-[200px] h-[200px] bg-slate-200 rounded-lg p-2' src='.\src\assets\MindMap\yt.png'></img></div>
                    <div className='w-[220px] h-[270px] p-2 border-0 rounded-lg'><img className='w-[200px] h-[200px] bg-slate-200 rounded-lg p-2' src='.\src\assets\MindMap\yt.png'></img></div>
                    <div className='w-[220px] h-[270px] p-2 border-0 rounded-lg'><img className='w-[200px] h-[200px] bg-slate-200 rounded-lg p-2' src='.\src\assets\MindMap\yt.png'></img></div>
                </div>
            </div>
        </section>
    )
}

export default MindMap
