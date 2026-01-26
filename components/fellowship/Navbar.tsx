'use client';
import React, { useState, useRef, useEffect } from 'react';
import { CircleUser, Menu, LogOut, User as UserIcon, ChevronDown, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';
import Image from 'next/image';
import Link from 'next/link';               
import { usePathname, useRouter } from 'next/navigation'; 
import { useAuth } from '@/context/AuthContext';
import { cn } from "@/lib/utils";

const Navbar = () => {
  const pathname = usePathname(); // Get current path
  const router = useRouter();
  const { user, logout, isAuthenticated } = useAuth();

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'How it works', href: '/how-it-works' },
    { label: 'Resources', href: '/resources' },
    { label: 'Fellowship', href: '/fellowships' },
    { label: 'Scholarships', href: '/scholarships' },
  ];

  const [open, setOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const userMenuRef = useRef<HTMLDivElement>(null);

  // Close user menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setUserMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    logout();
    setUserMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white">
      <div className="flex w-full items-center justify-between px-[6.25rem] py-[1.25rem] transition-all">
        
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-[3.75rem] w-[3.75rem] shrink-0">
               <Image 
                 src="/Images/Logo.svg" 
                 alt="GDC Logo" 
                 fill
                 className="object-contain"
               />
            </div>
            <div className="flex flex-col">
                <span className="text-[1.5rem] font-bold leading-tight text-[#070750]">
                    Global Dreams Connect
                </span>
                <span className="text-[0.875rem] text-gray-500 font-medium">
                    Fresh Minds, Global Futures...
                </span>
            </div>
        </Link>
          
        <div className="flex items-center gap-[3rem]">
          {/* Desktop Navigation */}
          <nav className="hidden items-center xl:flex">
            <ul className="flex items-center gap-[1rem]">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className={cn(
                      "text-[1rem] font-medium transition-colors hover:text-[#070750] p-[0.625rem]",
                      pathname === link.href ? "font-semibold text-[#070750]" : "text-gray-500"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right side: User button + Mobile menu trigger */}
          <div className="flex items-center gap-4">
            
            {/* Desktop Auth State */}
            <div className="hidden xl:flex items-center gap-4">
              {isAuthenticated && user ? (
                <div className="relative" ref={userMenuRef}>
                   <Button 
                    variant="outline" 
                    className="rounded-[0.5rem] border-[#070750] flex items-center gap-[10px] h-[3.625rem] py-[1rem] px-[1.5rem]"
                    onClick={handleLogout}
                  >
                    <Image src="/Images/icons/user_avatar.svg" alt='user avatar' width={20} height={20}/>
                    <span className="text-[#070750] font-medium truncate">{user.name}</span>
                  </Button>

                </div>
              ) : (
                <div className="flex items-center gap-4">
                    <Button
                        asChild
                        className="h-[3.625rem] w-[9rem] bg-[#070750] px-[1.5rem] py-[1.0625rem] text-[1rem] font-medium text-white hover:bg-[#070750]/90 rounded-[0.5rem] shadow-sm"
                    >
                        <Link href={`/signup?returnUrl=${encodeURIComponent(pathname)}`}>
                        Sign up <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                    <Button
                        asChild
                        variant="ghost"
                        className="h-[3.625rem] border border-gray-300 px-[1.5rem] py-[1.0625rem] text-[1rem] font-medium text-[#070750] hover:bg-gray-50 rounded-[0.5rem]"
                    >
                        <Link href={`/login?returnUrl=${encodeURIComponent(pathname)}`}>
                        Log in
                        </Link>
                    </Button>
                </div>
              )}
            </div>

            {/* Mobile Menu Trigger */}
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="xl:hidden"
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-80">
                <div className="flex flex-col gap-8 mt-8">
                  {/* Logo in sheet */}
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
                    </div>
                  </div>

                  <nav className="flex flex-col gap-4 px-4">
                    {navLinks.map((link) => {
                      const isActive = pathname === link.href;
                      return (
                        <SheetClose asChild key={link.label}>
                          <Link
                            href={link.href}
                            className={`text-lg font-medium transition-colors py-2 ${
                              isActive
                                ? 'text-[#111111] font-bold'
                                : 'text-[#A1A1A1] hover:text-[#111111]'
                            }`}
                            onClick={() => setOpen(false)}
                          >
                            {link.label}
                          </Link>
                        </SheetClose>
                      );
                    })}
                  </nav>

                  {/* User button in mobile menu */}
                  <div className="px-4 sm:hidden">
                    <Button variant="outline" className="w-full rounded-xl border-[#070750]">
                      <CircleUser className="h-5 w-5 text-[#070750] mr-2" />
                      <span className="text-[#070750] font-medium">Oluwabukunmi</span>
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