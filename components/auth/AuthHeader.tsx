"use client";

import Image from "next/image";
import BlueBtn from "@/components/utils/BlueBtn";

function AuthHeader() {
  return (
    <nav className="py-[16px] px-[8px] md:px-4 flex justify-between items-center">
      {/* Logo + Slogan */}
      <div className="flex ml-4 md:ml-10 lg:ml-20">
        <Image
          src="Images/Logo.svg"
          alt="Company's blue G logo"
          width={60}
          height={60}
          className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16"
        />

        <div className="flex flex-col ml-2 md:ml-3">
          <div className="text-[18px] md:text-[20px] lg:text-[24px] text-[#070750] font-[700] pt-1 md:pt-2">
            Global Dreams Connect
          </div>

          <div className="text-[12px] md:text-[13px] lg:text-[14px] pl-[1px] mt-[-5px] text-[#767676]">
            Fresh Minds, Global Futures...
          </div>
        </div>
      </div>

      {/* Login CTA */}
      <div className="mr-4 md:mr-10 lg:mr-20">
      <BlueBtn text="Log in to your account" href="/login" />

      </div>
    </nav>
  );
}

export default AuthHeader;
