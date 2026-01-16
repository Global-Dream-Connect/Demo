// components/WaitlistConfirmation.tsx

"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import Image from "next/image";
import { FaLink, FaLinkedinIn, FaTwitter } from "react-icons/fa6";
import Link from "next/link";

interface WaitlistConfirmationProps {
    name?: string;
    referralCode?: string;
}

export default function WaitlistConfirmation({
    name = "there",
    referralCode,
}: WaitlistConfirmationProps) {
    const shareUrl = typeof window !== "undefined"
        ? `${window.location.origin}?ref=${referralCode}`
        : "";

    const copyToClipboard = () => {
        navigator.clipboard.writeText(shareUrl);
        toast.success("Referral link copied!");
    };

    const twitterShareUrl = `https://twitter.com/intent/tweet?text=Just%20joined%20the%20waitlist!%20Join%20me%20here:&url=${encodeURIComponent(shareUrl)}`;
    const linkedinShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;

    return (
        <div className="min-h-[70vh] flex items-center justify-center px-2 py-12">
            <Card className="w-full max-w-md border-2 shadow-xl">
                <CardContent className="pt-20 pb-40 px-4 text-center space-y-4">
                    {/* Big Check Icon */}
                    <div className="mx-auto w-fit">
                        <Image
                            src="/images/icons/carbon_checkmark-filled.png"
                            alt="icon"
                            width={64}
                            height={64}
                        />
                    </div>
                    <div className="space-y-3">
                        <h1 className="text-3xl font-bold tracking-tight text-[#0A0A0A]">
                            You're on the list!
                        </h1>

                        <p className="text-lg text-[#808080]">
                            Thank you for joining, <span className="font-semibold text-[#1E3A8A]">{name}</span>!
                        </p>

                        <p className="text-[#808080]">
                            Check your email (and spam folder) for confirmation.<br />
                            We'll notify you as soon as we launch.
                        </p>
                    </div>

                    {/* Referral / Share Section */}
                    <div className="pt-4 space-y-6">
                        <div className="space-y-2">
                            <p className="text-sm font-medium text-[#0A0A0A]">
                                Want to skip the wait? Share with friends:
                            </p>

                            <div className="flex flex-wrap justify-center gap-3">
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="gap-2 border-[#1E3A8A] hover:bg-[#1E3A8A] text-[#1E3A8A] hover:text-white"
                                    asChild
                                >
                                    <Link href={twitterShareUrl} target="_blank" rel="noopener noreferrer">

                                        <FaTwitter className="h-4 w-4" />
                                        Twitter
                                    </Link>
                                </Button>

                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="gap-2 border-[#1E3A8A] hover:bg-[#1E3A8A] text-[#1E3A8A] hover:text-white"
                                    asChild
                                >
                                    <Link href={linkedinShareUrl} target="_blank" rel="noopener noreferrer">

                                        <FaLinkedinIn className="h-4 w-4" />
                                        LinkedIn
                                    </Link>
                                </Button>

                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="gap-2 border-[#1E3A8A] hover:bg-[#1E3A8A] text-[#1E3A8A] hover:text-white"
                                    onClick={copyToClipboard}
                                >

                                    <FaLink className="h-4 w-4" />
                                    Copy Link
                                </Button>
                            </div>
                        </div>

                        {/* Referral Code Display */}
                        <div className="pt-3">
                            <p className="text-sm text-[#808080] mb-2">Your referral code:</p>
                            <div className="inline-flex items-center gap-3 px-5 py-3 bg-[#D9D9D9] rounded-lg font-mono font-semibold text-[#0A0A0A]">
                                {referralCode}
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}