import React from 'react';
import Header from './Components/Header';
import Address from './Components/Address';
import Left from './Components/Left';
import Right from './Components/Right';
import useWidth from '../../../hooks/useWidth';

const Vince = ({id}) => {
    const width = useWidth()
    // w-[990px]
    return (
       
        <div id='tokyo' className='  bg-[white] rounded-[6px]  mx-auto w-[100%] h-[100%] overflow-x-scroll overflow-y-scroll'>
            <Header id={id}/>
            <div className=' px-8 h-[85%]'>
             <Address id={id}/>
             <hr />
             <div className={`grid grid-cols-12 ${width>=1280 || width<=480 || width<=768?"gap-x-2":"gap-x-8"} w-[100%] h-[100%]`}>
               <Left id={id}/>
               <Right id={id}/>
             </div>
            </div>
         
        </div>
    
    );
};

export default Vince;