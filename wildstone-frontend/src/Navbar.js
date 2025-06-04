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
          <span className="text-xl font-bold text-zinc-100 font-serif tracking-tight">WildStone Solutions</span>
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
        <div className="md:hidden bg-zinc-900/95 px-4 pb-4 pt-2 flex flex-col gap-2 border-b border-zinc-800">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.path}
              className="text-zinc-100 hover:text-white font-medium py-2 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar; 