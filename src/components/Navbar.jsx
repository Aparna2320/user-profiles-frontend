import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 px-8 py-4 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center">
        <h1 className="text-2xl font-bold tracking-tight">LOGO</h1>
      </div>

      {/* Icons */}
      <div className="flex items-center space-x-6 text-gray-700 text-xl">
        <i className="fa-solid fa-headphones-simple hover:text-purple-600 cursor-pointer"></i>
        <i className="fa-regular fa-bell hover:text-purple-600 cursor-pointer"></i>
        <i className="fa-regular fa-user hover:text-purple-600 cursor-pointer"></i>
      </div>
    </nav>
  );
}
