import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';


function App() {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate()
  const handleClick = (path) => {
    navigate(path);
    setShowMenu(false);
  }
  return (
    <div className='flex flex-col w-screen h-screen'>
       <div className='relative
                       h-auto w-screen
                       flex flex-row md:flex-col justify-between items-center
                       px-8 py-6'>
        <div>
          <img 
            src="/assets/empirelogo.svg" 
            alt="Empire Health Logo"
            className='w-48' />
        </div>
        
        <div className=' hidden md:block'>
          <ul className='list-none flex flex-row
                         font-Poppins text-sm font-bold
                         pt-8'>
            <li className='flex justify-center items-center hover:text-empireyellow px-2 hover:cursor-pointer' onClick={() => navigate('/')}>
                HOME
            </li>
            <li className='flex justify-center items-center hover:text-empireyellow px-2 hover:cursor-pointer' onClick={() => navigate('/About-Us')}>
                ABOUT US
            </li>
            <li className='flex justify-center items-center hover:text-empireyellow px-2 hover:cursor-pointer' onClick={() => navigate('/Services')}>
                SERVICES
            </li>
            <li className='flex justify-center items-center hover:text-empireyellow px-2 hover:cursor-pointer' onClick={() => navigate('/Intake')}>
                INTAKE FORM
            </li>
          </ul>
        </div>
        <div className='md:hidden'>
        <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={1.5} 
                stroke="currentColor" 
                className="w-8 h-8"
                onClick={() => setShowMenu(!showMenu)}
            >
            <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
        </div>
       </div>
       {showMenu && (
        <div className="absolute top-0 right-0 w-screen y-screen z-50 md:hidden">
          <div className='bg-stone-800 bg-opacity-80 z-40 w-screen h-screen fixed'>
          <div className='fixed flex flex-col bg-white bg-opacity-100 w-10/12 h-screen px-4 py-2 z-auto animate-slide'>
          <ul className='list-none flex flex-col
                         font-Poppins text-2xl font-bold
                         pt-12 gap-4'>
            <li className='flex justify-start items-center hover:text-empireyellow px-2' onClick={() => handleClick('/')}>
                HOME
            </li>
            <li className='flex justify-start items-center hover:text-empireyellow px-2' onClick={() => handleClick('/About-Us')}>
                ABOUT US
            </li>
            <li className='flex justify-start items-center hover:text-empireyellow px-2' onClick={() => handleClick('/Services')}>
                SERVICES
            </li>
            <li className='flex justify-start items-center hover:text-empireyellow px-2' onClick={() => handleClick('/Intake')}>
                INTAKE FORM
            </li>
          </ul>
            <div className='absolute top-10 right-10 z-auto'>
            <svg 
              fill="none" 
              stroke="currentColor" 
              stroke-width="1.5" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg" 
              aria-hidden="true"
              className="w-8 h-8"
              onClick={() => setShowMenu(!showMenu)}>
              <path 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                d="M6 18L18 6M6 6l12 12">
              </path>
            </svg>
            </div>
          </div>
          </div>
        </div>
       )}
       <div>
        <Outlet />
       </div>
       <div className="w-full h-auto bg-gray-700 flex flex-row p-8">
            <div className="text-white font-Poppins flex flex-col flex-grow justify-center items-center">
            <h1 className=" font-bold text-lg">Phone Number</h1>
            <a href="tel:+12134402707">
            <h2 className="font-thin text-md hover:cursor-pointer">+1 (213) 440-2707</h2>
            </a>
            </div>
            <div className="text-white font-Poppins flex flex-col flex-grow justify-center items-center">
            <h1 className=" font-bold text-lg">E-mail Address</h1>
            <a href="mailto:info@empirehsi.com">
            <h2 className="font-thin text-mb hover:cursor-pointer">info@empirehsi.com</h2>
            </a>
            </div>
        </div>
       <div className='w-screen h-auto bg-black flex justify-center items-center text-white text-sm font-Poppins px-10 py-4'>
        <span className='text-center'>Copyright © 2023 Empire Health Systems. All Rights Reserved.</span>
       </div>
    </div>
  )
}

export default App
