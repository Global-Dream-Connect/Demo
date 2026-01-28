"use client";

import { useEffect, useState } from "react";
import ScholarshipCard from "./ScholarshipCard";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { scholarshipsData } from "./scholarshipData";

/* ---------------- CONFIG ---------------- */

const PAGE_SIZE = 8;

type FilterType = "ALL" | "ELIGIBILITY" | "UNIVERSITY" | "DEADLINE" | "AMOUNT";

type EligibilityType = "ALL" | "UNDERGRADUATE" | "MASTERS" | "PHD";

/* ---------------- DEBOUNCE HOOK ---------------- */

function useDebounce<T>(value: T, delay = 300) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
}

/* ---------------- COMPONENT ---------------- */

export default function AllAvailableScholarships() {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  // search
  const [searchInput, setSearchInput] = useState("");
  const debouncedSearch = useDebounce(searchInput, 300);

  // filters
  const [activeFilter, setActiveFilter] = useState<FilterType>("ALL");
  const [eligibility, setEligibility] = useState<EligibilityType>("ALL");

  /* ---------------- PROCESS DATA ---------------- */

  let processedData = [...scholarshipsData];

  // 🔍 Debounced Search (by title)
  if (debouncedSearch) {
    processedData = processedData.filter((item) =>
      item.title.toLowerCase().includes(debouncedSearch.toLowerCase()),
    );
  }

  // 🎓 Eligibility filter (simple, future-ready)
  if (eligibility !== "ALL") {
    processedData = processedData.filter((item) =>
      item.tags?.some((tag) =>
        tag.toLowerCase().includes(eligibility.toLowerCase()),
      ),
    );
  }

  // 🧩 Main filters
  switch (activeFilter) {
    case "UNIVERSITY":
      processedData = processedData
        .filter((item) => item.location)
        .sort((a, b) => a.location!.localeCompare(b.location!));
      break;

    case "DEADLINE":
      processedData = processedData.sort(
        (a, b) =>
          new Date(a.deadline).getTime() - new Date(b.deadline).getTime(),
      );
      break;

    case "AMOUNT":
      processedData = processedData.sort(
        (a, b) =>
          parseInt(b.amount.replace(/[^0-9]/g, "")) -
          parseInt(a.amount.replace(/[^0-9]/g, "")),
      );
      break;

    default:
      break;
  }

  /* ---------------- PAGINATION ---------------- */

  const visibleScholarships = processedData.slice(0, visibleCount);
  const hasMore = visibleCount < processedData.length;

  const handleViewMore = () => {
    setVisibleCount((prev) => prev + PAGE_SIZE);
  };

  const handleFilterChange = (filter: FilterType) => {
    setActiveFilter(filter);
    setVisibleCount(PAGE_SIZE);
  };

  /* ---------------- UI ---------------- */

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
        {/* Filters */}
        <div className="flex flex-wrap items-center gap-5">
          <span className="text-[#111111] font-medium">Filter by:</span>

          {["ELIGIBILITY", "UNIVERSITY", "DEADLINE", "AMOUNT"].map((filter) => (
            <button
              key={filter}
              onClick={() => handleFilterChange(filter as FilterType)}
              className={`transition ${
                activeFilter === filter
                  ? "text-[#111111] font-medium"
                  : "hover:text-[#111111]"
              }`}
            >
              {filter.charAt(0) + filter.slice(1).toLowerCase()}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 absolute left-3 top-3 text-[#A1A1A1]" />
          <Input
            placeholder="Search scholarships..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="pl-9 border-[#ddd] focus-visible:ring-[#A1A1A1]"
          />
        </div>
      </div>

      {/* Eligibility Sub-filters */}
      {activeFilter === "ELIGIBILITY" && (
        <div className="mt-6 flex gap-4 text-sm">
          {["ALL", "UNDERGRADUATE", "MASTERS", "PHD"].map((level) => (
            <button
              key={level}
              onClick={() => setEligibility(level as EligibilityType)}
              className={`px-3 py-1 rounded ${
                eligibility === level
                  ? "bg-[#070750] text-white"
                  : "border text-[#333]"
              }`}
            >
              {level.charAt(0) + level.slice(1).toLowerCase()}
            </button>
          ))}
        </div>
      )}

      {/* Scholarships Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        {visibleScholarships.length > 0 ? (
          visibleScholarships.map((item, index) => (
            <ScholarshipCard
              key={index}
              title={item.title}
              amount={item.amount}
              tags={item.tags}
              deadline={item.deadline}
              location={item.location}
              slots={item.slots}
            />
          ))
        ) : (
          <p className="col-span-full text-center text-[#A1A1A1]">
            No scholarships found
          </p>
        )}
      </div>

      {/* View More */}
      {hasMore && (
        <div className="flex justify-center mt-12">
          <button
            onClick={handleViewMore}
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
      )}
    </section>
  );
}
