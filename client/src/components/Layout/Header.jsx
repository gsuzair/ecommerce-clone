import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b bg-white/80 backdrop-blur">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Left: Brand */}
        <Link to="/" className="text-lg font-semibold tracking-tight">
          Bamberg Store<span className="text-gray-500"></span>
        </Link>

        {/* Center: Nav (desktop) */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link to="/home" className="hover:text-gray-900 text-gray-600">Home</Link>
          <Link to="/shop" className="hover:text-gray-900 text-gray-600">Shop</Link>
          <Link to="/feature" className="hover:text-gray-900 text-gray-600">Features</Link>
          <Link to="/blog" className="hover:text-gray-900 text-gray-600">Blog</Link>
          <Link to="/about" className="hover:text-gray-900 text-gray-600">About</Link>
          <Link to="/contact" className="hover:text-gray-900 text-gray-600">Contact</Link>
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center gap-3">
          <Link to="/cart" className="relative inline-flex items-center rounded-lg border px-3 py-1.5 text-sm">
            Cart
            <span className="ml-2 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-gray-900 text-white text-xs px-1">0</span>
          </Link>
          <Link to="/" className="hidden sm:inline-flex rounded-lg border px-3 py-1.5 text-sm">Sign Up</Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden inline-flex items-center rounded-lg border px-2 py-1.5"
            aria-label="Toggle menu"
            onClick={() => setOpen(v => !v)}
          >
            <span className="i">☰</span>
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {open && (
        <div className="md:hidden border-t bg-white">
          <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-col gap-2 text-sm">
            <Link to="/shop" className="py-1">Shop</Link>
            <a href="#" className="py-1">New</a>
            <a href="#" className="py-1">Sale</a>
            <Link to="/signin" className="py-1">Sign in</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
