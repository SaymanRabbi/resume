import React from 'react';
import Header from './Components/Header';
import BreakPoint from './Components/BreakPoint';
import UserInfo from './Components/UserInfo';

const Christoper = () => {
    return (
        <div className=' bg-[#EFF2F9] p-12'>
       <div className=' py-0 px-4 bg-[white] rounded-md w-[990px]  mx-auto'>
       <Header/>
       <BreakPoint/>
       <UserInfo/>
       </div>
    </div>
    );
};

export default Christoper;