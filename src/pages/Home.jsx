import React from 'react'
import Video from '../components/home/Video'
import HomeHeroText from '../components/home/HomeHeroText'
import HomeBottomText from '../components/home/HomeBottomText'

const Home = () => {
  return (
    <div className='text-white'>
      <div className='h-[750px] w-full bg-red-950 fixed'>
        <Video />
      </div>
      <div className='h-screen w-full relative pb-2 flex flex-col justify-between'>
        <HomeHeroText />
        <HomeBottomText/>
      </div>
    </div>
  )
}

export default Home
