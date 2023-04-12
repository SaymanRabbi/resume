import React from 'react';
import Header from './Components/Header';
import Address from './Components/Address';
import Left from './Components/Left';
import Right from './Components/Right';

const Vince = () => {
    return (
        <div className=' bg-[#EFF2F9] p-12'>
        <div className='  bg-[white] rounded-md w-[990px]  mx-auto'>
         
            <Header/>
            <div className=' px-12'>
             <Address/>
             <hr />
             <div className=' grid grid-cols-12 gap-x-8'>
               <Left/>
               <Right/>
             </div>
            </div>
         
        </div>
     </div>
    );
};

export default Vince;