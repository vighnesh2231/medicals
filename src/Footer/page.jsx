import React from "react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200 mt-20 py-10">
      <div className="max-w-[1200px] mx-auto px-4 grid grid-cols-1 sm:grid-cols-4 gap-10">
        <div>
          <h3 className="text-lg font-bold mb-3">Galaxy Medicals</h3>
          <p className="text-sm">Your trusted source for medicines and wellness products.</p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/products" className="hover:text-white">Products</a></li>
            <li><a href="/pharmacists" className="hover:text-white">Pharmacists</a></li>
            <li><a href="/order" className="hover:text-white">Order</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <p className="text-sm">Email: galaxymedicals@gmail.com</p>
          <p className="text-sm">Phone: +1 555 234 5678</p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Address</h4>
          <p className="text-sm">
            Don Line, Nalasopara East,<br />
            Nala Sopara,<br />
            Maharashtra 401209
          </p>
        </div>
      </div>

      <p className="text-center text-xs text-slate-400 mt-10">
        © {new Date().getFullYear()} Galaxy Medicals. All rights reserved.
      </p>
    </footer>
  );
}
