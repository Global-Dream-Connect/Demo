"use client";

import { FC } from "react";
import { MapPin, CalendarDays, CircleUser, Ellipsis, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Link from "next/link";
import { Separator } from "../ui/separator";

interface ScholarshipCardProps {
    title: string;
    amount: string;
    tags: string[];
    deadline: string;
    location?: string;
    slots?: number;
}

const ScholarshipCard: FC<ScholarshipCardProps> = ({
    title,
    amount,
    tags,
    deadline,
    location,
    slots,
}) => {
    return (
        <div className="border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition bg-white">
            <div className="flex items-start justify-between">
                <h3 className="text-lg font-semibold text-[#333333]">{title}</h3>
                <span className="text-xs font-medium text-[#2E476B]">New</span>
            </div>

            <p className="text-[#333333] mt-1 font-medium">{amount} grant</p>

            <div className="flex gap-2 flex-wrap mt-3">
                {tags.map((tag, i) => (
                    <Badge
                        key={i}
                        variant="secondary"
                        className="text-[12px] py-0.5 px-2 rounded text-[#2E476B]"
                    >
                        {tag}
                    </Badge>
                ))}
            </div>

        <Button asChild variant="outline" className="w-fit mt-4 border-[#070750] text-[#070750] hover:bg-[#070750] hover:text-white">
          <Link href="#">View details</Link>
        </Button>

            <div className="flex justify-between items-center mt-4 text-sm text-[#767676]">
                <div className="flex items-center gap-1">
                    <CalendarDays size={16} />
                    Deadline: {deadline}
                </div>

                {location &&
                    <div className="flex items-center gap-1">
                    <MapPin size={16} />
                    {location}
                </div>
                }

                {slots && (
                    <p className="text-[#767676] text-sm">{slots} slots available</p>
                )}
            </div>
        </div>
    );
};

const ScholarshipsFilter = () => {
    return (
        <section className="py-10 ">
            <div 
            // flex justify-between items-center 
            className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-[#333333]">Scholarships</h1>
                    <div className="mt-2 flex flex-wrap items-center gap-3 text-lg text-muted-foreground">
                        <span>60+ available scholarships</span>

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
                    className="flex items-center gap-2 rounded-full text-[#2E476B]"
                >
                    <Globe className="h-4 w-4" />
                    All Fellowships Open to Everyone
                </Button>

            </div>

            {/* Filter Bar */}
            <div className="flex flex-wrap items-center gap-6 mt-6 text-[#A1A1A1] text-md">
                <span className="text-[#111111]">Filter by:</span>
                <button className="hover:text-[#111111]">Eligibility</button>
                <button className="hover:text-[#111111]">University</button>
                <button className="hover:text-[#111111]">Deadline</button>
                <button className="hover:text-[#111111]">Amount</button>

                <span className="ml-auto text-[#A1A1A1]">
                    showing new scholarships
                </span>
            </div>

                {/* Seperator */}
                <Separator className="my-4" />
            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <ScholarshipCard
                    title="Gates Cambridge Scholarship"
                    amount="$95,000"
                    tags={["International students", "Undergraduate", "GPA 3.8+"]}
                    deadline="March 15, 2026"
                    location="United Kingdom"
                />

                <ScholarshipCard
                    title="Rhodes Scholarship"
                    amount="$80,000"
                    tags={["International students", "Undergraduate", "GPA 3.8+"]}
                    deadline="March 15, 2026"
                    slots={30}
                />
            </div>
        </section>
    );
};

export default ScholarshipsFilter;




