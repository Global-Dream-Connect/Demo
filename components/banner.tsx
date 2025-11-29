import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const logoArr = [
    {name:  'harvard-university-seeklogo'}, 
    {name : 'princeton-university-seeklogo'}, 
    {name : 'columbia-university-seeklogo'}, 
    {name : 'upenn-university-of-pennsylvania-seeklogo'}, 
    {name : 'dartmouth-seeklogo'}, 
    {name : 'cornell-university-seeklogo'}, 
    {name:  'yale-university-seeklogo'},
]

export default function Banner(){
    return(
        <>
            <div className="relative w-full h-24 flex items-center px-2 bg-slate-50 md:absolute md:bottom-0 md:left-0 overflow-hidden">
                <div className="absolute z-10 left-0 text-neutral-500 bg-linear-to-r from-slate-200 to-slate-100/95 w-max h-full flex items-center px-4 md:px-10 ">
                    Get into top schools
                </div>
                <div className="absolute left-0 w-max h-full flex items-center gap-8 md:w-full md:justify-evenly">
                   
                    <ShowLogo className={'w-32'} name={logoArr[0].name}/>
                    <ShowLogo className={'w-24'} name={logoArr[1].name}/>
                    <ShowLogo className={'w-48'} name={logoArr[2].name}/>
                    <ShowLogo className={'w-20'} name={logoArr[3].name}/>
                    <ShowLogo className={'w-32'} name={logoArr[4].name}/>
                    <ShowLogo className={'w-8'} name={logoArr[5].name}/>


                </div>
            </div>
        </>
    )
}


function ShowLogo({name,className}){
    return(
        <>
            <div className={cn('h-full',className)}>
                <Image src={`/Images/${name}.png`} alt={name} width={1000} height={1000} className="w-full h-full object-contain" />
            </div>  
        </>
    )
}