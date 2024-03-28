import React, {useState} from 'react';
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook, FaPersonBooth} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import Logo from '../assets/logo.svg';
import {Link} from 'react-scroll';



const NavBar = () => {
    const [nav, setNav] = useState(false);
    // nav- state variable, setNav- function Variable, nav value set to false, useState declares state of state variable.
    const handleClick = ()=> setNav(!nav);
    // setNav changes/ opposites nav value. The value is then given to handleClick which will act as event handler.

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#F5F1F0] text-black'>
     <div >
        <img src={Logo} alt="Logo" style={{width: '70px'}}/>
     </div>

     {/* Navbar */}
     <div>
        <ul className='hidden md:flex'> 
        {/* 'md:flex': This class suggests that the element should be displayed as a flex container when the screen size is at least medium (md)  */}
        {/* the code snippet indicates that the unordered list should be hidden by default and displayed as a flex container when the screen size is at least medium. */}
           <div className='transition-all duration-300 rounded-md p-2 hover:bg-black hover:text-[#B7B4A1]'> <li ><Link to='home' smooth={true} duration={300} style={{ cursor: 'pointer' }} >Home</Link></li></div>
           <div className='transition-all duration-300 rounded-md p-2 hover:bg-black hover:text-[#B7B4A1]'><li><Link to='about' smooth={true} duration={300} style={{ cursor: 'pointer' }}>About Me</Link></li></div>
           <div className='transition-all duration-300 rounded-md p-2 hover:bg-black hover:text-[#B7B4A1]'><li><Link to='skills' smooth={true} duration={300} style={{ cursor: 'pointer' }}>Tech</Link></li></div>
           <div className='transition-all duration-300 rounded-md p-2 hover:bg-black hover:text-[#B7B4A1]'><li><Link to='projects' smooth={true} duration={300} style={{ cursor: 'pointer' }}>Projects</Link></li></div>
           <div className='transition-all duration-300 rounded-md p-2 hover:bg-black hover:text-[#B7B4A1]'><li><Link to='contact' smooth={true} duration={300} style={{ cursor: 'pointer' }}>Let's Talk!</Link></li></div>
        </ul>
     </div>

     {/*Hamburger */}
     <div onClick={handleClick} className='md:hidden z-10'>
        {/* When screen size is at least medium then hamburger will get hidden */}
        {/* This code is likely indicating that the Hamburger element (often used for mobile navigation) should have a higher z-index, making it visually appear on top of other elements when the screen size is smaller than medium (md:hidden). This helps ensure that the mobile menu (Hamburger) is positioned above other content on the page. */}
        {!nav ? <FaBars/>: <FaTimes/>}
        {/* FaTimes refers to cross ig */}
     </div>

     {/*Mobile Menu */}
     <div className={!nav ? 'hidden': 'absolute top-0 left-0 w-full h-screen bg-[#F5F1F0] flex flex-col justify-center items-center'}> 
     {/* read as: if nav is true then hidden else 'absolute...' */}
     {/* nav is set to false, false opposite true, so if true means navbar is there, so vertical version will be hidden, else (:)  navbar will be shown i full screen */}
     {/* ! ? : is called terianry operator  */}
     {/* hidden means by default its hidden */}
     
        <ul>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to='home' smooth={true} duration={500} style={{ cursor: 'pointer' }}>Home</Link></li>
            {/* py= padding added along y axis, 4xl is text size */}
            <li className='py-6 text-4xl'><Link onClick={handleClick} to='about' smooth={true} duration={500} style={{ cursor: 'pointer' }}>About Me</Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to='skills' smooth={true} duration={500} style={{ cursor: 'pointer' }}>Tech</Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to='projects' smooth={true} duration={500} style={{ cursor: 'pointer' }}>Projects</Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to='contact' smooth={true} duration={500} style={{ cursor: 'pointer' }}>Let's Talk!</Link></li>
        </ul>
     </div>

     {/*Social icons: LinkedIn, Github*/}
     <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
     <ul>
      <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-110px] hover:ml-[-10px] duration-300 bg-black'>
         {/* ml-[-100px] moves linkedin name to so left that only name is invisble, hover:ml-[-10px] means it will show linkedIn name and icon when arrow is brought to it */}
          {/* -110px means that much px wont be shown 50 px remaining from 160px will be shown, -10pz means 10% will still no be out..90% will be */}
         <a className='w-full h-[60px] flex justify-between items-center text-[#B7B4A1]'
         href=''>
          LinkedIn <FaLinkedin size={25}/>
         </a>
      </li>

      <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-110px] hover:ml-[-10px] duration-300 bg-black'>
         {/* ml-[-100px] moves linkedin name to so left that only name is invisble, hover:ml-[-10px] means it will show linkedIn name and icon when arrow is brought to it */}
          {/* -110px means that much px wont be shown 50 px remaining from 160px will be shown, -10pz means 10% will still no be out..90% will be */}
         <a className='w-full h-[60px] flex justify-between items-center text-[#B7B4A1]'
         href=''>
          Github <FaGithub size={25}/>
         </a>
      </li>

      <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-110px] hover:ml-[-10px] duration-300 bg-black'>
         {/* ml-[-100px] moves linkedin name to so left that only name is invisble, hover:ml-[-10px] means it will show linkedIn name and icon when arrow is brought to it */}
          {/* -110px means that much px wont be shown 50 px remaining from 160px will be shown, -10pz means 10% will still no be out..90% will be */}
         <a className='w-full h-[60px] flex justify-between items-center text-[#B7B4A1]'
         href=''>
          Email <HiOutlineMail size={25}/>
         </a>
      </li>

      <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-110px] hover:ml-[-10px] duration-300 bg-black'>
         {/* ml-[-100px] moves linkedin name to so left that only name is invisble, hover:ml-[-10px] means it will show linkedIn name and icon when arrow is brought to it */}
          {/* -110px means that much px wont be shown 50 px remaining from 160px will be shown, -10pz means 10% will still no be out..90% will be */}
         <a className='w-full h-[60px] flex justify-between items-center text-[#B7B4A1]'
         href=''>
          Resume <BsFillPersonLinesFill size={25}/>
         </a>
      </li>

     </ul>
     </div>
    </div>
  )
}

export default NavBar