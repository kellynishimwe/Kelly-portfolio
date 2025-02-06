import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import Logo from "../assets/logo.png";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(localStorage.getItem("darkMode") === "true");

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-900 text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src={Logo}
            alt="Kelly Portfolio Logo"
            className="h-12 w-12 sm:h-16 sm:w-16 object-contain rounded-full border-2 border-gray-300"
          />
        </Link>

        {/* Hamburger Menu for Mobile */}
        <button
          className="lg:hidden text-2xl p-2 focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? (
            <X className="text-gray-400 hover:text-white transition" />
          ) : (
            <Menu className="text-gray-400 hover:text-white transition" />
          )}
        </button>

        {/* Links */}
        <ul
          className={`absolute lg:static left-0 top-0 w-full lg:w-auto lg:flex lg:items-center lg:space-x-8 bg-gray-900 lg:bg-transparent shadow-md lg:shadow-none transform ${
            isOpen ? "translate-y-0" : "-translate-y-full"
          } lg:translate-y-0 transition-transform duration-300 ease-in-out lg:transition-none`}
        >
          {[
            { name: "Home", path: "/" },
            { name: "About Me", path: "/about" },
            { name: "Contact Me", path: "/contact" },
            { name: "Skills", path: "/skills" },
          ].map((link) => (
            <li key={link.path} className="p-4 lg:p-0">
              <NavLink
                to={link.path}
                onClick={() => setIsOpen(false)} // Close menu on link click
                className={({ isActive }) =>
                  `block lg:inline hover:text-blue-400 ${
                    isActive ? "text-blue-400 font-semibold" : ""
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Dark Mode Toggle */}
        <div className="ml-4 hidden lg:block">
          <button onClick={toggleDarkMode} className="text-2xl">
            {darkMode ? (
              <Sun className="text-yellow-400 hover:text-yellow-500 transition" />
            ) : (
              <Moon className="text-gray-400 hover:text-gray-300 transition" />
            )}
          </button>
        </div>

        {/* Mobile Dark Mode Button */}
        <div className="lg:hidden ml-4">
          <button onClick={toggleDarkMode} className="text-2xl">
            {darkMode ? (
              <Sun className="text-yellow-400 hover:text-yellow-500 transition" />
            ) : (
              <Moon className="text-gray-400 hover:text-gray-300 transition" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
