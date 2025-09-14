import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"; 
import LangApp from "./Pages/LangApp"; // ✅ rename your file to LangApp.jsx
import  Features  from "./Features";
import Dashboard from "./Pages/Dashboard";  

const Navigation = () => {
  return ( 
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Home />} />
        <Route path="/lang-app" element={<LangApp />} />
      </Routes>
    </BrowserRouter>
  );
};

// ✅ Home component (your landing page)
const Home = () => {
  return (
    <>
    <div className="relative w-full  text-center py-12 px-4">
      <div className="absolute inset-0 opacity-50">
        <img src="farm-hero-page.jpg" alt="Farm background" className="w-full h-full object-cover" />
      </div>
      <div className="relative z-10 p-">
        <h1 className="text-6xl font-bold text-gray-900 mb-5 flex items-center justify-center p-5">
          SmartFarm AI 🌱
        </h1>
        <p className="text-xl text-gray-700 mb-6">
          IoT + AI powered farming assistant for better yield, profit, and sustainability.
        </p>
        <div className="space-x-4">
          <Link to="/lang-app">
            <button className="bg-green-700 text-white px-6 py-2 font-bold rounded-2xl hover:bg-green-600">
              Get Started
            </button>
          </Link>
          <button className="bg-gray-300 text-gray-800 px-6 py-2 font-bold rounded-2xl hover:bg-gray-400">
            Learn More
          </button>
        </div>
      </div>
   
    </div>
    <Features/>
    </>
  );
};

export default Navigation;
