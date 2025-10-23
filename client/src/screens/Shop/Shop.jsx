import { useState } from "react";
import Header from "../../components/Layout/Header";
import Footer from "../../components/Layout/Footer";
import CardSkeleton from "../../components/Product/CardSkeleton";
import ButtonCustom from "../../components/button/ButtonCustom";
import { FiFilter, FiSearch, FiX } from "react-icons/fi";

const Shop = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilters, setSelectedFilters] = useState({
    category: "",
    brand: "",
    size: "",
    color: "",
    rating: "",
    priceRange: [0, 500],
  });

  // Dummy data
  const dummyProducts = Array.from({ length: 12 }).map((_, i) => ({
    id: i + 1,
    name: `Product ${i + 1}`,
    category: i % 2 === 0 ? "Men" : "Women",
    brand: i % 3 === 0 ? "Nike" : "Adidas",
    price: Math.floor(Math.random() * 300 + 50),
    size: ["S", "M", "L"][i % 3],
    color: ["Red", "Black", "Blue"][i % 3],
    rating: [3, 4, 5][i % 3],
  }));

  // Filtering logic
  const filteredProducts = dummyProducts.filter((product) => {
    const { category, brand, size, color, rating, priceRange } = selectedFilters;
    return (
      (!category || product.category === category) &&
      (!brand || product.brand === brand) &&
      (!size || product.size === size) &&
      (!color || product.color === color) &&
      (!rating || product.rating >= rating) &&
      product.price >= priceRange[0] &&
      product.price <= priceRange[1] &&
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const handleFilterChange = (type, value) => {
    setSelectedFilters({ ...selectedFilters, [type]: value });
  };

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
            <button
              onClick={() => setIsFilterOpen(true)}
              className="inline-flex items-center rounded-lg border px-3 py-1.5 text-sm hover:bg-gray-100 transition"
            >
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
          {filteredProducts.length > 0 ? (
            filteredProducts.map((item) => <CardSkeleton key={item.id} />)
          ) : (
            <p className="text-center text-gray-600 col-span-full">
              No products found
            </p>
          )}
        </div>

        <ButtonCustom
          type="submit"
          className="mt-6 mb-6 block mx-auto px-4 py-2 rounded-lg border"
          onClick={() => console.log("clicked")}
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
                    onClick={() => setSearchTerm(cat)}
                  >
                    {cat}
                  </button>
                )
              )}
            </div>

            <div className="mt-6 flex justify-center">
              <button
                onClick={() => setIsSearchOpen(false)}
                className="bg-black text-white px-6 py-2 rounded-full text-sm hover:bg-gray-800 transition"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      )}

      {/* --- Filter Panel --- */}
      {isFilterOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-end z-50">
          <div className="bg-white w-80 h-full p-5 overflow-y-auto shadow-lg animate-slide-left relative">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Filter Products</h2>
              <button
                onClick={() => setIsFilterOpen(false)}
                className="text-gray-500 hover:text-black"
              >
                <FiX size={20} />
              </button>
            </div>

            {/* Category */}
            <div className="mb-4">
              <h3 className="font-medium mb-2">Category</h3>
              {["Men", "Women", "Shoes", "Bags"].map((cat) => (
                <label key={cat} className="block text-sm">
                  <input
                    type="radio"
                    name="category"
                    checked={selectedFilters.category === cat}
                    onChange={() => handleFilterChange("category", cat)}
                    className="mr-2"
                  />
                  {cat}
                </label>
              ))}
            </div>

            {/* Brand */}
            <div className="mb-4">
              <h3 className="font-medium mb-2">Brand</h3>
              {["Nike", "Adidas", "Puma"].map((brand) => (
                <label key={brand} className="block text-sm">
                  <input
                    type="radio"
                    name="brand"
                    checked={selectedFilters.brand === brand}
                    onChange={() => handleFilterChange("brand", brand)}
                    className="mr-2"
                  />
                  {brand}
                </label>
              ))}
            </div>

            {/* Size */}
            <div className="mb-4">
              <h3 className="font-medium mb-2">Size</h3>
              {["S", "M", "L", "XL"].map((size) => (
                <label key={size} className="block text-sm">
                  <input
                    type="radio"
                    name="size"
                    checked={selectedFilters.size === size}
                    onChange={() => handleFilterChange("size", size)}
                    className="mr-2"
                  />
                  {size}
                </label>
              ))}
            </div>

            {/* Color */}
            <div className="mb-4">
              <h3 className="font-medium mb-2">Color</h3>
              {["Red", "Black", "Blue", "White"].map((color) => (
                <label key={color} className="block text-sm">
                  <input
                    type="radio"
                    name="color"
                    checked={selectedFilters.color === color}
                    onChange={() => handleFilterChange("color", color)}
                    className="mr-2"
                  />
                  {color}
                </label>
              ))}
            </div>

            {/* Rating */}
            <div className="mb-4">
              <h3 className="font-medium mb-2">Rating</h3>
              {[5, 4, 3].map((rating) => (
                <label key={rating} className="block text-sm">
                  <input
                    type="radio"
                    name="rating"
                    checked={selectedFilters.rating === rating}
                    onChange={() => handleFilterChange("rating", rating)}
                    className="mr-2"
                  />
                  {rating}★ & above
                </label>
              ))}
            </div>

            {/* Price Range */}
            <div className="mb-6">
              <h3 className="font-medium mb-2">Price Range</h3>
              <input
                type="range"
                min="0"
                max="500"
                value={selectedFilters.priceRange[1]}
                onChange={(e) =>
                  handleFilterChange("priceRange", [0, Number(e.target.value)])
                }
                className="w-full"
              />
              <p className="text-sm text-gray-600 mt-1">
                Up to ${selectedFilters.priceRange[1]}
              </p>
            </div>

            <button
              onClick={() => setIsFilterOpen(false)}
              className="w-full bg-black text-white py-2 rounded-lg text-sm hover:bg-gray-800"
            >
              Apply Filters
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Shop;
