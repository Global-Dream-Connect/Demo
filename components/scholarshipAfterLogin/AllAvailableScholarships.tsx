import ScholarshipCard from "./ScholarshipCard";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { scholarshipsData } from "./scholarshipData";

export default function AllAvailableScholarships() {
  return (
    <section className="py-20">
      {/* Heading */}
      <div className="text-center">
        <h2 className="text-3xl font-semibold text-[#333333]">
          All Available Scholarships
        </h2>
        <p className="text-[#A1A1A1] mt-2">
          Filter by country, amount, deadline, and eligibility
        </p>
      </div>

      {/* Filters + Search */}
      <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[#A1A1A1]">
        <div className="flex flex-wrap items-center gap-5">
          <span className="text-[#111111] font-medium">Filter by:</span>
          <button className="hover:text-[#111111] transition">
            Eligibility
          </button>
          <button className="hover:text-[#111111] transition">
            University
          </button>
          <button className="hover:text-[#111111] transition">Deadline</button>
          <button className="hover:text-[#111111] transition">Amount</button>
        </div>

        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 absolute left-3 top-3 text-[#A1A1A1]" />
          <Input
            placeholder="Search scholarships..."
            className="pl-9 border-[#ddd] focus-visible:ring-[#A1A1A1]"
          />
        </div>
      </div>

      {/* Scholarships Grid — ALL CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        {scholarshipsData.map((item, index) => (
          <ScholarshipCard
            key={index}
            title={item.title}
            amount={item.amount}
            tags={item.tags}
            deadline={item.deadline}
            location={item.location}
            slots={item.slots}
          />
        ))}
      </div>

      {/* View More Button */}
      <div className="flex justify-center mt-12">
        <button
          className="
            bg-[#070750]
            hover:bg-[#0a0a8f]
            text-white
            px-6 py-3
            rounded-md
            transition
          "
        >
          View More →
        </button>
      </div>
    </section>
  );
}
