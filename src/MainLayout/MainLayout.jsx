import React from 'react';
import { Outlet } from 'react-router';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';

const MainLayout = () => {
    return (
        <div>
            <nav className='shadow-sm fixed w-full z-50 backdrop-blur-2xl'>
                <NavBar></NavBar>
            </nav>
            <div className='min-h-screen pt-16'>
                <Outlet></Outlet>
            </div>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default MainLayout;