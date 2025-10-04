import Header from "../../components/Layout/Header";
import Footer from "../../components/Layout/Footer";
import CardSkeleton from "../../components/Layout/Product/CardSkeleton";
import { FiFilter, FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const HomePage = () => {
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
            <Link
              to="/"
              className="hidden sm:inline-flex rounded-lg border px-3 py-1.5 text-sm"
            >
              <FiSearch className="text-lg" />
              <span>Search</span>
            </Link>
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
        <button className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition">
          Load More
        </button>
      </div>
      {/* Blogs Section */}
      <div className="max-w-6xl mx-auto px-3 py-6 sm:px-5 lg:px-6">
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
      <Footer />
    </div>
  );
};

export default HomePage;
