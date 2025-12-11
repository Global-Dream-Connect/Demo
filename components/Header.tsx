"use client";

import { useState } from "react";
import Image from "next/image";
import BlueBtn from "./utils/BlueBtn";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Add this

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname(); // Track current route

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

<<<<<<< Updated upstream
  return (
    <nav className='py-[16px] px-[8px] md:px-4 flex flex-wrap justify-between items-center'>
=======
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
>>>>>>> Stashed changes

  // Navigation items
  const navItems = [
    { name: "Home", href: "/" },
    { name: "Resources", href: "/resources" },
    { name: "Fellowship", href: "/fellowship" },
    { name: "How it works", href: "/how-it-works" },
    { name: "Become a mentor", href: "/become-a-mentor" },
  ];

  // Check if a link is active
  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <nav
      className="py-4 px-2 md:px-4 flex flex-wrap justify-between items-center sticky top-0 bg-white z-50 shadow-sm"
      aria-label="Main navigation"
    >
      {/* Logo */}
      <div className="flex ml-4 md:ml-10 lg:ml-20 w-full md:w-auto justify-between md:justify-start items-center">
        <Link
          href="/"
          className="flex items-center hover:opacity-90 transition-opacity"
          onClick={closeMenu}
        >
          <div>
            <Image
              src="/Images/Logo.svg"
              alt="Company's blue G logo"
              width={60}
              height={60}
              className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16"
              priority
            />
          </div>

<<<<<<< Updated upstream
          <div className='flex flex-col ml-2 md:ml-3'>
            <div className='text-[18px] md:text-[20px] lg:text-[24px] text-[#070750] font-[700] pt-1 md:pt-2'>
              Global Dreams Connect
            </div>

            <div className='text-[12px] md:text-[13px] lg:text-[14px] pl-[1px] mt-[-5px] text-[#767676]'>
=======
          <div className="flex flex-col ml-2 md:ml-3">
            <div className="text-[18px] md:text-[20px] lg:text-[24px] text-[#070750] font-bold pt-1 md:pt-2 leading-tight">
              Global Dreams Connect
            </div>

            <div className="text-[12px] md:text-[13px] lg:text-[14px] pl-px mt-[-5px] text-[#767676] leading-tight">
>>>>>>> Stashed changes
              Fresh Minds, Global Futures...
            </div>
          </div>
        </Link>

        {/* Mobile Menu Button */}
        <div className="md:hidden mr-4">
          <button
            onClick={toggleMenu}
            className="text-[#070750] text-2xl focus:outline-none p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Desktop Menu - Always visible on md and above */}
      <div className="hidden md:flex flex-wrap md:mr-10 lg:mr-20 items-center w-full md:w-auto mt-4 md:mt-0">
        <ul className="flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-10 text-[#A1A1A1] text-[14px] md:text-[15px] items-center w-full md:w-auto">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={`hover:text-[#070750] transition-colors ${
                  isActive(item.href)
                    ? "text-[#070750] font-medium"
                    : "text-[#A1A1A1]"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

<<<<<<< Updated upstream
        <div className='mt-4 md:mt-0 md:ml-6 lg:ml-8 w-full md:w-auto'>
          <BlueBtn text="Sign up" className='w-full md:w-auto' />
=======
        <div className="mt-4 md:mt-0 md:ml-6 lg:ml-8 w-full md:w-auto">
          <Link href="/auth/signup">
            <BlueBtn text="Sign up" />
          </Link>
>>>>>>> Stashed changes
        </div>
      </div>

      {/* Mobile Menu - Only shows when isMenuOpen is true */}
      <div
        id="mobile-menu"
        className={`md:hidden w-full overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-[500px] mt-4" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-2 text-[#A1A1A1] text-[16px] items-center w-full">
          {navItems.map((item) => (
            <li key={item.name} className="w-full text-center">
              <Link
                href={item.href}
                onClick={closeMenu}
                className={`block hover:text-[#070750] transition-colors py-3 px-4 rounded-lg ${
                  isActive(item.href)
                    ? "text-[#070750] font-medium bg-blue-50"
                    : "text-[#A1A1A1] hover:bg-gray-50"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}

<<<<<<< Updated upstream
          <div className='mt-6 w-full flex justify-center'>
            <BlueBtn text="Sign up" className='w-full max-w-[200px]' />
          </div>
        </div>
      )}
=======
          <li className="w-full text-center mt-4">
            <Link
              href="/auth/signup"
              onClick={closeMenu}
              className="block w-full"
            >
              <BlueBtn text="Sign up" />
            </Link>
          </li>
        </ul>
      </div>
>>>>>>> Stashed changes
    </nav>
  );
}

export default Header;
