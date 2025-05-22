import React, { use, useState } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import { Link, useLoaderData } from 'react-router';
import { AuthContext } from '../../Contexts/AuthContext';
import { FaArrowRight } from 'react-icons/fa';
import { GrUpdate } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import Swal from 'sweetalert2';

const My_Listing = () =>{
    const roommatesData = useLoaderData();
    const{user} = use(AuthContext);
    // console.log(user);
    // console.log(roommatesData);
    const initialMyListingData = roommatesData.filter(rommate => rommate.email == user.email);
    const[myListingData,setMyListingData] = useState(initialMyListingData);
    // console.log(myListingData)
    const handleDelete = (id) =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
            }).then((result) => {
            if (result.isConfirmed) {
                    // delete data from db
                fetch(`http://localhost:3000/roommates/${id}`,{
                    method:'DELETE'
                })
                .then(res=>res.json())
                .then(data =>{
                    console.log("data after delete", data);
                    // if(data.deletedCount){
                        Swal.fire({
                                title: "Deleted!",
                                text: "Roommate Data has been deleted.",
                                icon: "success"
                                });
                                // delete data from u/i
                        const remainingListingData =  myListingData.filter(data => data._id !== id);
                        setMyListingData(remainingListingData)
                    // }
                })
            }
    })
}
    return (
        <div>
            <header className='sticky top-0 z-10 bg-base-200'>
                <Navbar></Navbar>
            </header>
            <main className='py-5'>
                <div className="overflow-x-auto max-w-11/12 mx-auto">
                    <table className="table table-xs table-pin-rows table-pin-cols">
                        <thead className='border-b-2'>
                            <tr className='font-bold text-xl border'>
                                <th>No.</th>
                                <td>Title</td>
                                <td>Location</td>
                                <td>Rent Price</td>
                                <td>Availability</td>
                                <td>Comment</td>
                            </tr>
                        </thead>     
                        <tbody>
                        {
                            myListingData.map((listingData,index) =>
                                    <tr key={listingData._id} className='border'>
                                        <th className='text-xs sm:text-base'>{index+1}.</th>
                                        <td className='text-xs sm:text-base'>{listingData.title}</td>
                                        <td className='text-xs sm:text-base'>{listingData.location}</td>
                                        <td className='text-xs sm:text-base'>TK:{listingData.rent_amount}</td>
                                        <td className='text-xs sm:text-base'>{listingData.availability}</td>
                                        <td className='text-xs sm:text-base'>
                                            <div className="join join-vertical space-y-1">
                                                <Link to={`/updateRoommateData/${listingData._id}`} >
                                                    <button className="btn join-item text-green-700"><GrUpdate size={20}/>UPDATE
                                                    </button>
                                                </Link>
                                                
                                                    <button onClick={()=>{handleDelete(listingData._id)}}
                                                     className="btn join-item text-red-600"><MdDelete size={20}/>DELETE</button>
                                            </div>
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

export default My_Listing;