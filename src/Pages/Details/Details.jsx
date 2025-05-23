import React, { use, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import { FaArrowRight, FaHouseDamage, FaHouseUser } from 'react-icons/fa';
import { FaLocationDot, FaPersonCircleCheck } from 'react-icons/fa6';
import { GiMoneyStack } from 'react-icons/gi';
import { IoMdCall } from "react-icons/io";
import { MdMarkEmailUnread } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";
import { AuthContext } from '../../Contexts/AuthContext';


const Details = () => {
    const roommate = useLoaderData();
    const {user} = use(AuthContext);
    // console.log(user)
    // console.log(user.email)
    // console.log(roommate);
    // console.log(roommate.email);
    const {_id, title,location,rent_amount,room_type,style_preference,description,contact_info,availability,email,User_name,likeCount} = roommate|| {};
    const [liked, setLiked] = useState(false);
    const[clickable, setClickable] = useState(false)
    useEffect(()=>{
          if(user.email !== roommate.email){
            // console.log("true");
            setClickable(true);
            }
            // else{
            //     console.log(false);
            //     setClickable(false);
            // }
    } , [user.email, roommate.email]);
    const [roomLikeCount,setRoomLikeCount] = useState(likeCount)
    const handleLikeBtn = (id) =>{
            fetch(`http://localhost:3000/roommates/${id}`,{
                method:"PATCH"
            })
            .then(res => res.json())
            .then(data => {
                setRoomLikeCount(roomLikeCount+1)
                console.log("after patch", data)
            })
    }              
    return (
        <div>
            <header className='sticky top-0 z-10 bg-base-200'>
                <Navbar></Navbar>
            </header>
            <main className=''>
                <div className="card bg-base-100 shadow-lg max-w-xl h-full mx-auto">
                    <div className="flex flex-col space-y-3 p-4">
                        <div className='flex justify-between items-center'>
                            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-red-800 my-6">Title: {title}</h2>
                            <p className='btn w-1/3 text-red-900'>{roomLikeCount} People Interested In</p>
                        </div>
                        <div className='flex justify-between items-start'>
                            <div className='flex gap-2 items-center text-sm sm:text-lg'>
                                < FaHouseUser size={20} sm:size={22} color='green'/>      
                                <span className='font-bold text-blue-500'>User: </span> {User_name}
                            </div>
                            <div className='flex flex-col gap-2'>
                                <button onClick={()=>{setLiked(true);
                                                    handleLikeBtn(_id)}} className='cursor-pointer mr-5 btn' disabled={!clickable} >
                                        <AiFillLike size={25} style={{color:liked?"red":"black"}}/> <p>Like Page</p>
                                </button>
                                <p className={`flex gap-2 items-center text-sm sm:text-lg ${liked || "hidden"}`}>
                                    <IoMdCall size={20} sm:size={22} color='blue'/> {contact_info}
                                </p>
                            </div>
                        </div>
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
                       
                        {/* <p className={`flex gap-2 items-center text-sm sm:text-lg ${liked && "hidden"}`}>
                            <IoMdCall size={20} sm:size={22} color='blue'/> {contact_info}
                        </p> */}
                  
                   
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