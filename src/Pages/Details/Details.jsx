import React from 'react';
import { useLoaderData } from 'react-router';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import { FaArrowRight, FaHouseDamage, FaHouseUser } from 'react-icons/fa';
import { FaLocationDot, FaPersonCircleCheck } from 'react-icons/fa6';
import { GiMoneyStack } from 'react-icons/gi';
import { IoMdCall } from "react-icons/io";
import { MdMarkEmailUnread } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";


const Details = () => {
    const roommate = useLoaderData();
    console.log(roommate);
    const {_id, title,location,rent_amount,room_type,style_preference,description,contact_info,availability,email,User_name} = roommate|| {};
    return (
        <div>
            <header className='sticky top-0 z-10 bg-base-200'>
                <Navbar></Navbar>
            </header>
            <main className=''>
                <div className="card bg-base-100 shadow-lg max-w-xl h-full mx-auto">
                    <div className="flex flex-col space-y-3 p-4">
                        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-red-800 text-center my-6">{title}</h2>
                        <p className='flex justify-between items-center'>
                            <div className='flex gap-2 items-center text-sm sm:text-lg'>
                                < FaHouseUser size={20} sm:size={22} color='green'/>      
                                <span className='font-bold text-blue-500'>User: </span> {User_name}
                            </div>
                            <div>
                                <button className='cursor-pointer mr-5'>
                                        <AiFillLike size={25} color='red'/>
                                </button>
                            </div>
                        </p>
                        <p className='flex gap-2 items-center text-sm sm:text-lg'><FaLocationDot size={20} sm:size={22} color='green'>
                                </FaLocationDot> <a className='text-blue-800 hover:text-red-600' href="https://www.google.com/maps"> {location} </a>
                        </p>
                        <p className='flex gap-2 items-center text-sm sm:text-lg'>
                                <GiMoneyStack  size={20} sm:size={22} color='red'></GiMoneyStack>TK: {rent_amount}
                        </p>
                        <p className='flex gap-2 items-center text-sm sm:text-lg'>
                                <FaHouseDamage size={20} sm:size={22} color='blue'/>{room_type}
                        </p>
                        <p className='flex gap-2 items-center text-sm sm:text-lg'>
                            <FaPersonCircleCheck size={20} sm:size={22} color='green'/>{availability}
                        </p>
                        <p className='flex gap-2 items-center text-sm sm:text-lg'>
                            <IoMdCall size={20} sm:size={22} color='blue'/> {contact_info}
                        </p>
                        <p className='flex gap-2 items-center text-sm sm:text-lg'>
                            <MdMarkEmailUnread size={20} sm:size={22} color='gray'/>
                            <span className='text-cyan-950 font-bold'>Email Address: </span> 
                            <a className='hover:text-red-600' href="https://mail.google.com/mail/u/0/#inbox">{email}</a>
                        </p>
                        <p className='flex gap-2 items-center text-sm sm:text-lg'>
                            <span className='font-bold text-blue-800'>Style Preference: </span> {style_preference}
                        </p>
                        <p className='flex gap-2 '>
                            <span className='font-bold text-blue-800'>Description: </span> {description}
                        </p>
                    </div>
                </div>
            </main>
            <footer className=''>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Details;