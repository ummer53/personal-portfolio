import React from 'react'
import movieApi from '../assets/movieApi.png'
import workImg from '../assets/projects/workImg.jpeg'
import realEstate from '../assets/projects/realestate.jpg'

const workArray = [
    {
        id: 1,
        name: 'Movie API',
        image: movieApi,
        demo: '/',
        code: 'https://github.com/ummer53/movie-api'
    },
    {
        id: 2,
        name: 'Real Estate',
        image: realEstate,
        demo: '/',
        code: '/'
    },
    {
        id: 3,
        name: 'Work',
        image: workImg,
        demo: '/',
        code: '/'
    },
]

const Projects = () => {
    return (
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
            {workArray.map((item) => {
                return (
                    <div style={{backgroundImage: `url(${item.image})`}} className='shadow-lg shadow-[#040c16] group container round-md flex justify-center items-center mx-auto content-div'>
                        <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            item.name
                        </span>
                        <div>
                            <a href={item.demo}>
                                <button className='text-center round-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href={item.code}>
                                <button className='text-center round-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code'</button>
                            </a>
                        </div>
                    </div>
                    </div>
                )
            })}
        </div>
    )
}

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
            <Projects />

        </div>
    </div>
  )
}

export default Work