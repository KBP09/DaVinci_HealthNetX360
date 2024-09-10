import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, Info, Video } from "lucide-react";
import Logo from "../assets/LandingPage/LTC Logo.svg";
import PP from "../assets/sharedAssets/demo_pfp.png";

const StatisticsCard = ({ percentage, label }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='bg-palette-paleSky rounded-2xl p-5 w-48 transition-all duration-500 ease-out transform hover:scale-105 cursor-pointer'>
      <div className='flex justify-between items-center mb-2'>
        <span className='text-gray-600 text-sm border border-gray-600 rounded-full px-1'>
          statistics
        </span>
        <Info size={20} color='gray' />
      </div>

      <div className='w-full bg-palette-oceanBlue rounded-full h-2 mb-3 '>
        <div
          className='bg-palette-deepNavy h-2 rounded-full transition-all duration-1000 ease-in-out'
          style={{ width: animate ? `${percentage}%` : "0%" }}
        ></div>
      </div>
      <div className='text-4xl font-bold mb-2'>{animate ? percentage : 0}%</div>
      <div className='text-sm text-gray-600'>{label}</div>
      <div className='mt-2 flex justify-end'>
        <ArrowUpRight className='text-gray-600' size={20} />
      </div>
    </div>
  );
};

const MentalHealthCard = () => (
  <div
    className='bg-gray-200 rounded-2xl w-48 overflow-hidden transition-all duration-500 ease-out transform hover:scale-105 cursor-pointer'
    style={{
      backgroundImage:
        "url('https://i.pinimg.com/736x/d1/c2/2d/d1c22d63e316ce3b5f01ac0e546d96f4--san-juan-islands-peace-of-mind.jpg')",
      backgroundPosition: "center",
      backgroundSize: "cover",
    }}
  >
    <div className='p-5'>
      <div className='flex justify-between items-center mb-2'>
        <span className='text-gray-600 text-sm border border-gray-600 rounded-full px-1'>
          well-being
        </span>
        <Info size={20} color='gray' />
      </div>
      <div className='flex mt-20'>
        <div className='flex text-lg font-semibold mb-2'>
          Mental Health Support
        </div>
        <div className='flex items-end justify-end'>
          <ArrowUpRight className='text-gray-600' size={20} />
        </div>
      </div>
    </div>
  </div>
);

