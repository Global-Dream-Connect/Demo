

"use client";

import Image from "next/image";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";

export default function Brands() {
    const universities = [
        {
            name: "Harvard University",
            logo: "/Images/brand/harvard-university-seeklogo.png",
        },
        {
            name: "Princeton University",
            logo: "/Images/brand/princeton-university-seeklogo.png",
        },
        {
            name: "Columbia University",
            logo: "/Images/brand/columbia-university-seeklogo.png",
        },
        {
            name: "University of Pennsylvania",
            logo: "/Images/brand/upenn-university-of-pennsylvania-seeklogo.png",
        },
        {
            name: "Dartmouth College",
            logo: "/Images/brand/dartmouth-seeklogo.png",
        },
        {
            name: "Dartmouth Collegee",
            logo: "/Images/brand/dartmouth-seeklogo.png",
        },
        {
            name: "Dartmouth Collegeee",
            logo: "/Images/brand/dartmouth-seeklogo.png",
        },
    ];

    // Ref for controlling autoplay (pause/resume on hover)
    const plugin = React.useRef(
        Autoplay({
            delay: 1000,              // Time between slides (ms)
            stopOnInteraction: false, // Keeps autoplay running after manual swipe/click
        })
    );

    return (
        <div className="bg-[#F5F5F5] ">
            <div className="flex justify-center items-center overflow-hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="pl-2 basis-auto md:basis-1/3 lg:basis-1/4">
                    <div className="flex flex-wrap h-full items-center justify-center">
                        <p className="text-lg font-semibold text-muted-foreground">
                            Get into top schools
                        </p>
                    </div>
                </div>

                <div className="w-full py-5">
                    <div className="container mx-auto px-4">
                        <Carousel
                            opts={{
                                align: "start",
                                loop: true,
                            }}
                            plugins={[plugin.current]} // Enable autoplay
                            className="w-full"
                            onMouseEnter={plugin.current.stop}   // Pause on hover
                            onMouseLeave={plugin.current.reset}  // Resume on leave
                        >
                            <CarouselContent className="-ml-4">
                                {universities.map((uni) => (
                                    <CarouselItem
                                        key={uni.name}
                                        className="pl-4 basis-auto md:basis-1/4 lg:basis-1/5"
                                    >
                                        <div className="flex h-full items-center justify-center p-4">
                                            <Image
                                                src={uni.logo}
                                                alt={`${uni.name} logo`}
                                                width={200}
                                                height={100}
                                                className="h-auto w-auto max-h-24 object-contain grayscale opacity-80 hover:opacity-100 transition-opacity"
                                                unoptimized
                                            />
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    );
}