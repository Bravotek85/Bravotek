import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/images/logo.svg";
import SalesIcon from "../../assets/icons/sales.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/services", label: "Services" },
    { path: "/portfolio", label: "Portfolio" },
    { path: "/about-us", label: "About Us" },
    { path: "/contact-us", label: "Contact Us" },
  ];

  return (
    <nav className="bg-[#F7F7F7] shadow-sm fixed w-full z-50">
      <div className="container px-4 sm:px-6 lg:px-[100px]">
        <div className="flex justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-gray-800">
              <img src={Logo} alt="logo" loading="lazy" decoding="async" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path} className="relative group">
                <span
                  className={`${
                    location.pathname === link.path
                      ? "text-text-green"
                      : "text-[#808080] hover:text-text-green text-center font-Satoshi font-normal leading-[24px]"
                  } transition-colors duration-300`}
                >
                  {link.label}
                </span>
                {/* Active Link Dot */}
                {location.pathname === link.path && (
                  <span className="absolute -left-4 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-text-green rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* Contact Button */}
          <div className="hidden md:flex items-center">
            <Link
              to="/contact-us"
              className="bg-transparent border border-text-green flex items-center justify-center py-3 px-6 gap-4 rounded-4xl transition-all duration-300 ease-in-out hover:transform hover:scale-[1.02]"
            >
              <img src={SalesIcon} alt="sales" loading="lazy" decoding="async" />
              <span className="text-base font-normal font-Satoshi text-center leading-[24px] text-text-green  ">Contact sales</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none cursor-pointer"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-6 space-y-4 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`${
                  location.pathname === link.path ? "bg-blue-50 text-text-green" : "text-gray-600 hover:bg-gray-50 hover:text-text-green"
                } block px-3 py-2 rounded-md text-base font-Satoshi font-normal leading-[24px] relative`}
                onClick={() => setIsMenuOpen(false)}
              >
                {location.pathname === link.path && (
                  <span className="absolute left-2 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-text-green rounded-full" />
                )}
                <span className="pl-4">{link.label}</span>
              </Link>
            ))}
            <Link
              to="/contact-us"
              className="bg-transparent border border-text-green flex items-center justify-center py-3 px-6 gap-4 rounded-4xl transition-all duration-300 ease-in-out hover:transform hover:scale-[1.02]"
              onClick={() => setIsMenuOpen(false)}
            >
              <img src={SalesIcon} alt="sales" loading="lazy" decoding="async" />
              <span className="text-base font-normal font-Satoshi text-center leading-[24px] text-text-green  ">Contact sales</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
