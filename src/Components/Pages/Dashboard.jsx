<<<<<<< HEAD
import React, { useState } from 'react';
import { Languages, CheckCircle, MessageCircle } from 'lucide-react';
import {Link} from "react-router-dom"; 
import { useTranslation } from 'react-i18next';

export default function Dashboard() {
  
  const { t,i18n } = useTranslation();
   const [dropdownOpen, setDropdownOpen] = useState(false);
   const [selectedLanguage,setSelectedLanguage] = useState("en");

     const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setDropdownOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
           
            <h1 className="text-2xl font-bold text-gray-900">{t("🌱 Bhumeez")}</h1>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/">
            
             <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition">
              Log Out
            </button> </Link>
           
         <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="bg-gray-100 p-2 rounded-lg hover:bg-gray-200"
          >
            <Languages className="w-5 h-5" />
          </button>

          {dropdownOpen && (
          <div className="absolute right-0 mt-2 bg-white shadow-lg border rounded-lg w-40">
          <button onClick={() => {changeLanguage("en"); setSelectedLanguage("en");}} className={`block w-full px-4 py-2 text-left hover:bg-gray-100 ${selectedLanguage === "en" ? "text-green-500" : ""}`}>English</button>
    <button onClick={() => {changeLanguage("hi"); setSelectedLanguage("hi");}} className={`block w-full px-4 py-2 text-left hover:bg-gray-100 ${selectedLanguage === "hi" ? "text-green-500" : ""}`}>हिंदी</button>
    <button onClick={() => {changeLanguage("bn"); setSelectedLanguage("bn");}} className={`block w-full px-4 py-2 text-left hover:bg-gray-100 ${selectedLanguage === "bn" ? "text-green-500" : ""}`}>বাংলা</button>
    <button onClick={() => {changeLanguage("ta"); setSelectedLanguage("ta");}} className={`block w-full px-4 py-2 text-left hover:bg-gray-100 ${selectedLanguage === "ta" ? "text-green-500" : ""}`}>தமிழ்</button>
    <button onClick={() => {changeLanguage("te"); setSelectedLanguage("te");}} className={`block w-full px-4 py-2 text-left hover:bg-gray-100 ${selectedLanguage === "te" ? "text-green-500" : ""}`}>తెలుగు</button>
    <button onClick={() => {changeLanguage("mr"); setSelectedLanguage("mr");}} className={`block w-full px-4 py-2 text-left hover:bg-gray-100 ${selectedLanguage === "mr" ? "text-green-500" : ""}`}>मराठी</button>
    <button onClick={() => {changeLanguage("gu"); setSelectedLanguage("gu");}} className={`block w-full px-4 py-2 text-left hover:bg-gray-100 ${selectedLanguage === "gu" ? "text-green-500" : ""}`}>ગુજરાતી</button>
    <button onClick={() => {changeLanguage("kn"); setSelectedLanguage("kn");}} className={`block w-full px-4 py-2 text-left hover:bg-gray-100 ${selectedLanguage === "kn" ? "text-green-500" : ""}`}>ಕನ್ನಡ</button>
    <button onClick={() => {changeLanguage("ml"); setSelectedLanguage("ml");}} className={`block w-full px-4 py-2 text-left hover:bg-gray-100 ${selectedLanguage === "ml" ? "text-green-500" : ""}`}>മലയാളം</button>
    <button onClick={() => {changeLanguage("pa"); setSelectedLanguage("pa");}} className={`block w-full px-4 py-2 text-left hover:bg-gray-100 ${selectedLanguage === "pa" ? "text-green-500" : ""}`}>ਪੰਜਾਬੀ</button>
    <button onClick={() => {changeLanguage("or"); setSelectedLanguage("or");}} className={`block w-full px-4 py-2 text-left hover:bg-gray-100 ${selectedLanguage === "or" ? "text-green-500" : ""}`}>ଓଡ଼ିଆ</button>
    <button onClick={() => {changeLanguage("as"); setSelectedLanguage("as");}} className={`block w-full px-4 py-2 text-left hover:bg-gray-100 ${selectedLanguage === "as" ? "text-green-500" : ""}`}>অসমীয়া</button>
  </div>
        
          )}
          </div>
        </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Title Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">{t("dashboardTitle")}</h2>
          <p className="text-gray-600">{t("monitorText")}</p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Temperature Card */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-gray-600 text-sm font-medium mb-2">{t("tempreature")}</h3>
            <p className="text-blue-600 font-semibold mb-2">Normal</p>
            <p className="text-4xl font-bold text-gray-900">28°C</p>
          </div>

          {/* Soil Moisture Card */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-gray-600 text-sm font-medium mb-2">{t("soilMoisture")}</h3>
            <p className="text-green-600 font-semibold mb-2">Good</p>
            <p className="text-4xl font-bold text-gray-900">65%</p>
          </div>

          {/* Sunlight Card */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-gray-600 text-sm font-medium mb-2">{t("sunlight")}</h3>
            <p className="text-green-600 font-semibold mb-2">Optimal</p>
            <p className="text-4xl font-bold text-gray-900">1250 lx</p>
          </div>

          {/* CO2 Level Card */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-gray-600 text-sm font-medium mb-2">{t("coLevel")}</h3>
            <p className="text-blue-600 font-semibold mb-2">Normal</p>
            <p className="text-4xl font-bold text-gray-900">380 ppm</p>
          </div>
        </div>

        {/* AI Recommendation Card */}
        <div className="bg-white rounded-lg shadow p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">{t("aiRecommendation")}</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div>
              <p className="text-gray-600 text-sm mb-2">{t("bestCrop")}</p>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-green-600 w-5 h-5" />
                <p className="text-green-600 font-bold">Rice</p>
              </div>
            </div>

            <div>
              <p className="text-gray-600 text-sm mb-2">{t("expectedYield")}</p>
              <p className="text-green-600 font-bold">10.59 quintals/acre</p>
            </div>

            <div>
              <p className="text-gray-600 text-sm mb-2">{t("netProfit")}</p>
              <p className="text-green-600 font-bold">Rs. 2915.84 /acre</p>
            </div>
          </div>

          <p className="text-gray-700 mb-6">
           {t("recommendationText")}
          </p>

          <button className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition">
            {t("detailedReport")}
          </button>
        </div>
      </main>

      {/* Floating Chat Button */}
      <button className="fixed bottom-6 right-6 bg-white rounded-full shadow-lg p-4 hover:shadow-xl transition flex items-center gap-2 group">
        <span className="text-gray-700 font-medium hidden group-hover:inline">How's my farm doing?</span>
        <MessageCircle className="w-6 h-6 text-gray-700" />
      </button>
    </div>
  );
}
=======
import React from 'react';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6">
      {/* Header */}
      <div className="w-full max-w-4xl flex justify-between items-center mb-6">
        <div className="flex items-center space-x-2">
          <span className="text-green-600">🌱</span>
          <h1 className="text-xl font-semibold text-gray-800">SmartFarm AI</h1>
        </div>
        <div className="space-x-2">
          <button className="text-gray-600 hover:text-gray-800">Home</button>
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Dashboard</button>
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
    </div>
  );
};

export default Dashboard;
>>>>>>> f5d4cdf (Co-authored-by: Abhijeet2923 <Abhijeet2923@users.noreply.github.com>)
