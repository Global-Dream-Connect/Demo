"use client";

import { CheckCircle } from "lucide-react";
import AuthHeader from "@/components/auth/AuthHeader";
import SignupShell from "@/components/auth/SignupShell";

export default function VerifySuccessPage() {
  return (
    <div className="relative min-h-screen">
      {/* BACKGROUND PAGE (exact signup, disabled) */}
      <div className="min-h-screen flex flex-col">
        <AuthHeader />
        <SignupShell disabled />
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
