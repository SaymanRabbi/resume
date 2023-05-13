import React from 'react';
import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { data } from '../../../App';
import useWidth from '../../../hooks/useWidth';

const Employment = () => {
    const path = useLocation().pathname.split('/')[2]
    const {allData} = useContext(data)
    const employments =  allData[path]?.employment
    const width = useWidth()
    return (
        <div>
          {
             employments && employments?.length >0 ?<> <h1 className={  ` font-semibold uppercase text-[#1b3055] ${width>=1280 || width<=480 || width<=768?"text-[14px]":"text-2xl"}`}> 02 Employment</h1>
             {
                 employments.map((item)=><>
                 
              <div className={` grid grid-cols-12  ${width>=1280 || width<=480 || width<=768?"py-2":"py-5"}`} key={item?.id}>
               <div className=' col-span-4 w-full'>
                 <h2  className={`text-[#1b3055]  employ_year ${width>=1280 || width<=480 || width<=768?"text-[8px]":"text-xl"}`}>{item?.startDate || item?.endDate ? `${item?.startDate} - ${item?.endDate}` : null}</h2>
                 <h2 className={`text-gray-500  employ_location ${width>=1280 || width<=480 || width<=768?"text-[8px]":"text-xl"}`}>{item?.city}</h2>
               </div>
               <div className=' col-span-8'>
                 <h2 className={` text-[#1b3055] font-semibold employ_tittle ${width>=1280 || width<=480 || width<=768?"text-[8px]":"text-2xl"}`}>
                   {
                       item?.jobTittle
                   }
                 </h2>
                 {
                    item?.summary ?  <div className={` ${width>=1280 || width<=480 || width<=768?"ml-1 py-1":"ml-3 py-3"}`}>
                    
                    <div  className=' relative'>
                      <span className={`absolute  rounded bg-[#1b3055]  ${width>=1280 || width<=480 || width<=768?"w-[3px] h-[3px] mt-[6px]":"w-[6px] h-[6px] mt-[10px]"}`}></span>
                        <p className={`text-gray-500 font-[400] leading-relaxed  employment employ_skilL ${width>=1280 || width<=480 || width<=768?"ml-2 text-[8px]":"ml-4"}`}>{item?.summary}</p>
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