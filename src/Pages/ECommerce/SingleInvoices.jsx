import React from 'react';
import { ArrowLeft, Download, Printer } from 'lucide-react';

const SingleInvoices = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-6">
        <ArrowLeft size={20} /> Back to Invoices
      </button>

      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-sm p-10">
        <div className="flex justify-between items-start border-b pb-8">
          <div>
            <h1 className="text-3xl font-bold">Invoice #INV-3921</h1>
            <p className="text-gray-500 mt-1">May 28, 2026</p>
          </div>
          <div className="text-right">
            <span className="px-6 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">Paid</span>
          </div>
        </div>

        <div className="py-8 border-b">
          <p className="font-medium">Billed To:</p>
          <p>Ahmed Khan</p>
          <p>Multan, Pakistan</p>
        </div>

        <div className="pt-8">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-4">Description</th>
                <th className="text-right py-4">Amount</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr>
                <td className="py-6">Wireless Headphones Pro</td>
                <td className="text-right py-6">$89.99</td>
              </tr>
              <tr>
                <td className="py-6">Delivery Charges</td>
                <td className="text-right py-6">$10.00</td>
              </tr>
            </tbody>
          </table>

          <div className="flex justify-between text-xl font-bold mt-8 pt-6 border-t">
            <span>Total</span>
            <span>$99.99</span>
          </div>
        </div>

        <div className="flex gap-4 mt-10">
          <button className="flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white py-4 rounded-2xl hover:bg-blue-700">
            <Download size={20} /> Download PDF
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 border border-gray-300 py-4 rounded-2xl hover:bg-gray-50">
            <Printer size={20} /> Print
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleInvoices;