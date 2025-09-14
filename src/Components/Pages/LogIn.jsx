import React from 'react';
import { Link, Links } from 'react-router-dom';

const LogIn = () => {
  return (
    <div className="min-h-screen bg-yellow-50 flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-800">SmartFarm AI</h1>
          <p className="text-gray-600">Welcome back, let's grow together! 🌱</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Sign in to your account</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email or Phone Number
              </label>
              <input
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                id="email"
                type="text"
                placeholder="Enter your email or phone"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <div className="relative">
                <input
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                />
                <span className="absolute right-3 top-2 text-gray-400">👁️</span>
              </div>
            </div>
           
           <Link to="/dashboard">
           <button
              type="submit"
              className="w-full bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
            >
              Sign In
            </button>
           </Link>
            
           <Link to="/register"> 
           <button
              type="button"
              className="w-full bg-white border border-green-500 text-green-500 px-4 mt-5 py-2 rounded-lg hover:bg-green-50 transition"
            >
              Create New Account
            </button>
           </Link>
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;