import React from 'react'


const Projects = () => {
  return (
    <div name='projects' className='w-full md:h-screem bg-[#F5F1F0] '>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold'>Projects</p>
                <p className='py-6'>This are some of my work</p>
            </div>
            
            {/* Container */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                {/* Grid Item */}
                <div style={{backgroundImage: 'url(${})'}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effect */}
                    <div className='opacity-0 group-hover:opacity:100'>
                        <span classname='text-2xl font-bold text-white tracking-wider'>
                        React JS Application
                        </span>

                        <div className='pt-8 text-center'>
                            <a href="">
                                  <button classname='text-center rounded-lg px-4 py-3 m-3 bg-black text-[#B7B4A1]'>Demo</button>
                            </a>
                            <a href="">
                                <button classname='text-center rounded-lg px-4 py-3 m-3 bg-black text-[#B7B4A1]'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage: 'url(${})'}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effect */}
                    <div className='opacity-0 group-hover:opacity:100'>
                        <span classname='text-2xl font-bold text-white tracking-wider'>
                        React JS Application
                        </span>

                        <div className='pt-8 text-center'>
                            <a href="">
                                  <button classname='text-center rounded-lg px-4 py-3 m-3 bg-black text-[#B7B4A1]'>View</button>
                            </a>
                            <a href="">
                                <button classname='text-center rounded-lg px-4 py-3 m-3 bg-black text-[#B7B4A1]'>Code</button>
                            </a>
                        </div>
                    </div>


                </div>

                <div style={{backgroundImage: 'url(${})'}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effect */}
                    <div className='opacity-0 group-hover:opacity:100'>
                        <span classname='text-2xl font-bold text-white tracking-wider'>
                        React JS Application
                        </span>

                        <div className='pt-8 text-center'>
                            <a href="">
                                  <button classname='text-center rounded-lg px-4 py-3 m-3 bg-black text-[#B7B4A1]'>View</button>
                            </a>
                            <a href="">
                                <button classname='text-center rounded-lg px-4 py-3 m-3 bg-black text-[#B7B4A1]'>Code</button>
                            </a>
                        </div>
                    </div>


                </div>
            </div>




        </div>
    </div>
  )
}

export default Projects