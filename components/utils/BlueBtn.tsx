import Link from "next/link"
import Image from "next/image"

interface BlueBtnProps {
  text: string;
  className?: string;
  href?: string;
}

function BlueBtn({ text, className = "", href = "#" }: BlueBtnProps) {
  return (
    <Link href={href} className={className}>
      <div className={`flex py-3 px-4 bg-[#070750] justify-center items-center rounded-[8px] ${className}`}>
        <div className='text-white text-[19px] justify-center '>
            {text}
        </div>

        <Image
          src="/Images/arrow.svg"
          width={24}
          height={24}
          alt="image of right arrow"
          className="ml-2"
        />
      </div>
    </Link>
  )
}

export default BlueBtn