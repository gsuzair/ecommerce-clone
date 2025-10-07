import Header from "../../components/Layout/Header";
import Footer from "../../components/Layout/Footer";
import CardSkeleton from "../../components/Product/CardSkeleton";
import ButtonCustom from '../../components/button/ButtonCustom';
import { useState } from "react";
import { FiFilter, FiSearch, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";



const HomePage = () => {
 
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const slides = [
    { id: 1, title: "Women Collection 2024", image: "/images/slide1.jpg" },
    { id: 2, title: "Men Collection 2024", image: "/images/slide2.jpg" },
    { id: 3, title: "Accessories", image: "/images/slide3.jpg" },
  ];

  const featuredImages = [
    { id: 1, image: "/images/featured1.jpg", title: "New Arrivals" },
    { id: 2, image: "/images/featured2.jpg", title: "Best Sellers" },
    { id: 3, image: "/images/featured3.jpg", title: "Limited Edition" },
  ];

  const blogs = [
    {
      id: 1,
      title: "Summer Fashion Tips",
      snippet: "Learn the top summer fashion trends for 2024...",
      image: "/images/blog1.jpg",
    },
    {
      id: 2,
      title: "Men’s Accessories Guide",
      snippet: "How to style watches, belts, and bags effortlessly...",
      image: "/images/blog2.jpg",
    },
    {
      id: 3,
      title: "Eco-Friendly Materials",
      snippet: "Sustainable fabrics and how they impact the environment...",
      image: "/images/blog3.jpg",
    },
  ];

  return (
    <div className="">
      <Header />
      {/* Hero Slider */}
      <div className="w-full">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop
          className="w-full h-[500px]"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div
                className="relative h-[500px] flex items-center justify-center bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <h2 className="text-white text-3xl font-semibold bg-black/50 px-4 py-2 rounded">
                  {slide.title}
                </h2>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* Featured Images Row */}
      <div className="max-w-6xl mx-auto px-3 py-6 sm:px-5 lg:px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {featuredImages.map((item) => (
          <div
            key={item.id}
            className="relative group overflow-hidden rounded-lg shadow-lg"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 w-full bg-black/40 text-white p-4 text-lg font-semibold">
              {item.title}
            </div>
          </div>
        ))}
      </div>
      <div className="max-w-6xl mx-auto px-3 py-6 sm:px-5 lg:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 mx-2">
          {/* Category Tabs */}
          <div className="flex flex-col">
            <h2 className="text-3xl font-semibold mb-4">Product Overview</h2>
            <div className="flex flex-wrap gap-4 text-gray-600">
              {["All Products", "Women", "Men", "Bag", "Shoes", "Watches"].map(
                (categories) => (
                  <button
                    key={categories}
                    className={`text-sm font-medium hover:text-black`}
                  >
                    {categories}
                  </button>
                )
              )}
            </div>
          </div>
          <div className="flex items-center gap-2 mt-4 md:mt-0">
            <Link
              to="/cart"
              className="relative inline-flex items-center rounded-lg border px-3 py-1.5 text-sm"
            >
              <FiFilter className="text-lg" />
              <span>Filter</span>
            </Link>
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
      <div className="max-w-6xl mx-auto px-3 py-3 sm:px-5 lg:px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {Array.from({ length: 12 }).map((_, i) => (
            <CardSkeleton key={i} />
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-8 mb-8">
        <ButtonCustom
              type="submit"
              className="mt-6 mb-6 block mx-auto px-4 py-2 rounded-lg border"
              onClick={() => console.log('clicked')}
              disabled
            >
              Load More
            </ButtonCustom>
      </div>
      {/* Blogs Section */}
      <div className="max-w-6xl mx-auto px-3 py-6 sm:px-5 lg:px-6 mb-10 mt-10">
        <h2 className="text-3xl font-semibold mb-6">Latest Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div
              key={blog.id}
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
                <p className="text-gray-600 text-sm">{blog.snippet}</p>
                <button className="mt-3 text-blue-600 hover:underline text-sm">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
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

export default HomePage;
