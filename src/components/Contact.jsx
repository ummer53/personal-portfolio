import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='w-full h-screen bg-[#0a192f] flex justify-center'>
      <form method="POST" action="https://getform.io/f/f6c2fdc1-8334-4a0c-90cd-95520a2b0a71" className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
            <p className='text-gray-300 py-4'>submit the form</p>
        </div>

        <input type="text" placeholder='Name' name="name" className='bg-[#a1b0c7] border-b-2 border-gray-300 text-gray-700 py-2 px-4 outline-none focus:border-pink-600 my-2' />
        <input type="email" placeholder='Email' name="email" className='bg-[#a1b0c7] border-b-2 border-gray-300 text-gray-700 py-2 px-4 outline-none focus:border-pink-600 my-2' />
        <textarea name="message" id="" cols="30" rows="10" placeholder='Message' className='bg-[#a1b0c7] border-b-2 border-gray-300 text-gray-700 py-2 px-4 outline-none focus:border-pink-600 my-2'></textarea>
        <button className='bg-[#a1b0c7] text-white py-2 px-4 my-2 mx-auto border-2 hover:bg-red-900'>Let's Colloborate</button>
      </form>  
    </div>
  )
}

export default Contact