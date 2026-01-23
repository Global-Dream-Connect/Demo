
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import Image from "next/image";

export default function AvailableScholarshipsBeforeLogin() {
    return (
        <section className="w-full bg-white">
            {/* Top Section - Header */}
            <div className="max-w-5xl mx-auto text-center py-16 px-4">
                <h1 className="text-3xl md:text-4xl font-semibold text-[#333333]">
                    All Available Scholarships
                </h1>
                <p className="text-[#A1A1A1] mt-2">
                    Filter by country, amount, deadline, and eligibility
                </p>

                {/* Filter Row */}
                <div className="flex flex-col md:flex-row items-center justify-between mt-10 gap-4">
                    <div className="flex flex-wrap items-center gap-5 text-[#A1A1A1] text-sm">
                        <span className="font-medium">Filter by:</span>
                        <button className="hover:text-[#A1A1A1] transition">Eligibility</button>
                        <button className="hover:text-[#A1A1A1] transition">University</button>
                        <button className="hover:text-[#A1A1A1] transition">Deadline</button>
                        <button className="hover:text-[#A1A1A1] transition">Amount</button>
                    </div>

                    {/* Search Input */}
                    <div className="relative w-full md:w-72">
                        <Search className="w-4 h-4 absolute left-3 top-3 text-[#A1A1A1]" />
                        <Input
                            placeholder="Search scholarships..."
                            className="pl-9 border-[#ddd] focus-visible:ring-[#A1A1A1]"
                        />
                    </div>
                </div>
            </div>

            {/* Sign Up Section */}
            <div className="w-full py-14 relative overflow-hidden">
                {/* Left Image */}
                <div className="hidden md:block absolute left-0 bottom-0">
                    <Image
                        src="/images/student-left.png"
                        alt="student-lef"
                        width={260}
                        height={260}
                        className="rounded-xl object-cover"
                    />
                </div>

                {/* Center Content */}
                <div className="max-w-4xl mx-auto text-center px-4">
                    <h2 className="text-2xl md:text-3xl font-semibold text-[#333333]">
                        Sign up to unlock 50+ resources
                    </h2>
                    <p className="text-[#333333] mt-2 max-w-xl mx-auto">
                        Unlock 50+ additional resources including templates, guides, and
                        toolkits. Sign up or log in to access full content.
                    </p>

                    <Button
                        className="mt-6 bg-[#070750] hover:bg-[#0a0a8f] text-white px-6 py-5 rounded-md"
                    >
                        Create an account →
                    </Button>
                </div>

                <div className="hidden md:block absolute right-0 bottom-0">
                    <Image
                        src="/images/student-right.png"
                        alt="student-lef"
                        width={400}
                        height={400}
                        className="rounded-xl object-cover"
                    />
                </div>
            </div>
        </section>
    );
}
