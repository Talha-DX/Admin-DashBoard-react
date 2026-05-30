import React from 'react';
import { Package, AlertTriangle, TrendingUp, Plus } from 'lucide-react';

const Stocks = () => {
  const stockItems = [
    { id: 1, name: "Wireless Headphones", stock: 234, status: "In Stock", change: "+12" },
    { id: 2, name: "Laptop Sleeve", stock: 45, status: "Low Stock", change: "-8" },
    { id: 3, name: "Smart Watch", stock: 189, status: "In Stock", change: "+23" },
    { id: 4, name: "USB Cable", stock: 12, status: "Critical", change: "-45" },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Stock Management</h1>
          <p className="text-gray-600">Inventory overview and alerts</p>
        </div>
        <button className="flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-xl hover:bg-blue-700">
          <Plus size={20} /> Add New Stock
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {[
          { title: "Total Products", value: "1,284", icon: Package, color: "blue" },
          { title: "Low Stock Items", value: "23", icon: AlertTriangle, color: "orange" },
          { title: "Out of Stock", value: "7", icon: AlertTriangle, color: "red" },
          { title: "Stock Value", value: "$84,392", icon: TrendingUp, color: "green" },
        ].map((stat, i) => (
          <div key={i} className="bg-white rounded-2xl p-6 shadow-sm">
            <stat.icon className={`text-${stat.color}-600`} size={32} />
            <h3 className="text-3xl font-bold mt-4">{stat.value}</h3>
            <p className="text-gray-500">{stat.title}</p>
          </div>
        ))}
      </div>

      {/* Stock Table */}
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        <div className="p-6 border-b">
          <h2 className="text-xl font-semibold">Current Stock Levels</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left">Product</th>
                <th className="px-6 py-4 text-left">Current Stock</th>
                <th className="px-6 py-4 text-left">Status</th>
                <th className="px-6 py-4 text-left">Last 7 Days</th>
                <th className="px-6 py-4 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {stockItems.map(item => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium">{item.name}</td>
                  <td className="px-6 py-4">{item.stock}</td>
                  <td className="px-6 py-4">
                    <span className={`px-4 py-1 rounded-full text-xs font-medium ${
                      item.status === "In Stock" ? "bg-green-100 text-green-700" :
                      item.status === "Low Stock" ? "bg-orange-100 text-orange-700" : "bg-red-100 text-red-700"
                    }`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={item.change.startsWith('+') ? "text-green-600" : "text-red-600"}>
                      {item.change}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button className="text-blue-600 hover:underline">Restock</button>
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

export default Stocks;