const TelehealthCards = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className='container mt-10'>
      <div className='flex'>
        {/* Card 1 */}
        <motion.div
          className='w-full md:w-80 bg-white rounded-3xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 mx-5'
          variants={cardVariants}
          initial='hidden'
          animate='visible'
        >
          <div className='container relative'>
            <img
              src='https://plus.unsplash.com/premium_photo-1661761222780-7981c33bfef3?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              alt='Virtual Consultation'
              className='w-full h-96 object-cover'
            />

            <motion.span
              className='absolute top-4 left-4 bg-opacity-80 text-palette-skyBlue px-4 py-2 rounded-full text-sm font-semibold'
              initial={{ opacity: 0, x: -100, y: 275 }}
              animate={{ opacity: 1, x: -25, y: 275 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className='cursor-pointer'>
                {["24/7 availablity", "Secure", "User-Friendly"].map((tag, index) => (
                  <motion.span
                    key={index}
                    className='bg-orange-500 text-white px-3 m-1 py-1 rounded-full text-sm font-medium inline-block'
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.span>
            <Video color="white" size={40} className="bg-white bg-opacity-80 p-2 rounded-full absolute top-5 left-3 animate-bounce" />
            <motion.span
              className='absolute top-4 left-4 bg-white bg-opacity-80 text-black text-opacity-60 px-4 py-2 rounded-full text-sm font-semibold shadow-md'
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 50 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Virtual Consultations
            </motion.span>

          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          className='w-full md:w-80 bg-white rounded-3xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 mx-5'
          variants={cardVariants}
          initial='hidden'
          animate='visible'
          transition={{ delay: 0.2 }}
        >
          <div className='relative'>
            <img
              src='https://avatars.mds.yandex.net/i?id=ec7c8f0e25164a8bf7b7067a4b1fa22632c6cebd-10414208-images-thumbs&n=13'
              alt='Telemedicine'
              className='w-full h-96 object-cover'
            />
            <motion.span
              className='absolute top-4 left-4 bg-white bg-opacity-80 text-black text-opacity-60 px-4 py-2 rounded-full text-sm font-semibold shadow-md'
              initial={{ opacity: 0, x: -20, y: 320 }}
              animate={{ opacity: 1, x: 100, y: 320 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              Telemedicine
            </motion.span>
            <Info color='white' size={20} className='absolute bottom-5 right-14' />
          </div>
        </motion.div>
        {/* Card 3 */}
        <motion.div
          className='relative w-64 h-96 p-5 bg-white rounded-3xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 mx-5'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className='flex justify-between items-start mb-6'>
            <div>
              <h1 className='text-3xl font-bold mb-1'>HealthX360</h1>
              <motion.button
                className='bg-orange-500 text-white px-6 py-2 rounded-full mt-4 flex items-center'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore <span className='ml-1'>&gt;</span>
              </motion.button>
            </div>
            <motion.div
              className='w-8 h-8 border-2 border-gray-300 rounded-full cursor-pointer flex items-center justify-center'
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.3 }}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-4 w-4'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15'
                />
              </svg>
            </motion.div>
          </div>

          <div className='mb-6'>
            <motion.button
              className='bg-gray-200 text-gray-700 px-4 py-1 rounded-full text-sm'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to='/about'
                className='transition-all duration-300 ease-in-out text-gray-700'
              >
                about
              </Link>
            </motion.button>
          </div>

          <p className='text-gray-600 mb-2'>
            Our platform connects you with trusted healthcare...
          </p>

          <div className='absolute bottom-5 right-5 mt-8 flex space-x-2'>
            {["in", "f", "X"].map((icon, index) => (
              <motion.div
                key={icon}
                className='w-8 h-8 bg-palette-oceanBlue rounded-full flex items-center justify-center text-white text-sm cursor-pointer'
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {icon}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const LandingPage = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`transition-opacity duration-2000 ${showContent ? "opacity-100" : "opacity-0"
        }`}
    >
      <header className=' flex justify-between items-center mx-5 flex-wrap'>
        <img src={Logo} width={150} className='cursor-pointer animate-pulse' />

        <nav className='flex space-x-4 items-center flex-wrap'>
          <Link
            to='/menu'
            className='transition-all duration-300 ease-in border border-gray-300 rounded-full px-4 hover:text-palette-oceanBlue hover:bg-gray-100'
          >
            menu
          </Link>
          <Link
            to='/appointment'
            className='transition-all duration-300 ease-out text-gray-700 hover:text-palette-oceanBlue'
          >
            appointment
          </Link>
        </nav>
        <nav className='transition-all duration-300 ease-in-out flex space-x-4 items-center flex-wrap'>
          <Link
            to='/about'
            className='transition-all duration-300 ease-in-out text-gray-700 hover:text-palette-oceanBlue'
          >
            about
          </Link>
          <Link
            to='/mindmap'
            className='transition-all duration-300 ease-in-out text-gray-700 hover:text-palette-oceanBlue'
          >
            mindmap
          </Link>
          <Link
            to='/contact'
            className='transition-all duration-300 ease-in-out flex items-center border border-gray-300 rounded-full px-4 hover:text-palette-oceanBlue hover:bg-gray-100'
          >
            contact
            <span className='w-2 h-2 ml-2 bg-orange-500 rounded-full animate-ping'></span>
          </Link>
        </nav>
      </header>
      <main className='my-10 mx-40'>
        <div className='flex justify-between'>
          <div className='flex flex-col font-medium text-xs text-end'>
            <div className='w-16 h-16 border border-gray-300 rounded-full p-1 transition-transform duration-300 hover:scale-110'>
              <img src={PP} alt='Doc' className='w-full h-full object-cover' />
            </div>
            Choose your<br /> own doctor
          </div>
          <div className='text-4xl tracking-widest'>
            <h1 className='my-1'>
              Take
              <span className='bg-palette-oceanBlue px-2 py-1 rounded-xl inline-block transition-transform duration-300 hover:scale-105 hover:bg-palette-deepNavy text-white'>
                control
              </span>
            </h1>
            <h1 className='pl-10'>
              of your
              <span className='bg-palette-oceanBlue p-1 rounded-xl inline-block transition-transform duration-300 hover:scale-105 hover:bg-palette-deepNavy text-white'>
                health.
              </span>
            </h1>
          </div>

          <div>
            <motion.div
              className='flex items-start text-right cursor-pointer'
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <p className='text-sm text-gray-500 leading-tight pr-1'>
                read <br /> more
              </p>
              <motion.div
                className='mx-2 bg-orange-500 rounded-full'
                whileHover={{ rotate: 45 }}
                transition={{ duration: 0.3 }}
              >
                <ArrowUpRight size={40} color='white' className='p-1' />
              </motion.div>
            </motion.div>
            <div>
              <h3 className='mt-5 text-end text-sm font-light '>
                Your gateway to <br /> health & care
              </h3>
              <h3 className='mt-2 text-sm text-gray-500 opacity-30 underline cursor-pointer'>
                Welcome
              </h3>
            </div>
          </div>
        </div>
        <section className="flex space-x-4 justify-center m-5">
          <motion.button
            className="bg-palette-oceanBlue text-white px-6 py-2 rounded-full hover:bg-palette-deepNavy transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to='/login'> Get started </Link>
          </motion.button>
          <motion.button
            className="border border-gray-300 text-gray-700 px-6 py-2 rounded-full hover:bg-gray-100 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn more
          </motion.button>
        </section>
        <section className='flex '>
          <div className='flex flex-col space-y-4 p-4'>
            <StatisticsCard percentage={85} label='Successful diagnosis' />
            <MentalHealthCard />
          </div>
          <TelehealthCards />
        </section>

      </main>
    </div>
  );
};

export default LandingPage;
