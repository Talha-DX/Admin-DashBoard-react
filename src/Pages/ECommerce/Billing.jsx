import React from 'react';
import { CreditCard, TrendingUp, Calendar } from 'lucide-react';

const Billing = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Billing & Subscriptions</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {[
          { title: "Monthly Revenue", value: "$12,480", change: "+18%", icon: TrendingUp },
          { title: "Active Plans", value: "284", change: "+12", icon: Calendar },
          { title: "Pending Payments", value: "$2,340", change: "4 invoices", icon: CreditCard },
        ].map((item, i) => (
          <div key={i} className="bg-white rounded-3xl p-6 shadow-sm">
            <item.icon size={32} className="text-blue-600" />
            <h3 className="text-3xl font-bold mt-6">{item.value}</h3>
            <p className="text-gray-500 mt-1">{item.title}</p>
            <p className="text-green-600 text-sm mt-4">{item.change}</p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-3xl shadow-sm p-6">
        <h2 className="text-xl font-semibold mb-6">Payment Methods</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-gray-200 rounded-2xl p-6">Visa •••• 4242</div>
          <div className="border border-gray-200 rounded-2xl p-6">JazzCash • 0300-XXXXXXX</div>
        </div>
      </div>
    </div>
  );
};

export default Billing;