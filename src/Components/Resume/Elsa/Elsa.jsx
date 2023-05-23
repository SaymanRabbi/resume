import React from 'react';
import Left from './Components/Left';
import Right from './Components/Right';
import Header from './Components/Header';
import useWidth from '../../../hooks/useWidth';

const Elsa = ({id}) => {
  const width = useWidth()
  // w-[990px]
    return (
        <div id='milan' className=' bg-[#EFF2F9] p-2 overflow-x-scroll overflow-y-scroll h-[100%]'>
        <div className={`bg-[white] rounded-md  mx-auto  relative ${width>=1280 || width<=480 || width<=768?"w-[100%]":""}`}>
            <Header id={id}/>
          <div className='grid grid-cols-12'>
            <Left id={id}/>
            <Right id={id}/>
          </div>
        </div>
     </div>
    );
};

export default Elsa;