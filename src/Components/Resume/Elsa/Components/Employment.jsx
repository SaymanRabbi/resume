import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';
import { data } from '../../../../App';
import { useContext } from 'react';

const Employment = () => {
    const path = useLocation().pathname.split('/')[2]
    const {allData} = useContext(data)
    const employments =  allData[path]?.employment
    return (
        <div className=' mb-8 mt-[76px]'>
           {
                employments && employments.length > 0 ? <> 
                
                <h2 className=' font-semibold text-2xl uppercase tracking-widest text-[#D0C2A6] mb-6 '>
                Employment History
            </h2>
           
              {
                    employments.map((history) =>
                   <div className=' my-3' key={history?.id}>
                     <div className=' my-3'>
                     <h2 className=' text-2xl font-[500] employ_tittle'>{history?.jobTittle}</h2>
                       <div className=' flex gap-6 items-center py-2'>
                        <h2 className='text-xl font-[500] employ_year'>{history?.startDate || history?.endDate ? `${
                                history?.startDate 
                        } - ${ history?.endDate}` : null}</h2>
                        {
                            history?.city ? <div className=' flex gap-4 items-center'>
                            <FontAwesomeIcon icon={faLocationDot} className=' text-gray-500 text-xl'/>
                               <h2 className=' text-xl font-[500] employ_location'>{history?.city}</h2>
                            </div> : null
                        }
                         
                       </div>
                     </div>
                    
                      
                           {
                                history?.summary  ? <div className=' relative ml-4'>
                                <span className=' absolute w-[6px] h-[6px] rounded-full bg-black mt-[9px]'></span>
                                <p className=' ml-4 font-[500] employ_skill'>
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