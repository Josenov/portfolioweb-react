import React, {useState} from 'react'
import {AiOutlineMenu, AiOutlineHome, AiOutlineMail, AiOutlineProject} from 'react-icons/ai'
import {GrProjects} from 'react-icons/gr'

export const Sidenav = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav);
        console.log('state changed')
    }

    return (
    <div>
        <AiOutlineMenu onClick={handleNav}  className='absolute top-4 right-4 z-[99] md:hidden text-4xl text-white '/>
        {
            nav ? (
                <div className='fixed w-full h-screen bg-black/70 flex flex-col justify-center items-center z-20'>
                    <a onClick={handleNav} href='#main' className='w-[75%] flex justify-center items-center rounded-full shadow-m bg-yellow-300 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                        < AiOutlineHome size={20}/>
                        <span className='pl-4'>Home</span>
                    </a>
                    <a onClick={handleNav} href='#work' className='w-[75%] flex justify-center items-center rounded-full shadow-m bg-yellow-300 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                        <GrProjects size={20}/>
                        <span className='pl-4'>Work</span>
                    </a>
                    <a onClick={handleNav} href='#projects' className='w-[75%] flex justify-center items-center rounded-full shadow-m bg-yellow-300 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                        <AiOutlineProject size={20}/>
                        <span className='pl-4'>Projects</span>
                    </a>
                    
                    <a onClick={handleNav} href='#contact' className='w-[75%] flex justify-center items-center rounded-full shadow-m  bg-yellow-300 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                        <AiOutlineMail size={20}/>
                        <span className='pl-4'>Contact</span>
                    </a>
                </div>
            )
            : (
                ''
            )}

            <div className='md:block hidden fixed top-[25%] z-10'>
                <div className='flex flex-col'>
                    <a href='#main' className='rounded-full shadow-m bg-yellow-300 shadow-gray-400 m-5 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <AiOutlineHome />
                    </a>
                    <a href='#work' className='rounded-full shadow-m bg-yellow-300 shadow-gray-400 m-5 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <GrProjects />
                    </a>
                    <a href='#projects' className='rounded-full shadow-m bg-yellow-300 shadow-gray-400 m-5 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <AiOutlineProject />
                    </a>
                    <a href='#contact' className='rounded-full shadow-m bg-yellow-300 shadow-gray-400 m-5 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <AiOutlineMail />
                    </a>
                </div>
            </div>
    
    </div>
    )
}

export default Sidenav;