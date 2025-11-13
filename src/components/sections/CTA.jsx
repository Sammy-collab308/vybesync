import React from "react";

function CTA() {
  return (
    <section
      id="cta"
      className="relative bg-gradient-to-r from-purple-900 via-purple-800 to-purple-900 text-white py-20 px-6 flex flex-col items-center justify-center text-center overflow-hidden"
    >
      {/* Optional soft overlay for glow effect */}
      <div className="absolute inset-0 bg-purple-900/50 z-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl mx-auto space-y-6">
        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
          Ready to Host Your Next Unforgettable Event?
        </h2>

        <p className="text-purple-200 text-lg">
          Join thousands of organizers using{" "}
          <span className="font-semibold text-white">VybeSync</span> to create,
          manage, and elevate every event experience.
        </p>

        <button className="mt-4 bg-white text-purple-800 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-purple-100 transition-all duration-300">
          Get Started
        </button>
      </div>

      {/* Soft glow at the bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-purple-500/30 blur-3xl rounded-full"></div>
    </section>
  );
}

export default CTA;
