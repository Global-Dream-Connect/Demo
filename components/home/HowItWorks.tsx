"use client";

import Image from "next/image";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export default function HowItWorks() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-white">
      <div className="container mx-auto text-center">
        <span className="text-sm bg-[#F1F6FF] px-4 py-1 rounded-full">
          Simple Process
        </span>

        <h2 className="text-4xl font-semibold mt-4">How It Works</h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          From dream to achievement in four simple steps. Join thousands of
          students who’ve transformed their aspirations into reality.
        </p>

        {/* Main Content */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="w-full">
            <Image
              src="/images/how-it-works.jpg"
              alt="Students learning"
              width={600}
              height={400}
              className="rounded-xl object-cover shadow-md"
            />
          </div>

          {/* Right Accordion */}
          <div>
            <Accordion type="single" collapsible className="w-full space-y-4">
              
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-xl">
                  Sign Up & Share Your Dreams
                </AccordionTrigger>
                <AccordionContent>
                  Create your profile and tell us what goals you want to achieve.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-xl">
                  Get Matched with Perfect Mentors
                </AccordionTrigger>
                <AccordionContent>
                  We pair you with mentors who align with your career path,
                  interests, and long-term goals.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-xl">
                  Start Your Mentorship Journey
                </AccordionTrigger>
                <AccordionContent>
                  Begin structured learning sessions, track progress, and follow
                  a tailored mentorship roadmap.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-xl">
                  Achieve Your Goals
                </AccordionTrigger>
                <AccordionContent>
                  Monitor your progress, celebrate milestones, and turn your
                  dreams into real achievements with expert support.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <p className="text-[#767676]">
            Ready to start? Join <span className="font-semibold">100+ students</span> already achieving their dreams
          </p>

          <Button className="mt-6 px-8 py-6 text-lg rounded-full bg-[#070750] hover:bg-[#070750e6]">
            Sign up now →
          </Button>
        </div>
      </div>
    </section>
  );
}
