import React  from 'react';
import { useState } from 'react';
import { FaBars, FaTimes  , FaGithub , FaGoogle , FaFacebook} from 'react-icons/fa';
import { BsFillPersonLinesFill} from 'react-icons/bs';
// import Logo from ' ../assets/logo';
export default function Navbar ()
{
    const [ nav, setNav ] = useState(false);
    const handleClick = () =>
    {
        setNav(!nav)
    }
    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
            <div>
                {/* <img src={Logo} alt="" className=' w-[50px]' /> */}
            </div>
                <ul className='hidden md:flex'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Skills</li>
                    <li>Work</li>
                    <li>Contact</li>
                </ul>
            <div onClick={handleClick} className=' md:hidden z-10'>
                {!nav ? <FaBars/> : <FaTimes/>}
            </div>
            <ul className={!nav ? 'hidden' : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] justify-center items-center"}>
                <li className='py-6 text-4xl '>Home</li>
                <li className='py-6 text-4xl '>About</li>
                <li className='py-6 text-4xl '>Skills</li>
                <li className='py-6 text-4xl '>Work</li>
                <li className='py-6 text-4xl '>Contact</li>
            </ul>
            <div className='flex fixed flex-col top-[20%] left-0'>
                <ul>
                    <li className='w-[150px] h-[100px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'><a className='flex justify-between items-center w-full text-gray-300' href="/">Github <FaGithub/></a></li>
                    <li className='w-[150px] h-[100px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-slate-400'><a className='flex justify-between items-center w-full text-gray-300' href="/">Google <FaGoogle/></a></li>
                    <li className='w-[150px] h-[100px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                        <a className='flex justify-between items-center w-full text-gray-300' href="/">Facebook <FaFacebook/></a>
                    </li>
                    <li className='w-[150px] h-[100px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                        <a className='flex justify-between items-center w-full text-gray-300' href="/">Resume <BsFillPersonLinesFill/></a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
