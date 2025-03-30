import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const navItems = ["Home", "About", "Services", "Contact", "Blog"];

  return (
    <nav className=" bg-gray-900 fixed w-full z-20 top-0 start-0 text-white">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="https://www.freeiconspng.com/uploads/balloon-png-7.png"
            className="h-8"
            alt="Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Balloon Twister
          </span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={handleClick}
          className="md:hidden inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <div
          className={`absolute top-16 left-0 w-full text-white bg-gray-900 shadow-md md:relative md:top-0 md:flex md:items-center md:w-auto md:flex-grow md:justify-center ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-8 p-4 md:p-0 border border-gray-100 rounded-lg bg-gray-900 md:border-0  md:dark:bg-gray-900 dark:border-gray-700 text-white">
            {navItems.map((nav, index) => (
              <li key={index}>
                <NavLink
                  to={nav === "Home" ? "/" : `/${nav.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-700 font-bold"
                      : "text-white block py-2 px-3 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                  }
                >
                  {nav}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Book Now Button (Always Visible & Right-Aligned) */}
        <button
          to="/booking"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 ml-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <Link to="/booking">Book Now</Link>
        </button>
      </div>
    </nav>
  );
}

export default Header;
