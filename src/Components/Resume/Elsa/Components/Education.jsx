import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { data } from '../../../../App';
import { useContext } from 'react';
import useWidth from '../../../../hooks/useWidth';

const Education = () => {
  const width = useWidth()
    const path = useLocation().pathname.split('/')[2]
    const {allData} = useContext(data)
    const educations =  allData[path]?.education    
    return (
        <div className={` education  ${width>=1280 || width<=480 || width<=768?"":"pb-5 mt-3"}`}>
           {
                educations && educations.length > 0 ? <> <h2 className={`font-semibold  uppercase tracking-widest text-[#D0C2A6]  ${width>=1280 || width<=480 || width<=768?"text-[14px] mb-2":"text-2xl mb-6"}`}>
                Educations
            </h2>
            {
                    educations.map((history) =>
                   <div className={`  education ${width>=1280 || width<=480 || width<=768?"my-1":"my-3"}`} key={history?.id}>
                     <div className={`${width>=1280 || width<=480 || width<=768?"":"my-3"}`}>
                     <h2 className={` font-[400] edu_tittle ${width>=1280 || width<=480 || width<=768?"text-[10px]":"text-2xl"}`}>{history?.degree}</h2>
                       <div className={`flex  items-center  ${width>=1280 || width<=480 || width<=768?"py-2 gap-2":"gap-6"}`}>
                        <h2 className={` font-[400] edu_year ${width>=1280 || width<=480 || width<=768?"text-[8px]":"text-xl"}`}>{history?.startDate || history?.endDate ? `${
                                history?.startDate 
                        } - ${ history?.endDate}` : null}</h2>
                        {
                            history?.city ? <div className={`flex  items-center ${width>=1280 || width<=480 || width<=768?"gap-2":"gap-4"}`}>
                            <FontAwesomeIcon icon={faLocationDot} className={`text-gray-500  ${width>=1280 || width<=480 || width<=768?"text-[8px]":"text-xl"}`}/>
                               <h2 className={` font-[400] edu_location ${width>=1280 || width<=480 || width<=768?"text-[8px]":"text-xl"}`}>{history?.city}</h2>
                            </div>: null
                        }
                       </div>
                     </div>
                     {
                                    history?.summary  ? <div className=' relative ml-4' >
                                    <span className={`absolute rounded-full bg-black  ${width>=1280 || width<=480 || width<=768?"mt-[6px] w-[3px] h-[3px] ":"mt-[9px] w-[6px] h-[6px] "}`}></span>
                                    <p className={` font-[500] edu_skill ${width>=1280 || width<=480 || width<=768?"text-[8px] ml-2":"ml-4"}`}>
                                          {
                                                history?.summary
                                          }
                                    </p>
                                </div>: null
                     }
                            
                      
                   </div>
                    )
              } </> : null
           }
        </div>
    );
};

export default Education;