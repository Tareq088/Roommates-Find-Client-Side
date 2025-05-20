import React from 'react';
import { Link, NavLink } from 'react-router';
import roomMateLogo from '../../assets/roomMate_logo.png'


const Navbar = () => {
    return (
        <div className='border'>
            <div className="navbar w-11/12 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li className='text-lg'><NavLink to='/' className={({isActive})=> isActive ? 'underline text-green-600' : ''}>Home</NavLink></li>
                            <li className='text-lg'><NavLink to='/about' className={({isActive})=> isActive ? 'underline text-green-600' : ''}>About</NavLink></li>
                            <li className='text-lg'><NavLink to='/faqAll' className={({isActive})=> isActive ? 'underline text-green-600' : ''}>FAQ</NavLink></li>
                        </ul>
                    </div >
                    <div className='flex gap-2 items-center'>
                    <img className='hidden sm:block sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full' src={roomMateLogo}></img>
                    <div className="text-xs md:text-base lg:text-xl text-red-800">
                        <Link to='/' >Find Mate</Link>
                    </div>
                   
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                   
                    <ul className="menu menu-horizontal px-1">
                        <li className='text-lg'><NavLink to='/' className={({isActive})=> isActive ? 'underline text-green-600' : ''}>Home</NavLink></li>
                        <li className='text-lg'><NavLink to='/about' className={({isActive})=> isActive ? 'underline text-green-600' : ''}>About</NavLink></li>
                        <li className='text-lg'><NavLink to='/faqAll' className={({isActive})=> isActive ? 'underline text-green-600' : ''}>FAQ</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="mr-2">
                    {/* {
                        user?
                        <Link to='/profile'>
                            <div className='w-12 p-0.5 bg-black rounded-full'>
                                <img className='rounded-full' src={user?.photoURL}></img>
                            </div>
                        </Link>

                        :
                        <div className='cursor-pointer' onClick={()=>navigate('/auth/login')}>
                            <FaUserCircle  size={35}></FaUserCircle>
                        </div>
                        
                    } */}
                    {/* </div> */}
                    {/* {
                        user?
                        <button onClick={handleLogOut} 
                        className="btn font-medium text-xs md:text-base  p-1 sm:p-2">Log Out</button>
                        :
                        <div> */}
                        <Link to='/auth/login' className="btn font-medium mr-2 text-xs md:text-base  p-1 sm:p-2">Log In</Link>
                        <Link to='/auth/register' className="btn font-medium text-xs md:text-base  p-1 sm:p-2">Register</Link>
                    </div>
                    {/* } */}
                </div>
            </div>
        </div>
    );
};

export default Navbar;