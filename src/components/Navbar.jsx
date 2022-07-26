import React from 'react';
import { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaGoogle, FaFacebook } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
// import Logo from ' ../assets/logo';
import { Link } from 'react-scroll';
export default function Navbar ()
{
    const [ nav, setNav ] = useState( false );
    const handleClick = () =>
    {
        setNav( !nav );
    };
    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
            <div>
                {/* <img src={Logo} alt="" className=' w-[50px]' /> */ }
            </div>
            <ul className='hidden md:flex'>
                <li>  <Link to="main" smooth={ true } duration={ 500 } >
                    Home
                </Link></li>
                <li><Link to="about" smooth={ true } duration={ 500 } >
                    About
                </Link></li>
                <li><Link to="skills" smooth={ true } duration={ 500 } >
                    Skills
                </Link></li>
                <li><Link to="work" smooth={ true } duration={ 500 } >
                    Work
                </Link></li>
                <li><Link to="contact" smooth={ true } duration={ 500 } >
                    Contact
                </Link></li>
            </ul>
            <div onClick={ handleClick } className=' md:hidden z-10'>
                { !nav ? <FaBars /> : <FaTimes /> }
            </div>
            <ul className={ !nav ? 'hidden' : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] justify-center items-center" }>

                <li className='py-6 text-4xl '>  <Link to="main" smooth={ true } onClick={ handleClick} duration={ 500 } >
                    Home
                </Link></li>
                <li className='py-6 text-4xl '><Link to="about" smooth={ true } onClick={ handleClick} duration={ 500 } >
                    About
                </Link></li>
                <li> className='py-6 text-4xl '<Link to="skills" smooth={ true } onClick={ handleClick} duration={ 500 } >
                    Skills
                </Link></li>
                <li className='py-6 text-4xl '><Link to="work" smooth={ true }  onClick={ handleClick} duration={ 500 } >
                    Work
                </Link></li>
                <li className='py-6 text-4xl '><Link to="contact" smooth={ true } onClick={ handleClick} duration={ 500 } >
                    Contact
                </Link></li>
            </ul>
            <div className='flex fixed flex-col top-[20%] left-0'>
                <ul>
                    <li className='w-[150px] h-[100px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'><a className='flex justify-between items-center w-full text-gray-300' href="/">Github <FaGithub /></a></li>
                    <li className='w-[150px] h-[100px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-slate-400'><a className='flex justify-between items-center w-full text-gray-300' href="/">Google <FaGoogle /></a></li>
                    <li className='w-[150px] h-[100px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                        <a className='flex justify-between items-center w-full text-gray-300' href="/">Facebook <FaFacebook /></a>
                    </li>
                    <li className='w-[150px] h-[100px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                        <a className='flex justify-between items-center w-full text-gray-300' href="/">Resume <BsFillPersonLinesFill /></a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
