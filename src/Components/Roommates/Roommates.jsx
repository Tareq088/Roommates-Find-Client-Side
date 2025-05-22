import React, { use, useEffect, useState } from 'react';
import RoommatesCard from '../RoommatesCard/RoommatesCard';
        //get korar somoy method likha lage na
const fetchPromise = fetch("http://localhost:3000/roommates/limit?limit=6").then(res=>res.json());

const Roommates = () => {
    const initialRoommates = use(fetchPromise);
    console.log(initialRoommates)
            // to get availabla data
    // const[roommates, setRoommates] =useState(initialRoommates);
    // useEffect(()=>{
    //     const availableRoommates = initialRoommates.filter(roommate =>roommate.availability == "available")
    //     setRoommates(availableRoommates)
    //     },[initialRoommates, roommates.availability]);
    // console.log(roommates);
    return (
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-5 w-11/12 mx-auto items-stretch py-10'>
            {
                initialRoommates.map(roommate => <RoommatesCard key={roommate._id} roommate={roommate}></RoommatesCard>)
            }
        </div>
    );
};

export default Roommates;