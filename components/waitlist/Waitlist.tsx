

"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Globe } from 'lucide-react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, } from "@/components/ui/dialog";
import Link from 'next/link';

// 1. Define the Schema
const formSchema = z.object({
    email: z.string().email("Please enter a valid email address"),
});

type FormData = z.infer<typeof formSchema>;

const Waitlist = () => {
    const [isOpen, setIsOpen] = useState(false);

    // 2. Initialize Form
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting }
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
    });

    // 3. Handle Submit
    const onSubmit = async (data: FormData) => {
        // Simulate API call
        console.log("Form Data:", data);
        await new Promise((resolve) => setTimeout(resolve, 1500));

        setIsOpen(true); // Open Shadcn Modal
        reset();         // Clear form
    };

    return (
        <section className="relative w-full min-h-screen bg-white overflow-hidden font-sans md:px-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center text-center pt-10 pb-32 px-4 max-w-4xl mx-auto relative z-10">

                <div className="inline-flex items-center gap-2 bg-[#0707500D] border border-slate-200 rounded-full px-4 py-1.5 mb-5">
                    <Globe className="w-4 h-4 text-[#2E476B]" />
                    <span className="text-sm font-medium text-[#2E476B]">Connecting Dreams Globally</span>
                </div>

                <h1 className="text-3xl md:text-5xl font-extrabold text-[#333] tracking-tight leading-tight mb-6">
                    Dream Big, Connect Globally, <br />
                    <span className="text-[#4A90E2]">Achieve More</span>
                </h1>

                <p className="text-lg text-gray-500 max-w-2xl mb-5">
                    At GDC, we connect ambitious teenagers with mentors and professors
                    from the very universities they dream of attending.
                </p>

                {/* Waitlist Form */}
                <div className="w-full max-w-md bg-[#070750]/[0.02] p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="text-left space-y-4">
                        <div>
                            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                                Email Address
                            </label>
                            <Input
                                {...register("email")}
                                id="email"
                                type="email"
                                placeholder="Enter your email address"
                                className={`h-12 border-[#333333] focus-visible:ring-[#333333] ${errors.email ? 'border-red-500' : ''}`}
                            />
                            {errors.email && (
                                <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                            )}
                        </div>
                        <Button
                            disabled={isSubmitting}
                            type="submit"
                            className="w-full h-12 bg-[#070750] hover:bg-[#070750]/90 text-white font-semibold text-base"
                        >
                            {isSubmitting ? "Joining..." : "Join our waitlist"}
                        </Button>
                    </form>
                </div>
            </div>

            {/* --- SUCCESS MODAL (Shadcn) --- */}
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogContent className="sm:max-w-md flex flex-col items-center py-10">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 relative">
                        {/* Decorative badge shape from image */}
                        <div className=" w-[100px] z-0">
                            <Image src="/images/waitlist-icon.svg" alt="waitlist badge" width={100} height={100} className="object-contain object-bottom" />
                        </div>
                    </div>

                    <DialogHeader className="text-center">
                        <DialogTitle className="text-2xl font-bold text-[#1E1E1E]">
                            Welcome aboard, dreamer!
                        </DialogTitle>
                    </DialogHeader>

                    <p className="text-center text-[#767676] px-4 text-sm leading-relaxed">
                        Now that you have joined our waitlist, all you need to do it sit back and see that beautiful things we have to offer
                    </p>

                    <Button
                        onClick={() => setIsOpen(false)}
                        className="w-full mt-6 h-12 bg-[#000044] hover:bg-[#000033] text-white font-semibold"
                    >
                        <Link href={"https://mail.google.com"} target='_blank'> Check my mail</Link>
                    </Button>
                </DialogContent>
            </Dialog>

            {/* Decorative Character Images */}
            {/* Left Character */}
            <div className="hidden lg:block absolute bottom-0 left-0 w-[350px] z-0">
                <Image src="/images/student-left.png" alt="Student" width={400} height={600} className="object-contain object-bottom" />
            </div>
            {/* Right Character */}
            <div className="hidden lg:block absolute bottom-0 right-0 w-[500px] z-0">
                <Image src="/images/student-right.png" alt="Student" width={700} height={600} className="object-contain object-bottom" />
            </div>
        </section>
    );
};

export default Waitlist;


