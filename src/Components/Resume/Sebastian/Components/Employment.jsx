import React from 'react';
import useWidth from '../../../../hooks/useWidth';
import { useLocation } from 'react-router-dom';
import { data } from '../../../../App';
import { useContext } from 'react';

const Employment = () => {
    const path = useLocation().pathname.split('/')[2]
    const {allData} = useContext(data)
   const datas = allData?.[path]?.employment
    const width = useWidth()
    return (
        <div className={`${width>1280?'mt-[2px]':"mt-4"}`}>
         {
            datas && datas.length>0?  <>
            <button className={`uppercase bg-black text-white font-semibold tracking-widest ${width>1280?"px-[5px] text-[8px]":"px-3 py-1"}`}>employment</button>
             <div className={`${width>1280?'':"mt-1"}`}>
               {
                     datas.map((item)=>{ 
                         return(
                             <div key={item.id} className={`${width>1280?'':"mt-1"}`}>
                                 <h2 className={`font-semibold employ_tittle ${width>1280?"text-[8px]":"text-xl"}`}>{item?.jobTittle} {item?.employer}</h2>
                                 <h2 className={`text-gray-400 employ_year font-semibold ${width>1280?'text-[8px]':''}`}>{item?.startDate} {item?.endDate}</h2>
                                {
                                    item?.summary? <div className=' relative px-3' key={item.id}>
                                    <span className={` absolute ${width>1280?"w-[2px] h-[2px] mt-[5px]":"w-[6px] h-[6px] mt-[9px]"} rounded-full bg-black`}></span>
                                    <h2 className={`text-gray-400 employ_skill ${width>1280?'ml-2 text-[7px]':'ml-4'}`}>{item?.summary}</h2>
                                    </div>:null
                                }
                                     
                                     
                                 
                             </div>
                         )
                     })
               }
            </div>
            </>:null
         }
        </div>
    );
};

export default Employment;