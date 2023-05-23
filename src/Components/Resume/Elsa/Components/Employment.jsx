import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';
import { data } from '../../../../App';
import { useContext } from 'react';
import useWidth from '../../../../hooks/useWidth';

const Employment = ({id}) => {
    const path = useLocation().pathname.split('/')[2]
    const {allData} = useContext(data)
    const employments =  allData[id||path]?.employment
    const width = useWidth()
    return (
        <div className={` ${width>=1280 || width<=480 || width<=768?"mb-3 mt-[20px]":"mb-8 mt-[76px]"}`}>
           {
                employments && employments.length > 0 ? <> 
                
                <h2 className={` font-semibold  uppercase tracking-widest text-[#D0C2A6]   ${width>=1280 || width<=480 || width<=768?"text-[14px] mb-2":"text-2xl mb-6" }`}>
                Employment History
            </h2>
           
              {
                    employments.map((history) =>
                   <div className ={` ${width>=1280 || width<=480 || width<=768?" my-1":" my-3"}`} key={history?.id}>
                     <div className ={` ${width>=1280 || width<=480 || width<=768?"":" my-3"}`}>
                     <h2 className={` font-[500] employ_tittle ${width>=1280 || width<=480 || width<=768?"text-[14px]":"text-2xl"}`}>{history?.jobTittle}</h2>
                       <div className={` flex  items-center  ${width>=1280 || width<=480 || width<=768?"gap-2 py-1":"gap-6 py-2"}`}>
                        <h2 className={` font-[500] employ_year ${width>=1280 || width<=480 || width<=768?"text-[8px]":"text-xl"}`}>{history?.startDate || history?.endDate ? `${
                                history?.startDate 
                        } - ${ history?.endDate}` : null}</h2>
                        {
                            history?.city ? <div className=' flex gap-4 items-center'>
                            <FontAwesomeIcon icon={faLocationDot} className={`text-gray-500  ${width>=1280 || width<=480 || width<=768?"text-[8px]":"text-xl"}`}/>
                               <h2 className={` font-[500] employ_location ${width>=1280 || width<=480 || width<=768?"text-[8px]":"text-xl"}`}>{history?.city}</h2>
                            </div> : null
                        }
                         
                       </div>
                     </div>
                    
                      
                           {
                                history?.summary  ? <div className=' relative ml-4'>
                                <span className={`absolute rounded-full bg-black  ${width>=1280 || width<=480 || width<=768?"mt-[6px] w-[3px] h-[3px] ":"mt-[9px] w-[6px] h-[6px] "}`}></span>
                                <p className={` font-[500] employ_skill ${width>=1280 || width<=480 || width<=768?"text-[8px] ml-2":"ml-4"}`}>
                                      {
                                       history?.summary
                                      }
                                </p>
                            </div> : null
                           }
                           
                     
                   </div>
                    )
              }
                 </> : null
           }
               
        </div>
    );
};

export default Employment;