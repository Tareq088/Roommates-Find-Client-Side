import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { auth } from './../Firebase/firebase.config';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';

const AuthProvider = ({children}) => {
    const[user,setUser] = useState(null)
    const provider = new GoogleAuthProvider();
    const [loading, setLoading] = useState(true)
            //create user
    const signUp =(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email, password)
    }
                // LOG IN
    const logIn = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email,password)
    }
            // Google Log In
    const googleLogIn = () =>{
        setLoading(true)
        return signInWithPopup(auth,provider)
    }
                // signOut
    const logOut = () =>{
        setLoading(true)
        return signOut(auth);
    }
            //on Auth state change (login, sigin, logout er somoy kheyal kore)
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            console.log(currentUser);
            setLoading(false)
        });
        return ()=>{unSubscribe()}
    },[])
            //update user
    const updateUserFProfile = (profile) =>{
        return updateProfile (auth.currentUser, profile)
    }
    const userInfo ={
        signUp, logIn, googleLogIn, user, setUser, logOut,updateUserFProfile
    }
    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;