import React from "react";

const events = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1485217988980-11786ced9454?auto=format&fit=crop&w=800&q=80",
    title: "Nairobi Night Festival",
    date: "Dec 21 · Nairobi",
    price: "$50",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80",
    title: "Coastal Beach Rave",
    date: "Jan 4 · Mombasa",
    price: "$40",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=800&q=80",
    title: "Hip-Hop Live Session",
    date: "Jan 12 · Thika",
    price: "$30",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1506784365847-bbad939e9335?auto=format&fit=crop&w=800&q=80",
    title: "Lakeside Sundowner",
    date: "Jan 18 · Kisumu",
    price: "$45",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=800&q=80",
    title: "Urban Trap Takeover",
    date: "Jan 25 · Eldoret",
    price: "$35",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1500835556837-99ac94a94552?auto=format&fit=crop&w=800&q=80",
    title: "Summer Vibes Festival",
    date: "Feb 2 · Nakuru",
    price: "$60",
  },
];

function Fom() {
  return (
    <section id="events" className="max-w-[1200px] mx-auto px-6 py-20">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-blue-600 mb-3">
          Upcoming Live Events
        </h2>
        <p className="text-gray-600 text-lg">
          Discover unforgettable concerts, parties, and nightlife experiences near you.
        </p>
      </div>

      {/* Event Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {events.map((event) => (
          <div
            key={event.id}
            className="rounded-xl overflow-hidden shadow-md hover:scale-[1.02] transition"
          >
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-60 object-cover"
            />
            <div className="p-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-lg text-gray-800">{event.title}</h3>
                <button className="bg-blue-600 text-white font-bold px-3 py-1 rounded-full hover:bg-blue-700 transition">
                  + Buy
                </button>
              </div>
              <p className="text-gray-500 text-sm mt-1">{event.date}</p>
              <p className="text-gray-700 font-semibold mt-1">{event.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Fom;
