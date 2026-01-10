"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 ">
      <div
        className="container mx-auto rounded-2xl px-10 py-12 flex flex-col md:flex-row items-center md:items-center justify-between bg-[#070750]"
        
      >
        {/* Text Section */}
        <div className="max-w-3xl text-center mx-auto">
          <h2 className="text-3xl font-semibold text-white">
           Dreams Becoming Reality
          </h2>

          <p className="text-white my-4 leading-relaxed">
             We focus on action, not just advice. Our students don’t just prepare, they compete, lead, and excel. By the time they apply to Ivy League schools, they already have the skills, experiences, and stories that set them apart.
          </p>

        {/* Button Section */}
        <Button
          className="mt-6 md:mt-0 px-6 py-6 rounded-xl bg-white hover:bg-white/90  text-[#333333]"
        >
          Sign up now <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
        </div>
      </div>
    </section>
  );
}

