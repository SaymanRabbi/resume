import React from 'react';
import background from './Components/Img/bg.png'
import Header from './Components/Header';
import './Components/Header.css'
import Address from './Components/Address';
import Profile from './Profile';
import Employment from './Employment';
const IsabelMaher = () => {
    return (
        <div className=' bg-[#EFF2F9] px-8 overflow-x-scroll overflow-y-scroll h-[100%]'>
        <div className='  bg-[white] rounded-md w-[990px]  mx-auto bg bg-cover'>
            <Header/>
            <div className=''>
                 <Address/>
                 <Profile/>
                 <Employment/>
            </div>
        </div>
     </div>
    );
};

export default IsabelMaher;