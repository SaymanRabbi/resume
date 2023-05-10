import React from 'react';
import useWidth from '../../../../hooks/useWidth';
import { data } from '../../../../App';
import { useContext } from 'react';
import { useLocation } from 'react-router-dom';

const Employment = () => {
    const path = useLocation().pathname.split('/')[2]
    const {allData} = useContext(data)
    const employments =  allData[path]?.employment
    const width = useWidth()
    return (
        <div className='pb-6'>
       {
              employments && employments.length>0 ? <>
               <h2 className={`italic ${width>1280?"text-[14px]":"text-2xl"} font-bold`}>Employment History</h2>
        {
            employments.map((item)=>(
                <div key={item.id} className={`${width>1280?"mt-1":"mt-3"}`}>
                    <h3 className={`${width>1280?"text-[8px] mt-1":"text-xl mt-2"} font-[500]  employ_tittle`}>{item?.jobTittle}</h3>
                    <p className={`text-gray-400 employ_year ${width>1280?"text-[6px]":"text-[18px]"}`}>{item?.startDate || item?.endDate ? `${item?.startDate} - ${item?.endDate}` : null}</p>
                     {
                        employments?.summary ?  <div className=' relative ml-3'>
                        <span className={` absolute ${width>1280?"w-[4px] h-[4px] mt-[4px]":"w-[7px] h-[7px] mt-2"} bg-black rounded-full `}></span>
                        <p className={`font-[400] employ_skill ${width>1280?'text-[7px] ml-2':"text-[14px] ml-4"}`}>{employments?.summary}</p>
                    </div> : null
                     }
                           
                      
                    
                </div>
            ))
        }
              </> : null
       }
    </div>
    );
};

export default Employment;