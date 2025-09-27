import React, { useEffect, useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { FiSun } from "react-icons/fi";
import { HiOutlineMoon } from "react-icons/hi";
import DashboardOverview from './DashboardOverview/DashboardOverview';
import Notification from './Notification';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  // Toggle dark mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
 <div
      className={`
        absolute
        left-[230px]
        flex flex-col 
        opacity-100
        transition-all duration-300 ease-in-out

        ${isNotificationOpen ? "w-[940px]" : "w-[1280px]"}
        h-[1004px]
        max-w-full
        md:top-[0px]
      `}
    >
      {/* Navbar */}
      <div className="px-3 py-4 flex justify-between items-start w-full border-b border-gray-200 dark:border-gray-700">
        {/* Greeting */}
        <div>
          <h1 className="text-[23px] font-roboto font-medium">Good Morning, Shobhit</h1>
          <p className="text-[15px] font-roboto text-gray-500 dark:text-gray-300 mt-1">
            Here's an overview of your projects, vulnerabilities & more.
          </p>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-4 relative">
          {/* Search */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 rounded-full py-2 pr-4 pl-10 outline-none text-sm w-64 transition"
            />
            <CiSearch className="absolute left-3 top-2.5 text-gray-400 dark:text-gray-300 text-lg" />
          </div>

          {/* Dark Mode */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-xl p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <HiOutlineMoon className="text-white" /> : <FiSun className="text-black" />}
          </button>

          {/* Notification */}
          <Notification
            isOpen={isNotificationOpen}
            onToggle={() => setIsNotificationOpen((prev) => !prev)}
            onClose={() => setIsNotificationOpen(false)}
          />
        </div>
      </div>

      <hr className="border-t border-gray-200 dark:border-gray-700 mx-auto" />

      {/* Dashboard */}
      <DashboardOverview isNotificationOpen={isNotificationOpen} />
    </div>
  );
};

export default Navbar;
