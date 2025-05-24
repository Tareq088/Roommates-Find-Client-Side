import React from 'react';
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import how_works_image from "../../assets/how_works.jpg"
import { div } from 'framer-motion/client';
import { Link, NavLink } from 'react-router';
import { FaRegCheckCircle } from "react-icons/fa";

const ExtraSec1 = () => {

      const [textType, setTextType] = useState("one");
      const[activeRent,setActiveRent] = useState(true);
      const[activeFind,setActiveFind] = useState(false);

  const content = {
    one: (
        <div>
            <ol className='space-y-2'>
                <li className='flex gap-1 items-center'> <FaRegCheckCircle color='green'> </FaRegCheckCircle> <span className='text-xs sm:text-sm '>Go to Add To Find Roomate</span></li>
                <li className='flex gap-1 items-center'> <FaRegCheckCircle color='green'> </FaRegCheckCircle> <span className='text-xs sm:text-sm '>Fill up the details</span></li>
                <li className='flex gap-1 items-center'> <FaRegCheckCircle color='green'> </FaRegCheckCircle> <span className='text-xs sm:text-sm '>That is it! Your listing is now in front of thousands of Seekers</span></li>
            </ol>
            <Link to='/find_roommate'> 
                <button className='btn btn-outline btn-primary mt-5 '>Get Started</button>
            </Link>
        </div>
    ),
    two: (
        <div>
            <ol className='space-y-2'>
                <li className='flex gap-1 items-center'> <FaRegCheckCircle color='green'> </FaRegCheckCircle> <span className='text-xs sm:text-sm '>Go to Add Browse Listing</span></li>
                <li className='flex gap-1 items-center'> <FaRegCheckCircle color='green'> </FaRegCheckCircle> <span className='text-xs sm:text-sm '>Contact The Roommate or Landlord</span></li>
                <li className='flex gap-1 items-center'> <FaRegCheckCircle color='green'> </FaRegCheckCircle> <span className='text-xs sm:text-sm '>That is it! Ready to move in?</span></li>
            </ol>
            <Link to='/browse_listing'> 
                <button className='btn btn-outline btn-primary mt-5'>Get Started</button>
            </Link>
        </div>
    ),
  };

    return (
        <div className=''>
            <div className='w-11/12 mx-auto h-full'>
            <div className='flex flex-col sm:flex-row py-10'>
                <div className='w-full text-center'>
                    <h2 className='font-bold text-xl sm:text-2xl md:text-4xl text-purple-800'>How It Works</h2>
                    <div className="p-6 space-y-4">
                        <div className="space-x-4 flex">
                            {/* <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 px-2 shadow">
                                <li className='text-lg' onClick={() => setTextType("one")}>
                                    <NavLink to='' className={({isActive})=> isActive ? 'underline text-green-600' : ''}>Rent A Room</NavLink>
                                </li>
                                <li className='text-lg' onClick={() => setTextType("two")}>
                                    <NavLink to='' className={({isActive})=> isActive ? 'underline text-green-600' : ''}>Find A Room</NavLink>
                                </li>

                            </ul> */}
                            <button 
                            // className={({isActive})=> isActive ? 'underline text-green-600' : ''}
                                onClick={() => {setTextType("one");
                                                setActiveRent(true);
                                                setActiveFind(false);
                                                }
                                        }
                                className={`px-4 py-2 bg-gray-500 text-xs sm:text-base text-white rounded cursor-pointer ${activeRent && "bg-green-500" }`}
                            >
                            Rent A Room
                            </button>
                            <button 
                            // className={({isActive})=> isActive ? 'underline text-red-600' : ''}
                            onClick={() => {setTextType("two");
                                            setActiveFind(true);
                                            setActiveRent(false);
                                            }
                                    }
                            
                            className={`px-4 py-2 bg-gray-500 text-xs sm:text-base text-white rounded cursor-pointer ${activeFind && "bg-green-500" }`}
                            >
                            Find A Room
                            </button>
                        </div>

                        <div className="mt-6 ">
                            <AnimatePresence mode="wait">
                            <motion.div
                                key={textType}
                                initial={{ x: 300, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: -300, opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="text-xl"
                            >
                                {content[textType]}
                            </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>

                </div>
                <div className='w-full'>
                    <img className='w-full' src={how_works_image} alt="" />
                </div>

            </div>
                

            </div>


        </div>
    );
};

export default ExtraSec1;