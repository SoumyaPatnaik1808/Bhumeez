import React from 'react';
import Work from './Work';

const Features = () => {
  return (
    <div className="bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Smart Farming Features</h2>
        <p className="text-lg text-gray-600 mb-8">Everything you need to optimize your farm</p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-center mb-4">
              <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Real-time IoT Sensor Tracking</h3>
            <p className="text-gray-600">Monitor temperature, moisture, sunlight, and CO2 levels in real-time</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-center mb-4">
              <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Crop Recommendations</h3>
            <p className="text-gray-600">Get smart suggestions for crop selection based on soil and weather data</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-center mb-4">
              <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16h6m-7-6h10m-6 6h6m-6-6v10m6-10v10" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Multilingual Voice & Chat Assistant</h3>
            <p className="text-gray-600">Talk to our AI in your preferred language - Hindi, Bengali, Tamil and more</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-center mb-4">
              <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4m4 4V7" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Yield and Profit Predictions</h3>
            <p className="text-gray-600">Forecast your harvest and expected profits with AI-powered analytics</p>
          </div>
      
   
      </div>
    </div>
         <Work  />
          </div> 
         
          
  );
};

export default Features;
