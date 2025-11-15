import React, { useEffect } from "react";
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
import Login from "./pages/Login.jsx";

function App() {

  // ---- Backend Connection Test ----
  useEffect(() => {
    const API_URL = import.meta.env.VITE_API_URL; // from your .env

    console.log("Using backend URL:", API_URL);

    fetch(`${API_URL}/api/test`) // replace /api/test with a real endpoint if needed
      .then((res) => res.json())
      .then((data) => {
        console.log("Backend Response:", data);
      })
      .catch((err) => {
        console.error("Error connecting to backend:", err);
      });
  }, []);
  // --------------------------------

  return (
    <>
      {/* Header stays globally */}
      <Header />
      
      {/* Routes determine main page content */}
      <Routes>
        {/* Homepage (Hero Section) */}
        <Route path="/" element={<Hero />} />
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
