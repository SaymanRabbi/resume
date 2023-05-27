import React from 'react';
import Header from '../Header/Header';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Footer/Footer';

const OutletContainer = ({handleClick}) => {
    const path = useLocation().pathname
    return (
        <div>
            <Header handleClick={handleClick}/>
            <div className=' max-w-[1440px] py-6 px-11 mx-auto'>
            <Outlet/>
            </div>
            {
                path !== '/login' && path !== '/signup' && <Footer/>
            }
        </div>
    );
};

export default OutletContainer;