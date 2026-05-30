import React, { useState } from 'react';
import { Search, Filter, Plus, Edit, Trash2 } from 'lucide-react';

const List = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  const tasks = [
    { id: 1, title: "Update payment gateway integration", assignee: "Ahmed Khan", status: "In Progress", priority: "High", due: "May 30, 2026" },
    { id: 2, title: "Prepare Q2 financial report", assignee: "Sara Malik", status: "Completed", priority: "Medium", due: "May 28, 2026" },
    { id: 3, title: "Design new landing page", assignee: "Usman Ali", status: "To Do", priority: "High", due: "June 5, 2026" },
    { id: 4, title: "Customer feedback analysis", assignee: "Ayesha Noor", status: "In Progress", priority: "Low", due: "June 2, 2026" },
    { id: 5, title: "Server migration to AWS", assignee: "Bilal Ahmed", status: "Completed", priority: "High", due: "May 25, 2026" },
  ];

  const filteredTasks = tasks.filter(task => 
    task.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (statusFilter === 'All' || task.status === statusFilter)
  );

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Task List</h1>
          <p className="text-gray-600">Manage and track all tasks</p>
        </div>
        <button className="flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-xl hover:bg-blue-700">
          <Plus size={20} /> New Task
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-2xl shadow-sm p-5 mb-6 flex flex-wrap gap-4 items-center">
        <div className="flex-1 relative">
          <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search tasks..."
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
          <option value="All">All Status</option>
          <option value="To Do">To Do</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>

        <button className="flex items-center gap-2 px-5 py-3 border border-gray-300 rounded-xl hover:bg-gray-50">
          <Filter size={20} /> Filter
        </button>
      </div>

      {/* Task List */}
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="px-6 py-5 text-left font-medium">Task</th>
              <th className="px-6 py-5 text-left font-medium">Assignee</th>
              <th className="px-6 py-5 text-left font-medium">Status</th>
              <th className="px-6 py-5 text-left font-medium">Priority</th>
              <th className="px-6 py-5 text-left font-medium">Due Date</th>
              <th className="px-6 py-5 text-center font-medium">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {filteredTasks.map((task) => (
              <tr key={task.id} className="hover:bg-gray-50 transition">
                <td className="px-6 py-5 font-medium">{task.title}</td>
                <td className="px-6 py-5 text-gray-600">{task.assignee}</td>
                <td className="px-6 py-5">
                  <span className={`px-4 py-1.5 text-xs rounded-full font-medium ${
                    task.status === 'Completed' ? 'bg-green-100 text-green-700' :
                    task.status === 'In Progress' ? 'bg-blue-100 text-blue-700' : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {task.status}
                  </span>
                </td>
                <td className="px-6 py-5">
                  <span className={`px-3 py-1 text-xs rounded-full ${
                    task.priority === 'High' ? 'bg-red-100 text-red-700' : 'bg-gray-100 text-gray-700'
                  }`}>
                    {task.priority}
                  </span>
                </td>
                <td className="px-6 py-5 text-gray-600">{task.due}</td>
                <td className="px-6 py-5 text-center">
                  <div className="flex justify-center gap-4">
                    <button className="text-blue-600 hover:text-blue-700"><Edit size={18} /></button>
                    <button className="text-red-600 hover:text-red-700"><Trash2 size={18} /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default List;