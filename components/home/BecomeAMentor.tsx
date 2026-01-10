






"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function BecomeAMentor() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div
        className="container mx-auto rounded-2xl px-10 py-12 flex flex-col md:flex-row items-start md:items-center justify-between"
        style={{ backgroundColor: "rgba(221, 206, 237, 0.3)" }}
      >
        {/* Text Section */}
        <div className="max-w-xl">
          <h2 className="text-3xl font-semibold text-[#1E1E1E]">
            Become a mentor
          </h2>

          <p className="text-[#555] mt-4 leading-relaxed">
            Get a taste of what GDC has to offer with our free resources, designed to help you on your college application journey.
          </p>
        </div>

        {/* Button Section */}
        <Button
          className="mt-6 md:mt-0 px-6 py-6 rounded-xl bg-[#070750] hover:bg-[#070750e6] text-white"
        >
          Become a mentor <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </div>
    </section>
  );
}





















