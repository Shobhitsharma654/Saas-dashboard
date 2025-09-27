import React, { useState } from 'react';
import { Bar, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis, BarChart, Cell, LabelList } from 'recharts';

const data = [
  { name: "Web", value: 30, color: '#A0C4FF' },
  { name: "API", value: 20, color: '#FFADAD' },
  { name: "Cloud", value: 15, color: '#FFD6A5' },
  { name: "Network", value: 25, color: '#CAFFBF' },
  { name: "Android", value: 18, color: '#9BF6FF' },
  { name: "Other", value: 16, color: '#BDB2FF' }
];

const months = [
  "Jan" ,"Feb","Mar","Apr", "May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"
];

const ProjectType = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

    const renderCustomLabel = ({ x, y, value, index }) => {
    if (hoveredIndex === index) {
      return (
        <text
          x={x + 15}
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
    <div className="bg-gray-100 shadow rounded-lg p-3 w-[41vw]  h-[41vh] mt-4">
      <div className='flex items-center justify-between mb-4'>
        <h2 className='text-[18px] font-semibold p-2'>Projects by Type</h2>
        <select className='border border-gray-300 rounded-md px-3 py-1 focus:outline-none text-sm'>
          {months.map((month, index) => (
            <option key={index} value={month}>
              {month}
            </option>
          ))}
        </select>
      </div>

      <ResponsiveContainer width="97%" height={240}>
        <BarChart data={data} margin={{ top: 10, right: 30, left: 20, bottom: 5 }}>
         
          <XAxis   
          tick={{ fontSize: 12, fill: '#999' }} 
          tickLine={false}
            axisLine={false} 
            dataKey="name" />
          <YAxis  
          tick={{ fontSize: 12, fill: '#999' }}  tickLine={false}
            axisLine={false}/>
            <Bar 
            dataKey="value"
             barSize={30} 
             radius={[10, 10, 7, 7]}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={hoveredIndex === index ? "#000000" : entry.color } 
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

export default ProjectType;
