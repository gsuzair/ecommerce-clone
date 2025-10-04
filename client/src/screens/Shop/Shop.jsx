import Header from "../../components/Layout/Header";
import Footer from "../../components/Layout/Footer";
import CardSkeleton from '../../components/Product/CardSkeleton';

const Shop = () => {

  return (
    <div className="">
      <Header />
        <div className="max-w-7xl mx-auto px-3 py-3 sm:px-5 lg:px-6">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {Array.from({ length: 12 }).map((_, i) => <CardSkeleton key={i} />)}
            </div>
        </div>
      <Footer />
    </div>
  );
};

export default Shop;
