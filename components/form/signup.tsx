"use client";

import React, { useState } from "react";
import * as z from "zod";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import Link from "next/link";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  email: z.string().email("Invalid email address"),
  name: z.string().min(5, "Minimum 5 characters"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/\d/, "Password must contain at least one number")
    .regex(/[^A-Za-z0-9]/, "Password must contain at least one symbol"),
});

export default function SignupForm() {
  const [showFormSubmitBtn, setShowSubmitFormBtn] = useState(true);
  const [submitDisable, setSubmitDisable] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
      name: "",
    },
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setShowSubmitFormBtn(false);
    setSubmitDisable(true);

    try {
      const response = await fetch(`/api/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        // Show error from API
        toast.error(result.error || "Something went wrong! Try Again.", {
          position: "top-center",
          richColors: true,
        });
        setShowSubmitFormBtn(true);
        setSubmitDisable(false);
        setIsLoading(false);
        return;
      }

      // Success
      toast.success("Account created successfully! Redirecting to login...", {
        position: "top-center",
        richColors: true,
      });

      // Reset form
      form.reset();

      // Redirect to login page after 2 seconds
      setTimeout(() => {
        router.push("/auth/login");
      }, 2000);
    } catch (error) {
      console.error("Signup error:", error);
      toast.error("Network error. Please check your connection.", {
        position: "top-center",
        richColors: true,
      });
      setShowSubmitFormBtn(true);
      setSubmitDisable(false);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <Card className="w-full max-w-md h-screen py-10 sm:h-max">
        <CardHeader>
          <CardTitle>Signup</CardTitle>
          <CardDescription>
            Create a new account to access wonderful resources
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form id="signup-form" onSubmit={form.handleSubmit(onSubmit)}>
            <FieldGroup>
              <Controller
                name="email"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor={field.name}>Email</FieldLabel>
                    <Input
                      {...field}
                      id="signup-form-email"
                      aria-invalid={fieldState.invalid}
                      placeholder="janedoe@example.com"
                      autoComplete="email"
                      className="border-neutral-400"
                      disabled={isLoading}
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                name="name"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor={field.name}>Full Name</FieldLabel>
                    <Input
                      {...field}
                      id="signup-form-name"
                      aria-invalid={fieldState.invalid}
                      placeholder="Jane Doe"
                      autoComplete="name"
                      className="border-neutral-400"
                      disabled={isLoading}
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                name="password"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor={field.name}>Password</FieldLabel>
                    <Input
                      {...field}
                      id="signup-form-password"
                      type="password"
                      aria-invalid={fieldState.invalid}
                      placeholder="Enter your password"
                      autoComplete="new-password"
                      className="border-neutral-400"
                      disabled={isLoading}
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                    <div className="text-xs text-gray-500 mt-1">
                      Must contain: 8+ chars, uppercase, lowercase, number,
                      symbol
                    </div>
                  </Field>
                )}
              />
              <div className="w-full h-fit mt-6">
                {showFormSubmitBtn ? (
                  <Button
                    className="w-full"
                    type="submit"
                    form="signup-form"
                    disabled={submitDisable || isLoading}
                  >
                    {isLoading ? <Spinner className="mr-2" /> : null}
                    {isLoading ? "Creating Account..." : "Sign Up"}
                  </Button>
                ) : (
                  <Button type="button" className="w-full" disabled>
                    <Spinner className="mr-2" />
                    Processing...
                  </Button>
                )}
              </div>
            </FieldGroup>
          </form>
        </CardContent>
        <CardFooter>
          <div className="w-full h-fit flex items-center justify-center gap-1 text-sm">
            Already a member?{" "}
            <Link
              className="text-blue-500 hover:text-blue-600 underline transition-colors"
              href="/auth/login"
            >
              Login here
            </Link>
          </div>
        </CardFooter>
      </Card>
    </>
  );
}
