import React, { useState } from "react";
import { Link } from "react-router-dom";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Projects", path: "/projects" },
  { label: "Services", path: "/services" },
  { label: "Contact", path: "/contact" },
  { label: "Client Portal", path: "/client-portal" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 w-full z-50 bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 backdrop-blur bg-opacity-80 shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src="/images/WS-Symbol.png" alt="WildStone Solutions Logo" className="h-9 w-9" />
          <span className="text-xl font-bold text-zinc-100 font-serif tracking-tight hidden md:inline">WildStone Solutions</span>
        </Link>
        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.path}
              className="text-zinc-100 hover:text-white font-medium transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex items-center text-zinc-100 hover:text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex justify-center w-full absolute left-0 right-0 top-16 z-40 animate-fade-in">
          <div className="bg-zinc-900/50 rounded-xl shadow-lg mt-2 w-11/12 max-w-md flex flex-col items-center py-8 px-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                className="text-zinc-100 hover:text-blue-400 font-bold text-xl py-3 transition-colors text-center w-full"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Add fade-in animation */}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease;
        }
      `}</style>
    </nav>
  );
};

export default Navbar; 