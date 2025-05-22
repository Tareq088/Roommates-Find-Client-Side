import React, { use } from 'react';
import { AuthContext } from '../../Contexts/AuthContext';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';

const Find_Roommate = () => {
    const {user} =use(AuthContext);
    console.log(user)
    const handleFindRoommate =(e) =>{
                e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const roomMateData = Object.fromEntries(formData.entries());
        console.log(roomMateData);
        fetch("http://localhost:3000/roommates",{
            method:"POST",
            headers:{
                "content-type":"application/json",
            },
            body:JSON.stringify(roomMateData),
        } )
        .then(res => res.json())
        .then(data =>{
            if(data.insertedId){
                 toast.success("Roommates data are uploaded successfully")
            }
            console.log("data after post", data);
            form.reset()
        })
    }
    return (
        <div>
            <header className='sticky top-0 z-10 bg-base-200'>
                <Navbar ></Navbar>
            </header>
            <main>
                <div className='w-11/12 mx-auto flex justify-center'>
                    <form onSubmit={handleFindRoommate} className=''>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs sm:w-sm md:w-md border p-4">
                        <legend className="fieldset-legend text-red-700 font-bold text-lg md:text-2xl">Find Roommate</legend>
                                {/* title */}
                        <label className="label">Title</label>
                        <input type="text" name='title' className="input w-full" placeholder="Give A Title" />
                                {/* location */}
                        <label className="label">location</label>
                        <input type="text" name='location' className="input w-full" placeholder="Location/Address" />
                                    {/* Rent amount */}
                        <label className="label">rent amount</label>
                        <input type="number" name='rent_amount' className="input w-full" placeholder="Rent amount in Tk" />
                                        {/* Room type */}
                        <label className="label">Room Type</label>
                        <select name='room_type' defaultValue="Choose Room Type" className="select w-full">
                            <option disabled={true}>Choose Room Type</option>
                            <option value='single'>Single</option>
                            <option value='double'>Double</option>
                            <option value='shared'>Shared</option>
                        </select>
                                    {/* list style preference */}
                        <label className="label">LifeStyle preference</label>
                        <select name='style_preference' defaultValue="Choose style preference" className="select w-full">
                            <option disabled={true}>Choose style preference</option>
                            <option value='pets'>Pets</option>
                            <option value='smoking'>Smoking</option>
                            <option value='Night Owl'>Night Owl</option>
                            <option value='Religious'>Religious</option>
                        </select> 
                                    {/* description */}
                        <label className="label">Description</label>
                        <textarea name="description" cols={5} rows={10} className="input w-full"></textarea>
                                        {/* contact info */}
                        <label className="label">Contact Info</label>
                        <input type="tel" name='contact_info' className="input w-full" placeholder="Contact Information" />
                                        {/* availability */}
                        <label className="label">Availability</label>
                        <select name='availability' defaultValue="select availability" className="select w-full">
                            <option disabled={true}>select availability</option>
                            <option value='available'>Yes</option>
                            <option value='not-available'>No</option>
                        </select> 
                                            {/* email */}
                        <label className="label">Email</label>
                        <input type="email" name='email' value={user?.email} className="input w-full" placeholder="Email" readOnly/>
                                        {/* user name */}
                        <label className="label">User Name</label>
                        <input type="text" name='User_name' value={user?.displayName} className="input w-full" placeholder="User Name" readOnly />
                
                        <button type='submit' className="btn btn-neutral mt-4">Add Button</button>
                    </fieldset>
                    </form>
                </div>
            </main>
            <footer className=''>
                <Footer></Footer>
            </footer>

        </div>
    );
};

export default Find_Roommate;