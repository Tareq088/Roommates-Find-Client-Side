import React, { use } from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import roomMateLogo from '../../assets/roomMate_logo.png'
import { AuthContext } from '../../Contexts/AuthContext';
import { toast } from 'react-toastify';
import { FaUserCircle } from 'react-icons/fa';
import { Tooltip } from 'react-tooltip';

const Navbar = () => {
    const {user, logOut} = use(AuthContext);
    const navigate = useNavigate();
    // console.log(user);
    // console.log(user?.photoURL)
    const handleLogOut =() =>{
        logOut()
        .then(()=>{
            toast.success("Log Out Successfully");
            navigate("/auth/login")
        })
        .catch((error)=>{
            toast(`${error.message}`)
        })
    }
    return (
        <div className=''>
            <div className="navbar w-11/12 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 px-2 shadow">
                            <li className='text-lg'><NavLink to='/' className={({isActive})=> isActive ? 'underline text-green-600' : ''}>Home</NavLink></li>
                            <li className='text-lg'><NavLink to='/about' className={({isActive})=> isActive ? 'underline text-green-600' : ''}>Add toFind Roommate</NavLink></li>
                            <li className='text-lg'><NavLink to='/browse_listin' className={({isActive})=> isActive ? 'underline text-green-600' : ''}>Browse Listing</NavLink></li>
                            <li className='text-lg'><NavLink to='/my_listing' className={({isActive})=> isActive ? 'underline text-green-600' : ''}>My Listing</NavLink></li>
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
                        <li className='text-lg'><NavLink to='/find_roommate' className={({isActive})=> isActive ? 'underline text-green-600' : ''}>Add to Find Roommate</NavLink></li>
                        <li className='text-lg'><NavLink to='/browse_listing' className={({isActive})=> isActive ? 'underline text-green-600' : ''}>Browse Listing</NavLink></li>
                        <li className='text-lg'><NavLink to='/my_listing' className={({isActive})=> isActive ? 'underline text-green-600' : ''}>My Listing</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end">
                <div className="flex items-center gap-2">
                    {
                        user?
                        (
                            <div>
                        {/* <Link to='/profile'> */}
                            {/* <div className='w-12 p-0.5 bg-black rounded-full relative group'>
                                <img className='rounded-full' src={user?.photoURL}></img>
                                <div className='absolute -left-10 top-12 hidden group-hover:block p-1 w-40 bg-blue-100 rounded-md'>
                                        <p className='font-bold text-center text-fuchsia-950'>{user?.displayName}</p>
                                </div>
                            </div> */}
                            <a data-tooltip-id="my-tooltip" data-tooltip-content={user?.displayName} className='w-12 p-0.5 rounded-full'>
                                <img className='rounded-full w-12' src={user?.photoURL}></img>
                            </a>
                            <Tooltip id="my-tooltip" />
                        {/* </Link> */}
                        </div>
                            )

                        :
                        <div className='cursor-pointer' onClick={()=>navigate('/auth/login')}>
                            <FaUserCircle  size={35}></FaUserCircle>
                        </div>
                    } 
                    {
                        user?
                        <button onClick={handleLogOut} 
                            className="btn btn-outline font-medium text-xs md:text-base p-1 sm:p-2 text-blue-600 hover:text-red-600">Log Out
                        </button>
                    :
                        <div className='flex'>
                            <Link to='/auth/login' className="btn btn-outline font-medium mr-2 text-xs md:text-base p-1 sm:p-2 text-blue-600 hover:text-red-600">Log In</Link>
                            <Link to='/auth/signup' className="btn font-medium btn-outline text-xs md:text-base p-1 sm:p-2 text-blue-600 hover:text-red-600">Register</Link>
                        </div>
                    }
                        
                </div>
                
                </div>
            </div>
        </div>
    );
};

export default Navbar;