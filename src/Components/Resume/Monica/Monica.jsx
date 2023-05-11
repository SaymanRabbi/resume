import React from 'react';
import Header from './Components/Header';
import Info from './Components/Info';
import Skills from './Components/Skills';
import Employment from './Components/Employment';
import useWidth from '../../../hooks/useWidth';

const Monica = () => {
    const width = useWidth()
    return (
        <div className=' bg-[#EFF2F9] overflow-y-scroll overflow-x-scroll h-[100%] w-[100%]'>
        <div className={`bg-[white] rounded-md  mx-auto  relative  ${width>1280?"w-[100%]":"w-[990px]"}`}>
            <div className={` bg-[#F5EEE3] w-full ${width>1280?" px-10 py-8":" px-20 py-12"}`}>
            <Header/>
              <Info/>
              <Skills/>
            </div>
            <Employment/>
        </div>
     </div>
    );
};

export default Monica;