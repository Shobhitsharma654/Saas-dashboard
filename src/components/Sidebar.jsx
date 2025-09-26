import React, { useState } from "react";
import { HiOutlineDocumentText, HiOutlineCog,HiOutlineQuestionMarkCircle,
} from "react-icons/hi";
import { IoTelescopeOutline } from "react-icons/io5";
import { PiClockCounterClockwise } from "react-icons/pi";
import { TbUsers, TbUsersGroup, TbLogout } from "react-icons/tb";
import { BsFolder } from "react-icons/bs";
import { RxDashboard } from "react-icons/rx";
import logo from "../assets/radar.png";


const menuItems = [
  { name: "Dashboard", icon: RxDashboard },
  { name: "Projects", icon: BsFolder },
  { name: "Clients", icon:TbUsersGroup },
  { name: "Team Members", icon: TbUsers },
  { name: "Scope", icon: IoTelescopeOutline },
  { name: "Files", icon: HiOutlineDocumentText },
  { name: "Activity", icon: PiClockCounterClockwise },
];

const generalItems = [
  { name: "Settings", icon: HiOutlineCog },
  { name: "Help & Support", icon: HiOutlineQuestionMarkCircle },
];

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("Dashboard");

  return (
    <div className="fixed top-0 left-0 w-[224px] h-screen border-r border-gray-200 bg-white flex flex-col justify-between py-8 px-4 overflow-hidden">
      {/* Logo */}
      <div className="mb-6">
        <div className="flex items-center space-x-3 pl-2">
          <img
            src={logo}
            alt="Radar 36 Logo"
            className="w-[33px] h-[36px] object-contain rounded-md"
          />
          <h2 className="text-[20px] font-semibold font-roboto leading-[22.47px]">
            Radar 36
          </h2>
        </div>
      </div>
      <hr className="border-t border-gray-200 mb-4" />
      {/* Menu */}
      <div className="flex-1">
        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4  pb-2">
          Menu
        </h3>
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeItem === item.name;

            return (
              <li
                key={item.name}
                onClick={() => setActiveItem(item.name)}
                className={`w-[190px] h-[40px] px-[16px] py-[8px] rounded-[4px] flex items-center gap-[10px] cursor-pointer group ${
                  isActive ? "bg-gray-100" : ""
                }`}
              >
                <Icon
                  className={`text-[26px]  transition-colors  duration-150 ${
                    isActive
                      ? "text-black"
                      : "text-gray-400 group-hover:text-black"
                  }`}
                />
                <span
                  className={`text-[17px] transition-colors lineHeight- 22.47px duration-150 ${
                    isActive
                      ? "text-black font-medium"
                      : "text-gray-500 group-hover:text-black"
                  }`}
                >
                  {item.name}
                </span>
              </li>
            );
          })}
        </ul>

        {/* Generals Section */}
        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mt-6 mb-4  pb-2">
          Generals
        </h3>
        <ul className="space-y-2">
          {generalItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeItem === item.name;

            return (
              <li
                key={item.name}
                onClick={() => setActiveItem(item.name)}
                className={`w-[190px] h-[40px] px-[16px] py-[8px] rounded-[4px] flex items-center gap-[12px] cursor-pointer group ${
                  isActive ? "bg-gray-100" : ""
                }`}
              >
                <Icon
                  className={`text-[25px] transition-colors duration-150 ${
                    isActive
                      ? "text-black"
                      : "text-gray-400 group-hover:text-black"
                  }`}
                />
                <span
                  className={`text-[17px] transition-colors duration-150 ${
                    isActive
                      ? "text-black font-medium"
                      : "text-gray-500 group-hover:text-black"
                  }`}
                >
                  {item.name}
                </span>
              </li>
            );
          })}
        </ul>
        <div className="flex items-center py-2 px-3 border-gray-100 mt-4 cursor-pointer  hover:bg-black border  hover:text-white gap-2 rounded-lg">
            <TbLogout className="text-[20px]  items-center" />
            <h3 className="text-[20px] font-roboto">Logout</h3>
      </div>
        </div>

    </div>
  );
};

export default Sidebar;
