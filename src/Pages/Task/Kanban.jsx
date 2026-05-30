import React, { useState } from 'react';
import { Plus } from 'lucide-react';

const Kanban = () => {
  const [tasks, setTasks] = useState({
    todo: [
      { id: 1, title: "Design new dashboard UI", assignee: "Sara Malik" },
      { id: 2, title: "Fix login authentication bug", assignee: "Ahmed Khan" },
    ],
    progress: [
      { id: 3, title: "Integrate payment API", assignee: "Usman Ali" },
      { id: 4, title: "Write documentation", assignee: "Ayesha Noor" },
    ],
    done: [
      { id: 5, title: "Deploy v2.3 update", assignee: "Bilal Ahmed" },
    ]
  });

  const moveTask = (taskId, fromColumn, toColumn) => {
    const task = tasks[fromColumn].find(t => t.id === taskId);
    if (!task) return;

    setTasks(prev => ({
      ...prev,
      [fromColumn]: prev[fromColumn].filter(t => t.id !== taskId),
      [toColumn]: [...prev[toColumn], task]
    }));
  };

  const columns = [
    { id: 'todo', title: 'To Do', color: 'yellow' },
    { id: 'progress', title: 'In Progress', color: 'blue' },
    { id: 'done', title: 'Done', color: 'green' },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Kanban Board</h1>
          <p className="text-gray-600">Project workflow management</p>
        </div>
        <button className="flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-xl hover:bg-blue-700">
          <Plus size={20} /> New Task
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {columns.map(column => (
          <div key={column.id} className="bg-white rounded-2xl shadow-sm p-5">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-semibold text-lg flex items-center gap-2">
                {column.title}
                <span className="text-sm bg-gray-100 px-3 py-1 rounded-full">
                  {tasks[column.id].length}
                </span>
              </h2>
            </div>

            <div className="space-y-4 min-h-[500px]">
              {tasks[column.id].map(task => (
                <div
                  key={task.id}
                  className="bg-white border border-gray-200 p-5 rounded-xl shadow-sm hover:shadow-md transition cursor-move"
                  draggable
                  onDragStart={(e) => e.dataTransfer.setData("taskId", task.id)}
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={(e) => {
                    e.preventDefault();
                    const taskId = parseInt(e.dataTransfer.getData("taskId"));
                    const fromColumn = Object.keys(tasks).find(key => 
                      tasks[key].some(t => t.id === taskId)
                    );
                    if (fromColumn && fromColumn !== column.id) {
                      moveTask(taskId, fromColumn, column.id);
                    }
                  }}
                >
                  <h3 className="font-medium leading-snug">{task.title}</h3>
                  <p className="text-sm text-gray-500 mt-3">Assigned to: {task.assignee}</p>
                  
                  <div className="flex gap-2 mt-4">
                    <button 
                      onClick={() => {
                        const nextColumn = column.id === 'todo' ? 'progress' : 
                                         column.id === 'progress' ? 'done' : 'todo';
                        moveTask(task.id, column.id, nextColumn);
                      }}
                      className="text-xs px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition"
                    >
                      Move →
                    </button>
                  </div>
                </div>
              ))}

              {/* Empty state */}
              {tasks[column.id].length === 0 && (
                <div className="h-40 flex items-center justify-center text-gray-400 border border-dashed border-gray-200 rounded-xl">
                  No tasks yet
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Kanban;