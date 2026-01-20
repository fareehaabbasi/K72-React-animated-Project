import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='font-[font500] flex items-end justify-center gap-5 mt-14'>
      <div className='border-3 hover:border-[#D3FD50] hover:text-[rgb(211,253,80)] h-22 flex items-center px-6 border-white rounded-full uppercase'>
        <Link className='text-[7vw] mt-6' to='/projects'>Work</Link>
      </div>
      <div className='border-3 hover:border-[#D3FD50] hover:text-[#D3FD50] h-22 flex items-center px-6 border-white rounded-full uppercase'>
        <Link className='text-[7vw] mt-6' to='agency'>Agency</Link>
      </div>
    </div>
  )
}

export default HomeBottomText
