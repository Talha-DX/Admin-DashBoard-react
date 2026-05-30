import React, { useState } from 'react';
import { Search, Star, Trash2, Plus } from 'lucide-react';

const Inbox = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('All');

  const messages = [
    {
      id: 1,
      sender: "Ahmed Khan",
      email: "ahmed@example.com",
      subject: "Request for refund on order #3921",
      preview: "I would like to request a refund for my recent purchase...",
      time: "10 min ago",
      unread: true,
      starred: true,
    },
    {
      id: 2,
      sender: "Sara Malik",
      email: "sara@company.com",
      subject: "Meeting rescheduled to tomorrow",
      preview: "Due to some urgent work, let's move our meeting...",
      time: "2 hours ago",
      unread: false,
      starred: false,
    },
    {
      id: 3,
      sender: "Support Team",
      email: "support@yourapp.com",
      subject: "Your ticket #TKT-3921 has been updated",
      preview: "We have resolved the payment issue you reported...",
      time: "Yesterday",
      unread: true,
      starred: false,
    },
    {
      id: 4,
      sender: "Usman Ali",
      email: "usman@gmail.com",
      subject: "New feature suggestion",
      preview: "I think adding dark mode would be really helpful...",
      time: "May 27",
      unread: false,
      starred: true,
    },
  ];

  const filteredMessages = messages.filter(msg => 
    (msg.sender.toLowerCase().includes(searchTerm.toLowerCase()) ||
     msg.subject.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (filter === 'All' || 
     (filter === 'Unread' && msg.unread) || 
     (filter === 'Starred' && msg.starred))
  );

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Inbox</h1>
          <p className="text-gray-600">Manage your messages and communications</p>
        </div>
        <button className="flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-xl hover:bg-blue-700">
          <Plus size={20} /> Compose
        </button>
      </div>

      {/* Filters & Search */}
      <div className="bg-white rounded-2xl shadow-sm p-5 mb-6 flex flex-wrap gap-4 items-center">
        <div className="flex-1 relative">
          <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search messages..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex gap-2">
          {['All', 'Unread', 'Starred'].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-3 rounded-xl text-sm font-medium transition ${
                filter === f 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Messages List */}
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        {filteredMessages.map((msg) => (
          <div
            key={msg.id}
            className="border-b last:border-0 hover:bg-gray-50 transition p-5 flex gap-4 cursor-pointer"
          >
            <div className="flex flex-col items-center gap-2">
              <input type="checkbox" className="w-5 h-5 accent-blue-600" />
              <Star 
                size={18} 
                className={msg.starred ? "text-yellow-500 fill-yellow-500" : "text-gray-400"} 
              />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex justify-between">
                <p className={`font-medium ${msg.unread ? 'text-gray-900' : 'text-gray-600'}`}>
                  {msg.sender}
                </p>
                <p className="text-sm text-gray-500 whitespace-nowrap">{msg.time}</p>
              </div>
              <p className={`font-medium mt-1 truncate ${msg.unread ? 'text-gray-900' : 'text-gray-700'}`}>
                {msg.subject}
              </p>
              <p className="text-sm text-gray-500 truncate mt-1">{msg.preview}</p>
            </div>

            <div className="flex items-center gap-2 text-gray-400">
              <Trash2 size={18} className="hover:text-red-500 cursor-pointer" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Inbox;