import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { name: 'Jan', sales: 4200, revenue: 6800 },
  { name: 'Feb', sales: 3800, revenue: 5900 },
  { name: 'Mar', sales: 5100, revenue: 8200 },
  { name: 'Apr', sales: 4600, revenue: 7100 },
  { name: 'May', sales: 5900, revenue: 9400 },
  { name: 'Jun', sales: 6700, revenue: 10800 },
];

const BarChart8 = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm">
      <h2 className="text-xl font-semibold mb-6">Monthly Sales & Revenue</h2>
      <ResponsiveContainer width="100%" height={380}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="sales" fill="#3b82f6" name="Sales" radius={8} />
          <Bar dataKey="revenue" fill="#10b981" name="Revenue" radius={8} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChart8;