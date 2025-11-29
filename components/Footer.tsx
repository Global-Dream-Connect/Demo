'use client'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { Mail } from 'lucide-react'

const links=[
  {link : 'About', href:'/about'},
  {link : 'FAQs', href:'/faq'},
  {link : 'Contact Us', href:'/contact-us'},
  {link : 'LinkedIn', href:'/linkedin'},
  {link : 'Instagram', href:'/instagram'},
]

async function copyToClipboard(text:string) {
  try {
    await navigator.clipboard.writeText(text);
    alert('email copied to clipboard')
    return true; // Success
  } catch (err) {
    // Fallback for older browsers or HTTPS-only restriction
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    const successful = document.execCommand('copy');
    document.body.removeChild(textArea);
    return successful;
  }
}

export default function Footer() {
  return (
    <>
      <div className='w-full h-fit flex flex-col gap-2 p-4 bg-[#070750] md:grid md:grid-cols-3 md:justify-items-center md:py-8 lg:px-12'>
        {/* box1 */}
        <div className='w-full h-max md:order-1 '>
          <div className='w-full h-fit flex items-center gap-1'>
            <span className='text-white font-medium text-7xl font-primary'>G</span>
            <div className='w-fit h-fit flex flex-col text-white'>
              <span className='text-sm'>Global Dream Connect</span>
              <span className='text-xs'>Fresh Minds.. Global Futures..</span>
            </div>
          </div>
          <p className='text-slate-200 text-sm'>
            Your Ivy League journey starts here. We focus on action, not just advice. Our students don&#39;t just prepare, they compete, lead and excel.
          </p>
        </div>
        
        {/* box2 */}
        <div className='w-full h-max flex flex-col gap-2 md:order-3 '>
          <span className='text-white text-sm'>Send us an email: </span>
          <Button variant={'outline'} className='rounded-full bg-[#70750] w-fit text-white flex h-fit' onClick={()=>copyToClipboard('globaldreamconnect@gmail.com')}>
            <Mail/> <span className='text-wrap w-full'>globaldreamconnect@gmail.com</span>
          </Button>
        </div>

        {/* box3 */}
        <div className='w-full h-max flex md:order-2 md:px-4'>
          <div className='w-1/2 flex flex-col gap-2'>
            <span className='text-white font-medium '>Information</span>
            <Links link={links[0]}/>
            <Links link={links[1]}/>
            <Links link={links[2]}/>
          </div>
          <div className='w-1/2 flex flex-col gap-2'>
            <span className='text-white font-medium'>Socials</span>          
            <Links link={links[3]}/>
            <Links link={links[4]}/>
          </div>
        </div>
        {/* box4 */}
        <div className='w-full h-max flex flex-col gap-2 text-slate-100 text-sm md:col-span-3 border-t py-4 sm:flex-row sm:justify-between md:order-4 md:mt-4 lg:mt-8'>
        <div>Global Dream Connect 2025 - All Rights Reserved</div>
        <div className='flex gap-2'>
          <Link href={'#'}>Terms of service</Link>
          <Link href={'#'}>Privacy Policy</Link>
        </div>
      </div>
      </div>
    </>
  )
}

function Links ({link}){
  
  return(
    <>
      <Link className='text-slate-100' href={link.href}>{link.link}</Link>
    </>
  )
}



