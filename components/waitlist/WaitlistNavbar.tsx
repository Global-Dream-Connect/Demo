import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import { ArrowRight } from 'lucide-react'

export default function WaitlistNavbar() {
    return (
        <div className="sticky top-0 z-50 bg-white shadow-sm">
            <nav className="flex justify-between items-center md:px-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <Image
                        src="/images/logo/logo.svg"
                        alt="Logo"
                        width={150}
                        height={84}
                        className="object-contain"
                    />
                </div>

                {/* Button */}
                <Button className="bg-[#070750] hover:bg-[#070750]/90 rounded-md px-6">
                    Join waitlist <ArrowRight className="ml-2 h-5 w-4" />
                </Button>

            </nav>
        </div>
    )
}
