import heroImage from "../../assets/images/hero-img.jpg";

function Hero() {
  return (
    <section
      id="about"
      className="flex flex-col md:flex-row items-center justify-between max-w-[1200px] mx-auto px-6 py-24 gap-14"
    >
      {/* Left Side Image */}
      <div className="flex-shrink-0">
        <img
          src={heroImage}
          alt="Event celebration"
          width={554}
          height={443}
          className="rounded-2xl shadow-lg object-cover"
        />
      </div>

      {/* Right Side Text */}
      <div className="text-center md:text-left max-w-lg">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6 leading-snug">
          Bringing People Together <br /> Through Events
        </h2>

        <p className="text-black text-[18px] leading-relaxed mb-6 font-medium">
          Vybe<span className="text-black font-bold">Sync</span> is your one-stop platform for discovering, booking, and managing events that matter most to you.
        </p>

        {/* ✅ Bullet Points */}
        <ul className="text-black text-[17px] leading-relaxed space-y-3 mb-8">
          <li>• Discover concerts, festivals, conferences & private events</li>
          <li>• Seamless booking experience with secure payments</li>
          <li>• Personalized event recommendations near you</li>
          <li>• Designed to bring people together with memorable experiences</li>
        </ul>

  
      </div>
    </section>
  );
}

export default Hero;
