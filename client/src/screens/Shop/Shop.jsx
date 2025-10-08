import { useState } from "react";
import Header from "../../components/Layout/Header";
import Footer from "../../components/Layout/Footer";
import CardSkeleton from "../../components/Product/CardSkeleton";
import ButtonCustom from "../../components/button/ButtonCustom";
import { FiFilter, FiSearch, FiX } from "react-icons/fi";

const Shop = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="">
      <Header />

      {/* --- Top Section --- */}
      <div className="max-w-6xl mx-auto px-3 py-6 sm:px-5 lg:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-4 mx-2">
          <div className="flex flex-col">
            <div className="flex flex-wrap gap-4 text-gray-600">
              {["All Products", "Women", "Men", "Bag", "Shoes", "Watches"].map(
                (category) => (
                  <button
                    key={category}
                    className="text-sm font-medium hover:text-black transition"
                  >
                    {category}
                  </button>
                )
              )}
            </div>
          </div>

          <div className="flex items-center gap-2 mt-4 md:mt-0">
            <button className="inline-flex items-center rounded-lg border px-3 py-1.5 text-sm hover:bg-gray-100 transition">
              <FiFilter className="text-lg mr-1" />
              <span>Filter</span>
            </button>

            <button
              onClick={() => setIsSearchOpen(true)}
              className="inline-flex items-center rounded-lg border px-3 py-1.5 text-sm hover:bg-gray-100 transition"
            >
              <FiSearch className="text-lg mr-1" />
              <span>Search</span>
            </button>
          </div>
        </div>
      </div>

      {/* --- Product Grid --- */}
      <div className="max-w-6xl mx-auto px-3 py-3 sm:px-5 lg:px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Array.from({ length: 12 }).map((_, i) => (
            <CardSkeleton key={i} />
          ))}
        </div>
        <ButtonCustom
          type="submit"
          className="mt-6 mb-6 block mx-auto px-4 py-2 rounded-lg border"
          onClick={() => console.log("clicked")}
          disabled
        >
          Load More
        </ButtonCustom>
      </div>

      {/* --- Search Modal --- */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white w-11/12 max-w-lg rounded-2xl shadow-xl p-6 relative animate-fade-in">

            <button
              onClick={() => setIsSearchOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-black"
            >
              <FiX size={22} />
            </button>


            <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">
              Search Products
            </h2>

            <div className="flex items-center border rounded-full overflow-hidden shadow-sm">
              <FiSearch className="ml-3 text-gray-500 text-lg" />
              <input
                type="text"
                placeholder="Search for shirts, shoes, bags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-3 py-2 outline-none text-gray-700"
              />
            </div>

            <div className="mt-4 flex flex-wrap justify-center gap-3">
              {["All", "Women", "Men", "Shoes", "Bags", "Accessories"].map(
                (cat) => (
                  <button
                    key={cat}
                    className="px-4 py-1.5 bg-gray-100 rounded-full text-sm hover:bg-gray-200 transition"
                  >
                    {cat}
                  </button>
                )
              )}
            </div>

            <div className="mt-6 flex justify-center">
              <button
                onClick={() => console.log("Searching for:", searchTerm)}
                className="bg-black text-white px-6 py-2 rounded-full text-sm hover:bg-gray-800 transition"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Shop;
