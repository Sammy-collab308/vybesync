import React from "react";

function Events() {
  return (
    <section
      id="events"
      className="flex flex-col md:flex-row items-center justify-between max-w-[1200px] mx-auto px-6 pt-20 pb-1 gap-10"
    >
      {/* Left Text Section */}
      <div className="text-center md:text-left max-w-lg">
        <h2 className="text-4xl font-bold text-blue-600 mb-4">
          Discover the Rhythm of Every Moment
        </h2>

        <p className="text-black text-[1.15rem] leading-relaxed mb-6">
          Experience unforgettable nights filled with music, energy, and pure
          connection. From rooftop sessions to massive festivals, VybeSync brings
          together people who love to celebrate life in style.
        </p>

        <p className="text-black text-[1.1rem] leading-relaxed">
          Stay tuned for upcoming shows, live performances, and exclusive
          events. Wherever the rhythm goes, we follow — and you’re invited to
          be part of the vibe.
        </p>
      </div>

      {/* Right Image */}
      <div className="flex-shrink-0">
        <img
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=60"
          alt="Concert crowd"
          className="rounded-2xl shadow-lg object-cover"
          style={{ width: "520px", height: "420px" }}
        />
      </div>
    </section>
  );
}

export default Events;
