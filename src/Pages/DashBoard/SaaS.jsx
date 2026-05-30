import React from 'react';
import { Users, CreditCard, TrendingUp, Zap } from 'lucide-react';

const SaaS = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">SaaS Overview</h1>
      <p className="text-gray-600 mb-8">Subscription & Growth Metrics</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          { title: "Active Subscribers", value: "3,284", change: "+18%", icon: Users, color: "blue" },
          { title: "MRR", value: "$42,890", change: "+11%", icon: CreditCard, color: "green" },
          { title: "Churn Rate", value: "2.4%", change: "-0.8%", icon: TrendingUp, color: "red" },
          { title: "Avg. Session", value: "24m", change: "+5%", icon: Zap, color: "purple" },
        ].map((stat, i) => (
          <div key={i} className="bg-white rounded-2xl p-6 shadow-sm">
            <stat.icon size={32} className={`text-${stat.color}-600`} />
            <h3 className="text-3xl font-bold mt-4">{stat.value}</h3>
            <p className="text-gray-500">{stat.title}</p>
            <span className="text-green-600 text-sm mt-2 block">{stat.change} this month</span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Plan Distribution</h2>
          <div className="h-80 flex items-center justify-center border border-dashed border-gray-300 rounded-xl">
            <p className="text-gray-400">Pie Chart (Basic / Pro / Enterprise)</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Monthly Recurring Revenue Trend</h2>
          <div className="h-80 flex items-center justify-center border border-dashed border-gray-300 rounded-xl">
            <p className="text-gray-400">Line Chart Goes Here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaaS;