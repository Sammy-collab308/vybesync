import heroImage from "../../assets/images/hero-img.jpg";

function Hero() {
  return (
    <section
      id="about"
      className="flex flex-col md:flex-row items-center justify-between max-w-[1200px] mx-auto px-6 py-24 gap-14"
    >
      {/* Left Side Image */}
      <div className="flex-shrink-0 md:w-1/2 flex justify-center">
        <img
          src={heroImage}
          alt="Event celebration"
          width={554}
          height={443}
          className="rounded-2xl shadow-2xl object-cover"
        />
      </div>

      {/* Right Side Text */}
      <div className="text-center md:text-left max-w-lg md:w-1/2">
        <h2 className="text-4xl md:text-5xl font-bold text-purple-600 mb-6 leading-snug">
          Bringing People Together <br /> Through Events
        </h2>

        <p className="text-gray-800 text-[18px] leading-relaxed mb-6 font-medium">
          <span className="font-bold text-purple-700">VybeSync</span> is your one-stop platform for discovering, booking, and managing events that matter most to you.
        </p>

        {/* Bullet Points */}
        <ul className="text-gray-700 text-[17px] leading-relaxed space-y-3 mb-10 md:mb-12">
          <li className="flex gap-3">
            <span className="text-purple-600 text-xl font-bold">•</span>
            Discover concerts, festivals, conferences & private events
          </li>
          <li className="flex gap-3">
            <span className="text-purple-600 text-xl font-bold">•</span>
            Seamless booking experience with secure payments
          </li>
          <li className="flex gap-3">
            <span className="text-purple-600 text-xl font-bold">•</span>
            Personalized event recommendations near you
          </li>
          <li className="flex gap-3">
            <span className="text-purple-600 text-xl font-bold">•</span>
            Designed to bring people together through unforgettable experiences
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Hero;
