import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header.jsx";
import Hero from "./components/sections/Hero.jsx";
import "./App.css";
import "./index.css";
import Features from "./components/sections/Features.jsx";
import Events from "./components/sections/Events";
import Fom from "./components/sections/fom.jsx";
import Testimonials from "./components/sections/Testimonials.jsx"
import Signup from "./pages/Signup"; 
import Footer from "./components/layout/Footer.jsx";
import CTA from "./components/sections/CTA.jsx";
import Login from "./pages/Login";





function App() {
  return (
    <>
      {/* Header stays globally */}
      <Header />
      
      {/* Routes determine main page content */}
      <Routes>
        {/* Homepage (Hero Section) */}
        <Route path="/" element={<Hero />} />
        <Route path="/" element={<Header />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        
      </Routes>
      <Features />
      <Events />
      <Fom />
      <Testimonials />
      <CTA />
      <Footer />
      
    </>
  );
}


export default App;  