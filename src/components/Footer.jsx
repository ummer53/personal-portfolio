import React from 'react'


const Footer = ({socialIconArray}) => {
  return (
    <div className='h-200px w-full grid grid-cols-1 bg-[#25ac] text-left main-div'>
        <div className='w-full h-full grid justify-center  text-left'>
        {socialIconArray.map((item, index) => {

            return (
                <button className='w-[90px]'>
                 <p key={index} className={`lg:hidden w-full h-[40px] flex hover:ml-[-10px] duration-300  ${item.color} rounded-lg`}>
                        <a className='flex justify-center items-center w-full text-gray-300' href={item.link}>
                            {item.name}{item.icon}
                        </a>
                    </p>
                </button>    
            )
        })}
        </div>
    </div>
  )
}

export default Footer