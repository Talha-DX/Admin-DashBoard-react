import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Electronics', value: 38, color: '#3b82f6' },
  { name: 'Fashion', value: 25, color: '#ec4899' },
  { name: 'Home & Kitchen', value: 18, color: '#10b981' },
  { name: 'Books', value: 12, color: '#f59e0b' },
  { name: 'Others', value: 7, color: '#8b5cf6' },
];

const PieChartt = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm">
      <h2 className="text-xl font-semibold mb-6">Revenue by Category</h2>
      <ResponsiveContainer width="100%" height={380}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={90}
            outerRadius={140}
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
          <Legend verticalAlign="bottom" height={36} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChartt;