import React from 'react';
import Header from './Components/Header';
import Info from './Components/Info';
import Skills from './Components/Skills';
import Employment from './Components/Employment';

const Monica = () => {
    return (
        <div className=' bg-[#EFF2F9] p-12 overflow-y-scroll overflow-x-scroll'>
        <div className='  bg-[white] rounded-md w-[990px]  mx-auto  relative '>
            <div className=' h-[700px] bg-[#F5EEE3] w-full px-20 py-12'>
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