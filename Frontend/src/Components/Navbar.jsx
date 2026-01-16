import React, { useState, useEffect } from "react";
import {
  FaHome,
  FaUsers,
  FaCalendarAlt,
  FaTrophy,
  FaEnvelope,
  FaUser,
  FaUserPlus,
  FaBars,
  FaTimes,
  FaProjectDiagram,
} from "react-icons/fa";
import gdg_long from "../Assets/logos/gdg_long.png";
import { Link, useLocation } from "react-router-dom";

const colors = {
  blue: "#4285f4",
  green: "#34a853",
  yellow: "#f9ab00",
  red: "#ea4335",
};

const navLinks = [
  { name: "Home", icon: <FaHome />, color: colors.blue, href: "/" },
  { name: "Team", icon: <FaUsers />, color: colors.green, href: "/team" },
  {
    name: "Events",
    icon: <FaCalendarAlt />,
    color: colors.yellow,
    href: "/events",
  },
  {
    name: "Projects",
    icon: <FaProjectDiagram />,
    color: colors.red,
    href: "/projects",
  },
  {
    name: "Wall of Fame",
    icon: <FaTrophy />,
    color: colors.blue,
    href: "/wall-of-fame",
  },
  {
    name: "Contact Us",
    icon: <FaEnvelope />,
    color: colors.green,
    href: "/contact",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation(); // Hook to get current URL path

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Helper to determine if link is active based on current path
  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg py-2"
          : "bg-white/90 backdrop-blur-sm py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link
            to="/"
            className="cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <img
              src={gdg_long}
              alt="GDG Logo"
              className="h-10 lg:h-12 w-auto"
            />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 group ${
                  isActive(link.href) ? "text-white" : "text-gray-700 hover:text-gray-900"
                }`}
              >
                {/* Active/Hover Background */}
                <div
                  className={`absolute inset-0 rounded-lg transition-all duration-300 z-0 ${
                    isActive(link.href)
                      ? "scale-100 opacity-100 shadow-md"
                      : "scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-10 group-hover:shadow-sm"
                  }`}
                  style={{ backgroundColor: link.color }}
                />
                
                <span className="flex items-center space-x-2 relative z-10">
                  <span
                    className={`transition-all duration-300 ${
                      isActive(link.href) ? "scale-110" : "group-hover:scale-110"
                    }`}
                    style={{
                      color: isActive(link.href) ? "white" : link.color,
                    }}
                  >
                    {link.icon}
                  </span>
                  <span>{link.name}</span>
                </span>
              </Link>
            ))}
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <button
              className="relative px-5 py-2 rounded-full font-bold border-2 transition-all duration-300 hover:scale-105 active:scale-95 overflow-hidden group"
              style={{
                borderColor: colors.blue,
                color: colors.blue,
              }}
            >
              <div
                className="absolute inset-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                style={{ backgroundColor: colors.blue }}
              />
              <span className="flex items-center space-x-2 relative z-10">
                <FaUser className="group-hover:text-white transition-colors" />
                <span className="group-hover:text-white transition-colors">
                  Login
                </span>
              </span>
            </button>

            <button
              className="relative px-5 py-2 rounded-full font-bold text-white transition-all duration-300 hover:scale-105 active:scale-95 shadow-md hover:shadow-lg overflow-hidden group"
              style={{ backgroundColor: colors.green }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <span className="flex items-center space-x-2 relative z-10">
                <FaUserPlus />
                <span>Register</span>
              </span>
            </button>
          </div>

          {/* Mobile / Tablet Hamburger */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              style={{ color: colors.blue }}
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile / Tablet Menu */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isOpen
              ? "max-h-screen opacity-100 py-4"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`flex items-center space-x-4 p-4 rounded-xl font-bold transition-all duration-300 ${
                  isActive(link.href)
                    ? "text-white shadow-lg translate-x-2"
                    : "text-gray-700 hover:bg-gray-50 active:scale-95"
                }`}
                style={{
                  backgroundColor:
                    isActive(link.href) ? link.color : "transparent",
                }}
                onClick={() => setIsOpen(false)}
              >
                <span
                  className="text-xl"
                  style={{
                    color: isActive(link.href) ? "white" : link.color,
                  }}
                >
                  {link.icon}
                </span>
                <span>{link.name}</span>
              </Link>
            ))}

            <div className="pt-4 mt-2 border-t border-gray-100 flex flex-col space-y-3">
              <button
                className="w-full flex items-center justify-center space-x-2 p-4 rounded-xl font-bold border-2 transition-all duration-300 active:scale-95"
                style={{
                  borderColor: colors.blue,
                  color: colors.blue,
                }}
              >
                <FaUser />
                <span>Login</span>
              </button>

              <button
                className="w-full flex items-center justify-center space-x-2 p-4 rounded-xl font-bold text-white transition-all duration-300 active:scale-95 shadow-md"
                style={{ backgroundColor: colors.green }}
              >
                <FaUserPlus />
                <span>Register</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;