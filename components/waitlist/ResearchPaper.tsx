import React from 'react'
import { Badge } from "@/components/ui/badge";
import { Search, UserCheck, Layers, DollarSign } from "lucide-react";
import Image from 'next/image';
export default function ResearchPaper() {
    return (
        <div className="col-span-12 md:col-span-7 px-6 pb-15 ">
            <div >
                {/* Logo */}
                <div className="flex justify-start mb-6 ">
                    <div
                        className=" w-35"
                    >
                        <Image
                            src="/images/logo/footer-logo.svg"
                            alt="Footer Logo"
                            width={150}
                            height={50}
                        />
                    </div>
                </div>

                {/* Headline */}
                <h1 className="text-5xl md:text-5xl font-bold leading-tight mb-4 text-[#0A0A0A]">
                    Publish Your First <br />
                    Research Paper. <br />
                    <span className="text-gray-900">Without the $2,000 Price Tag.</span>
                </h1>

                {/* Subtitle */}
                <p className="text-[#6B7280] text-lg mb-6">
                    Join 2,500 students on the waitlist for the all-in-one platform that
                    guides you from idea to published paper in 7 weeks.
                </p>

                {/* Launch Badge */}
                <div className=" mb-10">
                    <Badge
                        className="px-4 py-2 text-sm font-semibold rounded-full bg-[#EFF6FF] text-[#1E3A8A]"

                    >
                        <span className='w-7'>
                            <Image
                                src="/images/icons/rocket.png"
                                alt="Rocket icon"
                                width={29}
                                height={29}
                            />

                        </span>  Launching April 2026
                    </Badge>
                </div>

                {/* Features */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mx-auto max-w-2xl">
                    {/* Feature 1 */}
                    <div >

                        <div className='w-8'>
                            <Image
                                src="/images/icons/material-symbols_lightbulb-outline.png"
                                alt="icon"
                                width={29}
                                height={29}
                            />
                        </div>
                        <div>
                            <h3 className="font-bold text-[#1A2B4A] ">Get Curated Topics</h3>
                            <p className="text-[#808080] text-sm">
                                No more endless googling. 5 topics in 6 hours.
                            </p>
                        </div>
                    </div>

                    {/* Feature 2 */}
                    <div >
                        <div className='w-8'>
                            <Image
                                src="/images/icons/bxs_user.png"
                                alt="icon"
                                width={29}
                                height={29}
                            />
                        </div>
                        <div>
                            <h3 className="font-bold text-[#1A2B4A]">Expert Mentor Support</h3>
                            <p className="text-[#808080] text-sm">
                                Video calls with PhD researchers whenever you're stuck.
                            </p>
                        </div>
                    </div>

                    {/* Feature 3 */}
                    <div >
                        <div className='w-8'>
                            <Image
                                src="/images/icons/material-symbols_database.png"
                                alt="icon"
                                width={29}
                                height={29}
                            />
                        </div>
                        <div>
                            <h3 className="font-bold text-[#1A2B4A]">Verified Journal Database</h3>
                            <p className="text-[#808080] text-sm">
                                No predatory journals. Only legitimate publications.
                            </p>
                        </div>
                    </div>

                    {/* Feature 4 */}
                    <div>
                        <div className='w-8'>
                            <Image
                                src="/images/icons/bx_dollar.png"
                                alt="icon"
                                width={29}
                                height={29}
                            />
                        </div>
                        <div>
                            <h3 className="font-bold text-[#1A2B4A]">10× More Affordable</h3>
                            <p className="text-[#808080] text-sm">
                                $19/month, not $2,000. Free tier available.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Footer Number */}
                <p
                    className="mt-12 "
                >
                    <span className='text-[#1E3A8A] text-4xl font-bold' >2,547</span> <span className="text-[#808080] text-lg font-medium ">students already on the waitlist (real time)</span>
                </p>
            </div>
        </div>
    )
}
