'use client';

import { Globe, Ellipsis, CircleUser } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import FellowshipCard from './FellowshipCard';
import { useState } from 'react';

export default function FellowshipFilters() {

  const fellowship = [
    {
      "id": "global-scholars-fellowship",
      "title": "Global Scholars Fellowship",
      "university": "Harvard University",
      "funding": "Full tuition + Stipend",
      "tags": ["International students", "Undergraduate", "GPA 3.8+"],
      "cta": {
        "label": "Learn More",
        "url": "/fellowships/global-scholars-fellowship"
      },
      "deadline": "2026-03-15",
      "slotsAvailable": 50
    },
    {
      "id": "future-leaders-scholarship",
      "title": "Future Leaders Scholarship",
      "university": "Stanford University",
      "funding": "Full tuition",
      "tags": ["Domestic & International", "Undergraduate", "Merit-based"],
      "cta": {
        "label": "Learn More",
        "url": "/fellowships/future-leaders-scholarship"
      },
      "deadline": "2026-02-28",
      "slotsAvailable": 30
    },
    {
      "id": "women-in-tech-fellowship",
      "title": "Women in Tech Fellowship",
      "university": "MIT",
      "funding": "Tuition + Monthly Stipend",
      "tags": ["Women applicants", "Graduate", "STEM"],
      "cta": {
        "label": "Learn More",
        "url": "/fellowships/women-in-tech-fellowship"
      },
      "deadline": "2026-04-10",
      "slotsAvailable": 25
    },
    {
      "id": "emerging-economies-scholarship",
      "title": "Emerging Economies Scholarship",
      "university": "University of Oxford",
      "funding": "Full tuition + Living allowance",
      "tags": ["Developing countries", "Graduate", "Need-based"],
      "cta": {
        "label": "Learn More",
        "url": "/fellowships/emerging-economies-scholarship"
      },
      "deadline": "2026-01-20",
      "slotsAvailable": 40
    },
    {
      "id": "green-planet-fellowship",
      "title": "Green Planet Fellowship",
      "university": "University of Melbourne",
      "funding": "Partial tuition + Stipend",
      "tags": ["Environmental studies", "Postgraduate", "Research"],
      "cta": {
        "label": "Learn More",
        "url": "/fellowships/green-planet-fellowship"
      },
      "deadline": "2026-05-05",
      "slotsAvailable": 20
    },
    {
      "id": "global-innovation-fellowship",
      "title": "Global Innovation Fellowship",
      "university": "University of Toronto",
      "funding": "Full tuition + Research grant",
      "tags": ["Innovation", "Graduate", "Entrepreneurship"],
      "cta": {
        "label": "Learn More",
        "url": "/fellowships/global-innovation-fellowship"
      },
      "deadline": "2026-03-01",
      "slotsAvailable": 15
    },
    {
      "id": "arts-humanities-scholarship",
      "title": "Arts & Humanities Scholarship",
      "university": "University of Cambridge",
      "funding": "Full tuition",
      "tags": ["Arts & Humanities", "Undergraduate", "Merit-based"],
      "cta": {
        "label": "Learn More",
        "url": "/fellowships/arts-humanities-scholarship"
      },
      "deadline": "2026-02-10",
      "slotsAvailable": 35
    },
    {
      "id": "nextgen-ai-fellowship",
      "title": "NextGen AI Fellowship",
      "university": "ETH Zurich",
      "funding": "Full tuition + Stipend",
      "tags": ["AI & ML", "Graduate", "Research-focused"],
      "cta": {
        "label": "Learn More",
        "url": "/fellowships/nextgen-ai-fellowship"
      },
      "deadline": "2026-04-25",
      "slotsAvailable": 10
    },
  ]


  const [visibleCount, setVisibleCount] = useState(6);

  const handleViewMore = () => {
    setVisibleCount((prev) => prev + 6);
  };





  return (
    <>
      {/* Filter section  */}
      <section className="w-full border-b bg-background">
        <div className="mx-auto max-w-7xl px-4 py-6">
          {/* Top section */}
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            {/* Left */}
            <div>
              <h1 className="text-2xl font-semibold tracking-tight">
                Fellowships
              </h1>

              <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                <span>60+ available fellowships</span>

                <div className="flex -space-x-2">
                  <Avatar className="h-6 w-6 border">
                    <AvatarImage src="/avatars/1.png" />
                    <AvatarFallback><CircleUser /></AvatarFallback>
                  </Avatar>
                  <Avatar className="h-6 w-6 border">
                    <AvatarImage src="/avatars/2.png" />
                    <AvatarFallback><CircleUser /></AvatarFallback>
                  </Avatar>
                  <Avatar className="h-6 w-6 border">
                    <AvatarImage src="/avatars/3.png" />
                    <AvatarFallback><CircleUser /></AvatarFallback>
                  </Avatar>
                  <Avatar className="h-6 w-6 border">
                    <AvatarImage src="/avatars/3.png" />
                    <AvatarFallback>
                      <Ellipsis />
                    </AvatarFallback>
                  </Avatar>
                </div>

                <span>50+ beneficiaries</span>
              </div>
            </div>

            {/* Right */}
            <Button
              variant="secondary"
              className="flex items-center gap-2 rounded-full"
            >
              <Globe className="h-4 w-4" />
              All Fellowships Open to Everyone
            </Button>
          </div>

          {/* Filters */}
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
            {/* Filter buttons */}
            <div className="flex flex-wrap items-center gap-2 text-sm">
              <span className="text-muted-foreground">Filter by:</span>

              <Button variant="ghost" size="sm">
                Eligibility
              </Button>
              <Button variant="ghost" size="sm">
                University
              </Button>
              <Button variant="ghost" size="sm">
                Deadline
              </Button>
              <Button variant="ghost" size="sm">
                Amount
              </Button>
            </div>

            {/* Count */}
            <span className="text-sm text-muted-foreground">
              showing 6 fellowships
            </span>
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-2">
        {fellowship.slice(0, visibleCount).map((item) => (
          <FellowshipCard key={item.id} {...item} />
        ))}
      </section>

      {/* View More Button */}
      {visibleCount < fellowship.length && (
        <div className="flex justify-center mt-6">
          <Button
            onClick={handleViewMore}
            style={{ backgroundColor: '#070750', color: 'white' }}
          >
            View More
          </Button>
        </div>
      )}
    </>

  );
}
