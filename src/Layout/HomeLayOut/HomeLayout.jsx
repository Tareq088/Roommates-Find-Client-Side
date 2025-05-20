import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';

const HomeLayout = () => {
    return (
        <div>
            <header className='sticky top-0 bg-base-200'>
                <Navbar ></Navbar>
            </header>
            <main>

            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;