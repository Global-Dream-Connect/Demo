"use client";

import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function VerifyEmailPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const name = searchParams.get("name") || "there";

  const [otp, setOtp] = useState<string[]>(Array(6).fill(""));
  const [timer, setTimer] = useState(50);
  const [verifying, setVerifying] = useState(false);

  /* Countdown */
  useEffect(() => {
    if (timer === 0) return;
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);

  /* OTP input */
  const handleChange = (value: string, index: number) => {
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      document.getElementById(`otp-${index + 1}`)?.focus();
    }
  };

  /* Verify */
  const handleVerify = () => {
    if (otp.join("").length !== 6) return;

    setVerifying(true);

    // 🔥 simulate API call
    setTimeout(() => {
      router.push("/verify-success");
    }, 2000);
  };

  return (
    <div className="relative min-h-screen">
      {/* BACKGROUND PAGE */}
      <div className="min-h-screen flex flex-col">
        <Header />

        <div className="flex-1 grid grid-cols-1 lg:grid-cols-2">
          <div className="flex items-center justify-center px-6 lg:px-12">
            <div className="w-full max-w-md space-y-6 opacity-60">
              <span className="inline-block rounded-full bg-gray-100 px-4 py-1 text-sm">
                Step 1/3
              </span>
              <h1 className="text-2xl font-semibold">
                Let’s get you started
              </h1>
              <Input disabled placeholder="Enter your full name" />
              <Input disabled placeholder="Enter your email address" />
              <Input disabled placeholder="Enter a strong password" />
              <Button disabled className="w-full">
                Sign up with your e-mail
              </Button>
            </div>
          </div>

          <div className="hidden lg:block relative">
            <Image
              src="/Images/how-it-works.jpg"
              alt="Mentorship"
              fill
              className="object-cover opacity-60"
            />
          </div>
        </div>
      </div>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* OTP MODAL */}
      <div className="absolute inset-0 z-20 flex items-center justify-center px-4">
        <div className="w-full max-w-xl bg-white rounded-2xl p-10 text-center shadow-xl">
          <h2 className="text-2xl font-semibold mb-2">
            Hi {name}, we want to verify your email
          </h2>

          <p className="text-gray-500 mb-8">
            Check your mail and enter the 6 digit code that we sent to you.
          </p>

          {/* OTP BOXES */}
          <div className="flex justify-center gap-3 mb-6">
            {otp.map((digit, index) => (
              <input
                key={index}
                id={`otp-${index}`}
                value={digit}
                maxLength={1}
                disabled={verifying}
                onChange={(e) =>
                  handleChange(e.target.value, index)
                }
                className="w-14 h-14 text-center text-xl border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 disabled:bg-gray-100"
              />
            ))}
          </div>

          {/* RESEND */}
          <p className="text-sm text-gray-500 mb-6">
            Resend code in{" "}
            <span className="text-indigo-600 font-medium">
              {timer}s
            </span>
          </p>

          {/* VERIFY BUTTON */}
          <Button
            onClick={handleVerify}
            disabled={verifying}
            className={`w-full h-12 text-base transition ${
              verifying
                ? "bg-indigo-300 cursor-not-allowed"
                : ""
            }`}
          >
            {verifying ? "Verifying..." : "Verify my mail"}
          </Button>
        </div>
      </div>
    </div>
  );
}
