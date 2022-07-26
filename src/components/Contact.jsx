import React from 'react'

export default function Contact() {
  return (
      <div name='contact'className='w-full h-full bg-[#0a192f] flex justify-center px-8 text-gray-200'>
          <form method='post'action="https://getform.io/f/d9f56227-0af0-4495-bf8a-c737333842fa" className='flex flex-col max-w-[600px] w-full '>
              <div className='pb-8'>
                  <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Contact</p>
                  <p className='text-gray-400 py-4'>// Contact me via email</p>
              </div>
              <input className='bg-gray-200 p-2' type="text" placeholder='Name' name='name' />
              <input className='my-4 p-2 bg-gray-200' type="Email" placeholder='Email' name='email' />
              <textarea name="message" className='bg-gray-200 py-2' id="" cols="30" rows="10"></textarea>
              <button className='text-white border-2 hover:bg-pink-600 hover:text-black mx-auto p-2 m-2 w-[100px] hover:font-bold'>Contact</button>
          </form>
    </div>
  )
}
