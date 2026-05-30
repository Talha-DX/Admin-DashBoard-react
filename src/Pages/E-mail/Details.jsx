import React from 'react';
import { ArrowLeft, Star, Trash2, Reply, Archive } from 'lucide-react';

const Details = () => {
  const message = {
    id: 1,
    sender: "Ahmed Khan",
    email: "ahmed@example.com",
    subject: "Request for refund on order #3921",
    time: "May 28, 2026 at 10:45 AM",
    body: `Hello Admin,

I recently placed an order #3921 but unfortunately the payment failed twice. I would like to request a refund or retry the payment.

Please let me know how we can proceed.

Thank you,
Ahmed Khan`,
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <button 
        onClick={() => window.history.back()}
        className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6"
      >
        <ArrowLeft size={20} /> Back to Inbox
      </button>

      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-sm overflow-hidden">
        {/* Header */}
        <div className="p-8 border-b">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">{message.subject}</h1>
              <div className="flex items-center gap-3 mt-4">
                <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold">
                  {message.sender[0]}
                </div>
                <div>
                  <p className="font-medium">{message.sender}</p>
                  <p className="text-sm text-gray-500">{message.email}</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 text-gray-400">
              <Star size={22} className="hover:text-yellow-500 cursor-pointer" />
              <Archive size={22} className="hover:text-gray-600 cursor-pointer" />
              <Trash2 size={22} className="hover:text-red-500 cursor-pointer" />
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-6">{message.time}</p>
        </div>

        {/* Message Body */}
        <div className="p-8 leading-relaxed text-gray-700 whitespace-pre-line">
          {message.body}
        </div>

        {/* Reply Section */}
        <div className="border-t p-8 bg-gray-50">
          <h3 className="font-semibold mb-4">Quick Reply</h3>
          <textarea
            rows="6"
            className="w-full border border-gray-300 rounded-2xl p-5 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Write your reply..."
          ></textarea>

          <div className="flex justify-end gap-4 mt-5">
            <button className="px-6 py-3 border border-gray-300 rounded-xl hover:bg-gray-100">
              Save Draft
            </button>
            <button className="flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700 transition">
              <Reply size={18} /> Send Reply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;