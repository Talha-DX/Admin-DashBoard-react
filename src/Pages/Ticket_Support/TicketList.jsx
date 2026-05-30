import React, { useState } from 'react';
import { Search, Plus, Filter } from 'lucide-react';

const TicketList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  const tickets = [
    {
      id: "TKT-3921",
      subject: "Payment failed on checkout",
      customer: "Ahmed Khan",
      status: "Open",
      priority: "High",
      date: "2 hours ago",
      category: "Payments"
    },
    {
      id: "TKT-3920",
      subject: "Unable to login with Google",
      customer: "Sara Malik",
      status: "In Progress",
      priority: "Medium",
      date: "Yesterday",
      category: "Authentication"
    },
    {
      id: "TKT-3919",
      subject: "Request for invoice",
      customer: "Usman Ali",
      status: "Closed",
      priority: "Low",
      date: "May 26",
      category: "Billing"
    },
    {
      id: "TKT-3918",
      subject: "App crashing on Android",
      customer: "Ayesha Noor",
      status: "Open",
      priority: "High",
      date: "3 days ago",
      category: "Technical"
    },
  ];

  const filteredTickets = tickets.filter(ticket => 
    (ticket.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
     ticket.customer.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (statusFilter === 'All' || ticket.status === statusFilter)
  );

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Support Tickets</h1>
          <p className="text-gray-600">Manage customer support requests</p>
        </div>
        <button className="flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-xl hover:bg-blue-700">
          <Plus size={20} /> New Ticket
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-2xl shadow-sm p-5 mb-6 flex flex-wrap gap-4 items-center">
        <div className="flex-1 relative min-w-[300px]">
          <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search tickets..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="px-5 py-3 border border-gray-300 rounded-xl focus:outline-none"
        >
          <option value="All">All Tickets</option>
          <option value="Open">Open</option>
          <option value="In Progress">In Progress</option>
          <option value="Closed">Closed</option>
        </select>

        <button className="flex items-center gap-2 px-5 py-3 border border-gray-300 rounded-xl hover:bg-gray-50">
          <Filter size={20} /> More Filters
        </button>
      </div>

      {/* Tickets Table */}
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="px-6 py-5 text-left">Ticket ID</th>
              <th className="px-6 py-5 text-left">Subject</th>
              <th className="px-6 py-5 text-left">Customer</th>
              <th className="px-6 py-5 text-left">Category</th>
              <th className="px-6 py-5 text-left">Status</th>
              <th className="px-6 py-5 text-left">Priority</th>
              <th className="px-6 py-5 text-left">Last Updated</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {filteredTickets.map((ticket) => (
              <tr key={ticket.id} className="hover:bg-gray-50 cursor-pointer transition">
                <td className="px-6 py-5 font-mono text-blue-600">{ticket.id}</td>
                <td className="px-6 py-5 font-medium">{ticket.subject}</td>
                <td className="px-6 py-5 text-gray-600">{ticket.customer}</td>
                <td className="px-6 py-5 text-gray-600">{ticket.category}</td>
                <td className="px-6 py-5">
                  <span className={`px-4 py-1.5 text-xs rounded-full font-medium ${
                    ticket.status === 'Open' ? 'bg-red-100 text-red-700' :
                    ticket.status === 'In Progress' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'
                  }`}>
                    {ticket.status}
                  </span>
                </td>
                <td className="px-6 py-5">
                  <span className={`px-3 py-1 text-xs rounded-full ${
                    ticket.priority === 'High' ? 'bg-red-100 text-red-700' :
                    ticket.priority === 'Medium' ? 'bg-yellow-100 text-yellow-700' : 'bg-gray-100 text-gray-700'
                  }`}>
                    {ticket.priority}
                  </span>
                </td>
                <td className="px-6 py-5 text-gray-500 text-sm">{ticket.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TicketList;