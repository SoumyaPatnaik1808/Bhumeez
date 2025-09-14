// App.js
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"; 
import Dashboard from './Dashboard';
const LangApp = () => {

  const [selectedLanguage, setSelectedLanguage] = useState('English');

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'hi', name: 'हिन्दी' },
  ];

  return (
    <>
       
    <div className="min-h-screen bg-gray-100 flex items-center justify-center overflow-hidden">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <div className="flex justify-center mb-4">
          <span className="text-green-600 text-2xl">🌱</span>
        </div>
        <h1 className="text-2xl font-semibold text-gray-900">Smart Farming Assistant</h1>
        <p className="text-gray-600 mt-2">
          Choose your preferred language / अपनी पसंदीदा भाषा चुनें
        </p>
        <div className="mt-4">
          <select
            className="w-full bg-green-600 text-white p-2 rounded"
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value)}
          >
            {languages.map((lang) => (
              <option key={lang.code} value={lang.name}>
                {lang.name}
              </option>
            ))}
          </select>
        </div> 
        
          <Link to="/dashboard">
                     <button className="bg-green-700 text-white px-6 py-2 mt-5 font-bold rounded-2xl hover:bg-green-600">
                       Proceed
                     </button>
                    </Link>
      </div> 
      
    </div>
   
    </>
  );
};

export default LangApp;