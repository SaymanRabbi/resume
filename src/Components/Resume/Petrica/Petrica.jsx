import React from 'react';
import Header from './Components/Header';
import LeftDetails from './Components/LeftDetails';
import RightDetails from './Components/RightDetails';
import useWidth from '../../../hooks/useWidth';
const Petrica = () => {
  const width = useWidth()
    return (
        <div className={`rounded-md w-[100%] h-[100%] bg-[#EFF2F9] ${width>1280?"p-8":"p-12"}`}>
        <div className={`bg-[white] rounded-md ${width>1280?"w-[100%] h-[100%]":"w-[990px]"}  mx-auto`}>
          <Header/>
          <div className={`grid grid-cols-12 ${width>1280?"mt-5 gap-x-8":'mt-10 gap-12'}`}>
            <LeftDetails/>
            <RightDetails/>
          </div>
        </div>
     </div>
    );
};

export default Petrica;