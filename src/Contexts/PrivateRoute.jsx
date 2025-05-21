import React, { use } from 'react';
import { AuthContext } from './AuthContext';
import Loading from '../Pages/Loading/Loading';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
    const{user,loading} =use(AuthContext);
    const location = useLocation()
            //loading thakle dekhabo
    if(loading){
        return<Loading></Loading>
    }
            // login thakle children e jabe,  na thakle navigate to login
    if(user && user?.email){
        return children
    } 

    return (
        <Navigate state={location.pathname} to="/auth/login"></Navigate>
    )
};

export default PrivateRoute;