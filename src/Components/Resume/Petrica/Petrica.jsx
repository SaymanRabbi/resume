import React from 'react';
import Header from './Components/Header';
import LeftDetails from './Components/LeftDetails';
import RightDetails from './Components/RightDetails';
const Petrica = () => {
    return (
        <div className=' bg-[#EFF2F9] p-12'>
        <div className=' p-8 bg-[white] rounded-md w-[990px]  mx-auto'>
          <Header/>
          <div className=' grid grid-cols-12 mt-10 gap-12'>
            <LeftDetails/>
            <RightDetails/>
          </div>
        </div>
     </div>
    );
};

export default Petrica;