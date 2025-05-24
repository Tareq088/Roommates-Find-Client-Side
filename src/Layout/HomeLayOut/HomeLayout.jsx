import React, { Suspense } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import { Outlet } from 'react-router';
import Roommates from '../../Components/Roommates/Roommates';
import Slider from './../../Components/Slider/Slider';
import Loading from './../../Pages/Loading/Loading';
import ExtraSec1 from '../../Components/ExtraSec1/ExtraSec1';
import ExtraSec2 from '../../Components/ExtraSec2/ExtraSec2';
import { Helmet } from 'react-helmet-async';

const HomeLayout = () => {
    return (
        <div>
            <Helmet>
                <title>FindMate | Home</title>
            </Helmet>
            <header className='sticky top-0 z-10 bg-base-200'>
                <Navbar ></Navbar>
            </header>
            <main>
                <Slider></Slider>
                <Suspense fallback={<Loading></Loading>}>
                    <Roommates></Roommates>
                </Suspense>
                <ExtraSec1></ExtraSec1>
                <ExtraSec2></ExtraSec2>
                <Outlet></Outlet>
            </main>
            <footer className=''>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;