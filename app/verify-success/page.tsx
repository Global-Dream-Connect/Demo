"use client";

import Image from "next/image";
import Header from "@/components/Header";
import { CheckCircle } from "lucide-react";

export default function VerifySuccessPage() {
  return (
    <div className="relative min-h-screen">
      {/* BACKGROUND PAGE (same as signup) */}
      <div className="min-h-screen flex flex-col">
        <Header />

        <div className="flex-1 grid grid-cols-1 lg:grid-cols-2">
          {/* Left */}
          <div className="flex items-center justify-center px-6 lg:px-12">
            <div className="w-full max-w-md space-y-6 opacity-60">
              <span className="inline-block rounded-full bg-gray-100 px-4 py-1 text-sm">
                Step 1/3
              </span>

              <h1 className="text-2xl font-semibold">
                Let’s get you started
              </h1>

              <input
                disabled
                placeholder="Enter your full name"
                className="w-full h-11 rounded-md border px-3"
              />
              <input
                disabled
                placeholder="Enter your email address"
                className="w-full h-11 rounded-md border px-3"
              />
              <input
                disabled
                placeholder="Enter a strong password"
                className="w-full h-11 rounded-md border px-3"
              />

              <button
                disabled
                className="w-full h-11 rounded-md bg-indigo-900 text-white"
              >
                Sign up with your e-mail
              </button>
            </div>
          </div>

          {/* Right image */}
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

      {/* TOP SUCCESS MESSAGE */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 z-20">
        <div className="flex items-center gap-3 bg-green-50 border border-green-200 text-green-700 px-6 py-3 rounded-xl shadow-md">
          <CheckCircle className="w-6 h-6 text-green-600" />
          <span className="font-medium">
            Your mail has been verified
          </span>
        </div>
      </div>
    </div>
  );
}
