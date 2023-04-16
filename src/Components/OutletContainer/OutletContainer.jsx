import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

const OutletContainer = () => {
    return (
        <div>
            <Header/>
            <div className=' max-w-[1440px] py-6 px-11 mx-auto'>
            <Outlet/>
            </div>
        </div>
    );
};

export default OutletContainer;