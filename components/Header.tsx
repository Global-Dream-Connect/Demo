import Image from 'next/image';
import BlueBtn from './utils/BlueBtn';

function Header() {
  return (
    <nav className='py-[16px] px-[8px] flex flex-wrap justify-between items-center'>

      {/* Logo */}
      <div className='flex ml-20'>
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

      {/* Menu */}
      <div className='flex flex-wrap mr-20 items-center'>

        <ul className='flex gap-10 text-[#A1A1A1] text-[15px] items-center'>
          <li><a href="#">Home</a></li>
          <li><a href="#">Resources</a></li>
          <li><a href="#">Fellowship</a></li>
          <li><a href="#">How it works</a></li>
          <li><a href="#">Become a mentor</a></li>
        </ul>

        {/* div as button */}
        <BlueBtn text="Sign up" />
      </div>
    </nav>
  )
}

export default Header