import React from "react";
import { FiDownload } from "react-icons/fi";
import ProjectType from "./ProjectType";
import VulnerabilityChart from "./VulnerabilityChart";
import ProjectsActivity from "./ProjectsActivity";
import MemberActivities from "./MemberActivities";

import Card from "./Card/Card";

const DashboardOverview = ({isNotificationOpen}) => {
  return (
     <div
      className={`
        absolute
        left-[30px]
        top-[0px]
        flex flex-col gap-4
        opacity-100
        transition-all duration-300 ease-in-out

        ${isNotificationOpen ? "w-[950px]" : "w-[1250px]"}
        h-[1004px]
        max-w-full
        md:top-[116px]
      `}
    >
      <div className="bg-white flex justify-between items-start w-full ">
        <h1 className="text-[20px] font-roboto font-semibold">Dashboard Overview</h1>
        <div className="relative gap-3 flex">
          <select className="border border-gray-200 rounded-full px-3 py-2 text-sm ">
            <option value="This Week">This Week</option>
            <option value="This Month">This Month</option>
            <option value="This Year">This Year</option>
          </select>
          <button className="flex items-center gap-2 border border-blue-200 rounded-full px-5 py-2 text-sm text-white bg-blue-600 hover:bg-blue-700 font-semibold">
            <FiDownload className="text-lg" />
            Export Report
          </button>
        </div>
      </div>
     <div className="">
<Card/>
<div className="flex space-between gap-4">
        <ProjectType />
        <VulnerabilityChart />
</div>
     </div>
      <ProjectsActivity />
      <MemberActivities />
    </div>
  );
};

export default DashboardOverview;
