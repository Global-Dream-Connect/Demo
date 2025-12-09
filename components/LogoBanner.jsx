import React from "react";
import Image from 'next/image'

export default function LogoBanner(){
    return(
        <>
  
        <div className='flex'>
          <div>
            <Image
              src="/Images/Logo.svg"
              alt="Company's blue G logo"
              width={60}
              height={60}
              className='w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16'
            />
          </div>

          <div className='flex flex-col ml-2 md:ml-3'>
            <div className='text-base text-[#070750] font-bold pt-1 md:pt-2'>
              Global Dreams Connect
            </div>

            <div className='text-xs text-[#767676] md:text-sm'>
              Fresh Minds, Global Futures...
            </div>
          </div>
        </div>


        </>
    )
}