// Notification.jsx

import React, { useEffect, useRef } from 'react';
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

const Notification = ({ isOpen, onToggle, onClose }) => {
  const notifRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notifRef.current && !notifRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, onClose]);

  return (
    <div className="relative" ref={notifRef}>
      {/* Notification Bell */}
      <button
        onClick={onToggle}
        className="text-xl p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition relative"
        aria-label="Toggle Notifications"
      >
        <IoNotificationsOutline className="text-2xl text-black dark:text-white" />
        <span className="absolute top-2 right-2 h-2 w-2 bg-red-500 rounded-full" />
      </button>

      {/* Slide-In Notification Panel */}
      {isOpen && (
        <div
          className={`fixed top-0 right-0 h-full w-[300px] bg-white dark:bg-gray-900 shadow-lg border-l border-gray-200 dark:border-gray-700 z-50 transition-transform transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center p-4 border-b border-gray-100 dark:border-gray-700">
            <h3 className="font-roboto font-semibold text-lg">Notifications</h3>
            
          </div>

          <ul className="divide-y divide-gray-100 dark:divide-gray-800 px-4 py-2 overflow-y-auto h-[calc(100%-60px)]">
            {notifications.map((notification) => (
              <li
                key={notification.id}
                className="flex items-start gap-2 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition text-sm text-gray-700 dark:text-gray-200"
              >
                <div className="text-blue-600 text-lg p-2">{notification.icon}</div>
                <div>
                  <p className="font-roboto">{notification.text}</p>
                  <span className="text-xs text-gray-400">{notification.time}</span>
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
