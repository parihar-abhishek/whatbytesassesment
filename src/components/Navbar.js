

import { useEffect, useState } from "react";
import Link from "next/link"; // Importing Link from Next.js
import { FaUserCircle, FaBars, FaTimes } from "react-icons/fa"; // Importing the user and hamburger icons
import { RiBarChartFill } from "react-icons/ri"; // Importing Bar Chart Icon
import { SlBadge } from "react-icons/sl"; // Importing Badge Icon
import { LuNewspaper } from "react-icons/lu"; // Importing Newspaper Icon
import { usePathname } from 'next/navigation'; // Hook to get the current pathname

export default function Navbar() {
  const pathname = usePathname(); // Get the current pathname

  // Function to apply styles based on the active link
  const linkStyles = (path) =>
    `flex items-center p-2 rounded-full ${
      pathname === path ? 'text-blue-700' : 'hover:text-blue-700'
    }`;

  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for dropdown menu visibility

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close the dropdown menu when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      const dropdown = document.getElementById("dropdown-menu");
      if (dropdown && !dropdown.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup event listener on unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative flex items-center justify-between px-6 py-4 border-b border-gray-300">
      {/* Left side - Hamburger Icon or Close Icon */}
      <div className="flex items-center">
        {/* Show Hamburger Icon when menu is closed */}
        {!isMenuOpen ? (
          <FaBars className="text-2xl md:hidden cursor-pointer" onClick={toggleMenu} />
        ) : (
          // Show Close Icon when menu is open
          <FaTimes className="text-2xl md:hidden cursor-pointer" onClick={toggleMenu} />
        )}

        {/* Company Name for larger screens */}
        <h1 className="text-2xl font-bold hidden md:block">WhatBytes</h1>
      </div>

      {/* Right side - User Icon and Username visible only when hamburger icon is displayed */}
      <div className="flex flex-col items-center md:hidden">
        <FaUserCircle className="text-3xl ml-4 cursor-pointer" />
        <span className="text-sm font-semibold text-gray-700 mt-1">Abhishek</span> {/* Username */}
      </div>

      {/* Links on the right side of the navbar */}
      <div className="hidden md:flex space-x-4">
        <Link href="/dashboard" className={`${linkStyles('/dashboard')} font-bold`}>Dashboard</Link>
        <Link href="/skill-test" className={`${linkStyles('/skill-test')} font-bold`}>Skill Test</Link>
        <Link href="/internship" className={`${linkStyles('/internship')} font-bold`}>Internship</Link>
      </div>

      {/* Dropdown Menu for mobile view */}
      {isMenuOpen && (
        <div
          id="dropdown-menu"
          className="fixed top-0 left-0 w-1/2 h-full bg-white bg-opacity-80 shadow-lg z-10"
        >
          <ul className="flex flex-col p-4 mt-16">
            <li className="flex items-center py-2">
              <RiBarChartFill className="mr-2" size={24} />
              <Link href="/dashboard" className={`${linkStyles('/dashboard')} font-bold`}>Dashboard</Link> {/* Bold text */}
            </li>
            <li className="flex items-center py-2">
              <SlBadge className="mr-2" size={24} />
              <Link href="/" className={`${linkStyles('/skill-test')} font-bold`}>Skill Test</Link> {/* Bold text */}
            </li>
            <li className="flex items-center py-2">
              <LuNewspaper className="mr-2" size={24} />
              <Link href="/internship" className={`${linkStyles('/internship')} font-bold`}>Internship</Link> {/* Bold text */}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
