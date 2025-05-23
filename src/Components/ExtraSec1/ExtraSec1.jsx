import React from 'react';
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import how_works_image from "../../assets/how_works.jpg"
import { div } from 'framer-motion/client';
import { Link } from 'react-router';
import { FaRegCheckCircle } from "react-icons/fa";

const ExtraSec1 = () => {

      const [textType, setTextType] = useState("one");

  const content = {
    one: (
        <div>
            <ol className='space-y-2'>
                <li className='flex items-center'> <FaRegCheckCircle> </FaRegCheckCircle>Go to Add To Find Roomate</li>
                <li className='flex items-center'> <FaRegCheckCircle> </FaRegCheckCircle>Fill up the details</li>
                <li className='flex items-center'> <FaRegCheckCircle> </FaRegCheckCircle>That is it! Your listing is now in front of thousands of Seekers</li>
            </ol>
       
            <button><Link to='/find_roommate'>Go to Add To Find Roomate</Link></button>
         
        </div>
    ),
    two: ("এইটা দ্বিতীয় বাটনের তথ্য।"),
  };

    return (
        <div>
            <div className='w-11/12 mx-auto h-full'>
            <div className='flex flex-col sm:flex-row py-10'>
                <div className='border w-full text-center'>
                    <h2 className='font-bold text-xl sm:text-2xl md:text-4xl text-purple-800'>How It Works</h2>
                    <div className="p-6 space-y-4">
                        <div className="space-x-4">
                            <button
                                onClick={() => setTextType("one")}
                                className="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer"
                            >
                            Rent A Room
                            </button>
                            <button
                            onClick={() => setTextType("two")}
                            className="px-4 py-2 bg-green-500 text-white rounded cursor-pointer"
                            >
                            Find A Room
                            </button>
                        </div>

                        <div className="relative h-24 mt-6 overflow-hidden">
                            <AnimatePresence mode="wait">
                            <motion.div
                                key={textType}
                                initial={{ x: 300, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: -300, opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="absolute text-xl"
                            >
                                {content[textType]}
                            </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>

                </div>
                <div className='w-full border'>
                    <img className='w-full' src={how_works_image} alt="" />
                </div>

            </div>
                

            </div>


        </div>
    );
};

export default ExtraSec1;