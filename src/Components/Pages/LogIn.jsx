import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address.");
      return false;
    }
    setEmailError("");
    return true;
  };

  const validatePassword = (password) => {
    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long.");
      return false;
    }
    setPasswordError("");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);

    if (isEmailValid && isPasswordValid) {
      if (email === "test@example.com" && password === "123456") {
        navigate('/dashboard'); 
      } else {
        alert("Invalid email or password!");
      }
    }
  };

  return (
    <div className="min-h-screen bg-yellow-50 flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-800">Bhumeez</h1>
          <p className="text-gray-600">Welcome back, let's grow together! 🌱</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Sign in to your account</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${emailError ? 'border-red-500' : 'focus:ring-green-500'}`}
                id="email"
                type="text"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  validateEmail(e.target.value);
                }}
              />
              {emailError && <p className="text-red-500 text-xs italic mt-1">{emailError}</p>}
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <div className="relative">
                <input
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${passwordError ? 'border-red-500' : 'focus:ring-green-500'}`}
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    validatePassword(e.target.value);
                  }}
                />
                <span className="absolute right-3 top-2 text-gray-400">👁️</span>
              </div>
              {passwordError && <p className="text-red-500 text-xs italic mt-1">{passwordError}</p>}
            </div>

            <button
              type="submit"
              className="w-full bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
            >
              Sign In
            </button>

            <button
              type="button"
              onClick={() => navigate('/register')}
              className="w-full bg-white border border-green-500 text-green-500 px-4 mt-5 py-2 rounded-lg hover:bg-green-50 transition"
            >
              Create New Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}