import Header from "../../components/Layout/Header";
import Footer from "../../components/Layout/Footer";
import CardSkeleton from '../../components/Layout/Product/CardSkeleton';
import ButtonCustom from '../../components/button/ButtonCustom';
import { FiFilter, FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";



const Shop = () => {

  return (
    <div className="">
      <Header />
      <div className="max-w-6xl mx-auto px-3 py-6 sm:px-5 lg:px-6">
      <div className="flex flex-col md:flex-row justify-between items-center mb-4 mx-2">
       <div className="flex flex-col">
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
           <Link to="/cart" className="relative inline-flex items-center rounded-lg border px-3 py-1.5 text-sm">
             <FiFilter className="text-lg" />
            <span>Filter</span>
          </Link>
          <Link to="/" className="hidden sm:inline-flex rounded-lg border px-3 py-1.5 text-sm">
           <FiSearch className="text-lg" />
           <span>Search</span>
          </Link>
        </div>
      </div>
      </div>
         <div className="max-w-6xl mx-auto px-3 py-3 sm:px-5 lg:px-6">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {Array.from({ length: 12 }).map((_, i) => <CardSkeleton key={i} />)}
            </div>
            <ButtonCustom
              type="submit"
              className="mt-6 mb-6 block mx-auto px-4 py-2 rounded-lg border"
              onClick={() => console.log('clicked')}
              disabled
            >
              Load More
            </ButtonCustom>

        </div>
      <Footer />
    </div>
  );
};

export default Shop;
