import React from 'react';
import Left from './Components/Left';
import Right from './Components/Right';
import Header from './Components/Header';

const Elsa = () => {
    return (
        <div className=' bg-[#EFF2F9] p-2 overflow-x-scroll overflow-y-scroll h-[100%]'>
        <div className='  bg-[white] rounded-md w-[990px]  mx-auto  relative '>
            <Header/>
          <div className=' grid grid-cols-12'>
            <Left/>
            <Right/>
          </div>
        </div>
     </div>
    );
};

export default Elsa;