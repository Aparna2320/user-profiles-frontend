import React, { useEffect, useState } from "react";
import { Headphones, Bell, User } from "lucide-react";

export default function UserProfilePage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("selectedUser");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  if (!user)
    return (
      <div className="h-screen flex items-center justify-center text-gray-500">
        Loading user data...
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-8 py-4 flex justify-between items-center">
        {/* Logo Box */}
        <div className="flex flex-col items-start">
          <div className="border-2 border-black px-8 py-2 bg-white">
            <h1 className="text-2xl font-bold tracking-tight">LOGO</h1>
          </div>
          <p className="text-[9px] text-gray-600 mt-1 tracking-widest">ESTD 2025</p>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-6 text-gray-600">
          <Headphones className="w-5 h-5 cursor-pointer hover:text-gray-900" />
          <Bell className="w-5 h-5 cursor-pointer hover:text-gray-900" />
          <User className="w-5 h-5 cursor-pointer text-purple-600" />
        </div>
      </div>

      {/* Profile Section */}
      <div className="px-12 py-10">
        <div className="bg-white rounded-xl shadow-sm p-8 flex items-center space-x-8">
          <div className="w-36 h-36 rounded-full bg-purple-100 flex items-center justify-center">
            <User className="w-16 h-16 text-purple-600" />
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">{user.name}</h2>
            <p className="text-gray-600 mt-1">{user.email}</p>
            <p className="text-gray-700 font-medium mt-2">{user.contact}</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-8 flex space-x-4">
          <button className="px-4 py-2 rounded-md bg-purple-100 text-purple-700 font-medium">
            Basic Info
          </button>
          <button className="px-4 py-2 rounded-md bg-gray-100 text-gray-600 font-medium">
            Education & Skills
          </button>
          <button className="px-4 py-2 rounded-md bg-gray-100 text-gray-600 font-medium">
            Experience
          </button>
        </div>

        {/* Basic Info Form */}
        <div className="mt-6 bg-white border rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Basic Details</h3>
