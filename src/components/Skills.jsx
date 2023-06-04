import React from 'react'
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import ReactIcon from '../assets/react.png'
import Node from '../assets/node.png'
import Mongo from '../assets/mongo.png'
import Git from '../assets/github.png'
import Java from '../assets/java.png'
import javascript from '../assets/javascript.png'


const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
	        <div className='max-w-[1000px] w-full grid grid-cols gap-8'>
                <div className='sm:text-center pb-8 pl-4'>
                    <p className='text-4xl inline font-bold border-b-4 border-pink-600 '>Skills</p>
                </div>
            </div>
            <p className='text-center'>Technologies I can work with</p>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 text-center py-8'>
                 <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={HTML} alt="HTML Icon" /><p className='py-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={CSS} alt="CSS Icon" /><p className='py-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={javascript} alt="Javascript Icon" /><p className='py-4'>Javascript</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={ReactIcon} alt="React Icon" /><p className='py-4'>React JS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Node} alt="Node Icon" /><p className='py-4'>Node JS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Mongo} alt="Mongo Icon" /><p className='py-4'>Mongo DB</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Git} alt="Git Icon" /><p className='py-4'>GitHub</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Java} alt="Tailwind Icon" /><p className='py-4'>Java</p>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Skills