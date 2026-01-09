

"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "My mentor’s guidance in research methods and academic writing helped me publish my first paper and become a Rhodes Scholar finalist.",
    name: "Maria Santos",
    location: "India • Oxford",
    badge: "Rhodes Scholar Finalist",
  },
  {
    quote:
      "Thanks to weekly calls with my mentor, I cracked the Google Summer of Code and landed my dream internship.",
    name: "Aryan Khan",
    location: "Bangladesh • Google Summer of Code",
    badge: "GSoC 2025 Selected",
  },
  {
    quote:
      "From average grades to getting into MIT — my mentor helped me rebuild my profile and write a killer essay.",
    name: "Sophie Chen",
    location: "China • MIT '29",
    badge: "MIT Admit",
  },
  {
    quote:
      "My mentor showed me how to approach competitive programming systematically. I went from 1200 → 2100+ in under a year.",
    name: "Rahim Uddin",
    location: "Pakistan • Codeforces",
    badge: "Expert (2100+)",
  },
  {
    quote:
      "The structured roadmap and honest feedback turned my vague startup idea into a funded prototype in 6 months.",
    name: "Laila Rahman",
    location: "Malaysia • Entrepreneur",
    badge: "Pre-Seed Funded",
  },
];

export default function DreamsBecomingReality() {
  return (
    <section className="w-full py-10 bg-gradient-to-b from-white to-gray-50/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-sm font-medium bg-[#E7FFF3] text-[#1E9F63] px-5 py-1.5 rounded-full">
            Mentor’s Journey
          </span>
          <h2 className="mt-5 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Dreams Becoming Reality
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Listen from our mentors
          </p>
        </div>

        {/* Carousel - One item at a time */}
        <Carousel
          opts={{
            align: "center",     // center the single item
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto" // ← limiting max width looks better with single item
        >
          <CarouselContent>
            {testimonials.map((item, index) => (
              <CarouselItem key={index} className="basis-full">
                <div className="my-10 rounded-2xl border border-gray-100 bg-white p-6 md:p-10 shadow-sm hover:shadow-lg transition-shadow duration-300">
                  {/* Stars */}
                  <div className="mb-6">
                    <div className="inline-flex items-center gap-1 rounded-full bg-purple-50 px-4 py-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 md:h-6 md:w-6"
                          fill="#8A38F5"
                          color="#8A38F5"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Quote */}
                  <blockquote className="text-gray-800 leading-relaxed text-lg md:text-xl font-medium italic">
                    "{item.quote}"
                  </blockquote>

                  {/* User Info */}
                  <div className="mt-8">
                    <h4 className="font-semibold text-gray-900 text-xl">
                      {item.name}
                    </h4>
                    <p className="text-base text-gray-600 mt-1">{item.location}</p>
                  </div>

                  {/* Badge */}
                  <div className="mt-6">
                    <span className="inline-block rounded-full bg-purple-600 px-5 py-1.5 text-sm font-medium text-white">
                      {item.badge}
                    </span>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="hidden sm:flex -left-4 md:-left-12" />
          <CarouselNext className="hidden sm:flex -right-4 md:-right-12" />
        </Carousel>
      </div>
    </section>
  );
}