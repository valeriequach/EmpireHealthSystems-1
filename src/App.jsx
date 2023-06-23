import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import { useState } from "react";

function App() {
  const [showMenu, setShowMenu] = useState(false);
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
            <Link to={"/"}>
            <li className='flex justify-center items-center hover:text-empireyellow px-2'> 
              HOME
            </li>
            </Link>
            <Link to={"/About-Us"}>
            <li className='flex justify-center items-center hover:text-empireyellow px-2'>
              ABOUT US
            </li>
            </Link>
            <Link to={"/Services"}>
            <li className='flex justify-center items-center hover:text-empireyellow px-2'>
              SERVICES
            </li>
            </Link>
            <a href="https://empirehsi.com/intake/">
            <li className='flex justify-center items-center hover:text-empireyellow px-2'>
              INTAKE FORM
            </li>
            </a>
            <a href="https://empirehsi.com/volunteer/">
            <li className='flex justify-center items-center hover:text-empireyellow px-2'>
              VOLUNTEER WITH US
            </li>
            </a>
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
          <div className='fixed flex flex-col bg-white bg-opacity-100 w-10/12 h-screen px-4 py-2 z-auto'>
          <ul className='list-none flex flex-col
                         font-Poppins text-2xl font-bold
                         pt-12 gap-4'>
            <Link to={"/"}>
            <li className='flex justify-start items-center hover:text-empireyellow px-2'> 
              HOME
            </li>
            </Link>
            <Link to={"/About-Us"}>
            <li className='flex justify-start items-center hover:text-empireyellow px-2'>
              ABOUT US
            </li>
            </Link>
            <Link to={"/Services"}>
            <li className='flex justify-start items-center hover:text-empireyellow px-2'>
              SERVICES
            </li>
            </Link>
            <a href="https://empirehsi.com/intake/">
            <li className='flex justify-start items-center hover:text-empireyellow px-2'>
              INTAKE FORM
            </li>
            </a>
            <a href="https://empirehsi.com/volunteer/">
            <li className='flex justify-start items-center hover:text-empireyellow px-2'>
              VOLUNTEER WITH US
            </li>
            </a>
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
       <div className='w-screen h-auto bg-black flex justify-center items-center text-white text-sm font-Poppins px-10 py-4'>
        <span className=' text-center'>Copyright © 2023 Empire Health Systems. All Rights Reserved.</span>
       </div>
    </div>
  )
}

export default App
