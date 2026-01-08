'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Users, UserCheck, Globe } from 'lucide-react';

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

            <div className="container relative z-10 mx-auto px-6 py-5">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left: Text Content */}
                    <div className="space-y-8 text-center lg:text-left">
                        {/* Small tagline with globe icon */}

                        <div>
                            <div className="flex items-center justify-center lg:justify-start gap-2 text-[#2E476B] ">
                                <div className='bg-[#0707500d] flex items-center justify-center gap-2 p-2 rounded-full' >
                                    <Globe className="h-5 w-5" />
                                    <span className="text-sm font-medium uppercase tracking-wider">Connecting Dreams Globally</span>
                                </div>
                            </div>
                        </div>

                        {/* Main Headline */}
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#333333] leading-tight">
                            Dream Big, Connect Globally, <span className='text-[#4A90E2]'>Achieve More</span>
                        </h1>

                        {/* Subheadline */}
                        <p className="text-lg md:text-xl text-[#767676] max-w-2xl">
                            At GDC, we connect ambitious teenagers with mentors and professors from the very universities they dream of attending.
                        </p>

                        {/* CTA Button */}
                        <Button size="lg" className="bg-[#070750] hover:bg-indigo-700 text-white px-8 py-6 text-lg">
                            Start your journey now
                            <span className="ml-2">→</span>
                        </Button>

                        {/* Stats */}
                        <div className="flex flex-wrap justify-center lg:justify-start gap-8 md:gap-12 pt-12">
                            <div className="flex items-center gap-3">
                                <Users className="h-8 w-8 text-indigo-600" />
                                <div>
                                    <div className="text-3xl font-bold text-gray-900">10k+</div>
                                    <div className="text-sm text-gray-600">Students Helped</div>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <UserCheck className="h-8 w-8 text-indigo-600" />
                                <div>
                                    <div className="text-3xl font-bold text-gray-900">2k+</div>
                                    <div className="text-sm text-gray-600">Expert Mentors</div>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <Globe className="h-8 w-8 text-indigo-600" />
                                <div>
                                    <div className="text-3xl font-bold text-gray-900">50+</div>
                                    <div className="text-sm text-gray-600">Countries</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Hero Image */}
                    <div className="relative flex justify-center lg:justify-end">
                        <div className="relative rounded-2xl overflow-hidden">
                            <Image src={'/Images/joyful-young-schoolgirl-wearing-backpack-holding-notebook-points-himself 1.png'} alt='joyful-young-schoolgirl-wearing-backpack-holding-notebook-points-himself 1'
                                width={400}
                                height={400}
                                className='w-full h-full object-cover'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}










