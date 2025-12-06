import Image from "next/image"

function BlueBtn({text}:{ text: string }) {
  return (
    <a href="#">
      <div className=' ml-10 flex py-3 px-4 bg-[#070750] justify-center items-center rounded-xl'>
        <div className='text-white text-[19px] justify-center '>
            {text}
        </div>

        <Image
          src="Images/arrow.svg"
          width={24}
          height={24}
          alt="image of right arrow"
        />
      </div>
    </a>
  )
}

export default BlueBtn