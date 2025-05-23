import React from 'react';
import CountUp from 'react-countup';
import { Typewriter } from 'react-simple-typewriter';

const ExtraSec2 = () => {
    
    return (
        <div className='bg-amber-50'>
            <div className='w-11/12 mx-auto py-10'>
                <h2 className='font-bold text-xl sm:text-2xl md:text-4xl text-purple-800 text-center my-5'>why Use Find Mate?</h2>
                <div className='text-center font-bold text-green-950 my-5'>
                    <h1>
                        <Typewriter
                        words={['Website has 1,00,000+ Users.', 'Website has 10,00,000+ Followers.', 'Website has 40+ District.']}
                        loop={false}
                        cursor
                        cursorStyle='|'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                        />
                    </h1>
                </div>
                <div className='flex gap-10 justify-evenly grow-1 flex-col sm:flex-row'>
                    <div className='card shadow-md flex flex-1 justify-center items-center'>
                        <p className='font-bold text-3xl text-black text-center p-5'>
                            <CountUp start={0} end={100000}></CountUp> + <br />Users
                        </p>
                    </div>
                    <div className='card shadow-md flex flex-1 justify-center items-center'>
                        <p className='font-bold text-3xl text-black text-center p-5'>
                            <CountUp start={0} end={1000000}></CountUp> + <br />Followers
                        </p>
                    </div>
                    <div className='card shadow-md flex flex-1 justify-center items-center'>
                        <p className='font-bold text-3xl text-black text-center p-5'>
                            <CountUp start={0} end={40}></CountUp> + <br />District
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExtraSec2;