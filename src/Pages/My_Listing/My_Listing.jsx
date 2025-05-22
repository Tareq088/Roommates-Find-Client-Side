import React, { use } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import { Link, useLoaderData } from 'react-router';
import { AuthContext } from '../../Contexts/AuthContext';
import { FaArrowRight } from 'react-icons/fa';

const My_Listing = () => {
    const roommatesData = useLoaderData();
    const{user} = use(AuthContext);
    // console.log(user);
    // console.log(roommatesData);
    const myListingData = roommatesData.filter(rommate => rommate.email == user.email);
    console.log(myListingData)

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
                        {
                            myListingData.map((listData,index) =>
                                    <tr key={listData._id}>
                                        <th>{index+1}</th>
                                        <td>{listData.title}</td>
                                        <td>{listData.location}</td>
                                        <td>TK:{listData.rent_amount}</td>
                                        <td>{listData.room_type}</td>
                                        <td>{listData.availability}</td>
                                        <td>
                                            <Link to={`/details/${listData._id}`} className="btn btn-accent btn-outline font-bold">See More <FaArrowRight/></Link>
                                        </td>
                                    </tr>
                            )
                        }
                    </table>    
                </div>
            </main>
            <footer className=''>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default My_Listing;