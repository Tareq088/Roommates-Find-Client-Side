import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div>
            <header className='sticky top-0 z-10 bg-base-200'>
                <Navbar></Navbar>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
            <footer className=''>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default AuthLayout;