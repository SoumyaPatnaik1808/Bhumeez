import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-800">Bhumeez</h1>
          <p className="text-gray-600">Start your journey to smarter, sustainable farming 🌱</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullName">
                Full Name
              </label>
              <input
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                id="fullName"
                type="text"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email / Phone Number
              </label>
              <input
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                id="email"
                type="text"
                placeholder="Enter email or phone number"
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
                  placeholder="Create a secure password"
                />
                <span className="absolute right-3 top-2 text-gray-400">👁️</span>
              </div>
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirm your password"
                />
                <span className="absolute right-3 top-2 text-gray-400">👁️</span>
              </div>
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="language">
                Preferred Language
              </label>
              <select
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                id="language"
              >
                <option>Select your preferred language</option>
                <option value="en">English</option>
                <option value="hi">हिन्दी</option>
                <option value="bn">বাংলা</option>
                <option value="or">ଓଡ଼ିଆ</option>
              </select>
             <label className="block text-gray-700 mt-5 text-sm font-bold mb-2" htmlFor="confirmPassword">
                Enter your Farm Size
              </label> 
              <input class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" id="fullName" placeholder="Enter your Farm Size" type="text"></input>
            </div>
            <Link to={"/dashboard"}>
             <button
              type="submit"
              className="w-full bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
            >
              Create Account
            </button>
             </Link>
           
            <p className="text-center text-gray-600 text-sm">
              By signing up, you agree to our <a href="#" className="text-green-600 hover:underline">Terms & Privacy</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;