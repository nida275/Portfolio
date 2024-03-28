import React from 'react'

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import Bootstrap from '../assets/bootstrap.png'
import JavaScript from '../assets/javascript.png';
import Jquery from '../assets/jquery.png';
import ReactImg from '../assets/react.png';
import Tailwind from '../assets/tailwind.png';
import Figma from '../assets/figma.png'


const Skills = () => {
  return (
    <div name='skills' w-full h-screen className='bg-[#F5F1F0]'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold py-4'>My digital Tool Box</p>
                <p className='py-4'>This is the tech stack I use to develop any projects. As a developer, I believe that no technologies are enough and hence I am eager to learn more to expand my domain.</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                    <p className='my-4'>HTML</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={CSS} alt="CSS icon" />
                    <p className='my-4'>CSS</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Bootstrap} alt="Bootstrap icon" />
                    <p className='my-4'>Bootsrap</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={JavaScript} alt="Javascript icon" />
                    <p className='my-4'>Javascript</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Jquery} alt="Jquery icon" />
                    <p className='my-4'>Jquery </p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={ReactImg} alt="React icon" />
                    <p className='my-4'>React</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Tailwind} alt="Tailwind icon" />
                    <p className='my-4'>Tailwind</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Figma} alt="Figma icon" />
                    <p className='my-4'>Figma</p>
                </div>

            </div>

        </div>
    </div>
  )
}

export default Skills