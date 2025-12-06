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

const formSchema = z.object({
    email : z.email({error:'invalid email'}),
    name : z.string().min(5, 'minimum 5 characters'),
    password : z.string()
                .min(8, 'Password must be at least 8 characters long')
                .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
                .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
                .regex(/\d/, 'Password must contain at least one number')
                .regex(/[^A-Za-z0-9]/, 'Password must contain at least one symbol'),

})

export default function SignupForm(){

    const [showFormSubmitBtn, setShowSubmitFormBtn] = useState(true)
    const [submitDisable, setSubmitDisable] = useState(false)

    const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode : "onBlur",
    defaultValues: {
      email: "",
      password: "",
      name : "",
    },
  })

  async function onSubmit(data: z.infer<typeof formSchema>) {
    setShowSubmitFormBtn(false)
    try{
        const req = await fetch(`/api/auth/signup`,{
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
                                render={({field, fieldState})=>(
                                    <Field data-invalid={fieldState.invalid}>
                                        <FieldLabel htmlFor={field.name}>Email</FieldLabel>
                                        <Input 
                                            {...field}
                                            id="signup-form-email"
                                            aria-invalid={fieldState.invalid}
                                            placeholder="janedoe@example.com"
                                            autoComplete="off"
                                            className="border-neutral-400"
                                        />
                                        {fieldState.invalid && ( <FieldError errors={[fieldState.error]}/>)}
                                    </Field>
                                )}
                            />
                            <Controller
                                name="name"
                                control={form.control}
                                render={({field, fieldState})=>(
                                    <Field data-invalid={fieldState.invalid}>
                                        <FieldLabel htmlFor={field.name}>Name</FieldLabel>
                                        <Input 
                                            {...field}
                                            id="signup-form-name"
                                            aria-invalid={fieldState.invalid}
                                            placeholder="Jane Doe"
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
                                    <Field data-invalid={fieldState.invalid}>
                                        <FieldLabel htmlFor={field.name}>Password</FieldLabel>
                                        <Input 
                                            {...field}
                                            id="signup-form-password"
                                            aria-invalid={fieldState.invalid}
                                            placeholder="password here"
                                            autoComplete="off"
                                            className="border-neutral-400"
                                        />
                                        {fieldState.invalid && ( <FieldError errors={[fieldState.error]}/>)}
                                    </Field>
                                )}
                            />
                            <div className="w-full h-fit">
                                <Activity mode={!showFormSubmitBtn ? 'hidden' : 'visible'}>
                                    <Button className="w-full" type="submit" form="signup-form" disabled={submitDisable}>Submit</Button>
                                </Activity>
                                <Activity mode={showFormSubmitBtn ? 'hidden' : 'visible'}>
                                    <Button type="button" className="w-full"><Spinner/></Button>
                                </Activity>
                            </div>
                        </FieldGroup>
                    </form>
                </CardContent>
                <CardFooter>
                    <div className="w-full h-fit flex items-center justify-center gap-1 text-sm">
                       Already a member? <Link className="text-blue-500 underline" href={'/auth/login'}>Login</Link>
                    </div>
                </CardFooter>
            </Card>
        </>
    )
}