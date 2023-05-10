import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { data } from '../../../../App';
import useWidth from '../../../../hooks/useWidth';

const Skills = () => {
    const path = useLocation().pathname.split('/')[2]
    const {allData} = useContext(data)
    const skills = allData[path]?.skills   
    const width = useWidth()
    return (
        <div className=' mt-3'>
            
              {
                    skills && skills?.length>0?<> <div className='grid grid-cols-12'>
                    <div className=' col-span-3'>
                    <h2 className={`uppercase  font-semibold text-[#1B3055] tracking-wider ${width>1280 ?"text-[14px]":"text-2xl"}`}>
                      Skills
                    </h2>
                    </div>
                    <div className=' col-span-9'> 
                     <div className=' grid grid-cols-12 gap-6'>
                      {
                          skills?.map((item) => {
                              return(
                                  <div key={item.id} className='col-span-6 justify-items-center skill items-center'>
                                      <div className='flex items-center'>
                                      <h2 className={` w-[80%]  font-medium skill_tittle ${width>1280?"text-[8px]":"text-[18px]"}`}>{item.tittle}</h2>
                                      <h2 className={`w-[20%]  font-medium text-gray-700 skill_rating ${width>1280?"text-[8px]":"text-[18px]"}`}>{item.rating}</h2>
                                      </div>
                                  </div>
                              )
                          })
                      }
                     </div>
                    </div>
                    </div>
                    
                  
                    <div className={`w-full  bg-[#1B3055] ${width>1280?"h-[.1rem] mt-1":"h-1 mt-3"}`}></div></> :null
              }
        </div>
    );
};

export default Skills;