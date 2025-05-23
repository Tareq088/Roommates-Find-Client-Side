import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import { Link, useLoaderData } from 'react-router';
import { FaArrowRight } from 'react-icons/fa';
import { GiMoneyStack } from 'react-icons/gi';

const Browse_Listing = () => {
    const roommatesData = useLoaderData();
    // console.log(roommatesData)
    // const {User_name,availability,location, rent_amount,title,room_type,_id} = roommate|| {};
    return (
        <div>
            <header className='sticky top-0 z-10 bg-base-200'>
                <Navbar></Navbar>
            </header>
            <main className='py-5'>
                <div className="overflow-x-auto max-w-11/12 mx-auto">
                    <table className="table table-xs table-pin-rows table-pin-cols">
                        <thead>
                            <tr className='font-bold text-lg'>
                                <th>No.</th>
                                <td>Title</td>
                                <td>Location</td>
                                <td>Rent Price</td>
                                <td>Room Type</td>
                                <td>Availability</td>
                                <td>Comment</td>
                            </tr>
                        </thead>    
                        <tbody>
                        {
                            roommatesData.map((roommate,index) =>
                                    <tr key={roommate._id} >
                                        <th className='text-xs sm:text-base'>{index+1}</th>
                                        <td className='text-xs sm:text-base'>{roommate.title}</td>
                                        <td className='text-xs sm:text-base'>{roommate.location}</td>
                                        <td className='text-xs sm:text-base'>TK:{roommate.rent_amount}</td>
                                        <td className='text-xs sm:text-base'>{roommate.room_type}</td>
                                        <td className='text-xs sm:text-base'>{roommate.availability}</td>
                                        <td className='text-xs sm:text-base'>
                                            <Link to={`/details/${roommate._id}`} className="btn btn-accent btn-outline font-bold">See More <FaArrowRight/></Link>
                                        </td>
                                    </tr>
                            )
                        }
                        </tbody>                

                    </table>    
                </div>
            </main>
            <footer className=''>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Browse_Listing;