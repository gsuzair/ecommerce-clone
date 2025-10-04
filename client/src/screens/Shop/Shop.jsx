import Header from "../../components/Layout/Header";
import Footer from "../../components/Layout/Footer";
import CardSkeleton from '../../components/Product/CardSkeleton';
import ButtonCustom from '../../components/button/ButtonCustom';

const Shop = () => {

  return (
    <div className="">
      <Header />
        <div className="max-w-7xl mx-auto px-3 py-3 sm:px-5 lg:px-6">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {Array.from({ length: 12 }).map((_, i) => <CardSkeleton key={i} />)}
            </div>
            <ButtonCustom
              type="submit"
              className="mt-6 block mx-auto px-4 py-2 rounded-lg border"
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
