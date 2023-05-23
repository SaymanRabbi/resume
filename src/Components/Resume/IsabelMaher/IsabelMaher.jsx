import React from 'react';
import Header from './Components/Header';
import './Components/Header.css'
import Address from './Components/Address';
import Profile from './Profile';
import Employment from './Employment';
import useWidth from '../../../hooks/useWidth';
const IsabelMaher = ({id}) => {
    const width = useWidth()
    // w-[990px]
    return (
        <div id='vancouver' className={`bg bg-[#EFF2F9]  h-[100%] ${width>=1280 || width<=480 || width<=768?" w-[100%]":"overflow-x-scroll overflow-y-scroll"}`}>
        <div className={`bg-[white] rounded-md px-8   mx-auto h-[100%] ${width>=1280 || width<=480 || width<=768 ? "w-[100%]":""}`}>
            <Header id={id}/>
            <div className=' w-[100%]'>
                 <Address id={id}/>
                 <Profile id={id}/>
                 <Employment id={id}/>
            </div>
        </div>
     </div>
    );
};

export default IsabelMaher;