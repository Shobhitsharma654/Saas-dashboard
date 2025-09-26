import React, { useEffect, useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { FiSun } from "react-icons/fi";
import { HiOutlineMoon } from "react-icons/hi";
import DashboardOverview from './DashboardOverview';
import Notification from './Notification';


const Navbar = () => {

const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className='w-full min-h-screen ml-53 bg-white dark:bg-black transition-colors duration-300 text-black dark:text-white'>
      {/* Navbar */}
      <div className='px-6 py-4 flex justify-between items-start w-full border-b border-gray-200 dark:border-gray-700'>

        {/* Left Side (Greeting) */}
        <div>
          <h1 className='text-[23px] font-roboto font-medium'>Good Morning, Shobhit</h1>
          <p className='text-[15px] font-roboto text-gray-500 dark:text-gray-300 mt-1'>
            Here's an overview of your projects, vulnerabilities & more.
          </p>
        </div>

        {/* Right Side */}
        
        <div className='flex items-center gap-4 relative'>

          {/* Search */}
          <div className='relative'>
            <input
              type="text"
              placeholder='Search...'
              className='border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 rounded-full py-2 pr-4 pl-10 outline-none text-sm w-64 transition'
            />
            <CiSearch className='absolute left-3 top-2.5 text-gray-400 dark:text-gray-300 text-lg' />
          </div>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className='text-xl p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition'
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <HiOutlineMoon className="text-white" /> : <FiSun className="text-black" />}
          </button>

         <Notification/>
        </div>

      </div>
      <hr className="border-t border-gray-200 dark:border-gray-700 mb-1" />

      <DashboardOverview />
    </div>
  );
};

export default Navbar;
