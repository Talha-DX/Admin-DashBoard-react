import React from 'react';

const Layertwo = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-8">Layout Two - Split View</h1>

      <div className="grid grid-cols-1 xl:grid-cols-5 gap-6">
        {/* Left Panel - Narrow */}
        <div className="xl:col-span-2 bg-white rounded-3xl shadow-sm p-8">
          <h2 className="text-2xl font-semibold mb-8">Performance Metrics</h2>
          <div className="space-y-8">
            {[
              { label: "Conversion Rate", value: "68%", color: "blue" },
              { label: "Customer Satisfaction", value: "4.8/5", color: "green" },
              { label: "Avg. Session Duration", value: "8m 42s", color: "purple" },
            ].map((metric, i) => (
              <div key={i}>
                <div className="flex justify-between mb-3">
                  <span className="font-medium">{metric.label}</span>
                  <span className="font-bold text-xl">{metric.value}</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full">
                  <div className={`h-2 bg-${metric.color}-600 rounded-full w-[${68 + i * 10}%]`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Panel - Wide */}
        <div className="xl:col-span-3 bg-white rounded-3xl shadow-sm p-8">
          <h2 className="text-2xl font-semibold mb-6">Detailed Overview</h2>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-2xl p-6">
              <p className="text-sm text-gray-500">Total Revenue</p>
              <p className="text-4xl font-bold mt-2">$124,892</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6">
              <p className="text-sm text-gray-500">Active Users</p>
              <p className="text-4xl font-bold mt-2">8,394</p>
            </div>
          </div>

          <div className="mt-8 h-80 border border-dashed border-gray-200 rounded-2xl flex items-center justify-center">
            <p className="text-gray-400">Main Content / Chart Area</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layertwo;