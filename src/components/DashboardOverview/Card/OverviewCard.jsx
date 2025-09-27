import React from 'react'
import { BsFolder, BsShieldCheck } from "react-icons/bs";
import { PiClockCounterClockwise } from "react-icons/pi";
import { TbUsers } from "react-icons/tb";
import StatCard from './StatCard';
import { FaArrowTrendUp, FaArrowTrendDown } from "react-icons/fa6";

const OverviewCard = () => {
  return (
       <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-4 mb-2 mt-4">
  <StatCard
    title="Total Projects"
    targetNumber={7346}
    icon={<BsFolder className="text-2xl text-violet-800" />}
    trend="+12%"
    trendIcon={<FaArrowTrendUp className="text-base text-gray-500" />}
    bgColor="bg-violet-100"
    iconBgColor="bg-violet-300 border border-violet-600"
  />

  <StatCard
    title="Active Projects"
    targetNumber={3649}
    icon={<PiClockCounterClockwise className="text-2xl text-blue-800" />}
    trend="-0.07%"
    trendIcon={<FaArrowTrendDown className="text-base text-gray-500" />}
    bgColor="bg-blue-100"
    iconBgColor="bg-blue-200 border border-blue-600"
  />

  <StatCard
    title="Vulnerabilities"
    targetNumber={156}
    icon={<BsShieldCheck className="text-2xl text-violet-800" />}
    trend="+15.03%"
    trendIcon={<FaArrowTrendUp className="text-base text-gray-500" />}
    bgColor="bg-violet-100"
    iconBgColor="bg-violet-300 border border-violet-600"
  />

  <StatCard
    title="Clients"
    targetNumber={2316}
    icon={<TbUsers className="text-2xl text-blue-800" />}
    trend="+6.9%"
    trendIcon={<FaArrowTrendUp className="text-base text-gray-500" />}
    bgColor="bg-blue-100"
    iconBgColor="bg-blue-300 border border-blue-600"
  />
</div>
  )
}

export default OverviewCard