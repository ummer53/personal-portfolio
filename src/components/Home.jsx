import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import { Link } from 'react-scroll'
import myImg from '../assets/myimg.jpg'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#ff00ff] main-div'>
     {/* Container */}
     <div className='max-w-[1000px] mx-auto px-8 h-full flex flex-col justify-center text-gray-400'>
        <p className='text-pink-600'>Hi, my name is </p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Mohammad Ummer</h1>
        <h2 className='text-2xl sm:text-5xl font-bold text-[#8892b0]'>I build things for the web</h2>
        <p className='text-[#8892a0] py-4 max-w-[700px]'>I'm a software engineer based in India specializing in building (and occasionally designing) exceptional websites, applications, and everything in between.</p>
        <div>
          <Link to="contact" smooth={true} duration={500}>
            <button className='group flex justify-between items-center px-4 py-3 bg-[#50c5b7] text-[#0a192f] rounded-md mt-4 hover:bg-[#64ffda] duration-300'>
                Get in touch
                <span className='group-hover:rotate-90 duration-300'>
                    <HiArrowNarrowRight className='ml-3'/>
                </span>
            </button>
            </Link>
        </div>

        <div className='flex justify-center items-center'>
          <img className='w-40 h-40 rounded-full mt-8' src={myImg} alt="Ummer" />
        </div>

     </div>
    </div>
  )
}

export default Home
