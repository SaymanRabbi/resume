import React from 'react';
import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { data } from '../../../App';

const Employment = () => {
    const path = useLocation().pathname.split('/')[2]
    const {allData} = useContext(data)
    const employments =  allData[path]?.employment
    return (
        <div>
          {
             employments && employments?.length >0 ?<> <h1 className=' text-2xl font-semibold uppercase text-[#1b3055]'> 02 Employment</h1>
             {
                 employments.map((item)=><>
                 
              <div className=' grid grid-cols-12 py-5' key={item?.id}>
               <div className=' col-span-4 w-full'>
                 <h2  className='text-[#1b3055] text-xl employ_year'>{item?.startDate || item?.endDate ? item?.startDate - item?.endDate : null}</h2>
                 <h2 className=' text-gray-500 text-xl employ_location'>{item?.city}</h2>
               </div>
               <div className=' col-span-8'>
                 <h2 className=' text-2xl text-[#1b3055] font-semibold employ_tittle'>
                   {
                       item?.jobTittle
                   }
                 </h2>
                 {
                    item?.summary ?  <div className=' ml-3 py-3'>
                    
                    <div  className=' relative'>
                      <span className=' absolute w-[6px] h-[6px] rounded bg-[#1b3055] mt-[10px]'></span>
                        <p className=' text-gray-500 font-[400] leading-relaxed ml-4 employment employ_skilL'>{item?.summary}</p>
                    </div>
                    
          </div> : null
                 }
                
               </div>
              </div>
                 </>)
             }</> : null
          }
        </div>
    );
};

export default Employment;