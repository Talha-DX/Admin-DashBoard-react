import React, { useState } from 'react';
import { ArrowLeft, Send, Clock } from 'lucide-react';

const TicketReply = () => {
  const [replyText, setReplyText] = useState('');

  const ticket = {
    id: "TKT-3921",
    subject: "Payment failed on checkout",
    customer: "Ahmed Khan",
    status: "Open",
    priority: "High",
    date: "May 28, 2026",
    category: "Payments"
  };

  const conversations = [
    {
      type: "customer",
      message: "Hi, I tried to make a payment but it keeps failing. Please help.",
      time: "2 hours ago",
      name: "Ahmed Khan"
    },
    {
      type: "admin",
      message: "Hello Ahmed, thank you for reporting. Can you please share the error message you're seeing?",
      time: "1 hour ago",
      name: "Admin"
    },
    {
      type: "customer",
      message: "It says 'Transaction Declined'. I'm using JazzCash.",
      time: "45 min ago",
      name: "Ahmed Khan"
    },
  ];

  const handleSendReply = () => {
    if (replyText.trim()) {
      alert("Reply sent successfully!");
      setReplyText('');
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <button 
        onClick={() => window.history.back()}
        className="flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-6"
      >
        <ArrowLeft size={20} /> Back to Tickets
      </button>

      <div className="max-w-4xl mx-auto">
        {/* Ticket Header */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">
          <div className="flex justify-between items-start">
            <div>
              <div className="flex items-center gap-3">
                <span className="font-mono text-blue-600 font-medium">{ticket.id}</span>
                <span className={`px-4 py-1 text-xs rounded-full font-medium ${
                  ticket.status === 'Open' ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
                }`}>
                  {ticket.status}
                </span>
              </div>
              <h1 className="text-2xl font-bold mt-2">{ticket.subject}</h1>
            </div>
            <div className="text-right text-sm text-gray-500">
              <p>Created: {ticket.date}</p>
              <p>Priority: <span className="font-medium text-red-600">{ticket.priority}</span></p>
            </div>
          </div>
        </div>

        {/* Conversation Thread */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">
          <h2 className="font-semibold text-lg mb-6">Conversation</h2>
          
          <div className="space-y-6">
            {conversations.map((msg, index) => (
              <div key={index} className={`flex ${msg.type === 'admin' ? 'justify-end' : ''}`}>
                <div className={`max-w-[80%] ${msg.type === 'admin' ? 'bg-blue-600 text-white' : 'bg-gray-100'} rounded-2xl p-5`}>
                  <div className="flex justify-between text-xs mb-2 opacity-75">
                    <span>{msg.name}</span>
                    <span>{msg.time}</span>
                  </div>
                  <p>{msg.message}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Reply Box */}
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <h3 className="font-semibold mb-4">Reply to Customer</h3>
          <textarea
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            rows="5"
            className="w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Write your reply here..."
          ></textarea>

          <div className="flex justify-between items-center mt-4">
            <button className="text-gray-500 hover:text-gray-700 flex items-center gap-2">
              <Clock size={18} /> Save as Draft
            </button>
            <button
              onClick={handleSendReply}
              className="flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700 transition"
            >
              Send Reply <Send size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketReply;