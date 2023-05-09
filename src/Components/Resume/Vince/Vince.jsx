import React from 'react';
import Header from './Components/Header';
import Address from './Components/Address';
import Left from './Components/Left';
import Right from './Components/Right';
import useWidth from '../../../hooks/useWidth';

const Vince = () => {
    const widht = useWidth()
    return (
       
        <div className='  bg-[white] rounded-[6px]  mx-auto w-[100%] h-[100%] overflow-x-scroll overflow-y-scroll'>

            <Header/>
            <div className=' px-8 h-[85%] overflow-hidden'>
             <Address/>
             <hr />
             <div className={`grid grid-cols-12 ${widht>1280?"gap-x-2":"gap-x-8"} w-[100%] h-[100%]`}>
               <Left/>
               <Right/>
             </div>
            </div>
         
        </div>
    
    );
};

export default Vince;