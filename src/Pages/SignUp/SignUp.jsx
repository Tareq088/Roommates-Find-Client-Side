import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../Contexts/AuthContext';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';

const SignUp = () => {
    const{signUp,setUser,updateUserFProfile} = use(AuthContext);
    const[errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    const handleSignUp =(e) =>{
        e.preventDefault();
        const form = e.target;
        // const name = form.name.value;
        // const email = form.email.value;
        // const photo = form.photoURL.value;
        // const password = form.password.value;
        // console.log(name,email,photo, password)
        const formData = new FormData(form);
        const userData = Object.fromEntries(formData.entries());
        const password = userData.password;
        
                        // password vlaidation
        const passwordRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d){6,}/; 
        if(!passwordRegExp.test(password)){
            setErrorMessage("password Must have an Uppercase letter, Lowercase letter and length at least 6 characters");
            Swal.fire({
                        title: 'Error!',
                        text: 'password Must have an Uppercase letter, Lowercase letter and length at least 6 character',
                        icon: 'error',
                        confirmButtonText: 'Please Make a correction'
            })
            return;
        }
        else{
            setErrorMessage("");
        }
                    //create user
        signUp(userData.email, userData.password) 
        .then( result =>{
            Swal.fire("User is successfully Created");
            // console.log(result.user);
            const profile ={
                displayName:userData.name,
                photoURL: userData.photo
            }
                        //update profile to show the profile pic, displayName (emailverify na prothome tai)
            updateUserFProfile(profile)
            .then(()=>{
                setUser({...result.user, ...profile})
                navigate(location.state || "/");
            })
            .catch((error)=>{
                toast.error(`${error.message}`)
            })
        })
        .catch( (error) =>{
            Swal.fire(`${error.message}`)
            console.log(error.message);
        })
    }
    return (
        <div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto p-5">
                <h2 className='text-center font-bold text-lg md:text-3xl pt-4'>Sign Up</h2>
                <form onSubmit={handleSignUp} className="card-body">
                    <fieldset className="fieldset">
                                {/* name */}
                        <label className="label">Name</label>
                        <input type="text" name='name' className="input" placeholder="Name" required/>
                                    {/* email */}
                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" required/>
                                    {/* photoURL */}
                    
                        <label className="label">photoURL</label>
                        <input type="text" name='photo' className="input" placeholder="photoURL" required/>
                                    {/* password */}
                        <label className="label">Password</label>
                        <input type="password" name='password' className="input" placeholder="Password" required/>
                        {
                            errorMessage && <p className='text-xs text-red-700'>{errorMessage}</p>
                        }
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button type='submit' to='/auth/login' className="btn btn-neutral mt-4">Register</button>
                    </fieldset>
                </form>
                <p className='text-center'>Already Have an Account? 
                    <span className='font-bold text-red-600 hover:text-green-800 hover:underline'><Link to='/auth/login'> Log In</Link></span>
                </p>
            </div>
        </div>
    );
};

export default SignUp;