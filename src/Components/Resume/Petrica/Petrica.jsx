import React from 'react';
import Header from './Components/Header';
import LeftDetails from './Components/LeftDetails';
import RightDetails from './Components/RightDetails';
import useWidth from '../../../hooks/useWidth';
const Petrica = () => {
  const width = useWidth()
  // w-[990px]
    return (
        <div id='vienna' className={`rounded-md w-[100%] h-[100%] bg-[#EFF2F9]  overflow-x-scroll overflow-y-scroll py-2`}>
        <div className={`bg-[white] rounded-md ${width>=1280 || width<=480 || width<=768?"w-[100%] h-[100%]":""}  mx-auto`}>
          <Header/>
          <div className={`grid grid-cols-12 px-4 ${width>=1280 || width<=480 || width<=768?"mt-5 gap-x-8":'mt-10 gap-12'}`}>
            <LeftDetails/>
            <RightDetails/>
          </div>
        </div>
     </div>
    );
};

export default Petrica;