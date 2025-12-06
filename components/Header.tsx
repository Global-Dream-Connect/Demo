"use client";

import { useState } from 'react';
import Image from 'next/image';
import BlueBtn from './utils/BlueBtn';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='py-4 px-2 md:px-4 flex flex-wrap justify-between items-center'>

      {/* Logo */}
      <div className='flex ml-4 md:ml-10 lg:ml-20 w-full md:w-auto justify-between md:justify-start'>
        <div className='flex'>
          <div>
            <Image 
              src="Images/Logo.svg"
              alt="Company's blue G logo"
              width={60}
              height={60}
              className='w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16'
            />
          </div>

          <div className='flex flex-col ml-2 md:ml-3'>
            <div className='text-[18px] md:text-[20px] lg:text-[24px] text-[#070750] font-bold pt-1 md:pt-2'>
              Global Dreams Connect
            </div>

            <div className='text-[12px] md:text-[13px] lg:text-[14px] pl-px mt-[-5px] text-[#767676]'>
              Fresh Minds, Global Futures...
            </div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className='md:hidden mr-4'>
          <button 
            onClick={toggleMenu}
            className='text-[#070750] text-2xl focus:outline-none'
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Desktop Menu - Always visible on md and above */}
      <div className='hidden md:flex flex-wrap md:mr-10 lg:mr-20 items-center w-full md:w-auto mt-4 md:mt-0'>
        <ul className='flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-10 text-[#A1A1A1] text-[14px] md:text-[15px] items-center w-full md:w-auto'>
          <li><a href="#" className='hover:text-[#070750] transition-colors'>Home</a></li>
          <li><a href="#" className='hover:text-[#070750] transition-colors'>Resources</a></li>
          <li><a href="#" className='hover:text-[#070750] transition-colors'>Fellowship</a></li>
          <li><a href="#" className='hover:text-[#070750] transition-colors'>How it works</a></li>
          <li><a href="#" className='hover:text-[#070750] transition-colors'>Become a mentor</a></li>
        </ul>

        <div className='mt-4 md:mt-0 md:ml-6 lg:ml-8 w-full md:w-auto'>
          <BlueBtn text="Sign up"  />
        </div>
      </div>

      {/* Mobile Menu - Only shows when isMenuOpen is true */}
      {isMenuOpen && (
        <div className='md:hidden w-full mt-4 animate-fadeIn'>
          <ul className='flex flex-col gap-6 text-[#A1A1A1] text-[16px] items-center w-full'>
            <li><a href="#" className='hover:text-[#070750] transition-colors py-2'>Home</a></li>
            <li><a href="#" className='hover:text-[#070750] transition-colors py-2'>Resources</a></li>
            <li><a href="#" className='hover:text-[#070750] transition-colors py-2'>Fellowship</a></li>
            <li><a href="#" className='hover:text-[#070750] transition-colors py-2'>How it works</a></li>
            <li><a href="#" className='hover:text-[#070750] transition-colors py-2'>Become a mentor</a></li>
          </ul>

          <div className='mt-6 w-full flex justify-center'>
            <BlueBtn text="Sign up"  />
          </div>
        </div>
      )}
    </nav>
  )
}

export default Header;