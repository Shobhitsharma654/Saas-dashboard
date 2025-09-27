import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";

const activities = [
  {
    id: 1,
    name: "Natali Craig",
    avatar: "https://i.pravatar.cc/40?img=5",
    message: "You have a bug that needs to be fixed",
    time: "Just now",
  },
  {
    id: 2,
    name: "Andi Lane",
    avatar: "https://i.pravatar.cc/40?img=12",
    message: "Released a new version",
    time: "59 minutes ago",
  },
  {
    id: 3,
    name: "Drew Cano",
    avatar: "https://i.pravatar.cc/40?img=20",
    message: "Modified A data in Page X",
    time: "Today, 11:59 AM",
  },
  {
    id: 4,
    name: "Rita Owens",
    avatar: "https://i.pravatar.cc/40?img=7",
    message: "Added 3 new users to project",
    time: "Today, 10:20 AM",
  },
  {
    id: 5,
    name: "Leo Chen",
    avatar: "https://i.pravatar.cc/40?img=13",
    message: "Updated the dashboard layout",
    time: "Yesterday, 4:30 PM",
  },
  {
    id: 5,
    name: "alex Chen",
    avatar: "https://i.pravatar.cc/40?img=13",
    message: "Updated the ddata",
    time: "Yesterday, 6:30 PM",
  },
];

const MemberActivities = () => {
  const duplicatedActivities = [...activities, ...activities]; // loop effect

  return (
    <div className="ml-1 mt-2">
      <div className="bg-gray-50 p-6 rounded shadow-md mt-5 relative max-w-full pr-4">
        <h2 className="text-[16px] font-semibold font-roboto text-gray-800 mb-5">
          Members Activities
        </h2>

        {/* Horizontal Scroll Area */}
   <div className="relative w-full max-w-[90vw] sm:max-w-[30vw] md:max-w-[70vw] lg:max-w-[65vw] overflow-hidden mr-2">
  <div className="flex w-max animate-scroll gap-6 pr-[270px]">
    {duplicatedActivities.map((activity, index) => (
      <div
        key={`${activity.id}-${index}`}
        className="min-w-[250px] flex-shrink-0 bg-indigo-50 p-4 rounded-lg shadow-sm hover:shadow transition duration-200 cursor-pointer"
        title={`${activity.name} - ${activity.message}`}
      >
        <div className="flex items-start p-2">
          <img
            src={activity.avatar}
            alt={activity.name}
            className="w-8 h-8 rounded-full object-cover mr-3"
            draggable={false}
          />
          <div className="flex-1">
            <p className="text-sm font-bold text-gray-800">{activity.name}</p>
            <p className="text-sm text-gray-900">{activity.message}</p>
            <p className="text-[13px] text-gray-400 mt-1">{activity.time}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>


        {/* View Details Button */}
        <div className="absolute top-1/2 -translate-y-1/2 right-3 min-w-[200px]  p-2 rounded-full flex items-center justify-center bg-gray-100 text-gray-600 font-medium cursor-pointer hover:bg-gray-200 transition shadow mt-3">
          <span className="flex items-center">
            View Full Details
            <RiArrowRightSLine className="ml-1" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default MemberActivities;
