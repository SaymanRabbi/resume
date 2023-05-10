import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { data } from '../../../../App';

const Employment = () => {
    const path = useLocation().pathname.split('/')[2]
    const {allData} = useContext(data)
    const employments = allData[path]?.employment
    return (
        <div className=' mt-3'>
            {
                employments && employments?.length>0?<>
                 <h2 className=' uppercase text-2xl font-semibold text-[#1B3055] tracking-wider '>
                Employment History
              </h2>
              {
                    employments?.map((item,i) => <div className='grid grid-cols-12 mt-3  gap-8' key={i}>
                    <div className=' col-span-3'>
                     <h2 className='font-semibold text-xl employ_year'>{item?.startDate || item?.endDate ?item?.startDate - item?.endDate :null}</h2>
                    </div>
                    <div className=' col-span-7 w-full'>
                      <h2 className=' font-semibold text-xl employ_tittle'>{
                            item?.jobTittle
                      }</h2>
                      <div className='my-3 '>
                         
                             {
                                item?.summary ?<div key={item.id} className=' relative ml-8'>
                                <span className=' absolute mt-[10px] w-[7px] h-[7px] rounded-full bg-[#1B3055]'></span>
                                <p className='font-medium employment ml-5 mt-1 employ_skill'>{item?.summary}</p>
                            </div> :null
                             }
                                  
                                      
                                 
                              
                         
                      </div>
                    </div>
                    <div className='col-span-2'>
                    <h2 className='font-semibold text-xl employ_location'>{
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