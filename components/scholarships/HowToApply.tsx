
import Image from "next/image";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export default function HowToApply() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto text-center">

        <h2 className="text-4xl font-semibold mt-4 text-[#333333]">How to Apply Successfully</h2>
        <p className="text-[#767676] mt-4 max-w-2xl mx-auto">
          Follow our proven framework to maximize your chances
        </p>

        {/* Main Content */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="w-full">
            <Image
              src="/images/college-students-different-ethnicities-cramming 1.png"
              alt="college students different ethnicities cramming "
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
                 Research Eligibility
                </AccordionTrigger>
                <AccordionContent>
                  Create your profile and tell us what goals you want to achieve.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-xl">
                  Prepare Documents
                </AccordionTrigger>
                <AccordionContent>
                  We pair you with mentors who align with your career path,
                  interests, and long-term goals.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-xl">
                  Craft Your Story
                </AccordionTrigger>
                <AccordionContent>
                  Begin structured learning sessions, track progress, and follow
                  a tailored mentorship roadmap.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-xl">
                 Submit & Follow Up
                </AccordionTrigger>
                <AccordionContent>
                  Monitor your progress, celebrate milestones, and turn your
                  dreams into real achievements with expert support.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
