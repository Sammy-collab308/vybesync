import React from "react";

function CTA() {
  return (
    <section
      className="w-full py-20 px-6 md:px-12 bg-gradient-to-r from-purple-900 via-purple-800 to-purple-900 text-white"
    >
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left Image */}
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=900&q=80"
            alt="Event Spotlight"
            className="rounded-2xl shadow-2xl w-full max-w-md"
          />
        </div>

        {/* Right Content */}
        <div>
          <h2 className="text-4xl font-bold leading-tight">
            Get Exclusive Access <br /> to Upcoming <span className="text-yellow-400">VybeSync</span> Events
          </h2>

          <p className="mt-4 text-gray-300">
            Join our mailing list and be the first to know about concerts,
            festivals, and exclusive city events.
          </p>

          {/* Email Input + Button */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-5 py-3 rounded-lg w-full text-gray-900 outline-none"
            />

            <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-medium shadow-lg transition">
              Subscribe
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

export default CTA;
