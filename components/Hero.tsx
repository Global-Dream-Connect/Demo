import React from 'react'
import { Button } from './ui/button'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Banner from './banner'

export default function Hero() {
  return (
    <>
      <div className='relative w-full h-max bg-white flex flex-col items-center md:flex-row md:items-start md:h-[calc(100vh-2rem)] py-4 md:py-8 md:px-8 md:mb-28 lg:mb-32'>

        <div className='w-full max-w-lg flex-1 flex flex-col items-center gap-4 p-4 md:w-1/2 md:max-w-none lg:px-12 md:gap-8'>
          <div className='w-fit h-fit flex gap-2 bg-neutral-100 rounded-full py-2.5 px-4 text-slate-600 md:mr-auto'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-globe-icon lucide-globe"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
            <span>Global Dream Connect</span>
          </div>

          <div className='w-full max-w-md h-fit text-start font-bold text-3xl leading-10 text-[#333333] md:max-w-full'>
            <div className='w-full h-fit sm:hidden'>
              <span>Dream Big, <br/> Connect Globally,</span> <br/> <span className='text-blue-400'>Achieve More</span>
            </div>
            <div className='hidden sm:block sm:text-3xl sm:leading-12 lg:text-5xl lg:leading-15'>
              <span>Dream Big, Connect <br/> Globally,</span> <span className='text-blue-400'>Achieve More</span>
            </div>
          </div>
          <p className='w-full max-w-md text-neutral-500 text-start text-pretty md:max-w-none'>
            At GDC, we connect ambitious teenagers with mentors and professors from the very universities they dream of attending.
          </p>
          <Button className='w-full h-fit bg-[#070750] py-2 my-4 md:w-fit md:text-lg md:mr-auto hover:bg-[#070750]/90 hover:cursor-pointer'>Start Your journey Now <ArrowRight/></Button>

          <div className='w-full h-fit flex justify-evenly md:w-full md:justify-between'>
            <HeroStat number={'10k+'} title={"Students Helped"} color={'text-[#070750]'}/>
            <HeroStat number={'2k+'} title={"Expert Mentors"} color={'text-[#FFE953]'}/>
            <HeroStat number={'50+'} title={"Countries"} color={'text-[#8A38F5]'}/>

          </div>
          
        </div>
        <Banner/>

        <div className='w-full h-max md:h-full md:w-1/2 flex items-start justify-start'>
          <div className='w-full max-w-2xl h-auto '>
              <Image src={'/Images/joyful-young-schoolgirl-wearing-backpack-holding-notebook-points-himself 1.png'} alt='joyful-young-schoolgirl-wearing-backpack-holding-notebook-points-himself 1'
              width={400}
              height={400}
              className='w-full h-full object-cover'
              />
          </div>
        </div>
      </div>
    </>
  )
}


function HeroStat({number,title,color}){
  return(
    <>
      <div className={cn('w-fit h-fit flex flex-col gap-2',color)}>
        <div className='font-semibold text-3xl lg:text-4xl'>{number}</div>
        <div className='text-neutral-600 text-sm md:text-lg text-wrap'>{title}</div>
      </div>
    </>
  )
}