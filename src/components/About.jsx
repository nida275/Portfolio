// import React from 'react'
// import About_img from '../assets/About_img.webp';
 
// const About = () => {

//   return (
//     <div name='about' className='w-full h-screen bg-[#F5F1F0]'> {/* Written so that about is of 1 full screen length */}
//         <div className='flex flex-col justify-center item- w-full h-full'>
//             <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
//                 <div className='sm:text-right pb-8 pl-4'> {/* padding-bottom-8 padding-left-4 */}
//                      <p className='text-4xl font-bold inline '>Get to Know Me</p>
//                 </div>
//                 <div></div> {/* we left cz we didnt want anything on right side of get to know me  */}
//            </div>
//                 <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
//                     <div className='sm:text-right text-2xl'>
//                         <p>Focused in the domain of front-end development and web design. I am a pre-final year engineering student, currently navigating the academic realm, 
//                            set to graduate in the year 2025, I am majoring in the field of Computer Science with the focus in Cyber Security. Away from the keyboard, I find joy in reading fiction,
//                            making a cup of tea for myself and adore cats. Maybe I will adopt them someday!</p>
//                     </div>
//                 <div className="mt-10 flex flex-col items-start gap-8 md:flex-row lg:gap-10 ">
//                     <div className="top-28 overflow-hidden rounded-md md:sticky md:w-1/2">
//                          <img src={About_img} alt='My image'/>
//                     </div>
                    
//                 </div>
//             </div> 
//         </div>
//     </div>
//   )
// }

// export default About

import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#F5F1F0] '>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline text-[#B7B4A1] border-b-4 border-[#B7B4A1]'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Get to Know me!</p>
            </div>
            <div>
              <p>Focused in the domain of front-end development and web design,

I am a pre-final year engineering student, 
currently navigating the academic realm and
set to graduate in the year 2025.
I am majoring in the field of Computer Science
with the focus in Cyber Security.


Away from the keyboard, I find joy in reading fiction,
making myself a cup of tea. Also I adore cats and wil maybe adopt them someday!</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;

