import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { month: 'Jan', users: 2400, orders: 1800 },
  { month: 'Feb', users: 3100, orders: 2100 },
  { month: 'Mar', users: 2800, orders: 2600 },
  { month: 'Apr', users: 3900, orders: 3100 },
  { month: 'May', users: 4200, orders: 3800 },
  { month: 'Jun', users: 5100, orders: 4600 },
];

const LlineChart = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm">
      <h2 className="text-xl font-semibold mb-6">User Growth & Orders Trend</h2>
      <ResponsiveContainer width="100%" height={380}>
        <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line 
            type="monotone" 
            dataKey="users" 
            stroke="#3b82f6" 
            strokeWidth={4} 
            dot={{ r: 6 }}
            name="Active Users"
          />
          <Line 
            type="monotone" 
            dataKey="orders" 
            stroke="#10b981" 
            strokeWidth={4} 
            dot={{ r: 6 }}
            name="Total Orders"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LlineChart;