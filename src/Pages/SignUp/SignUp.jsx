import React, { use, useState } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../Contexts/AuthContext';
import Swal from 'sweetalert2';

const SignUp = () => {
    const{signUp} = use(AuthContext);
    const[errorMessage, setErrorMessage] = useState("")

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
        console.log(password);
        //console.log(userData)
        signUp(userData.email, userData.password) 
        .then( result =>{
                Swal.fire({
                        title: "User is successfully Created",
                        icon: "success",
                        draggable: true
                });
            console.log(result.user);
        })
        .catch( (error) =>{
            console.log(error.message);
                        Swal.fire({
                                title: 'Error!',
                                text: `{error.message}`,
                                icon: 'error',
                                confirmButtonText: 'Please Make a correction'
                        })
        })

    }
    return (
        <div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
                <form onSubmit={handleSignUp} className="card-body">
                    <fieldset className="fieldset">
                                {/* name */}
                        <label className="label">Name</label>
                        <input type="text" name='name' className="input" placeholder="Name" />
                                    {/* email */}
                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" />
                                    {/* photoURL */}
                    
                        <label className="label">photoURL</label>
                        <input type="text" name='photoURL' className="input" placeholder="photoURL" />
                                    {/* password */}
                        <label className="label">Password</label>
                        <input type="password" name='password' className="input" placeholder="Password" />
                        {
                            errorMessage && <p className='text-xs text-red-700'>{errorMessage}</p>
                        }

                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button type='submit' to='/auth/login' className="btn btn-neutral mt-4">Register</button>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default SignUp;