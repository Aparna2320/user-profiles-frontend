import React from "react";
import { Headphones, Bell, User } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center shadow-sm">
      {/* Logo Section */}
      <div className="flex flex-col">
        <div className="border-2 border-black px-6 py-2 inline-block">
          <h1 className="text-xl font-bold tracking-tight">LOGO</h1>
        </div>
        <p className="text-[8px] text-gray-500 mt-0.5 tracking-widest">
          ESTD 2025
        </p>
      </div>

      {/* Icons Section */}
      <div className="flex items-center gap-6">
        <Headphones className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-900" />
        <Bell className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-900" />

        {/* Purple Avatar Icon */}
        <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center hover:bg-purple-200 transition">
          <User className="w-4 h-4 text-purple-600 cursor-pointer" />
        </div>
      </div>
    </header>
  );
}
