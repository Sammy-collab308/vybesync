import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules"; // ✅ include Navigation for arrows
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// 🖼️ Import local images
import feature1 from "../../assets/images/feature1.jpg";
import feature2 from "../../assets/images/feature2.jpg";
import feature3 from "../../assets/images/feature3.jpg";
import feature4 from "../../assets/images/feature4.jpg";
import feature5 from "../../assets/images/feature5.jpg";
import feature6 from "../../assets/images/feature6.jpg";
import feature7 from "../../assets/images/feature7.jpg";

// Event data (image + name)
const events = [
  { img: feature1, name: "Summer Vibes Festival" },
  { img: feature2, name: "Midnight Groove Party" },
  { img: feature3, name: "Beach Bash Weekend" },
  { img: feature4, name: "Urban Night Live" },
  { img: feature5, name: "VybeSync VIP Lounge" },
  { img: feature6, name: "Glow Fest Nairobi" },
  { img: feature7, name: "Sunset Sessions" },
];

function Features() {
  return (
    <section
      id="features"
      className="flex flex-col md:flex-row items-center justify-between max-w-[1200px] mx-auto px-6 pt-1 pb-20 gap-1"
    >
      {/* Left Side - Text */}
      <div className="text-center md:text-left max-w-lg">
        <h2 className="text-4xl font-bold text-blue-600 mb-4">
          Elevating Your Event Experience
        </h2>

        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          From massive concerts to exclusive VIP parties, we bring the energy,
          crowd, and unforgettable atmosphere. Your event becomes a moment
          people talk about for years.
        </p>

        <p className="text-gray-600 text-md leading-relaxed">
          We believe every moment deserves to be celebrated in style — with
          music, lights, and a vibe that connects people together.
        </p>
      </div>

      {/* Right Side - Image Slider */}
      <div className="w-full md:w-[600px] relative">
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={16}
          loop={true}
          pagination={{ clickable: true }}
          navigation={true} // ✅ enables next/prev arrows
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="rounded-xl"
        >
          {events.map((event, i) => (
            <SwiperSlide key={i}>
              <div className="relative">
                <img
                  src={event.img}
                  alt={event.name}
                  className="rounded-xl object-cover w-full h-[320px] md:h-[380px]"
                  loading="lazy"
                />
                {/* Overlay with event name */}
                <div className="absolute inset-0 bg-black/40 rounded-xl flex items-end justify-center">
                  <h3 className="text-white text-lg md:text-xl font-semibold mb-4 px-4 text-center">
                    {event.name}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Features;
