"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectItem, SelectTrigger, SelectValue, SelectContent } from "@/components/ui/select";
import { useState } from "react";
import WaitlistConfirmation from "./WaitlistConfirmation";

const formSchema = z.object({
    fullName: z.string().min(2, "Full name is required"),
    email: z.string().email("Please enter a valid email address"),
    country: z.string().min(1, "Country is required"),
    phone: z.string().min(8, "Please enter a valid phone number"),
    about: z.string().optional(),
    student: z.boolean().optional(),
    mentor: z.boolean().optional(),
});

export default function JoinWaitlist() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [submittedName, setSubmittedName] = useState<string>("");

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullName: "",
            email: "",
            country: "",
            phone: "",
            about: "",
            student: false,
            mentor: false,
        },
    });

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        console.log(values);




        // When success:
        setSubmittedName(values.fullName);
        setIsSubmitted(true);

        // reset form
        form.reset();

    };



    if (isSubmitted) {
        return (
            <div className="w-full flex justify-center py-16 px-4">
                <WaitlistConfirmation
                    name={submittedName || "there"}
                    referralCode={"GDC-XXXX"} // ← Please generate dynamically 
                />
            </div>
        );
    }



    return (
        <div className="w-full flex justify-center py-16">
            <div className="w-full max-w-md bg-white shadow-md rounded-xl p-8 border border-gray-200">
                <h2 className="text-2xl font-bold text-[#0A0A0A] mb-1">
                    Join the waitlist
                </h2>
                <p className="text-[#808080] mb-6 text-sm">
                    Be the first to know when we launch. No spam, ever.
                </p>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">

                        {/* Full Name */}
                        <FormField
                            control={form.control}
                            name="fullName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Full Name *</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter your full name" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Email */}
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email Address *</FormLabel>
                                    <FormControl>
                                        <Input placeholder="you@example.com" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Country */}
                        <FormField
                            control={form.control}
                            name="country"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel>Country *</FormLabel>
                                    <Select onValueChange={field.onChange}>
                                        <FormControl>
                                            <SelectTrigger className="w-full">
                                                <SelectValue placeholder="Select your country" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent className="w-full">
                                            <SelectItem value="bangladesh">Bangladesh</SelectItem>
                                            <SelectItem value="india">India</SelectItem>
                                            <SelectItem value="usa">United States</SelectItem>
                                            <SelectItem value="uk">United Kingdom</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Phone */}
                        <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Phone Number (with WhatsApp) *</FormLabel>
                                    <FormControl>
                                        <Input placeholder="+1 234 567 8900" {...field} />
                                    </FormControl>

                                    <div className="min-h-[20px] text-[12px]">
                                        {form.formState.errors.phone ? (
                                            <FormMessage />
                                        ) : (
                                            <p className="text-[#808080]">
                                                We’ll use this for launch updates via WhatsApp
                                            </p>
                                        )}
                                    </div>
                                    {/* <FormMessage /> */}
                                </FormItem>
                            )}
                        />

                        {/* About */}
                        <div className="relative">
                            <FormField
                                control={form.control}
                                name="about"
                                render={({ field }) => {
                                    const charCount = field.value?.length || 0;

                                    return (
                                        <FormItem>
                                            <FormLabel>About You (Optional)</FormLabel>
                                            <FormControl>
                                                <Textarea
                                                    placeholder="Tell us about your research interests or why you want to join..."
                                                    className="h-24"
                                                    maxLength={500}
                                                    {...field}
                                                />
                                            </FormControl>

                                            {/* Live character counter */}
                                            <div className="absolute bottom-0 right-3 pb-1">
                                                <span className="text-[#808080] text-xs">
                                                    {charCount}/500
                                                </span>
                                            </div>

                                            <FormMessage />
                                        </FormItem>
                                    );
                                }}
                            />
                        </div>


                        {/* Checkboxes */}
                        <div className="space-y-2">
                            <p className="text-sm font-medium">I am a… *</p>

                            <FormField
                                control={form.control}
                                name="student"
                                render={({ field }) => (
                                    <FormItem className="flex items-center gap-2">
                                        <FormControl>
                                            <Checkbox
                                                checked={field.value}
                                                onCheckedChange={field.onChange}
                                            />
                                        </FormControl>
                                        <FormLabel className="text-sm">
                                            Student (looking to publish research)
                                        </FormLabel>
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="mentor"
                                render={({ field }) => (
                                    <FormItem className="flex items-center gap-2">
                                        <FormControl>
                                            <Checkbox
                                                checked={field.value}
                                                onCheckedChange={field.onChange}
                                            />
                                        </FormControl>
                                        <FormLabel className="text-sm">
                                            Mentor (want to help students)
                                        </FormLabel>
                                    </FormItem>
                                )}
                            />
                        </div>

                        {/* Submit Button */}

                        {/* // Disable button when submitting */}
                        <Button
                            type="submit"
                            disabled={form.formState.isSubmitting}
                            className="w-full bg-[#1E3A8A] hover:bg-[#1a3370] text-white py-5 text-base rounded-md"
                        >
                            {form.formState.isSubmitting ? "Joining..." : "Join Waitlist →"}
                        </Button>


                        <p className="text-[12px] text-center text-gray-500 mt-1">
                            🔒 We respect your privacy. Unsubscribe anytime.
                        </p>
                    </form>
                </Form>
            </div>
        </div>
    );
}
























