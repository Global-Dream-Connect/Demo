import Image from 'next/image';

function Header() {
  return (
    <nav className='py-[16px] px-[8px] flex flex-wrap'>
      <div className='flex'>
        <div>
          <Image 
            src="Images/Logo.svg"
            alt="Company's blue G logo"
            width={60}
            height={60}
          />
        </div>

        <div className='flex flex-col'>
          <div className='text-[24px] text-[#070750] font-[700] pt-2'>
            Global Dreams Connect
          </div>

          <div className='text-[14px] pl-[1px] mt-[-5px] text-[#767676]'>
            Fresh Minds, Global Futures...
          </div>
        </div>
      </div>
      <div></div>
    </nav>
  )
}

export default Header