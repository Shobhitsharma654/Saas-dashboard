
import React, { useEffect, useRef, useState } from 'react';
import { IoNotificationsOutline } from "react-icons/io5";
import { PiBugBeetle, PiBroadcast } from "react-icons/pi";
import { LuUserRound } from "react-icons/lu";

const notifications = [
  { id: 1, icon: <PiBugBeetle />, text: "You fixed a bug.", time: "Just now" },
  { id: 2, icon: <LuUserRound />, text: "New user registered.", time: "12 minutes ago" },
  { id: 3, icon: <PiBroadcast />, text: "Andi Lane subscribed to you.", time: "Today, 10:45 AM" },
  { id: 4, icon: <LuUserRound />, text: "New user registered.", time: "30 minutes ago" },
  { id: 5, icon: <LuUserRound />, text: "New user registered.", time: "45 minutes ago" },
  { id: 6, icon: <PiBroadcast />, text: "Andi Lane subscribed to you.", time: "Today, 11:45 AM" },
  { id: 7, icon: <PiBugBeetle />, text: "You fixed a bug.", time: "3 hours ago" },
  { id: 8, icon: <LuUserRound />, text: "New user registered.", time: "3 hours ago" },
  { id: 9, icon: <PiBroadcast />, text: "Andi Lane subscribed to you.", time: "Yesterday, 10:45 AM" },
  { id: 10, icon: <PiBugBeetle />, text: "You fixed a bug.", time: "12 hours ago" },
];

const Notification = () => {
  const [showNotification, setShowNotification] = useState(false);
  const notifRef = useRef(null);


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notifRef.current && !notifRef.current.contains(event.target)) {
        setShowNotification(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className='relative ' ref={notifRef}>
     
      <button
        onClick={() => setShowNotification(!showNotification)}
        className='text-xl p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition relative'
        aria-label="Toggle Notifications"
      >
        <IoNotificationsOutline className="text-2xl text-black dark:text-white" />
        <span className="absolute top-2 right-2 h-2 w-2 bg-red-500 rounded-full" />
      </button>

      {showNotification && (
        <div className='absolute right-0 top-0 w-[300px] bg-white dark:bg-gray-900 border  p-4 border-gray-200 dark:border-gray-700 rounded-lg shadow-lg  z-50 transition-colors'>
           <div className="flex justify-between items-center mb-2">
          <h3 className='font-roboto font-semibold text-lg mb-2'>Notifications</h3>
           <button
              onClick={() => setShowNotification(false)}
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition text-xl font-bold"
              aria-label="Close Notifications"
            >
              &times;
            </button>
            </div>
          <ul className='divide-y divide-gray-100 dark:divide-gray-800'>
            {notifications.map((notification) => (
              <li
                key={notification.id}
                className='flex items-start gap-2 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition text-sm text-gray-700 dark:text-gray-200'
              >
                <div className='text-blue-600 text-lg p-2'>{notification.icon}</div>
                <div>
                  <p className='font-roboto'>{notification.text}</p>
                  <span className='text-xs text-gray-400'>{notification.time}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Notification;
