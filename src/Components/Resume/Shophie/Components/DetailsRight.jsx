import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,faRectangleList,faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import useWidth from '../../../../hooks/useWidth';
import { useLocation } from 'react-router-dom';
import { data } from '../../../../App';
const DetailsRight = () => {
    const path = useLocation().pathname.split('/')[2]
    const {allData} = useContext(data)
    console.log(allData)
    const profile_info = allData[path]?.personal_details?.summary
    const employe_info = allData[path]?.employment
    const education_info = allData[path]?.education
   const width = useWidth()
    return (
        <div className=' col-span-8'>
            <div className={`flex ${width>1280?"gap-2":" gap-5"}`}>
            <div className=' w-full flex flex-col  justify-center h-auto'>
            {
                profile_info ? <>
                <div className={` flex items-center ${width>1280?"gap-2":"gap-5"}`}>
            <FontAwesomeIcon icon={faUser} className={`text-[#1b3055]  ${width>1280?"text-[8px]":"text-sm"}`} />
            <h2 className={` font-semibold text-[#1b3055] uppercase ${width>1280?"text-[10px]":""}`}>Profile</h2>
            </div>
            <div className={`relative ${width>1280?"gap-3 mt-2":" gap-6 mt-3"}`}>
            <p className={` text-[#1b3055] font-semibold ml-[2px] user_profile  w-fit  border-[#1b3055]  ${width>1280?"border-l-[1px] px-4 text-[8px] leading-4":"border-l-[2px] px-6"}`}>
                   {
                          profile_info
                   }
                 </p>
                 <span className={`absolute  rounded-full bg-[#1b3055] left-[0px] top-[-3px] ${width>1280?"w-[.3rem] h-[.3rem]":"w-2 h-2"}`}></span>
            </div>
                </> : null
            }
               
           {
                employe_info  && employe_info.length>0 ? <> 
                 <div className={` flex ${width>1280?"gap-2 mt-1":"gap-5 mt-4"}  items-center`}>
            <FontAwesomeIcon icon={faRectangleList} className={`text-[#1b3055]  ${width>1280?"text-[8px]":"text-sm"}`} />
            <h2 className={` font-semibold text-[#1b3055] uppercase ${width>1280?"text-[10px]":""}`}>Employment History</h2>
            </div>
            {/* ----Employment History--- */}
            <div className={` relative border-[#1b3055] ml-[2px]  ${width>1280?"border-l-[1px] px-4 text-[6px] mt-2":"border-l-[2px] px-6 mt-3"}`}>
                <span className={`absolute  rounded-full bg-[#1b3055] left-[-3px] top-[-3px] ${width>1280?"w-[.3rem] h-[.3rem]":"w-2 h-2"}`}></span>
             <div>
            {
                employe_info.map((item,index)=>
                <div key={index}>
                 <h2 className='font-bold uppercase employ_tittle'>
                {item.jobTittle}
                </h2>
                <h2 className=' text-gray-500 employ_year'>
                    {item.startDate || item.endDate ? item.startDate - item?.endDate : null
                        
                    }
                </h2>
            
                       {
                        item?.summary ?  <div className=' flex  gap-3 relative' key={index}>
                        <div className={`absolute  bg-[#1b3055] rounded-full  ${width>1280?"w-[.2rem] h-[.2rem] mt-[1%] left-0":"w-[.5rem] h-[.5rem] mt-[2%] left-0"}`}>
                        </div>
                        <p className={`employment employ_skill ${width>1280?"ml-2 text-[6px]":"ml-5"}`}>
                            {item.summary}
                        </p>
                        </div>: null
                       }
                
                </div>
                )
            }
             </div>
            </div>
            {/* ----Employment History--- */}
                </> : null
           }
            {
                education_info && education_info.length>0 ? <>
                <div className={`flex items-center ${width>1280?"mt-2 gap-3":"mt-6 gap-5"}`}>
            <FontAwesomeIcon icon={faGraduationCap} className={`text-[#1b3055]  ${width>1280?"text-[8px]":"text-sm"}`} />
            <h2 className={` font-semibold text-[#1b3055] uppercase ${width>1280?"text-[10px]":""}`}>Education</h2>
            </div>
             <>
             <div className={`education  relative border-[#1b3055] ml-[2px]  ${width>1280?"border-l-[1px] px-4 text-[6px] mt-2":"border-l-[2px] px-6 mt-3"}`}>
             <span className={`absolute  rounded-full bg-[#1b3055] left-[-3px] top-[-3px] ${width>1280?"w-[.3rem] h-[.3rem]":"w-2 h-2"}`}></span>
               <div>
               {
                    education_info.map((item,index)=><div key={index}> <h2 className=' font-semibold edu_tittle'>
                      {item.degree} {item?.school} {item?.city}
                       </h2>
                       <h2 className=' text-gray-500 edu_year'>
                        {
                            item?.startDate || item?.endDate ? item?.startDate - item?.endDate : null
                        }
                       </h2>
       
                       </div>)
                }
            
               </div>
                </div>
                
                
             </>
                 </> : null
            }
            </div>
            
            </div>
        </div>
    );
};

export default DetailsRight;