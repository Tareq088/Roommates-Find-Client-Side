import React, { useEffect } from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { GiMoneyStack } from "react-icons/gi";
import { FaHouseDamage,FaArrowRight } from "react-icons/fa";
import { FaPersonCircleCheck } from "react-icons/fa6";
import { Link } from 'react-router';

const RoommatesCard = ({roommate}) => {
    // console.log(roommate);
    const {User_name,availability,location, rent_amount,title,room_type,_id} = roommate|| {};

    return (
        <div>
            <div className="card bg-base-100 shadow-lg h-full">
                <div className="card-body">
                    <h2 className="card-title text-xl text-purple-950">{title}</h2>
                    <p className='flex gap-2 items-center'><FaLocationDot color='green'></FaLocationDot>{location}</p>
                    <p className='flex gap-2 items-center'><GiMoneyStack color='red'></GiMoneyStack>TK: {rent_amount}</p>
                    <p className='flex gap-2 items-center'><FaHouseDamage color='blue'/>{room_type}</p>
                    <p className='flex gap-2 items-center'><FaPersonCircleCheck color='green'/>{availability}</p>
                    <div className="card-actions justify-end">
                    <Link to={`/details/${_id}`} className="btn btn-success btn-outline font-bold">See More <FaArrowRight/></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoommatesCard;