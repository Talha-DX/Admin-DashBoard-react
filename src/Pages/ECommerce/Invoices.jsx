import React from 'react';

const Invoices = () => {
  const invoices = [
    { id: "INV-3921", customer: "Ahmed Khan", amount: 129.99, date: "May 28, 2026", status: "Paid" },
    { id: "INV-3920", customer: "Sara Malik", amount: 89.50, date: "May 27, 2026", status: "Pending" },
    { id: "INV-3919", customer: "Usman Ali", amount: 249.00, date: "May 25, 2026", status: "Paid" },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Invoices</h1>

      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-5 text-left">Invoice ID</th>
              <th className="px-6 py-5 text-left">Customer</th>
              <th className="px-6 py-5 text-left">Amount</th>
              <th className="px-6 py-5 text-left">Date</th>
              <th className="px-6 py-5 text-left">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {invoices.map((inv) => (
              <tr key={inv.id} className="hover:bg-gray-50 cursor-pointer">
                <td className="px-6 py-5 font-mono">{inv.id}</td>
                <td className="px-6 py-5">{inv.customer}</td>
                <td className="px-6 py-5 font-semibold">${inv.amount}</td>
                <td className="px-6 py-5 text-gray-600">{inv.date}</td>
                <td className="px-6 py-5">
                  <span className={`px-4 py-1 rounded-full text-xs ${
                    inv.status === 'Paid' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {inv.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Invoices;