import React, { useState, useEffect } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Cell,
  LabelList,
} from 'recharts';

const dataByYear = {
  2025: [
    { month: 'Jan', value: 18 },
    { month: 'Feb', value: 30 },
    { month: 'Mar', value: 22 },
    { month: 'Apr', value: 32 },
    { month: 'May', value: 12 },
    { month: 'Jun', value: 28 },
    { month: 'Jul', value: 18 },
    { month: 'Aug', value: 30 },
    { month: 'Sep', value: 22 },
    { month: 'Oct', value: 34 },
    { month: 'Nov', value: 13 },
    { month: 'Dec', value: 26 },
  ],
};

const getColorForValue = (value) => {
  if (value >= 30) return '#2e44ff';
  if (value >= 25) return '#506bff';
  if (value >= 15) return '#819bff';
  return '#b6c5ff';
};

const ProjectsActivity = () => {
  const [year, setYear] = useState('2025');
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [barSize, setBarSize] = useState(30);

  useEffect(() => {
    function handleResize() {
      setBarSize(window.innerWidth < 640 ? 15 : 30);
    }
    window.addEventListener('resize', handleResize);
    handleResize(); // initial call
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const data = dataByYear[year];

  const renderCustomLabel = ({ x, y, value, index }) => {
    if (hoveredIndex === index) {
      return (
        <text
          x={x + barSize / 2}
          y={y - 10}
          fill="#000"
          fontSize={12}
          fontWeight="bold"
          textAnchor="middle"
        >
          {value}
        </text>
      );
    }
    return null;
  };

  return (
    <div className="w-full max-w-7xl p-4 sm:p-6 mx-auto bg-[#f9fafc] dark:bg-gray-900 rounded-xl transition">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white">Projects Activity</h3>
        <select
          className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 dark:text-white rounded-md px-3 py-1 text-xs sm:text-sm cursor-pointer focus:outline-none w-20 sm:w-auto"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        >
          {Object.keys(dataByYear).map((yr) => (
            <option key={yr} value={yr}>
              {yr}
            </option>
          ))}
        </select>
      </div>

      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data} margin={{ top: 10, right: 30, left: 20, bottom: 5 }}>
          <XAxis
            dataKey="month"
            tick={{ fontSize: 12, fill: '#999' }}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            tick={{ fontSize: 12, fill: '#999' }}
            tickLine={false}
            axisLine={false}
          />
          <Bar dataKey="value" barSize={barSize} radius={[10, 10, 7, 7]}>
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={hoveredIndex === index ? '#000000' : getColorForValue(entry.value)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{ transition: 'fill 0.3s ease' }}
              />
            ))}
            <LabelList dataKey="value" content={renderCustomLabel} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ProjectsActivity;
