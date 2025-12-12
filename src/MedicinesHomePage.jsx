"use client";
import { useState, useEffect } from "react";
import Navbar from "./navbar/page";
import Footer from "./footer/page";

export default function MedicinesHomePage() {
  const heroSlides = [
    { image: "img-1.jpg", title: "Reliable Medicines You Can Trust", text: "Find essential treatments and health products with ease." },
    { image: "img-2.jpg", title: "Fast and Accurate Delivery", text: "Get your prescriptions delivered quickly and safely." },
    { image: "img-3.jpg", title: "Expert Pharmaceutical Support", text: "Licensed pharmacists ready to guide you on proper medication use." },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setIndex(prev => (prev + 1) % heroSlides.length), 3500);
    return () => clearInterval(interval);
  }, []);

  const categories = [
    { name: "Pain Relief", image: "pain.jpg" },
    { name: "Vitamins", image: "vitamins.jpg" },
    { name: "Cold and Flu", image: "Cold.jpg" },
    { name: "Skin Care", image: "Skin Care.jpg" },
    { name: "Digestive Health", image: "Digestive.jpg" },
    { name: "Allergy Relief", image: "Allergy Relief.jpg" },
  ];

  const pharmacists = [
    { name: "Dr. Pooja Patil", specialty: "Pharmacist", image: "p1.jpg" },
    { name: "Dr. Abhi Patil", specialty: "Pharmacist", image: "p2.jpg" },
    { name: "Dr. Dips Choudhari", specialty: "Pharmaceutical Consultant", image: "p3.jpg" },
  ];

  const illnessProducts = [
    { name: "Fever Tablets", image: "fever.jpg" },
    { name: "Cough Syrup", image: "cough.jpg" },
    { name: "Cold Tablets", image: "coldtabs.jpg" },
    { name: "Pain Tablets", image: "pain2.jpg" },
    { name: "Allergy Syrup", image: "allergysyrup.jpg" },
    { name: "Acidity Tablets", image: "acidity.jpg" },
    { name: "Stomach Pain Syrup", image: "stomachsyrup.jpg" },
    { name: "Vomiting Tablets", image: "vomit.jpg" },
    { name: "Throat Infection Syrup", image: "throat.jpg" },
    { name: "Headache Tablets", image: "headache.jpg" },
    { name: "Migraine Tablets", image: "migraine.jpg" },
    { name: "Loose Motion Syrup", image: "loosemotion.jpg" },
    { name: "Skin Infection Cream", image: "skincream.jpg" },
    { name: "Ear Pain Drops", image: "eardrops.jpg" },
    { name: "Eye Infection Drops", image: "eyedrops.jpg" },
    { name: "Weakness Syrup", image: "weakness.jpg" },
    { name: "Immunity Booster", image: "immunity.jpg" },
    { name: "Body Ache Oil", image: "bodyache.jpg" },
  ];

  return (
    <>
      <Navbar />

      <main className="max-w-[1200px] mx-auto p-4 space-y-16">

        {/* Hero Section */}
        <div className="relative w-full h-[380px] rounded-2xl overflow-hidden shadow-lg">
          <img src={heroSlides[index].image} alt="Hero Slide" className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex flex-col justify-center p-8 text-gray-600 max-w-lg">
            <h2 className="text-3xl font-bold mb-3">{heroSlides[index].title}</h2>
            <p className="text-base mb-6">{heroSlides[index].text}</p>
            <a href="/Shop_now" className="bg-blue-700 px-5 py-2 rounded-full text-sm font-bold hover:bg-blue-800 transition w-fit text-white">Shop Now</a>
          </div>
        </div>

        {/* Product Categories */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Product Categories</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {categories.map((cat, i) => (
              <div key={i} className="bg-white shadow hover:shadow-lg rounded-xl p-3 transition text-center">
                <div className="w-full h-36 rounded-lg overflow-hidden mb-3">
                  <img src={cat.image} alt={cat.name} className="w-full h-full object-cover" />
                </div>
                <p className="text-sm font-semibold text-slate-900">{cat.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Illness Products */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Common Illness Medicines</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
            {illnessProducts.map((item, i) => (
              <div key={i} className="bg-white shadow rounded-xl p-3 hover:shadow-lg transition text-center">
                <div className="w-full h-32 rounded-lg overflow-hidden mb-3">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <p className="text-sm font-semibold text-slate-900">{item.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Order Section */}
        <section className="bg-blue-50 p-8 rounded-xl flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">Order Your Medicines</h2>
            <p className="text-slate-700 mb-6 max-w-md">
              Place an order for the medicines you need. We offer both home delivery and in-store pickup.
            </p>
            <a href="/order" className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 text-sm font-bold">Start Now</a>
          </div>
          <img src="/medicines.jpg" alt="Order Medicines" className="max-w-full rounded-lg h-[260px] object-cover" />
        </section>

        {/* Pharmacists */}
        <section>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-slate-900">Our Pharmacists</h2>
            <a href="/pharmacists" className="text-white font-bold bg-blue-600 px-4 py-2 rounded text-sm hover:bg-blue-700">View All</a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {pharmacists.map((ph, i) => (
              <div key={i} className="bg-slate-50 p-6 rounded-lg text-center shadow">
                <img src={ph.image} alt={ph.name} className="w-32 h-32 mx-auto rounded-full object-cover mb-4" />
                <p className="font-semibold text-slate-900">{ph.name}</p>
                <p className="text-sm text-slate-600">{ph.specialty}</p>
              </div>
            ))}
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
