'use client';

import Link from 'next/link';
import { Mail, Linkedin, Instagram, ArrowUp } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070750] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Left: Logo + Description */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#070750] font-bold text-xl">
                <Image
                  src="/Images/Logo.svg"
                  alt="Company's blue G logo"
                  width={60}
                  height={60}
                  className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16"
                />
              </div>
              <span className="text-2xl font-semibold">Global Dreams Connect</span>
            </div>
            <p className="text-sm text-gray-300 max-w-md">
              Your Ivy League journey starts here. We focus on action, not just advice. Our students don&apos;t just prepare, they compete, lead, and excel.
            </p>
          </div>

          {/* Center: Navigation Links */}
          <div className="space-y-6">
            <h3 className=" text-lg font-medium">Information</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <Link href="/about" className=" hover:text-white transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/faqs" className=" hover:text-white transition">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/contact" className=" hover:text-white transition">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href={"#"}
                  className="flex items-center gap-1 px-0 p-0 h-auto text-sm text-gray-300 hover:text-white"
                  onClick={scrollToTop}
                >
                  Back to top
                  <ArrowUp className="ml-2 h-4 w-4" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Right: Socials + Email */}
          <div className="space-y-6">
            <h3 className="text-lg font-medium">Socials</h3>
            <ul className="space-y-4">
              <li>
                <Link href="https://linkedin.com" className="flex items-center space-x-3 text-sm text-gray-300 hover:text-white transition">
                  <Linkedin className="h-5 w-5" />
                  <span>LinkedIn</span>
                </Link>
              </li>
              <li>
                <Link href="https://instagram.com" className="flex items-center space-x-3 text-sm text-gray-300 hover:text-white transition">
                  <Instagram className="h-5 w-5" />
                  <span>Instagram</span>
                </Link>
              </li>
            </ul>

            <div className="pt-6">
              <h3 className="text-lg font-medium mb-4">Send us a mail</h3>
              <Link
                href="mailto:globaldreamconnect@gmail.com"
                className="inline-flex items-center space-x-3 px-6 py-4 rounded-full border border-white/30 text-white hover:border-white/60 hover:bg-white/10 transition-all duration-300 group"
              >
                <Mail className="h-5 w-5 text-white/80 group-hover:text-white transition" />
                <span className="text-sm md:text-base">globaldreamconnect@gmail.com</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>Global Dreams Connect 2025 – All Rights Reserved.</p>
          <div className="mt-4 md:mt-0 space-x-6">
            <Link href="/terms" className="hover:text-white transition">
              Terms of service
            </Link>
            <Link href="/privacy" className="hover:text-white transition">
              Privacy policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}