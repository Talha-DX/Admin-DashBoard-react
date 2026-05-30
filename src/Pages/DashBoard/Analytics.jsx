import React, { useState } from 'react';
import { 
  TrendingUp, Users, DollarSign, ShoppingCart, Eye 
} from 'lucide-react';

const Analytics = () => {
  const [dateRange, setDateRange] = useState('7days');

  // Mock Data
  const stats = [
    {
      title: "Total Users",
      value: "12,458",
      change: "+18.2%",
      trend: "up",
      icon: Users,
      color: "blue"
    },
    {
      title: "Revenue",
      value: "$48,392",
      change: "+12.5%",
      trend: "up",
      icon: DollarSign,
      color: "green"
    },
    {
      title: "Orders",
      value: "2,845",
      change: "-3.8%",
      trend: "down",
      icon: ShoppingCart,
      color: "purple"
    },
    {
      title: "Page Views",
      value: "89,234",
      change: "+24.1%",
      trend: "up",
      icon: Eye,
      color: "orange"
    },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Analytics Dashboard</h1>
          <p className="text-gray-600 mt-1">Overview of your platform performance</p>
        </div>

        <div className="flex items-center gap-4">
          <select
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="7days">Last 7 Days</option>
            <option value="30days">Last 30 Days</option>
            <option value="90days">Last 90 Days</option>
            <option value="1year">Last Year</option>
          </select>
          
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Export Report
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition">
            <div className="flex items-center justify-between">
              <div className={`p-3 rounded-xl bg-${stat.color}-100 text-${stat.color}-600`}>
                <stat.icon size={28} />
              </div>
              <span className={`text-sm font-medium ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                {stat.change}
              </span>
            </div>
            
            <h3 className="text-3xl font-bold mt-4 text-gray-800">{stat.value}</h3>
            <p className="text-gray-500 text-sm mt-1">{stat.title}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Revenue Trend Chart Placeholder */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Revenue Trend</h2>
            <div className="text-sm text-gray-500">Last 30 Days</div>
          </div>
          <div className="h-80 flex items-center justify-center border-2 border-dashed border-gray-200 rounded-xl">
            <div className="text-center">
              <TrendingUp size={48} className="mx-auto text-gray-300 mb-3" />
              <p className="text-gray-400">Line Chart Goes Here</p>
              <p className="text-xs text-gray-500 mt-1">(Use Chart.js / Recharts / ApexCharts)</p>
            </div>
          </div>
        </div>

        {/* User Distribution */}
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-6">User Distribution</h2>
          <div className="h-80 flex items-center justify-center border-2 border-dashed border-gray-200 rounded-xl">
            <div className="text-center">
              <div className="text-6xl mb-4">📊</div>
              <p className="text-gray-400">Pie / Donut Chart</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="mt-8 bg-white rounded-2xl shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b">
          <h2 className="text-xl font-semibold">Recent Activity</h2>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b">
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">User</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Action</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Amount</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Time</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {[
                ["Ahmed Khan", "Purchased Premium Plan", "$49.00", "2 min ago"],
                ["Sara Malik", "New Registration", "-", "15 min ago"],
                ["Usman Ali", "Completed Order #3921", "$129.99", "47 min ago"],
                ["Ayesha Noor", "Cancelled Subscription", "-$19.99", "1 hour ago"],
              ].map((row, i) => (
                <tr key={i} className="hover:bg-gray-50">
                  <td className="px-6 py-4">{row[0]}</td>
                  <td className="px-6 py-4 text-gray-600">{row[1]}</td>
                  <td className="px-6 py-4 font-medium">{row[2]}</td>
                  <td className="px-6 py-4 text-gray-500 text-sm">{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Analytics;