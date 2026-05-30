import React, { useState } from 'react';
import { Search, Send, Phone, Video, MoreVertical, User } from 'lucide-react';

const Chat = () => {
  const [selectedChat, setSelectedChat] = useState(0);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello, I need help with my order #3921", isAdmin: false, time: "10:32 AM" },
    { id: 2, text: "Hi Ahmed! Sure, let me check that for you.", isAdmin: true, time: "10:33 AM" },
    { id: 3, text: "The payment keeps failing. Can you help?", isAdmin: false, time: "10:34 AM" },
    { id: 4, text: "Of course. Which payment method are you using?", isAdmin: true, time: "10:35 AM" },
  ]);

  const conversations = [
    { id: 0, name: "Ahmed Khan", avatar: "AK", lastMsg: "Payment issue", time: "10:35 AM", unread: 2, online: true },
    { id: 1, name: "Sara Malik", avatar: "SM", lastMsg: "Thank you for the update", time: "Yesterday", unread: 0, online: false },
    { id: 2, name: "Usman Ali", avatar: "UA", lastMsg: "When will my order arrive?", time: "Yesterday", unread: 1, online: true },
    { id: 3, name: "Ayesha Noor", avatar: "AN", lastMsg: "Invoice request", time: "May 27", unread: 0, online: false },
  ];

  const sendMessage = () => {
    if (message.trim() === '') return;
    
    const newMsg = {
      id: messages.length + 1,
      text: message,
      isAdmin: true,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages([...messages, newMsg]);
    setMessage('');
  };

  const selectedUser = conversations[selectedChat];

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Sidebar - Conversations */}
      <div className="w-96 border-r border-gray-200 bg-white flex flex-col">
        <div className="p-6 border-b">
          <h1 className="text-3xl font-bold text-gray-800">Messages</h1>
          <p className="text-gray-600 text-sm mt-1">Customer Support</p>
        </div>

        {/* Search */}
        <div className="p-4">
          <div className="relative">
            <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search customers..."
              className="w-full pl-11 pr-4 py-3 bg-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Conversations List */}
        <div className="flex-1 overflow-y-auto">
          {conversations.map((chat, index) => (
            <div
              key={index}
              onClick={() => setSelectedChat(index)}
              className={`p-4 flex gap-4 hover:bg-gray-50 cursor-pointer transition ${
                selectedChat === index ? 'bg-blue-50' : ''
              }`}
            >
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-2xl flex items-center justify-center font-semibold">
                  {chat.avatar}
                </div>
                {chat.online && (
                  <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                )}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex justify-between">
                  <p className="font-semibold text-gray-800">{chat.name}</p>
                  <p className="text-xs text-gray-500">{chat.time}</p>
                </div>
                <p className="text-sm text-gray-600 truncate">{chat.lastMsg}</p>
              </div>

              {chat.unread > 0 && (
                <div className="w-6 h-6 bg-blue-600 text-white text-xs rounded-full flex items-center justify-center font-medium">
                  {chat.unread}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        <div className="h-16 border-b bg-white px-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-2xl flex items-center justify-center font-semibold">
              {selectedUser.avatar}
            </div>
            <div>
              <p className="font-semibold">{selectedUser.name}</p>
              <p className="text-sm text-green-600 flex items-center gap-1">
                ● Online
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-gray-500">
            <button className="hover:text-gray-700 p-2"><Phone size={22} /></button>
            <button className="hover:text-gray-700 p-2"><Video size={22} /></button>
            <button className="hover:text-gray-700 p-2"><MoreVertical size={22} /></button>
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-gray-50">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.isAdmin ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[70%] px-5 py-3 rounded-3xl ${
                  msg.isAdmin
                    ? 'bg-blue-600 text-white rounded-br-none'
                    : 'bg-white shadow-sm rounded-bl-none'
                }`}
              >
                <p>{msg.text}</p>
                <p className={`text-xs mt-2 text-right ${msg.isAdmin ? 'text-blue-200' : 'text-gray-400'}`}>
                  {msg.time}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div className="p-6 bg-white border-t">
          <div className="flex gap-4">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="Type your message..."
              className="flex-1 border border-gray-300 rounded-3xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={sendMessage}
              className="bg-blue-600 text-white px-8 rounded-3xl hover:bg-blue-700 transition"
            >
              <Send size={22} />
            </button>
          </div>
          <p className="text-center text-xs text-gray-400 mt-3">
            Customers can see your replies in real-time
          </p>
        </div>
      </div>
    </div>
  );
};

export default Chat;