import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LanguageIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // You can add your logout logic here, like clearing user session, tokens, etc.
    alert("Logging out...");
    navigate('/login'); 
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6">
      {/* Top Header */}
      <div className="w-full max-w-4xl flex justify-between items-center mb-6">
        <div className="flex items-center space-x-2">
          <span className="text-green-600">🌱</span>
          <h1 className="text-xl font-semibold text-gray-800">Bhumeez</h1>
        </div>
        <div className="space-x-2 flex items-center">
          {/* <button className="text-white px-4 py-2 rounded hover:bg-green-600">
            Dashboard
          </button>*/}
          <button  
            onClick={handleLogout} 
            className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300"
          >
            Log Out
          </button>
          <Link 
            to="/lang-app" 
            className="text-gray-600 hover:text-gray-800 p-2 rounded-full border border-gray-400"
          >
            <LanguageIcon className="h-6 w-6" />
          </Link>
        </div>
      </div>
      
      {/* Dashboard Title */}
      <div className="w-full max-w-4xl mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Farm Dashboard</h2>
        <p className="text-gray-600">Monitor your farm's real-time conditions</p>
      </div>

      {/* Conditions Section */}
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow text-center">
          <p className="text-gray-600">Temperature</p>
          <p className="text-green-600 font-semibold">Normal</p>
          <p className="text-2xl font-bold">28°C</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow text-center">
          <p className="text-gray-600">Soil Moisture</p>
          <p className="text-green-600 font-semibold">Good</p>
          <p className="text-2xl font-bold">65%</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow text-center">
          <p className="text-gray-600">Sunlight</p>
          <p className="text-green-600 font-semibold">Optimal</p>
          <p className="text-2xl font-bold">1250 lx</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow text-center">
          <p className="text-gray-600">CO₂ Level</p>
          <p className="text-green-600 font-semibold">Normal</p>
          <p className="text-2xl font-bold">380 ppm</p>
        </div>
      </div>

      {/* AI Recommendation Section */}
      <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow border border-green-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">AI Recommendation</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <p className="text-gray-600">Best Crop</p>
            <p className="text-green-600 font-semibold">✔ Wheat</p>
          </div>
          <div>
            <p className="text-gray-600">Expected Yield</p>
            <p className="text-green-600 font-semibold">2.3 tons/acre</p>
          </div>
          <div>
            <p className="text-gray-600">Profit Estimate</p>
            <p className="text-green-600 font-semibold">€45,000</p>
          </div>
        </div>
        <p className="text-gray-600 mt-4">
          Based on current soil conditions and weather patterns, wheat cultivation is recommended for optimal yield and profitability.
        </p>
        <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          Get Detailed Report
        </button>
      </div>

      {/* Fixed Bottom Navigation Bar */}
      <div className="fixed bottom-0 left-0 right-0 w-full bg-white border-t border-gray-200 p-4 flex justify-end z-50">
        <span className="text-gray-600">How's my farm doing?</span>
  <Link 
    to="/chat" 
    className="text-gray-600 hover:text-gray-800 p-3 rounded-full border border-gray-400"
  >
    <ChatBubbleLeftRightIcon className="h-7 w-7" />
  </Link>
</div>
    </div>
  );
};

export default Dashboard;