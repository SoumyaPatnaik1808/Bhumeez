import React from 'react';
import { Link } from 'react-router-dom';
import { PaperAirplaneIcon, ArrowLeftIcon } from '@heroicons/react/24/solid';

const Chat = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Chat Header */}
      <div className="bg-green-500 text-white p-4 flex items-center justify-between shadow-md">
        <Link to="/dashboard" className="text-white">
          <ArrowLeftIcon className="h-6 w-6" />
        </Link>
        <div className="flex-1 text-center">
          <h1 className="text-xl font-semibold">Bhumeez ChatBot</h1>
        </div>
      </div>

      {/* Chat Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {/* Placeholder for incoming message */}
        <div className="flex justify-start">
          <div className="bg-white text-gray-800 p-3 rounded-xl max-w-xs shadow">
            Hello! I am your personal farm assistant. How can I help you today?
          </div>
        </div>

        {/* Placeholder for outgoing message */}
        <div className="flex justify-end">
          <div className="bg-green-500 text-white p-3 rounded-xl max-w-xs shadow">
            Hi! I would like to know the best time to plant crops.
          </div>
        </div>
      </div>

      {/* Input Field */}
      <div className="fixed bottom-0 left-0 right-0 w-full bg-white p-4 flex items-center shadow-lg">
        ➕
        <input
          type="text"
          placeholder="Type your message..."
          className="flex-1 p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        
        <button className="ml-2 bg-green-500 text-white p-3 rounded-full hover:bg-green-600 transition">
          <PaperAirplaneIcon className="h-6 w-6 transform rotate-0" />
        </button>
      </div>
    </div>
  );
};

export default Chat;