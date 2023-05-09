import React from 'react';
import Header from './Components/Header';
import Employment from './Components/Employment';
import Details from './Components/Details';

const Daryal = () => {
    return (
        <div className=' bg-[#EFF2F9] p-12 overflow-x-scroll overflow-y-scroll'>
        <div className='  bg-[#F6F6FE] rounded-md w-[990px]  mx-auto  relative '>
           <Header/>
          <div className=' grid grid-cols-12 pl-10 py-6 gap-x-4'>
              <Employment/>
              <Details/>
          </div>
        </div>
     </div>
    );
};

export default Daryal;