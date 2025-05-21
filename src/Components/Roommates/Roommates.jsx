import React, { use } from 'react';
import RoommatesCard from '../RoommatesCard/RoommatesCard';
const fetchPromise = fetch("http://localhost:3000/roommates").then(res=>res.json());

const Roommates = () => {
    const roommates = use(fetchPromise);
    // console.log(roommates);
    return (
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-5 w-11/12 mx-auto items-stretch py-10'>
            {
                roommates.map(roommate => <RoommatesCard key={roommate._id} roommate={roommate}></RoommatesCard>)
            }
        </div>
    );
};

export default Roommates;