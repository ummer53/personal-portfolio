import React from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook} from 'react-icons/fa'
import logo from '../assets/mus.jpg'
import { useState } from 'react'
import { HiOutlineMail } from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import { Link } from 'react-scroll'

const socialIconArray = [
    {
        id: 1,
        name: 'Linkedin',
        icon: <FaLinkedin size={30}/>,
        link: 'https://www.linkedin.com/in/ummer53/',
        color: 'bg-blue-600'
    },
    {
        id: 2,
        name: 'Github',
        icon: <FaGithub size={30}/>,
        link: 'https://www.github.com/ummer53',
        color: 'bg-[#33333]'
    },
    {
        id: 3,
        name: 'Email',
        icon: <HiOutlineMail size={30}/>,
        link: 'mailto:mohdumar876@gmail.com',
        color: 'bg-[#6fc2b0]'
    },
    {
        id: 4,
        name: 'Resume',
        icon: <BsFillPersonLinesFill size={30}/>,
        link: 'https://drive.google.com/file/d/1Z3Q4Z3Q3Z3Q3Z3Q3Z3Q3Z3Q3Z3Q3Z3Q3/view?usp=sharing',
        color: 'bg-[#565f69]'
    },
]

const navContent = [
    {
        id: 1,
        name: 'Home',
        link: 'home'
    },
    {
        id: 2,
        name: 'About',
        link: 'about'
    },
    {
        id: 3,
        name: 'Skills',
        link: 'skills'
    },
    {
        id: 4,
        name: 'Work',
        link: 'work'
    },
    {
        id: 5,
        name: 'Contact',
        link: 'contact'
    },
]


const NavLinks = ({handleClick}) => {
    return (
        <>
        {navContent.map((item, index) => {
            return (
                <li key={index} className='py-6 text-4xl md:text-2xl'>
                    <Link to={item.link} smooth={true} duration={500} onClick={handleClick}>
                            {item.name}
                    </Link>
                </li>
            )
        })}
        </>
    )
}



const SocialIconCard = () => {
    return (
        <>
        {socialIconArray.map((item, index) => {
            return (
                
                <li key={index} className={`w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 ${item.color}`}>
                        <a className='flex justify-between items-center w-full text-gray-300' href={item.link}>
                            {item.name}{item.icon}
                        </a>
                </li>
                    
            )
        })
    }
    </>
    )
}




const NavBar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => {
        setNav(!nav);
    }
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 main-div'>
        <>
            <div>
                <img src={logo} alt="logo" className='w-[50px] h-[50px]'/>
            </div>
    
            <ul className='hidden md:flex'>
                <NavLinks/>
            </ul>


            {/* Hamburger */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars/> :<FaTimes/>}
            </div>


            {/* Mobile menu */}
        
            <ul className={!nav ? 'hidden' :' absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                
                <NavLinks handleClick={handleClick}/>
            </ul>
        
        </>
    
        {/*social icons*/}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <SocialIconCard/>
            </ul>
        </div>
    </div>
  )
}

export {NavBar, socialIconArray};