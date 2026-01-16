







import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import Image from "next/image";
import Link from "next/link";


export default function WaitlistFooter() {
    return (
        <footer className="w-full bg-[#F9FAFB] border-t border-[#F9FAFB] py-8 mt-auto">
            <div className="container mx-auto max-w-7xl px-6">
                <div className="flex flex-col items-center justify-center gap-3 text-center">
                    {/* Logo */}
                    <div className="w-16">
                        <Image
                            src="/images/logo/footer-logo.svg"
                            alt="Footer Logo"
                            width={150}
                            height={50}
                        />
                    </div>
                    {/* Year */}
                    <div className="flex items-center gap-3">
                        <span className="text-[#6B7280] text-md font-bold">
                            © {new Date().getFullYear()} Global Dream Connect
                        </span>
                    </div>

                    {/* Links */}
                    <div className="flex flex-wrap justify-center gap-x-1 gap-y-1 text-sm font-bold text-[#6B7280]">
                        <Link
                            href="#"
                            className="hover:text-[#1E3A8A] transition-colors"
                        >
                            Privacy Policy
                        </Link>
                        <span className="flex justify-center items-center"><GoDotFill /></span>
                        <Link
                            href="#"
                            className="hover:text-[#1E3A8A] transition-colors"
                        >
                            Terms of Service
                        </Link>
                        <span className="flex justify-center items-center"><GoDotFill /></span>
                        {/* <span>•</span> */}
                        <Link
                            href="#"
                            className="hover:text-[#1E3A8A] transition-colors"
                        >
                            Contact Us
                        </Link>
                    </div>

                    {/* Social Icons */}
                    <div className="flex items-center gap-6 mt-2">
                        <Link
                            href="#"
                            className="text-[#1E3A8A] hover:text-[#1E3A8A]/90 transition-colors"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedinIn className="h-6 w-6" />

                        </Link>
                        <Link
                            href="#"
                            className="text-[#1E3A8A] hover:text-[#1E3A8A]/90 transition-colors"
                            aria-label="Twitter"
                        >
                            <FaTwitter className="h-6 w-6" />

                        </Link>
                        <Link
                            href="#"
                            className="text-[#1E3A8A] hover:text-[#1E3A8A]/90 transition-colors"
                            aria-label="LinkedIn"
                        >
                            <FaInstagram className="h-6 w-6" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}