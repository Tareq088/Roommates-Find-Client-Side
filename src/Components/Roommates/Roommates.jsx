import React, { use} from 'react';
import RoommatesCard from '../RoommatesCard/RoommatesCard';
        //get korar somoy method likha lage na
const fetchPromise = fetch("https://roommate-server.vercel.app/roommates/limit?limit=6").then(res=>res.json());

const Roommates = () => {
    const initialRoommates = use(fetchPromise);
    // console.log(initialRoommates)
            // to get availabla data
    // const[roommates, setRoommates] =useState(initialRoommates);
    // useEffect(()=>{
    //     const availableRoommates = initialRoommates.filter(roommate =>roommate.availability == "available")
    //     setRoommates(availableRoommates)
    //     },[initialRoommates, roommates.availability]);
    // console.log(roommates);
    return (

        <div>
            <div className='flex flex-col items-center space-y-2'>
                <h2 className='font-bold text-xl sm:text-2xl md:text-4xl text-purple-800'>Get Rommate</h2>
                <p className='text-neutral-600'>A roommate is a person with whom one shares a living facility such as a room or dormitory except when being family or romantically involved. </p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-5 w-11/12 mx-auto items-stretch py-5'>
                {
                    initialRoommates.map(roommate => <RoommatesCard key={roommate._id} roommate={roommate}></RoommatesCard>)
                }
            </div>
        </div>

    );
};

export default Roommates;