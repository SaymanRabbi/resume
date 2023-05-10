import React from 'react';
import Header from './Components/Header';
import './Components/Header.css'
import Address from './Components/Address';
import Profile from './Profile';
import Employment from './Employment';
import useWidth from '../../../hooks/useWidth';
const IsabelMaher = () => {
    const width = useWidth()
    return (
        <div className={` bg-[#EFF2F9] px-8  h-[100%] ${width>1280?" w-[100%]":"overflow-x-scroll overflow-y-scroll"}`}>
        <div className={`bg-[white] rounded-md   mx-auto h-[100%] ${width>1280 ? "w-[100%]":"w-[990px]"}`}>
            <Header/>
            <div className=' w-[100%]'>
                 <Address/>
                 <Profile/>
                 <Employment/>
            </div>
        </div>
     </div>
    );
};

export default IsabelMaher;