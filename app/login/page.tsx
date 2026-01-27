"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Eye, EyeOff, ArrowRight } from "lucide-react"
import Header from "@/components/Header"
import { useAuth } from "@/context/AuthContext"
import { useRouter, useSearchParams } from "next/navigation"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const { login, isLoading, error } = useAuth()
  const router = useRouter()
  const searchParams = useSearchParams()
  const returnUrl = searchParams.get('returnUrl') || "/"
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Please enter email and password")
      return
    }
    
    try {
      await login(email, password)
      router.push(returnUrl)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header hideNavigation={true} buttonText="Create an account" />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Login Form */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Welcome back</h2>

            {/* Email Input */}
            <div className="mb-6">
              <Label htmlFor="email" className="text-gray-700 mb-2 block">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email address"
                className="w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Password Input */}
            <div className="mb-6">
              <Label htmlFor="password" className="text-gray-700 mb-2 block">
                Password
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter a strong password"
                  className="w-full pr-10"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-800"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Login Button */}
            <Button 
              onClick={handleLogin}
              disabled={isLoading}
              className="w-full bg-[#070750] hover:bg-[#070750]/90 text-white font-semibold py-6 rounded-md mb-6 text-base"
            >
              {isLoading ? "Logging in..." : "Log in to your account"}
            </Button>

            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

            {/* Separator */}
            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">or continue with</span>
              </div>
            </div>

            {/* Google Login Button */}
            <Button
              variant="outline"
              className="w-full border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 font-normal py-6 rounded-md flex items-center justify-center gap-3 text-base"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              <span>Continue with Google</span>
            </Button>
          </div>

          {/* Right Column - Promotional Card */}
          <div className="relative rounded-lg shadow-sm overflow-hidden bg-white">
            <div className="relative w-full h-full min-h-[600px]">
              <Image
                src="/Images/college-students-different-ethnicities-cramming 1.png"
                alt="Students collaborating"
                fill
                className="object-cover rounded-lg"
                priority
              />

              {/* Text Overlay - Bottom Left Corner */}
              <div className="absolute bottom-0 left-0 bg-black/60 p-8 rounded-br-lg">
                <h3 className="text-3xl font-bold text-white mb-2">Great Mentorship</h3>
                <p className="text-white text-base leading-relaxed max-w-md">Get help from seasoned mentors to help navigate your ivy league journey.</p>
                <div className="flex gap-2 mt-6">
                  <div className="w-40 h-2 bg-white rounded-full"></div>
                  <div className="w-30 h-2 bg-transparent border-2 border-gray-400 rounded-full"></div>
                  <div className="w-60 h-2 bg-transparent border-2 border-gray-400 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
