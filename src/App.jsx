import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import LangApp from './Components/Pages/LangApp'; // ✅ rename your file to LangApp.jsx
import Dashboard from './Components/Pages/Dashboard';  
import LogIn from "./Components/Pages/LogIn";
import Register from "./Components/Pages/Register";
import  Home  from './Components/Home';

const App = () => {

  return (
      <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} /> 
        <Route path="/" element={<Home />} />
        <Route path="/lang-app" element={<LangApp />} />
        <Route path="/login" element={<LogIn/>}/> 
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </BrowserRouter>
 
  );
}

export default App
