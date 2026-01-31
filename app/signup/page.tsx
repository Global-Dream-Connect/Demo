"use client";

import Image from "next/image";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import AuthHeader from "@/components/auth/AuthHeader";
import { Carousel, CarouselContent, CarouselItem,} from "@/components/ui/carousel";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const schema = z.object({
  fullName: z.string().min(2, "Enter your full name"),
  email: z.email({error:"Enter a valid email"}),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export default function SignupPage() {
  const router = useRouter();

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
    },
  });

  
  async function onSubmit(values: z.infer<typeof schema>) {
    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message || "Signup failed. Try Again",{position:"top-center", richColors:true});
        return;
      }

      // move to next step only after API success
      router.push(
        `/verify-email?name=${encodeURIComponent(
          values.fullName
        )}&email=${encodeURIComponent(values.email)}`
      );
    } catch (error) {
      alert("Something went wrong");
    }
  }


  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <AuthHeader />

      {/* Main */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2">
        {/* LEFT FORM */}
        <div className="flex items-center justify-center px-6 lg:px-12">
          <div className="w-full max-w-md space-y-6">
            <span className="inline-block rounded-full bg-gray-100 px-4 py-1 text-sm font-medium">
              Step 1/3
            </span>

            <h1 className="text-2xl font-semibold text-gray-900">
              Let’s get you started
            </h1>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your full name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Enter your email address"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="Enter a strong password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button className="w-full h-11 text-base bg-[#070750] hover:bg-[#050540]">
                  Sign up with your e-mail
                </Button>
              </form>
            </Form>

            {/* Divider */}
            <div className="flex items-center gap-3">
              <div className="h-px flex-1 bg-gray-200" />
              <span className="text-sm text-gray-500">
                or continue with
              </span>
              <div className="h-px flex-1 bg-gray-200" />
            </div>

            {/* Google */}
            <Button
              variant="outline"
              className="w-full h-11 flex items-center gap-3"
            >
              <Image
                src="/Images/google.svg"
                alt="Google"
                width={18}
                height={18}
              />
              Continue with Google
            </Button>
          </div>
        </div>

        {/* RIGHT SLIDER */}
        <div className="hidden lg:flex items-center justify-center p-6">
          <div className="w-full h-[520px] max-w-[520px] rounded-2xl overflow-hidden">
            <Carousel className="h-full">
              <CarouselContent>

                {/* Slide 1 */}
                <CarouselItem>
                  <div className="relative h-[520px]">
                    <Image
                      src="/Images/how-it-works.jpg"
                      alt="Mentorship"
                      fill
                      className="object-cover"
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                    {/* Text */}
                    <div className="absolute bottom-12 left-8 right-8 text-white">
                      <h2 className="text-2xl font-semibold">
                        Great Mentorship
                      </h2>
                      <p className="text-sm text-gray-200 max-w-sm">
                        Get help from seasoned mentors to help navigate your ivy league journey.
                      </p>
                    </div>

                    {/* Slider indicators */}
                    <div className="absolute bottom-4 left-8 flex gap-2">
                      <span className="h-1 w-10 rounded-full bg-white animate-slide" />
                      <span className="h-1 w-6 rounded-full bg-white/40" />
                      <span className="h-1 w-6 rounded-full bg-white/40" />
                    </div>
                  </div>
                </CarouselItem>

                {/* Slide 2 */}
                <CarouselItem>
                  <div className="relative h-[520px]">
                    <Image
                      src="/Images/How I became a Rhodes Scholar.png"
                      alt="Global Network"
                      fill
                      className="object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                    <div className="absolute bottom-12 left-8 right-8 text-white">
                      <h2 className="text-2xl font-semibold">
                        Global Network
                      </h2>
                      <p className="text-sm text-gray-200 max-w-sm">
                        Connect with students and mentors across the globe.
                      </p>
                    </div>

                    <div className="absolute bottom-4 left-8 flex gap-2">
                      <span className="h-1 w-6 rounded-full bg-white/40" />
                      <span className="h-1 w-10 rounded-full bg-white animate-slide" />
                      <span className="h-1 w-6 rounded-full bg-white/40" />
                    </div>
                  </div>
                </CarouselItem>

              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-gray-500">
        By creating an account, you agree with our{" "}
        <span className="underline cursor-pointer">
          Terms of service
        </span>
      </footer>
    </div>
  );
}
