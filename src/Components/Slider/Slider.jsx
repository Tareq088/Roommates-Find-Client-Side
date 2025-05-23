import React from 'react';
import banner1Image from "../../assets/banner1.jpg"
import banner2Image from "../../assets/banner2.jpg"
import banner3Image from "../../assets/banner3.jpg"
const Slider = () => {
    return (
        <div className='pb-5'>
            <div className="carousel w-full h-[400px]">
                <div id="slide1" className="carousel-item relative w-full">
                    <img style={{backgroundImage: `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,0.5)), url(${banner1Image})`}}
                    className={`w-full object-contain bg-cover bg-top-center `}/>
                    <div className='absolute top-1/3 flex gap-10 justify-between w-full px-10'>
                        <div className="translate-y-1/2 transform ">
                            <a href="#slide3" className="btn btn-circle">❮</a>                    
                        </div>
                        <div className=' space-y-2'>
                            <h2 className='font-bold text-xl sm:text-3xl md:text-6xl text-blue-700'>Find Your Roommate</h2>
                            <p className='text-white text-xs sm:text-base'> 10000+ rooms and flatmates available now across Bangladesh</p>
                            <form>
                                <input type="text" className="input h-12 text-lg" placeholder="search by location"/>
                            </form>
                        </div>
                        <div className="translate-y-1/2 transform">
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img style={{backgroundImage: `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,0.5)), url(${banner2Image})`}}
                    className={`w-full object-contain bg-cover bg-top-center bg-radial from-black from-40% to-white`}/>
                    <div className='absolute top-1/3 flex gap-10 justify-between w-full px-10'>
                        <div className="translate-y-1/2 transform ">
                            <a href="#slide1" className="btn btn-circle">❮</a>                    
                        </div>
                        <div className=' space-y-2'>
                            <h2 className='font-bold text-xl sm:text-3xl md:text-6xl text-blue-700'>Find Your Roommate</h2>
                            <p className='text-white text-xs sm:text-base'> 10000+ rooms and flatmates available now across Bangladesh</p>
                            <form>
                                <input type="text" className="input h-12 text-lg" placeholder="search by location"/>
                            </form>
                        </div>
                        <div className="translate-y-1/2 transform">
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img style={{backgroundImage: `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,0.5)), url(${banner3Image})`}}
                    className={`w-full object-contain bg-cover bg-top-center bg-radial from-black from-40% to-white`}/>
                    <div className='absolute top-1/3 flex gap-10 justify-between w-full px-10'>
                        <div className="translate-y-1/2 transform ">
                            <a href="#slide2" className="btn btn-circle">❮</a>                    
                        </div>
                        <div className=' space-y-2'>
                            <h2 className='font-bold text-xl sm:text-3xl md:text-6xl text-blue-700'>Find Your Roommate</h2>
                            <p className='text-white text-xs sm:text-base'> 10000+ rooms and flatmates available now across Bangladesh</p>
                            <form>
                                <input type="text" className="input h-12 text-lg" placeholder="search by location"/>
                            </form>
                        </div>
                        <div className="translate-y-1/2 transform">
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Slider;