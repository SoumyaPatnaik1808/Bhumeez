
import React from 'react';

const Step = ({ number, title, description }) => {
  return (
    <div className="text-center">
      <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-2">
        <span className="text-white font-bold">{number}</span>
      </div>
      <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
      <p className="text-gray-600 mt-1">{description}</p>
    </div>
  );
};

const Work = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900">How It Works</h1>
        <p className="text-gray-600 mt-2">Simple steps to smarter farming</p>
      </div>
      <div className="flex justify-center mt-10 space-x-12">
        <Step number="1" title="Sensors collect data" description="IoT sensors monitor moisture, temperature, sunlight, and CO₂ levels" />
        <Step number="2" title="AI analyzes trends" description="Our AI processes soil, weather, and market data for insights" />
        <Step number="3" title="Get simple advice" description="Receive multilingual recommendations in an easy-to-understand format" />
      </div>
    </div>
  );
};

export default Work;
