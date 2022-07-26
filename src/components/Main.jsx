import React from 'react'
import { HiArrowNarrowRight} from 'react-icons/hi'

export default function Main() {
  return (
      <div name ='main'className=' section1 bg-[#0a192f] w-full h-screen'>
          <div className='max-w-[1000px] ml-[50px] mx-auto px-8 flex flex-col justify-center h-full text-left'>
              <p className='text-pink-600 text-2xl'>hi , my name is</p>
              <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Erkhes Mendbayar</h1>
              <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Full-Stack Developer</h2>
              <p className='text-[#8892b0] py-4 max-w-[650px] text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti id tempora officiis magnam rerum voluptatum corporis, esse, numquam possimus voluptatem laboriosam sint velit tenetur optio voluptate pariatur delectus ad fuga.</p>
              <div >
                  <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
                      View Work
                      <span className='group-hover:rotate-90 duration-300'>
                          < HiArrowNarrowRight className='ml-3 hover:' />
                      </span>
                      </button>
              </div>
          </div>
    </div>
  )
}
