import { useState } from "react";
import { Menu } from "lucide-react";
import NavLinks from "./NavLinks";
import SearchBar from "./SearchBar";
import DarkModeToggle from "./DarkModeToggle";
import MobileMenu from "./MobileMenu";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-sky-200 to-sky-300 shadow-md dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-xl font-bold text-black dark:text-white">
              Easy Drive
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <NavLinks />
            <SearchBar />
            <DarkModeToggle />
            <Link  to={"/login"} className="bg-teal-500 text-white px-4 py-1 rounded-md shadow hover:bg-teal-600">
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-gray-200 focus:outline-none"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isOpen} />
    </nav>
  );
}
