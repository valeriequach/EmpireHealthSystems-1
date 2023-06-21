import React from 'react'
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div className='flex flex-col w-screen h-screen'>
       <div className='relative
                       h-auto w-screen
                       flex flex-col justify-between items-center
                       px-8 py-6'>
        <div>
          <img 
            src="/assets/empirelogo.svg" 
            alt="Empire Health Logo"
            className='w-48' />
        </div>
        <div>
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
       </div>
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
