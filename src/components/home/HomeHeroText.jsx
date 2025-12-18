import React from 'react'
import Video from './Video'

const HomeHeroText = () => {
  return (
    <>
      <div className='font-[font300] text-center pt-5'>
      <div className='text-[9.5vw] flex items-center justify-center uppercase leading-[9vw]'>The spark for</div>
      <div className='text-[9.5vw] flex items-start justify-center uppercase leading-[9vw]'>all 
        <div className='h-[7vw] w-[16vw] rounded-full overflow-hidden'> <Video /> </div> things</div>
        <div className='text-[9.5vw] flex items-center justify-center uppercase leading-[9vw]'>creative</div>
    </div>
    {/* Middle Text */}
    <div className=' flex flex-col items-end font-[font300] mx-6 font-semibold'>
      <p className='px-4 text-sm text-start'>K72 is an agency that</p> <p className=' leading-[1.6vw] w-[18.5vw] text-start text-sm'>builds brands from every angle. Today, tomorrow and years from now. We think the best sparks fly when comfort zones get left behind and friction infuses our strategies, brands and communications with real feeling. We’re transparent, honest and say what we mean, and when we believe in something, we’re all in.</p>
    </div>
    </>
  )
}
export default HomeHeroText
