import React from 'react';
import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { data } from '../../../../App';

const Education = () => {
    const education = [
        {
            id:1,
            tittle:'Maser of Accountancy, St. Joseph College',
            year:'jul 2009 - jul 2013',
            location:'New York',
            skill:[
                {
                    id:1,
                    name:'Graduated with High Honors'
                }
            ],
        },{
            id:2,
            tittle:'Bachelor of Finance, University of Pennsylvania',
            year:'jul 2005 - jul 2009',
            location:'Philadelphia',
            skill:[{
                id:1,
                name:'President of the Finance Club'
            }]
        }
    ]
    const path = useLocation().pathname.split('/')[2]
    const {allData} = useContext(data)
    const educations = allData[path]?.education

    return (
        <div className=' mt-3'>
          {
                educations && educations?.length>0?<>
                  <div className=' w-full h-1 bg-[#1B3055] mb-3'></div>
            
            <h2 className=' uppercase text-2xl font-semibold text-[#1B3055] tracking-wider'>
              Education
            </h2>
           {
                  educations.map((item) => 
                  <div className=' mt-3 grid grid-cols-12 gap-8 education' key={item.id} >
                  <div className=' col-span-3'>
                   <h2 className='font-semibold text-xl edu_year'>{
                          item?.startDate || item?.endDate ?item?.startDate - item?.endDate :null
                   }</h2>
                  </div>
                  <div className=' col-span-7 w-full'>
                    <h2 className=' font-semibold text-xl edu_tittle'>{
                          item?.degree
                    }</h2>
                    <div className='my-3 '>
                    {
                        educations?.summary ? <div  className=' relative ml-8'>
                        <span className=' absolute mt-[10px] w-[7px] h-[7px] rounded-full bg-[#1B3055]'></span>
                        
                              <p className='font-medium employment2 ml-4 mt-1 edu_skill'>
                                  {educations?.summary}
                              </p>
                        
                    </div> :null
                    }
                    </div>
                  </div>
                  <div className=' col-span-2'>
                  <h2 className='font-semibold text-xl edu_location'>{
                          item?.city
                  }</h2>
                  </div>
              </div>
                  
                  )
           }
          
          <div className=' w-full h-1 bg-[#1B3055] mt-3'></div>
                </> :null
          }
        </div>
    );
};

export default Education;