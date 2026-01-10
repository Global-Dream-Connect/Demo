import React from 'react';
import { Star } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const SuccessStories = () => {
    const stories = [
        {
            name: "Maria Santos",
            location: "Brazil - MIT",
            testimony: "My mentor guided me through the US college application process and helped me build a strong STEM portfolio. Today, I'm studying at my dream university.",
            achievement: "Accepted into MIT Engineering",
            focus: "Engineering & College Prep.",
            time: "8 months",
            color: "blue",
        },
        {
            name: "Maria Santos",
            location: "India - Oxford",
            testimony: "My mentor's guidance in research methods and academic writing helped me publish my first paper and become a Rhodes Scholar finalist.",
            achievement: "Rhodes Scholar Finalist",
            focus: "Academic research",
            time: "10 months",
            color: "purple",
        }
    ];

    return (
        <section className="py-10 font-sans max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header Section */}
            <div className="text-center mb-12">
                <Badge variant="outline" className="text-md bg-[#EDF7F3] text-[#4CAF83] border-[#EDF7F3] rounded-full px-4 mb-4">
                    Success stories
                </Badge>
                <h2 className="text-4xl font-bold text-slate-800 mb-4">Dreams Becoming Reality</h2>
                <p className="text-[#767676] max-w-2xl mx-auto text-lg">
                    Real students, real results. Discover how personalized mentorship has transformed lives and unlocked new opportunities.
                </p>
            </div>

            {/* Cards Grid */}
            <div className="grid md:grid-cols-2 gap-8">
                {stories.map((story, index) => (
                    <Card key={index} className="border-none shadow-xl shadow-[#4CAF834D] rounded-3xl overflow-hidden">
                        <CardContent className="p-8">
                            <div className="flex gap-1.5 mb-6 bg-[#0707500d] w-fit px-3 py-1.5 rounded-full items-center">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        size={24}
                                        className={story.color === 'blue'
                                            ? "fill-[#070750] text-[#070750]"
                                            : "fill-[#8A38F5] text-[#8A38F5]"
                                        }
                                    />
                                ))}
                            </div>

                            {/* Testimony */}
                            <p className="text-[#767676] leading-relaxed mb-6 text-[18px]">
                                {story.testimony}
                            </p>

                            {/* Profile */}
                            <div className="mb-4">
                                <h4 className="font-bold text-lg text-[#333333]">{story.name}</h4>
                                <p className="text-sm text-[#767676]">{story.location}</p>
                            </div>

                            {/* Achievement Badge */}
                            <div className={`inline-block px-4 py-1.5 rounded-full text-white text-sm font-medium mb-8 
                ${story.color === 'blue' ? 'bg-[#070750]' : 'bg-[#8A38F5]'}`}>
                                {story.achievement}
                            </div>

                            <hr className="border-slate-100 mb-6" />

                            {/* Footer Details */}
                            <div className="space-y-3">
                                <div className="flex justify-between items-center">
                                    <span className="text-[#767676] text-md">Mentor's Focus:</span>
                                    <span className="font-bold text-[#333333]">{story.focus}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-[#767676] text-md">Journey time:</span>
                                    <span className={`font-bold ${story.color === 'blue' ? 'text-[#070750]' : 'text-[#8A38F5]'}`}>
                                        {story.time}
                                    </span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
};

export default SuccessStories;