import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { data } from '../../../../App';
import useWidth from '../../../../hooks/useWidth';

const Employment = ({id}) => {
    const path = useLocation().pathname.split('/')[2]
    const {allData} = useContext(data)
    const employments = allData[id||path]?.employment
    const width = useWidth()
    return (
        <div className={` ${width>=1280 || width<=480 || width<=768?"mt-1":"mt-3"}`}>
            {
                employments && employments?.length>0?<>
                 <h2 className={`uppercase  font-semibold text-[#1B3055] tracking-wider ${width>=1280 || width<=480 || width<=768?"text-[14px]":"text-2xl"}`}>
                Employment History
              </h2>
              {
                    employments?.map((item,i) => <div className='grid grid-cols-12 mt-3  gap-8' key={i}>
                    <div className=' col-span-3'>
                     <h2 className={`font-semibold employ_year ${width>=1280 || width<=480 || width<=768?"text-[8px]":"text-xl"}`}>{item?.startDate || item?.endDate ?`${item?.startDate} - ${item?.endDate}` :null}</h2>
                    </div>
                    <div className=' col-span-7 w-full'>
                      <h2 className={`font-semibold  employ_tittle ${width>=1280 || width<=480 || width<=768?"text-[8px]":"text-xl"}`}>{
                            item?.jobTittle
                      }</h2>
                      <div className='my-3 '>
                         
                             {
                                item?.summary ?<div key={item.id} className=' relative ml-8'>
                                <span className={`absolute  rounded-full bg-[#1B3055] ${width>=1280 || width<=480 || width<=768?"mt-[6px] w-[3px] h-[3px]":"mt-[10px] w-[7px] h-[7px]"}`}></span>
                                <p className={`font-medium employment mt-1 employ_skill ${width>=1280 || width<=480 || width<=768?"text-[8px] ml-2":
                            "ml-5"}`}>{item?.summary}</p>
                            </div> :null
                             }
                                  
                                      
                                 
                              
                         
                      </div>
                    </div>
                    <div className='col-span-2'>
                    <h2 className={`font-semibold  employ_location ${width>=1280 || width<=480 || width<=768?"text-[8px]":"text-xl"}`}>{
                        item?.city
                    }</h2>
                    </div>
                </div>)
              }
                </> :null
            }
              
             
              
        </div>
    );
};

export default Employment;