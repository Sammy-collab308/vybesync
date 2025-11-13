import bgImage from "../../assets/images/header-bg.jpg";
import { Link } from "react-router-dom";

function Header() {
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
      <div className="absolute top-6 w-full max-w-[1200px] px-8 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-blue-500 tracking-wide">
          Vybe<span className="text-yellow-400">Sync</span>
        </h1>

        <nav className="flex gap-12 text-white font-medium">
          <a href="#home" className="hover:text-yellow-400 transition">Home</a>
          <a href="#events" className="hover:text-yellow-400 transition">Events</a>
          <a href="#about" className="hover:text-yellow-400 transition">About</a>
          <a href="#contact" className="hover:text-yellow-400 transition">Contact</a>
        </nav>
      </div>

      {/* Hero Content */}
      <div className="text-white max-w-[850px] px-4">
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
      <div className="absolute bottom-[-75px] left-1/2 -translate-x-1/2 w-[90%] max-w-[1100px]">
        <div className="bg-black/70 backdrop-blur-md border border-yellow-400 rounded-2xl shadow-2xl h-[150px] flex justify-around items-center text-white px-6">

          {stats.map((item, index) => (
            <div key={index} className="flex items-center gap-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-yellow-400">{item.value}</h3>
                <p className="text-gray-300 text-sm md:text-base mt-1">{item.label}</p>
              </div>

              {index !== stats.length - 1 && (
                <div className="w-px h-14 bg-yellow-400/40"></div>
              )}
            </div>
          ))}

        </div>
      </div>

    </header>
  );
}

export default Header;
