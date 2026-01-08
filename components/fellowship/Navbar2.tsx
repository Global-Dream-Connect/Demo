// “This is the pre-login navbar. If needed, you can uncomment it in app/fellowships/page.tsx.”
'use client';

import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';
import Image from 'next/image';
import { usePathname } from 'next/navigation'; 

const Navbar = () => {
  const pathname = usePathname(); // ← Gets current URL path
  const [open, setOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'How it works', href: '/how-it-works' },
    { label: 'Resources', href: '/resources' },
    { label: 'Fellowship', href: '/fellowships' },
    { label: 'Scholarships', href: '/scholarships' },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            <Image
              src="/Images/Logo.svg"
              alt="Global Dreams Connect logo"
              width={60}
              height={60}
              className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16"
            />
            <div className="ml-3">
              <h1 className="text-xl md:text-2xl font-bold text-[#070750]">
                Global Dreams Connect
              </h1>
              <p className="text-xs md:text-sm text-gray-600">
                Fresh Minds, Global Futures...
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href; // ← Check if current page

              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`font-medium transition-colors ${
                    isActive
                      ? 'text-[#111111]'           // Active: dark color
                      : 'text-[#A1A1A1] hover:text-[#111111]' // Inactive: gray + hover
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Button className="rounded-xl bg-[#070750] hover:bg-[#050530] text-white px-6">
              Sign up
              <span className="ml-2">→</span>
            </Button>
            <Button variant="outline" className="rounded-xl border-gray-300 hover:border-[#070750]">
              Log in
            </Button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="md:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-80 pt-10">
                <div className="flex flex-col gap-8">
                  {/* Logo in mobile menu */}
                  <div className="flex items-center px-4">
                    <Image
                      src="/Images/Logo.svg"
                      alt="Logo"
                      width={48}
                      height={48}
                      className="w-12 h-12"
                    />
                    <div className="ml-3">
                      <h2 className="text-xl font-bold text-[#070750]">
                        Global Dreams Connect
                      </h2>
                      <p className="text-xs text-[#A1A1A1]">
                        Fresh Minds, Global Futures...
                      </p>
                    </div>
                  </div>

                  {/* Mobile Nav Links */}
                  <nav className="flex flex-col gap-4 px-4">
                    {navLinks.map((link) => {
                      const isActive = pathname === link.href;

                      return (
                        <SheetClose asChild key={link.label}>
                          <a
                            href={link.href}
                            className={`text-lg font-medium py-2 ${
                              isActive
                                ? 'text-[#111111]'
                                : 'text-[#A1A1A1] hover:text-[#111111]'
                            }`}
                            onClick={() => setOpen(false)}
                          >
                            {link.label}
                          </a>
                        </SheetClose>
                      );
                    })}
                  </nav>

                  {/* Mobile Buttons */}
                  <div className="flex flex-col gap-4 px-4">
                    <Button variant="outline" className="w-full rounded-xl border-gray-300">
                      Log in
                    </Button>
                    <Button className="w-full rounded-xl bg-[#070750] hover:bg-[#050530] text-white">
                      Sign up →
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;




