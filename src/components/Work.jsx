import React from 'react'
import workImg from '../assets/projects/workImg.jpeg'
import realEstate from '../assets/projects/realestate.jpg'

const Work = () => {
  return (
    <div name="work" className='w-full md:h-screen text-gray-300 bg-[#0a192f] main-div py-20'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
           
            <div className='max-w-[1000px] w-full grid grid-col gap-8'>
                <div className='sm:text-center pb-8 pl-4'>
                    <p className='text-4xl inline font-bold border-b-4 border-pink-600 '>Work</p>
                </div>
            </div>
            <p className='text-center'>Check out my work</p>

{/*container*/ }
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                
                {/*project 1*/}
                <div style={{backgroundImage: `url(${workImg})`}} className='shadow-lg shadow-[#040c16] group container round-md flex justify-center items-center mx-auto content-div'>
                    
                    {/*hover effect*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React JS Application
                        </span>
                        <div>
                            <a href="/">
                                <button className='text-center round-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="/">
                                <button className='text-center round-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code'</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/*project 2*/}
                <div style={{backgroundImage: `url(${realEstate})`}} className='shadow-lg shadow-[#040c16] group container round-md flex justify-center items-center mx-auto content-div'>
                    
                    {/*hover effect*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React JS Application
                        </span>
                        <div>
                            <a href="/">
                                <button className='text-center round-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="/">
                                <button className='text-center round-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code'</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage: `url(${workImg})`}} className='shadow-lg shadow-[#040c16] group container round-md flex justify-center items-center mx-auto content-div'>
                    
                    {/*hover effect*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React JS Application
                        </span>
                        <div>
                            <a href="/">
                                <button className='text-center round-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="/">
                                <button className='text-center round-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code'</button>
                            </a>
                        </div>
                    </div>
                </div>
                {/*add projects*/}


            </div>

        </div>
    </div>
  )
}

export default Work