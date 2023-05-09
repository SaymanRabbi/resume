import React, { useContext } from 'react';
import useWidth from '../../../../hooks/useWidth';
import { data } from '../../../../App';
import { useLocation } from 'react-router-dom';

const Employment = () => {
    const path = useLocation().pathname.split('/')[2]
    const {allData } = useContext(data)
    const employment = allData[path]?.employment
   const width = useWidth()
    return (
        <div className={`${width>1280?" my-1":"my-3"}`}>
            {
               employment &&  employment?.length ?<>
               <h2  className={`font-semibold uppercase tracking-widest ${width>1280?"text-[10px]":"text-2xl "}`}>
                Employment
            </h2>
            <div  className={`w-full  bg-[#000000] ${width>1280?"h-[2px] my-1 ":"h-[2px] my-3 "}`}></div>
         
                <div  className={` ${width>1280?"my-1":"my-3"}`}>
                 <div className=' flex justify-between'>
             <h2 className={`font-bold text-[#1b3055] employ_tittle ${width>1280?"text-[8px]":""}`}>
                 {
                        employment?.jobTittle
                 }
                </h2>
                <h2 className={`font-bold text-[#1b3055] employ_location ${width>1280?"text-[8px]":""}`}>
                {
                        employment?.city
                }
                </h2>
             </div>
                <h2 className={` text-gray-600 font-semibold employ_year ${width>1280?"text-[8px] mb-1":"mb-3"}`}>
               {
                 employment?.startDate || employment?.endDate ?    employment?.startDate + ' - ' + employment?.endDate : null
               }
                </h2>
         
                  
                        <div className=' flex  gap-3 relative' >
                            {
                                width<1280?<div className=' absolute w-[.5rem] h-[.5rem] bg-[#1b3055] rounded-full mt-[2%] left-0'>
                                </div>:null
                            }
                            <p className={`employment employ_skill ${width>1280?"text-[7px]":"ml-5"}`}>
                                {
                                    employment?.summary
                                }
                            </p>
                            </div>
                
                
                </div>
                </> : null
            }
            
                
        </div>
    );
};

export default Employment;