import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

        <div>
          <h3 className="text-2xl font-bold text-white mb-4">VybeSync</h3>
          <p className="text-sm leading-relaxed">
            Creating unforgettable live experiences, nightlife events, and
            concerts that bring the city to life.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-4">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-blue-500 cursor-pointer">Events</li>
            <li className="hover:text-blue-500 cursor-pointer">Gallery</li>
            <li className="hover:text-blue-500 cursor-pointer">Tickets</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-blue-500 cursor-pointer">About</li>
            <li className="hover:text-blue-500 cursor-pointer">Contact</li>
            <li className="hover:text-blue-500 cursor-pointer">Support</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-4">Connect</h4>
          <p className="text-sm">hello@vybesync.com</p>
          <p className="text-sm">+254 710 585 065</p>
        </div>

      </div>

      <div className="text-center text-gray-500 text-sm mt-10">
        © {new Date().getFullYear()} VybeSync. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
