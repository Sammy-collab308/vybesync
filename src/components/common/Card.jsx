import React from "react";

function Card({ image, title, date, location }) {
  return (
    <div className="min-w-[260px] max-w-[260px] bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition cursor-pointer">
      <img
        src={image}
        alt={title}
        className="w-full h-[180px] object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-blue-600">{title}</h3>
        <p className="text-gray-600 text-sm mt-1">{date}</p>
        <p className="text-gray-500 text-sm">{location}</p>
      </div>
    </div>
  );
}

export default Card;
