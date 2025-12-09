'use client'

import React, { Activity, useState } from "react";
import * as z from "zod"
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldError, FieldGroup, FieldLabel} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import Link from "next/link";
import { toast } from "sonner";
import { Eye } from "lucide-react";

const formSchema = z.object({
    email : z.email({error:'invalid email'}),
    password : z.string()
                .min(8, 'Password must be at least 8 characters long')
                .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
                .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
                .regex(/\d/, 'Password must contain at least one number')
                .regex(/[^A-Za-z0-9]/, 'Password must contain at least one symbol'),

})

export default function LoginForm(){

    const [showFormSubmitBtn, setShowSubmitFormBtn] = useState(true)
    const [submitDisable, setSubmitDisable] = useState(false)


    const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode : "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
  })

  async function onSubmit(data: z.infer<typeof formSchema>) {
    setShowSubmitFormBtn(false)
    try{
        const req = await fetch(`/api/auth/login`,{
            method : "POST",
            body : JSON.stringify(data)
        })
        if(!req.ok) {
            toast.error("Something went wrong! Try Again.",{position:"top-center",richColors:true})
            setShowSubmitFormBtn(true)
            return
        }

        toast.success("Success! Redirecting...",{position:"top-center",richColors:true})
        setShowSubmitFormBtn(true)
        setSubmitDisable(true)


        
    } catch(e){
        console.log("error",e)
    }
    console.log(data)
  }

    return(
        <>
            <Card className="w-full max-w-md h-max py-10 bg-[#070750]/2 sm:h-max">
                <CardHeader>
                    <CardTitle>Welcome back</CardTitle>
                    <CardDescription>
                        Login into your account to access resources
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form id="login-form" onSubmit={form.handleSubmit(onSubmit)}>
                        <FieldGroup>
                            <Controller
                                name="email"
                                control={form.control}
                                render={({field, fieldState})=>(
                                    <Field data-invalid={fieldState.invalid}>
                                        <FieldLabel htmlFor={field.name}>Email</FieldLabel>
                                        <Input 
                                            {...field}
                                            id="login-form-email"
                                            aria-invalid={fieldState.invalid}
                                            placeholder="enter your email address"
                                            autoComplete="off"
                                            className="border-neutral-400"
                                        />
                                        {fieldState.invalid && ( <FieldError errors={[fieldState.error]}/>)}
                                    </Field>
                                )}
                            />
                            <Controller
                                name="password"
                                control={form.control}
                                render={({field, fieldState})=>(
                                    <Field data-invalid={fieldState.invalid} className="relative">
                                        <FieldLabel htmlFor={field.name} >Password</FieldLabel>
                                        <div className="w-full h-fit flex">
                                            <Input 
                                            {...field}
                                            id="login-form-password"
                                            aria-invalid={fieldState.invalid}
                                            placeholder="enter your password"
                                            autoComplete="off"
                                            className="border-neutral-400 flex-1"
                                            type='password'
                                        />
                                        {/* <Activity mode="visible">
                                            <Button variant={'ghost'} className="w-fit absolute right-0 hover:bg-transparent"><Eye/></Button>
                                        </Activity> */}
                                        </div>
                                        {fieldState.invalid && ( <FieldError errors={[fieldState.error]}/>)}
                                    </Field>
                                )}
                            />
                            <div className="w-full h-fit">
                                <Activity mode={!showFormSubmitBtn ? 'hidden' : 'visible'}>
                                    <Button className="w-full bg-brand-blue" type="submit" form="login-form" disabled={submitDisable}>Login to your account</Button>
                                </Activity>
                                <Activity mode={showFormSubmitBtn ? 'hidden' : 'visible'}>
                                    <Button type="button" className="w-full bg-brand-blue"><Spinner/></Button>
                                </Activity>
                            </div>
                        </FieldGroup>
                    </form>
                </CardContent>
                <CardFooter className="flex-col">
                    <div className="w-full h-fit flex flex-col items-center px-4 pb-8 gap-2">
                        <div className="w-full flex flex-row items-center gap-3">
                            <div className="flex-1 bg-slate-300 h-px"></div>
                            <div>or</div>
                            <div className="flex-1 bg-slate-300 h-px"></div>

                        </div>
                        <Button variant={'outline'} className="w-full flex items-center justify-center">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
                                <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                                </svg>
                            </span>
                            <span>continue with Google</span>
                        </Button>
                    </div>
                    <div className="w-full h-fit flex items-center justify-center gap-1 text-sm">
                       New to Global Dream Connect? <Link className="text-blue-500 underline" href={'/auth/signup'}>Sign up</Link>
                    </div>
                </CardFooter>
            </Card>
        </>
    )
}