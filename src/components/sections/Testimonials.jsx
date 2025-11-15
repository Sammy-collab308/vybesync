import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Josh Smith",
    role: "Event Manager at The New Times",
    image:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=200&q=80",
    text: "They have a perfect touch for making event management look effortless and enjoyable. Truly top-notch!",
  },
  {
    id: 2,
    name: "Samantha Ray",
    role: "Concert Organizer",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=200&q=80",
    text: "VybeSync made my event management seamless and stress-free. Everything just worked perfectly!",
  },
  {
    id: 3,
    name: "Michael Lee",
    role: "Festival Director",
    image:
      "https://images.unsplash.com/photo-1603415526960-f7e0328f2b5d?auto=format&fit=crop&w=200&q=80",
    text: "From planning to ticketing, VybeSync transformed the way we organize events. Highly recommend!",
  },
];

function Testimonial() {
  const [index, setIndex] = React.useState(0);
  const nextTestimonial = () =>
    setIndex((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () =>
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const testimonial = testimonials[index];

  return (
    <section
      id="testimonials"
      className="flex flex-col md:flex-row items-center justify-between max-w-[1200px] mx-auto px-6 py-20 gap-10"
    >
      {/* Left Content */}
      <div className="max-w-md space-y-5">
         <h2 className="text-4xl md:text-5xl font-bold text-purple-600 mb-6 leading-snug">
          What People Are Saying About Us
        </h2>

        <div className="flex items-center gap-4 mt-4">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-14 h-14 rounded-full object-cover border border-gray-200"
          />
          <div>
            <h3 className="font-semibold text-gray-800">{testimonial.name}</h3>
            <p className="text-sm text-gray-500">{testimonial.role}</p>
          </div>
        </div>

        <p className="text-gray-600 leading-relaxed italic transition-opacity duration-500">
          “{testimonial.text}”
        </p>

        {/* Arrows */}
        <div className="flex gap-3 mt-6">
          <button
            onClick={prevTestimonial}
            className="p-2 rounded-full bg-gray-200 hover:bg-blue-600 hover:text-white transition"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextTestimonial}
            className="p-2 rounded-full bg-gray-200 hover:bg-blue-600 hover:text-white transition"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Right Concert Image */}
      <div className="flex-shrink-0 w-full md:w-[500px] h-[320px] rounded-2xl overflow-hidden shadow-md">
        <img
          src="https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?auto=format&fit=crop&w=1000&q=80"
          alt="Concert crowd enjoying live performance"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}

export default Testimonial;
