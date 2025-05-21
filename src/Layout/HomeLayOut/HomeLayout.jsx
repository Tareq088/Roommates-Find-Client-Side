import React, { Suspense } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import { Outlet } from 'react-router';
import Roommates from '../../Components/Roommates/Roommates';
import Slider from './../../Components/Slider/Slider';
import Loading from './../../Pages/Loading/Loading';

const HomeLayout = () => {
    return (
        <div>
            <header className='sticky top-0 z-10 bg-base-200'>
                <Navbar ></Navbar>
            </header>
            <main>
                <Slider></Slider>
                <Suspense fallback={<Loading></Loading>}>
                    <Roommates></Roommates>
                </Suspense>
                <Outlet></Outlet>
            </main>
            <footer className=''>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;