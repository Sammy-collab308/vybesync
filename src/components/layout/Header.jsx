import { useState } from "react";
import bgImage from "../../assets/images/header-bg.jpg";
import { Link } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const stats = [
    { label: "Years of Experience", value: "10+" },
    { label: "Branches Nationwide", value: "15" },
    { label: "Events Hosted", value: "1,200+" },
    { label: "Happy Clients", value: "5,000+" },
  ];

  return (
    <header
      id="home"
      className="relative w-full h-screen flex flex-col justify-center items-center text-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Navigation */}
      <div className="absolute top-6 w-full max-w-[1200px] mx-auto px-8 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-3xl font-bold tracking-wide">
          <span className="text-purple-500">Vybe</span>
          <span className="text-yellow-400">Sync</span>
        </h1>

        {/* Hamburger (Mobile) */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-12 text-white font-medium">
          <a href="#home" className="hover:text-yellow-400 transition">Home</a>
          <a href="#events" className="hover:text-yellow-400 transition">Events</a>
          <a href="#about" className="hover:text-yellow-400 transition">About</a>
          <a href="#contact" className="hover:text-yellow-400 transition">Contact</a>
        </nav>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-20 w-[90%] mx-auto bg-purple-900/90 border border-yellow-400 rounded-xl p-6 flex flex-col gap-4 text-white md:hidden">
          <a href="#home" className="hover:text-yellow-400 transition">Home</a>
          <a href="#events" className="hover:text-yellow-400 transition">Events</a>
          <a href="#about" className="hover:text-yellow-400 transition">About</a>
          <a href="#contact" className="hover:text-yellow-400 transition">Contact</a>
        </div>
      )}

      {/* Hero Content */}
      <div className="text-white max-w-[850px] px-4 flex flex-col justify-center items-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          Discover Unforgettable Events
        </h1>

        <p className="text-lg md:text-xl mb-8 drop-shadow-md">
          Book your spot at the hottest events in town. Celebrate moments that matter.
        </p>

        <Link
          to="/signup"
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-lg shadow-lg transition"
        >
          Book Now
        </Link>
      </div>

      {/* Floating Stats */}
      <div className="absolute bottom-[-85px] left-1/2 -translate-x-1/2 w-[95%] max-w-[1100px]">
        <div className="
          bg-gradient-to-r from-purple-900 via-purple-800 to-purple-900
          backdrop-blur-md border border-yellow-400 rounded-2xl shadow-2xl
          
          h-auto py-6 px-6 
          flex flex-col md:flex-row justify-between items-center
          gap-6 md:gap-0 text-white
        ">
          {stats.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center md:flex-row md:gap-6"
            >
              <div className="text-center">
                <h3 className="text-2xl font-bold text-yellow-400">{item.value}</h3>
                <p className="text-gray-300 text-sm md:text-base mt-1">
                  {item.label}
                </p>
              </div>

              {/* Dividers only on desktop */}
              {index !== stats.length - 1 && (
                <div className="hidden md:block w-px h-14 bg-yellow-400/40"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Header;
