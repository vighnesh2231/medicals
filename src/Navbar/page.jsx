import React from "react";

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-[1200px] mx-auto px-4 py-3 flex items-center justify-between">
        <a href="/" className="text-xl font-bold text-blue-700">GALAXY MEDS</a>
        <div className="hidden sm:flex gap-6 text-slate-700 text-sm font-medium">
          <a href="/" className="hover:text-blue-700">Home</a>
          <a href="/products" className="hover:text-blue-700">Products</a>
          <a href="/pharmacists" className="hover:text-blue-700">Pharmacists</a>
          <a href="/order" className="hover:text-blue-700">Order</a>
        </div>
      </div>
    </nav>
  );
}
