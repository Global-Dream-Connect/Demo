"use client";

import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import AuthHeader from "@/components/auth/AuthHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SignupShell from "@/components/auth/SignupShell";


export default function VerifyEmailPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const name = searchParams.get("name") || "there";
  const email = searchParams.get("email") || "";

  const [otp, setOtp] = useState<string[]>(Array(6).fill(""));
  const [timer, setTimer] = useState(50);
  const [verifying, setVerifying] = useState(false);
  const [error, setError] = useState("");

 const handleResend = async () => {
  try {
    const res = await fetch("/api/resend-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    if (!res.ok) {
      setError("Failed to resend code");
      return;
    }

    // reset state
    setOtp(Array(6).fill(""));
    setTimer(50); // triggers countdown again
    setError("");

    // optional UX polish
    document.getElementById("otp-0")?.focus();
  } catch {
    setError("Something went wrong");
  }
};



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

  /* Verify OTP (API CALL) */
  const handleVerify = async () => {
    const code = otp.join("");

    if (code.length !== 6) {
      setError("Please enter the 6 digit code");
      return;
    }

    setVerifying(true);
    setError("");

    try {
      const res = await fetch("/api/verify-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          otp: code,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Invalid OTP");
        setVerifying(false);
        return;
      }

      // ✅ Success
      router.push("/verify-success");
    } catch {
      setError("Something went wrong");
      setVerifying(false);
    }
  };

  return (
    <div className="relative min-h-screen">
  
{/* BACKGROUND PAGE */}
<div className="min-h-screen flex flex-col">
  <AuthHeader />
  <SignupShell />
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
          <div className="flex justify-center gap-3 mb-4">
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

          {/* ERROR */}
          {error && (
            <p className="text-sm text-red-600 mb-4">
              {error}
            </p>
          )}

          {/* RESEND */}
        <div className="mb-6 text-sm">
  {timer > 0 ? (
    <p className="text-gray-500">
      Resend code in{" "}
      <span className="text-indigo-600 font-medium">
        {timer}s
      </span>
    </p>
  ) : (
    <button
    type="button"
      onClick={handleResend}
      className="text-[#070750] font-medium hover:underline"
    >
      Resend code
    </button>
  )}
</div>


          {/* VERIFY BUTTON */}
          <Button
            onClick={handleVerify}
            disabled={verifying}
            className={`w-full h-12 text-base ${
              verifying
                ? "bg-indigo-300 cursor-not-allowed"
                : "bg-[#070750] hover:bg-[#050540]"
            }`}
          >
            {verifying ? "Verifying..." : "Verify my mail"}
          </Button>
        </div>
      </div>
    </div>
  );
}
