import React, { useState } from 'react';
import { 
  TrendingUp, Users, Target, Megaphone, Calendar, 
  ArrowUpRight, ArrowDownRight, Plus 
} from 'lucide-react';

const Marketing = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const campaigns = [
    {
      name: "Summer Sale 2026",
      status: "Active",
      budget: "$2,450",
      spent: "$1,890",
      reach: "45.2K",
      conversions: "1,284",
      roi: "3.8x",
      color: "green"
    },
    {
      name: "New User Onboarding",
      status: "Active",
      budget: "$1,200",
      spent: "$980",
      reach: "28.7K",
      conversions: "892",
      roi: "4.2x",
      color: "blue"
    },
    {
      name: "Eid Special Offer",
      status: "Ended",
      budget: "$3,000",
      spent: "$2,950",
      reach: "67.1K",
      conversions: "2,145",
      roi: "2.9x",
      color: "gray"
    },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Marketing Center</h1>
          <p className="text-gray-600 mt-1">Manage campaigns and track performance</p>
        </div>

        <button className="flex items-center gap-2 px-5 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
          <Plus size={20} />
          New Campaign
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-6 border-b">
        {['overview', 'campaigns', 'audience', 'performance'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-3 font-medium capitalize transition border-b-2 -mb-px ${
              activeTab === tab 
                ? 'border-blue-600 text-blue-600' 
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          { title: "Active Campaigns", value: "7", change: "+2", icon: Megaphone, color: "blue" },
          { title: "Total Reach", value: "184.3K", change: "+12%", icon: Users, color: "purple" },
          { title: "Avg. Conversion", value: "4.8%", change: "-0.3%", icon: Target, color: "green" },
          { title: "Total Spend", value: "$8,942", change: "+18%", icon: TrendingUp, color: "orange" },
        ].map((stat, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div className={`p-3 rounded-xl bg-${stat.color}-100 text-${stat.color}-600`}>
                <stat.icon size={28} />
              </div>
              <span className="text-green-600 text-sm font-medium flex items-center gap-1">
                {stat.change} <ArrowUpRight size={16} />
              </span>
            </div>
            <h3 className="text-3xl font-bold mt-4">{stat.value}</h3>
            <p className="text-gray-500">{stat.title}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Active Campaigns */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Active Campaigns</h2>
            <button className="text-blue-600 text-sm font-medium hover:underline">
              View All →
            </button>
          </div>

          <div className="space-y-4">
            {campaigns.map((campaign, index) => (
              <div key={index} className="border border-gray-200 rounded-xl p-5 hover:shadow-md transition">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-lg">{campaign.name}</h3>
                    <span className={`inline-block px-3 py-1 text-xs rounded-full mt-2 ${
                      campaign.status === 'Active' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      {campaign.status}
                    </span>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">ROI</p>
                    <p className="font-bold text-green-600">{campaign.roi}</p>
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-4 mt-6 text-sm">
                  <div>
                    <p className="text-gray-500">Budget</p>
                    <p className="font-medium">{campaign.budget}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Spent</p>
                    <p className="font-medium">{campaign.spent}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Reach</p>
                    <p className="font-medium">{campaign.reach}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Conversions</p>
                    <p className="font-medium">{campaign.conversions}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Overview */}
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-6">Performance This Month</h2>
          
          <div className="space-y-6">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Facebook Ads</span>
                <span className="font-medium">68%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-blue-600 w-[68%]"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Instagram</span>
                <span className="font-medium">45%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-pink-500 w-[45%]"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Google Ads</span>
                <span className="font-medium">82%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500 w-[82%]"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Email Marketing</span>
                <span className="font-medium">31%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-amber-500 w-[31%]"></div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t">
            <p className="text-sm text-gray-500 mb-3">Best Performing Channel</p>
            <div className="flex items-center gap-3">
              <div className="text-4xl">📧</div>
              <div>
                <p className="font-semibold">Email Campaign</p>
                <p className="text-green-600 text-sm">4.2x ROI • 892 Conversions</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming & Recent */}
      <div className="mt-8 bg-white rounded-2xl shadow-sm p-6">
        <h2 className="text-xl font-semibold mb-5">Upcoming Campaigns</h2>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px]">
            <thead>
              <tr className="border-b">
                <th className="text-left py-4 px-6">Campaign</th>
                <th className="text-left py-4 px-6">Start Date</th>
                <th className="text-left py-4 px-6">Channel</th>
                <th className="text-left py-4 px-6">Budget</th>
                <th className="text-left py-4 px-6">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {[
                ["Ramadan Promotion 2026", "June 10, 2026", "Multi-channel", "$5,000", "Scheduled"],
                ["Student Discount Drive", "June 15, 2026", "Instagram + Email", "$1,800", "Draft"],
              ].map((row, i) => (
                <tr key={i} className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium">{row[0]}</td>
                  <td className="px-6 py-4 text-gray-600">{row[1]}</td>
                  <td className="px-6 py-4">{row[2]}</td>
                  <td className="px-6 py-4 font-medium">{row[3]}</td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 text-xs rounded-full bg-yellow-100 text-yellow-700">
                      {row[4]}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Marketing;