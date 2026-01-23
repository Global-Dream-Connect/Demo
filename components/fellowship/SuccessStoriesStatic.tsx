import React from 'react';
import { Star } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const SuccessStoriesStatic = () => {
  const stories = [
    {
      name: "Maria Santos",
      location: "Brazil - MIT",
      testimony: "My mentor guided me through the US college application process and helped me build a strong STEM portfolio. Today, I'm studying at my dream university.",
      achievement: "Accepted into MIT Engineering",
      time: "8 months",
      isPurple: false,
    },
    {
      name: "Maria Santos",
      location: "India - Oxford",
      testimony: "My mentor's guidance in research methods and academic writing helped me publish my first paper and become a Rhodes Scholar finalist.",
      achievement: "Rhodes Scholar Finalist",
      time: "10 months",
      isPurple: true, // This card gets the custom purple shadow
    },
    {
      name: "Maria Santos",
      location: "Brazil - MIT",
      testimony: "My mentor guided me through the US college application process and helped me build a strong STEM portfolio. Today, I'm studying at my dream university.",
      achievement: "Accepted into MIT Engineering",
      time: "8 months",
      isPurple: false,
    }
  ];

  return (
    <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#070750] mb-2">Success Stories</h2>
        <p className="text-gray-500 text-lg">
          Hear from students who transformed their dreams into reality
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {stories.map((story, index) => (
          <Card 
            key={index} 
            className={`border-none rounded-[1.5rem] bg-white transition-all duration-300 ${
              story.isPurple 
                ? "shadow-[0_10px_40px_0_rgba(138,56,245,0.2)]  z-10"
                : "shadow-[0_15px_40px_rgba(172,204,242,0.3)] border border-slate-50"
            }`}
          >
            <CardContent className="p-8">
              {/* Star Badge Background */}
              <div className="flex gap-1 mb-6 bg-[#0707500d] w-fit px-3 py-1.5 rounded-full">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={24} 
                    className={story.isPurple ? "fill-[#8A38F5] text-[#8A38F5]" : "fill-[#070750] text-[#070750]"} 
                  />
                ))}
              </div>

              {/* Testimony */}
              <p className="text-[#767676] text-[15px] leading-relaxed mb-6">
                {story.testimony}
              </p>

              {/* Profile */}
              <div className="mb-4">
                <h4 className="font-bold text-[#070750]">{story.name}</h4>
                <p className="text-xs text-[#767676]">{story.location}</p>
              </div>

              {/* Achievement Badge */}
              <div className={`inline-block px-4 py-1.5 rounded-full text-white text-xs font-semibold mb-8 
                ${story.isPurple ? 'bg-[#8A38F5]' : 'bg-[#070750]'}`}>
                {story.achievement}
              </div>

              <div className="h-[1px] bg-gray-100 w-full mb-6" />

              {/* Footer */}
              <div className="flex justify-between items-center">
                <span className="text-gray-400 text-sm">Journey time:</span>
                <span className={`font-bold ${story.isPurple ? 'text-[#8A38F5]' : 'text-[#070750]'}`}>
                  {story.time}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default SuccessStoriesStatic;