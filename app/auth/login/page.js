

import LoginForm from "@/components/form/login"
import { Button } from "@/components/ui/button";
import LogoBanner from "../../../components/LogoBanner";
import Image from "next/image";
import Link from "next/link";

export default function Page(){
    return(
        <>
           <div className="w-full h-max md:h-screen md:flex-col md:flex">
                 <div className=" w-full h-max flex items-center justify-between px-2 border-b py-4 sm:px-8 md:px-12 lg:px-16">
                    <LogoBanner/>
                    <Button className="bg-brand-blue text-xs">
                        <Link href="/auth/signup">Create an account</Link>
                    </Button>
                </div>
                <div className=" w-full h-max flex flex-col gap-4 items-center justify-center bg-white mt-4 md:h-full md:flex-row">
                    <div className="w-full h-max px-1 md:w-1/2 md:h-full grid place-items-center ">
                        <LoginForm/>
                    </div>
                    <div className="w-full h-max flex items-center justify-center p-2 md:w-1/2 md:h-full md:justify-start">
                        <div className="relative w-full max-w-lg aspect-square rounded-md overflow-hidden shadow-sm">
                            <Image src={'/Images/college-students-different-ethnicities-cramming 1.png'} alt="college-students-different-ethnicities-cramming 1" width={400} height={400} className="w-full h-full object-cover" />
                            <div className="absolute bottom-0 w-full h-1/2 flex flex-col px-4 py-8 bg-linear-to-t from-0% from-black/90 to-100% to-black/10 text-white">
                            <div className="w-full h-fit flex flex-col mt-auto md:gap-2">
                                    <span className="font-bold text-xl">Great Mentorship</span>
                                <span className="text-sm">Get help from seasoned mentors to help navigate your ivy league journey.</span>
                            </div>
                            </div>
                        </div>
                    </div>
                    
                </div>

           </div>
        </>
    )
}