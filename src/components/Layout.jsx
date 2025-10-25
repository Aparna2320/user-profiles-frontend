import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Dark top bar */}
      <div className="bg-black text-white px-4 py-2 text-sm">
        Add User
      </div>

      {/* Header with logo and icons */}
      <Header />

      {/* Navbar if needed */}
      <Navbar />

      {/* Page content */}
      <main className="p-6">{children}</main>
    </div>
  );
}
