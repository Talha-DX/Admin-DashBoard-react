import React from 'react';
import { Truck, MapPin, Clock, PackageCheck } from 'lucide-react';

const Logistics = () => {
  const deliveries = [
    { id: "LD-3921", destination: "Lahore", status: "In Transit", eta: "2 hours", driver: "Ali Hassan" },
    { id: "LD-3922", destination: "Karachi", status: "Delivered", eta: "Completed", driver: "Usman Khan" },
    { id: "LD-3923", destination: "Islamabad", status: "Pending", eta: "Tomorrow", driver: "Bilal Ahmed" },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Logistics & Shipping</h1>
          <p className="text-gray-600">Real-time delivery tracking</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {[
          { title: "Active Shipments", value: "142", icon: Truck, color: "blue" },
          { title: "On Time Delivery", value: "94%", icon: PackageCheck, color: "green" },
          { title: "Avg. Delivery Time", value: "2.4 days", icon: Clock, color: "purple" },
          { title: "Locations", value: "18", icon: MapPin, color: "orange" },
        ].map((stat, i) => (
          <div key={i} className="bg-white rounded-2xl p-6 shadow-sm">
            <stat.icon size={32} className={`text-${stat.color}-600`} />
            <h3 className="text-3xl font-bold mt-4">{stat.value}</h3>
            <p className="text-gray-500">{stat.title}</p>
          </div>
        ))}
      </div>

      {/* Live Deliveries */}
      <div className="bg-white rounded-2xl shadow-sm p-6">
        <h2 className="text-xl font-semibold mb-6">Live Deliveries</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left">Tracking ID</th>
                <th className="px-6 py-4 text-left">Destination</th>
                <th className="px-6 py-4 text-left">Driver</th>
                <th className="px-6 py-4 text-left">Status</th>
                <th className="px-6 py-4 text-left">ETA</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {deliveries.map((delivery) => (
                <tr key={delivery.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-mono">{delivery.id}</td>
                  <td className="px-6 py-4">{delivery.destination}</td>
                  <td className="px-6 py-4">{delivery.driver}</td>
                  <td className="px-6 py-4">
                    <span className={`px-4 py-1 rounded-full text-xs ${
                      delivery.status === "Delivered" ? "bg-green-100 text-green-700" :
                      delivery.status === "In Transit" ? "bg-blue-100 text-blue-700" : "bg-yellow-100 text-yellow-700"
                    }`}>
                      {delivery.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{delivery.eta}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Logistics;