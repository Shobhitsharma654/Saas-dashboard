import React, { useEffect, useRef, useState } from "react";

const StatCard = ({ title, targetNumber, icon, trend, trendIcon, bgColor, iconBgColor }) => {
  const [count, setCount] = useState(0);
  const [hover, setHover] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (!hover) return;

    let current = 0;
    const duration = 2000; // 2s animation
    const steps = 30; // smooth updates
    const increment = Math.ceil(targetNumber / steps);
    const stepTime = duration / steps;

    intervalRef.current = setInterval(() => {
      current += increment;
      if (current >= targetNumber) {
        clearInterval(intervalRef.current);
        setCount(targetNumber);
      } else {
        setCount(current);
      }
    }, stepTime);

    return () => clearInterval(intervalRef.current);
  }, [hover, targetNumber]);

  return (
    <div className={`${bgColor} p-4 rounded-lg shadow hover:shadow-lg transition-all duration-300 flex items-center gap-8`}>
      <div className={`${iconBgColor} rounded-md p-2`}>
        {icon}
      </div>
      <div>
        <h2 className="text-gray-700 mt-2 text-[16px] font-semibold">{title}</h2>
        <p
          className="text-2xl font-semibold mt-2 cursor-pointer"
          onMouseEnter={() => {
            setCount(0);
            setHover(true);
          }}
          onMouseLeave={() => {
            clearInterval(intervalRef.current);
            setHover(false);
          }}
        >
          {count.toLocaleString()}
        </p>
      </div>
      <div className="flex items-center gap-1 text-gray-500 text-sm font-medium">
        {trendIcon}
        {trend}
      </div>
    </div>
  );
};

export default StatCard;
