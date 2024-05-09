
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-sky-100 bg-gradient-to-r from-indigo-900 via-purple-400 to-blue-500bg-gradient-to-r from-navy-900 to-cyan-200bg-gradient-to-r from-navy-900 via-cyan-400 to-blue-100bg-gradient-to-br from-gray-200 via-teal-200 to-blue-200bg-gradient-to-br from-teal-200 via-gray-200 to-blue-200bg-gradient-to-br from-gray-300 via-gray-200 to-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <img
              className="w-32"
              src="https://www.ombrulla.com/logo.svg"
              alt=""
            />
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink
                exact
                to="/"
                activeClassName="bg-blue-500"
                className="rounded-md px-3 py-2 font-bold font-sans text-black hover:text-primary"
              >
                Home
              </NavLink>
              <NavLink
                to="/services"
                activeClassName="bg-blue-500"
                className="rounded-md px-3 py-2 font-bold font-sans text-black hover:text-primary"
              >
                Services
              </NavLink>

              <NavLink
                to="/product"
                activeClassName="text-blue"
                className="rounded-md px-3 py-2 font-bold font-sans text-black hover:text-primary"
              >
                Product
              </NavLink>
              <NavLink
                to="/about"
                activeClassName="text-"
                className="rounded-md px-3 py-2 font-bold font-sans text-black hover:text-primary"
              >
                About
              </NavLink>
              <NavLink
                to="/blog"
                activeClassName="text-white"
                className="rounded-md px-3 py-2 font-bold font-sans text-black hover:text-primary"
              >
                Blog
              </NavLink>
              <NavLink
                to="/contact"
                activeClassName="text-white"
                className="rounded-md px-3 py-2 font-bold font-sans text-black hover:text-primary"
              >
                Contact
              </NavLink>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 focus:outline-white focus:text-grey"
            >
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <NavLink
            exact
            to="/"
            activeClassName="text-black"
            className="text-black block px-3 py-2 rounded-md text-base font-normal"
          >
            Home
          </NavLink>
          <NavLink
            to="/services"
            activeClassName="text-white"
            className="text-black block px-3 py-2 rounded-md text-base font-normal"
          >
            Services
          </NavLink>
          <NavLink
            to="/product"
            activeClassName="text-white"
            className="text-black block px-3 py-2 rounded-md text-base font-normal"
          >
            Product
          </NavLink>
          <NavLink
            to="/about"
            activeClassName="text-white"
            className="text-black block px-3 py-2 rounded-md text-base font-normal"
          >
            About
          </NavLink>
          <NavLink
            to="/blog"
            activeClassName="text-white"
            className="text-black block px-3 py-2 rounded-md text-base font-normal"
          >
            Blog
          </NavLink>
          <NavLink
            to="/contact"
            activeClassName="text-white"
            className="text-black block px-3 py-2 rounded-md text-base font-normal"
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
