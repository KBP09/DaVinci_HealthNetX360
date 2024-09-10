import React,{useEffect, useState} from 'react'
import BarChart from '@/components/MindMap/BarChart'
import AnimatedWorm from '@/components/shared/AnimatedWorm'

const MindMap = () => {
    const [isActive, setIsActive] = useState('1')
    const [data, setData] = useState({})
    const [show, setShow] = useState(true)
    const [summary, setSummary] = useState('');
    const [estimatedTimeSpent, setEstimatedTimeSpent] = useState('');
    const [mentalHealthRating, setMentalHealthRating] = useState(0);
    const [productivityRating, setProductivityRating] = useState(0);
    const [creativityRating, setCreativityRating] = useState(0);
    const [dataset, setDataset] = useState([]);



    const fetchData = async () => {
        try {
            const response = await fetch('https://mentalextensionbackend.onrender.com/analyzeRecentData');
            const res= await response.json();
            console.log(res);
            console.log('Data:', res);
            setData(res);
            setSummary(res.summary.trim());
            setEstimatedTimeSpent(res.estimatedTimeSpent.trim());
            setMentalHealthRating(parseInt(res.mentalHealthRating.trim(), 10));
            setProductivityRating(parseInt(res.productivityRating.trim(), 10));
            setCreativityRating(parseInt(res.creativityRating.trim(), 10));
            setDataset(JSON.parse(res.dataset.trim()));
            setShow(false);
            
        } catch (error) {
            console.error('Error:', error);
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    

    const activeTab = (e) => {
        const tabs = document.querySelectorAll('h3')
        tabs.forEach(tab => {
            tab.classList.remove('text-blue-500')
            tab.classList.remove('border-b-4')
        })
        e.target.classList.add('text-blue-500')
        e.target.classList.add('border-b-4')
        setIsActive(e.target.id)
    }

    return (
        <section className={'mt-[70px] mx-32 flex flex-col gap-6'}>
            {show && <AnimatedWorm />}
            <div className='w-full pt-8 flex flex-col gap-3'>
                <h2 className='text-4xl font-semibold'>Understand Your Digital Consumption</h2>
                <p className='text-slate-400'>Our tool helps you analyze the type of content you engage with and its impact on your well-being</p>
            </div>
            { isActive === '1' &&
                <div className='w-full'>
                    <div className='w-full flex justify-around'>
                        <div className='w-[250px] h-[120px] flex flex-col gap-2 p-4 pl-6 font-semibold  bg-zinc-200 rounded-lg'>
                            <h4>Total Time Spent</h4>
                            <span className='font-bold text-2xl'>{estimatedTimeSpent}</span>
                        </div>
                        <div className='w-[250px] h-[120px] flex flex-col gap-2 p-4 pl-6 font-semibold bg-zinc-200 rounded-lg'>
                            <h4>Mental Health Impact</h4>
                            <span className='font-bold text-2xl'>{mentalHealthRating}/5</span>
                        </div>
                        <div className='w-[250px] h-[120px] flex flex-col gap-2 p-4 pl-6 font-semibold bg-zinc-200 rounded-lg'>
                            <h4>Productivity</h4>
                            <span className='font-bold text-2xl'>{productivityRating}/5</span>
                        </div>
                        <div className='w-[250px] h-[120px] flex flex-col gap-2 p-4 pl-6 font-semibold bg-zinc-200 rounded-lg'>
                            <h4>Creativity</h4>
                            <span className='font-bold text-2xl'>{creativityRating}/5</span>
                        </div>
                    </div>
                    <div className='w-full h-[650px] flex items-center justify-center  rounded-lg border-2 p-6 pt-0 mt-6 border-slate-300'>
                        <div className='w-full h-[500px] flex flex-col gap-6'>
                            <span className='w-full'><h3 className='text-2xl'>Your Content Consumption</h3></span>
                            <BarChart dataset={dataset} />
                        </div>
                    </div>
                    <div className='w-full flex flex-col gap-6 mt-6'>
                        <h4 className='text-2xl font-semibold'>Summary</h4>
                        <div className='w-full h-[300px] mb-[200px] rounded-lg border-2'>
                            <p className='p-4 text-lg'>{summary}</p>
                        </div>
                    </div>
                </div>
            }
        </section>
    )
}

export default MindMap
