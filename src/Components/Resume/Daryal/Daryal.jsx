import React from 'react';
import Header from './Components/Header';
import Employment from './Components/Employment';
import Details from './Components/Details';
import useWidth from '../../../hooks/useWidth';
import './Daryal.css'
const Daryal = ({id}) => {
    const width = useWidth()
    // w-[990px]
    return (
        <div id='lisbon' className={`h-[100%] w-[100%] backgroud ${width>=1280 || width<=480 || width<=768?"":""} overflow-x-scroll overflow-y-scroll`}>
        <div className={`rounded-md h-[100%]   mx-auto  relative  ${width>=1280 || width<=480 || width<=768?"w-[100%]":""}`}>
           <Header id={id}/>
          <div className= {`grid grid-cols-12  ${width>=1280 || width<=480 || width<=768?"pl-2 gap-x-4":"pl-4 py-6 gap-x-4"}`}>
              <Employment id={id}/>
              <Details id={id}/>
          </div>
        </div>
     </div>
    );
};

export default Daryal;