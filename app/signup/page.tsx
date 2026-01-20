"use client";

import Image from "next/image";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const schema = z.object({
  fullName: z.string().min(2, "Enter your full name"),
  email: z.string().email("Enter a valid email"),
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

  function onSubmit(values: z.infer<typeof schema>) {
    router.push(
      `/verify-email?name=${encodeURIComponent(
        values.fullName
      )}&email=${encodeURIComponent(values.email)}`
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />

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
                        <Input
                          placeholder="Enter your full name"
                          {...field}
                        />
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

                <Button className="w-full h-11 text-base">
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

            {/* Google Button */}
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
          <div className="w-full h-full rounded-2xl overflow-hidden">
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
                    <div className="absolute inset-0 bg-black/40" />
                    <div className="absolute bottom-8 left-8 text-white">
                      <h2 className="text-2xl font-semibold">
                        Great Mentorship
                      </h2>
                      <p className="text-sm text-gray-200 max-w-sm">
                        Get help from seasoned mentors to help navigate your ivy league journey.
                      </p>
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
                    <div className="absolute inset-0 bg-black/40" />
                    <div className="absolute bottom-8 left-8 text-white">
                      <h2 className="text-2xl font-semibold">
                        Global Network
                      </h2>
                      <p className="text-sm text-gray-200 max-w-sm">
                        Connect with students and mentors across the globe.
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              </CarouselContent>

              <CarouselPrevious />
              <CarouselNext />
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
