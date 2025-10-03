import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 text-sm">
          <div className="col-span-2 sm:col-span-1">
            <Link to="/" className="text-lg font-semibold">Bamberg Store</Link>
            <p className="mt-3 text-gray-500">Quality goods, fast shipping.</p>
          </div>

          <div>
            <h3 className="font-medium text-gray-900">Shop</h3>
            <ul className="mt-3 space-y-2 text-gray-600">
              <li><Link to="/shop">All products</Link></li>
              <li><a href="#">New arrivals</a></li>
              <li><a href="#">Sale</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-gray-900">Company</h3>
            <ul className="mt-3 space-y-2 text-gray-600">
              <li><a href="#">About</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-gray-900">Support</h3>
            <ul className="mt-3 space-y-2 text-gray-600">
              <li><a href="#">Help center</a></li>
              <li><a href="#">Shipping</a></li>
              <li><a href="#">Returns</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-gray-900">Follow</h3>
            <ul className="mt-3 space-y-2 text-gray-600">
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">YouTube</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Bamberg Store. All rights reserved.</p>
          <div className="mt-2 sm:mt-0 flex items-center gap-4">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
