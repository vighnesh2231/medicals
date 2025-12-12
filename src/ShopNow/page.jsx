import { useState } from "react";
import Navbar from "../navbar/page";
import Footer from "../footer/page";

export default function ShopNow() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    items: "",
  });

  const medicinesList = [
    "Paracetamol",
    "Cough Syrup",
    "Azithromycin",
    "Amoxicillin",
    "Crocin",
    "Cetirizine",
    "Dolo 650",
    "Vitamin C",
    "ORS Powder",
    "Vicks Vaporub",
    "Calpol",
    "Pain Relief Spray",
    "Antacid Gel",
    "Ibuprofen",
  ];

  const [selectedItems, setSelectedItems] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const addItem = (item) => {
    if (!selectedItems.includes(item)) {
      const updated = [...selectedItems, item];
      setSelectedItems(updated);

      const numbered = updated.map((it, i) => `${i + 1}. ${it}`).join("\n");

      setForm({ ...form, items: numbered });
    }
  };

  const removeItem = (index) => {
    const updated = selectedItems.filter((_, i) => i !== index);
    setSelectedItems(updated);

    const numbered = updated.map((it, i) => `${i + 1}. ${it}`).join("\n");

    setForm({ ...form, items: numbered });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order submitted");
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-blue-50 p-6 flex justify-center items-center">
        <div className="w-full max-w-5xl bg-white shadow-xl rounded-2xl p-8 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* FORM SECTION */}
          <div>
            <h1 className="text-3xl font-bold text-blue-700 mb-6">
              Place Your Order
            </h1>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label className="block mb-1 text-sm font-medium text-blue-900">
                  Name
                </label>
                <input
                  name="name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Enter your name"
                  className="w-full border border-blue-300 p-3 rounded-lg bg-blue-50 focus:bg-white focus:outline-blue-500"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block mb-1 text-sm font-medium text-blue-900">
                  Phone Number
                </label>
                <input
                  name="phone"
                  type="number"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="Enter your phone number"
                  className="w-full border border-blue-300 p-3 rounded-lg bg-blue-50 focus:bg-white focus:outline-blue-500"
                />
              </div>

              {/* MEDICINE SELECT DROPDOWN */}
              <div>
                <label className="block mb-1 text-sm font-medium text-blue-900">
                  Select Medicines
                </label>

                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setShowDropdown(!showDropdown)}
                    className="w-full border border-blue-300 p-3 rounded-lg bg-blue-50 text-left"
                  >
                    Choose medicines
                  </button>

                  {showDropdown && (
                    <div className="absolute z-20 bg-white border border-blue-300 rounded-lg mt-1 w-full max-h-48 overflow-y-auto shadow-lg">
                      {medicinesList.map((med, i) => (
                        <div
                          key={i}
                          onClick={() => addItem(med)}
                          className="p-2 cursor-pointer hover:bg-blue-100"
                        >
                          {med}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* SELECTED ITEMS BOX (DELETE SUPPORT) */}

              {/* SUBMIT */}
              <button
                type="submit"
                className="w-full bg-blue-700 text-white p-3 rounded-lg font-medium mt-2"
              >
                Submit Order
              </button>
            </form>
          </div>

          {/* IMAGE */}
          <div>
            <h1 className="text-3xl font-bold text-blue-700 mb-13">
              Selected Medicines
            </h1>

            <div className="border border-blue-300 rounded-lg bg-blue-50 p-3 space-y-2 min-h-[100px]">
              {selectedItems.length === 0 && (
                <p className="text-gray-500 text-sm">No items added yet</p>
              )}

              {selectedItems.map((item, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center bg-white border border-blue-300 rounded-lg p-2"
                >
                  <span className="text-blue-900">
                    {i + 1}. {item}
                  </span>

                  <button
                    onClick={() => removeItem(i)}
                    className="text-red-600 font-bold px-2"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
