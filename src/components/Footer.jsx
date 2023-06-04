import React from 'react'
import { socialIconArray } from './NavBar'

const Footer = () => {
  return (
    <div className='h-200px w-full grid grid-cols-1 bg-[#25ac] text-left'>
        <div className='w-full h-full grid items-center md:w-[600px] text-left'>
        {socialIconArray.map((item, index) => {

            return (
                 <p key={index} className={`md:hidden w-full h-[40px] flex hover:ml-[-10px] duration-300  ${item.color} rounded-lg`}>
                        <a className='flex justify-center items-center w-full text-gray-300' href={item.link}>
                            {item.name}{item.icon}
                        </a>
                    </p>
            )
        })}
        </div>
    </div>
  )
}

export default Footer