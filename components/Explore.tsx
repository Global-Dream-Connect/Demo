import BlueBtn from './utils/BlueBtn'

function Explore() {
  return (
    <div className='p-[80px] h-[478px] w-ful'>
      <div className='p-[80px] h-[318] w-full bg-[#DDCEED4D] rounded-[32px] flex flex-wrap items-center justify-between'>

        <div>
          <h2 className='font-[500] text-[48px]'>Explore our free resources</h2>

          <p className='font-[400] text-[24px]'>Get a taste of what GDC has to offer with our free resources,</p>
          <p className='font-[400] text-[24px]'>designed to help you on your college application journey.</p>
        </div>

        <BlueBtn text="View Resources" />

      </div>
    </div>
  )
}

export default Explore