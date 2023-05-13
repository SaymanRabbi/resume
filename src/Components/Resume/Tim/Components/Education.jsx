import React from 'react';
import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { data } from '../../../../App';
import useWidth from '../../../../hooks/useWidth';

const Education = () => {
    const path = useLocation().pathname.split('/')[2]
    const {allData} = useContext(data)
    const educations = allData[path]?.education
   const width = useWidth()
    return (
        <div className=' mt-3'>
          {
                educations && educations?.length>0?<>
                 <div className={`w-full  bg-[#1B3055] ${width>=1280 || width<=480 || width<=768?"h-[.1rem] mb-1":"h-1 mb-3"}`}></div>
            
            <h2 className={`uppercase font-semibold text-[#1B3055] tracking-wider ${width>=1280 || width<=480 || width<=768?"text-[14px]":"text-2xl"}`}>
              Education
            </h2>
           {
                  educations.map((item) => 
                  <div className=' mt-3 grid grid-cols-12 gap-8 education' key={item.id} >
                  <div className=' col-span-3'>
                   <h2 className={  `font-semibold edu_year ${width>=1280 || width<=480 || width<=768 ? "text-[8px]":"text-xl"}`}>{item?.startDate || item?.endDate ?`${item?.startDate} - ${item?.endDate}` :null}</h2>
                  </div>
                  <div className=' col-span-7 w-full'>
                    <h2 className={`font-semibold edu_tittle ${width>=1280 || width<=480 || width<=768 ? "text-[8px]" :"text-xl"}`}>{
                          item?.degree
                    }</h2>
                    <div className='my-3 '>
                    {
                        educations?.summary ? <div  className=' relative ml-8'>
                        <span className={`absolute  rounded-full bg-[#1B3055] ${width>=1280 || width<=480 || width<=768?"mt-[4px] w-[3px] h-[3px]":"mt-[10px] w-[7px] h-[7px]"}`}></span>
                        
                              <p className={`font-medium employment2  mt-1 edu_skill ${width>=1280 || width<=480 || width<=768?"ml-2":"ml-4"}`}>
                                  {educations?.summary}
                              </p>
                        
                    </div> :null
                    }
                    </div>
                  </div>
                  <div className=' col-span-2'>
                  <h2 className={`font-semibold  edu_location ${width>=1280 || width<=480 || width<=768?"text-[8px]":"text-xl"}`}>{
                          item?.city
                  }</h2>
                  </div>
              </div>
                  
                  )
           }
          
          <div className={`w-full  bg-[#1B3055] ${width>=1280 || width<=480 || width<=768?"h-[.1rem] mt-1":"h-1 mt-3"}`}></div>
                </> :null
          }
        </div>
    );
};

export default Education;