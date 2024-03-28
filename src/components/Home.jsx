// Home page or Hero section
import React from 'react';
import {HiArrowNarrowRight} from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#F5F1F0] text-black '>

    {/* Container */}
    <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
    <p className='text-4xl sm:text-5xl font-bold'>Hi, my name</p>
    <h1 className='text-4xl sm:text-5xl font-bold'>is Nida.</h1>
    <p className='py-4 max-w-[300px]'>I am a pre-final engineering student interested in front-end and ui/ux design</p>
    <div>
        <button className='bg-black text-[#B7B4A1] group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#B7B4A1] hover:text-black' >
          View Work
          <span className='group-hover:rotate-90 duration-300'>
            <HiArrowNarrowRight className='ml-3 '/>
          </span>
        </button>
    </div>
    </div>
    </div>
  );
};

export default Home;