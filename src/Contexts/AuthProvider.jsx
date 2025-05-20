import React from 'react';
import { AuthContext } from './AuthContext';
import { auth } from './../Firebase/firebase.config';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const AuthProvider = ({children}) => {
            //create user
    const signUp =(email,password)=>{
        return createUserWithEmailAndPassword(auth,email, password)
    }
    const userInfo ={
        signUp,
    }
    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;