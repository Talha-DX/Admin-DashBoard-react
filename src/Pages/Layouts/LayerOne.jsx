import React from 'react';

const LayerOne = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-8">Layout One - Classic Grid</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-8 space-y-6">
          <div className="bg-white rounded-3xl p-8 shadow-sm">
            <h2 className="text-xl font-semibold mb-6">Main Analytics Overview</h2>
            <div className="h-96 border border-dashed border-gray-300 rounded-2xl flex items-center justify-center">
              <p className="text-gray-400">Large Chart Area</p>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white rounded-3xl p-6 shadow-sm">
            <h3 className="font-semibold mb-4">Quick Stats</h3>
            <div className="space-y-4">
              {["Users", "Revenue", "Orders"].map((item, i) => (
                <div key={i} className="flex justify-between py-3 border-b last:border-0">
                  <span>{item}</span>
                  <span className="font-semibold">2,394</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-sm">
            <h3 className="font-semibold mb-4">Recent Activity</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-3"><span className="text-green-500">↑</span> New user registered</li>
              <li className="flex gap-3"><span className="text-blue-500">📦</span> Order #3921 completed</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayerOne;