import { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import { Transition } from "@headlessui/react";
import {  FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BiLogoFacebookCircle } from "react-icons/bi";





const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const mobileMenuRef = useRef(null)

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-slate-400 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 t">
        <div className="flex items-center justify-between h-16">
          <div>
            <h1 className="text-white text-2xl font-bold">Jubayer</h1>
          </div>
          <div className="flex items-center ">
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <NavLink
                  exact="true"
                  to="/"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </NavLink>
                <NavLink
                  to="/about"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  About
                </NavLink>
                <NavLink
                  to="/services"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Services
                </NavLink>
                <NavLink
                  to="/contact"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Contact
                </NavLink>
                <div>
                  <button className="btn btn-primary ">Resume</button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:hidden">
            <button
              onClick={toggleNavbar}
              type="button"
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen ? "true" : "false"}
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
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
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Close icon */}
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
          <div className="hidden md:block ">
            <div className="flex flex-row gap-4">
              <BiLogoFacebookCircle size={26}></BiLogoFacebookCircle>
              <FaLinkedinIn size={26}></FaLinkedinIn>
              <FaGithub size={26}></FaGithub>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      <Transition
        show={isOpen}
        enter="transition ease-out duration-300 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-300 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-50 scale-95"
      >
        {() => (
          <div
            ref={mobileMenuRef}
            className="md:hidden transition-all duration-300 ease-in-out"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <NavLink
                exact="true"
                to="/"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                About
              </NavLink>
              <NavLink
                to="/services"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Services
              </NavLink>
              <NavLink
                to="/contact"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Contact
              </NavLink>
              <div>
                <button className="btn btn-primary">RESUME</button>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
};

export default Navbar;