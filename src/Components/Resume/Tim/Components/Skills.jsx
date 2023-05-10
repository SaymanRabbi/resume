import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { data } from '../../../../App';

const Skills = () => {
    const path = useLocation().pathname.split('/')[2]
    const {allData} = useContext(data)
    const skills = allData[path]?.skills   
    return (
        <div className=' mt-3'>
            
              {
                    skills && skills?.length>0?<> <div className='grid grid-cols-12'>
                    <div className=' col-span-3'>
                    <h2 className=' uppercase text-2xl font-semibold text-[#1B3055] tracking-wider'>
                      Skills
                    </h2>
                    </div>
                    <div className=' col-span-9'> 
                     <div className=' grid grid-cols-12 gap-6'>
                      {
                          skills?.map((item) => {
                              return(
                                  <div key={item.id} className='col-span-6 justify-items-center skill'>
                                      <div className='flex'>
                                      <h2 className=' w-[80%] text-[18px] font-medium skill_tittle'>{item.tittle}</h2>
                                      <h2 className='  w-[20%] text-[18px] font-medium text-gray-700 skill_rating'>{item.rating}</h2>
                                      </div>
                                  </div>
                              )
                          })
                      }
                     </div>
                    </div>
                    </div>
                    
                  
                  <div className=' w-full h-1 bg-[#1B3055] mt-3'></div></> :null
              }
        </div>
    );
};

export default Skills;