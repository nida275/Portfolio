import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#F5F1F0] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/9f5a14d2-8692-4223-9a66-7b883304ad89" className='flex flex-col max-w-[1000px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold'>Contact</p>
                <p>If you loved this website and wanna talk then let's connect!.</p>
                <p>You can fill this form or shoot me an email at nidasheikh275@gmail.com</p>
            </div>

            <input className='p-2 max-w-[600px]' type='text' placeholder='Your Name' name='name'/>
            <input className='p-2 my-4 max-w-[600px]' type='email' placeholder='Your Email' name='email'/>
            <textarea className='p-2 max-w-[600px]' type='text' placeholder='Your Message' name='message' rows='3' />
            <button className='bg-black text-[#B7B4A1] px-4 py-3 flex justify-center items-center mt-4 max-w-[80px] hover:bg-white'>Send</button>
        </form>

    </div>
  )
}

export default Contact