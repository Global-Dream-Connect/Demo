import Image from "next/image"

function Testimonial() {
  return (
    <div>
      <div>
        <h2 className='font-[600] text-[48px] text-center'>Dreams Becoming Reality</h2>
        <div>
          <p className='text-center mt-5 text-[24px] text-[#767676]'>Real students, real results. Discover how personalized mentorship <br />
           has transformed lives and unlocked new opportunities.</p>
        </div>

        <div className='flex flex-wrap mx-30 my-10 justify-around'>
          <div className="w-[634px] p-10 shadow-2xl rounded-3xl">
            <Image 
              src="Images/blue-stars.svg"
              alt="Testimonial rating"
              width={160}
              height={40}
            />

            <p className="text-[18px] text-[#767676]">
              My mentor guided me through the US college application process and helped me build a strong STEM portfolio. Today, I’m studying at my dream university.
            </p>

            <p className="text-[#333333] mt-3 font-[600]   text-xl">
              Maria Santos
            </p>

            <p className="text-[#333333] font-[600] text-[18px]">
              Brazil MIT
            </p>

            <div className="bg-[#070750] text-white rounded-full my-4 px-4 py-1 inline-block text-[16px] font-medium">
              Accepted into MIT Engineering
            </div>

            <div className="w-full mx-auto mb-5 border-[1px] border-gray-400"></div>

            <div className="flex flex-wrap justify-between text-[20px]">
              <div className="text-[#767676]">Mentor's Focus:</div>
              <div className="text-[#333333] font-[700]">Engineering & College Prep</div>
            </div>

            <div className="flex flex-wrap justify-between text-[20px]">
              <div className="text-[#767676]">Journey time:</div>
              <div className="text-[#070750] font-[700]">8 months</div>
            </div>
            
          </div>

          <div className="w-[634px] p-10 shadow-2xl rounded-3xl">
            <Image 
              src="Images/purple-stars.svg"
              alt="Testimonial rating"
              width={160}
              height={40}
            />

            <p className="text-[18px] text-[#767676]">
              My mentor’s guidance in research methods and academic writing helped me publish my first paper and become a Rhodes Scholar finalist.
            </p>

            <p className="text-[#333333] mt-3 font-[600]   text-xl">
              Madhuri Sharma
            </p>

            <p className="text-[#333333] font-[600] text-[18px]">
              India Oxford
            </p>

            <div className="bg-[#8A38F5] text-white rounded-full my-4 px-4 py-1 inline-block text-[16px] font-medium">
              Rhodes Scholar Finalist
            </div>

            <div className="w-full mx-auto mb-5 border-[1px] border-gray-400"></div>

            <div className="flex flex-wrap justify-between text-[20px]">
              <div className="text-[#767676]">Mentor's Focus:</div>
              <div className="text-[#333333] font-[700]">Academic Research</div>
            </div>

            <div className="flex flex-wrap justify-between text-[20px]">
              <div className="text-[#767676]">Journey time:</div>
              <div className="text-[#8A38F5] font-[700]">10 months</div>
            </div>
            
          </div>

        </div>
      </div>
    </div>
  )
}

export default Testimonial