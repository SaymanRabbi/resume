import React from 'react';
import Header from './Components/Header';
import Employment from './Components/Employment';
import Details from './Components/Details';
import useWidth from '../../../hooks/useWidth';

const Daryal = () => {
    const width = useWidth()
    return (
        <div className={`overflow-x-scroll overflow-y-scroll h-[100%] w-[100%] ${width>=1280 || width<=480 || width<=768?"":""} bg-[#F6F6FE]`}>
        <div className={`bg-[#F6F6FE] rounded-md   mx-auto  relative  ${width>=1280 || width<=480 || width<=768?"w-[100%]":"w-[990px]"}`}>
           <Header/>
          <div className= {`grid grid-cols-12  ${width>=1280 || width<=480 || width<=768?"pl-10 gap-x-2":"pl-10 py-6 gap-x-4"}`}>
              <Employment/>
              <Details/>
          </div>
        </div>
     </div>
    );
};

export default Daryal;