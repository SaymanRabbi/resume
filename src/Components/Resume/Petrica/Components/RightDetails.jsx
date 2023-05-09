import React from 'react';
import useWidth from '../../../../hooks/useWidth';
import { useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { data } from '../../../../App';

const RightDetails = () => {
    const path = useLocation().pathname.split('/')[2]
    const {allData} = useContext(data)
    const profile = allData[path]?.personal_details
    const employmentHistorys = allData[path]?.employment
    const educations = allData[path]?.education
    const width = useWidth()
    return (
        <div className=' col-span-8'>
            {
                profile?.summary ?<>
                <h2 className={`font-bold ${width>1280?"text-[12px]":"text-2xl"} text-[#1b3055]`}>
                Profile
            </h2>
            <p className={`profile-dec font-semibold  text-[#1b3055] user_profile ${width>1280?"mt-1 text-[8px]":"mt-2"}`}>
              {
                    profile?.summary
              }
            </p>
                </> : null
            }
            


            <div className={`${width>1280?"mt-1":"mt-4"}`}>
                {
                    employmentHistorys && employmentHistorys.length>0 ?<>
                    <h2 className={`font-bold ${width>1280?"text-[12px]":"text-2xl"} text-[#1b3055]`}>Employment History</h2>
               {
                     employmentHistorys.map((item,index)=><div key={index}>
                      <h2 className={`font-bold text-[#1b3055] employ_tittle ${width>1280?"text-[8px]":""}`}>
                   {
                          item?.jobTittle
                   }
                </h2>
                <h2 className={`text-gray-600 font-semibold  employ_year ${width>1280?"text-[8px] mb-1 mt-1":"mb-3 mt-1"}`}>
                    {
                        item.startDate
                    }-{
item?.endDate
                    }
                </h2>
            
                        {
                            item?.summary ? <div className={` flex  relative ${width>1280?"gap-1":"gap-3"}`} key={index}>
                            <div className={` absolute  bg-[#1b3055] rounded-full left-0 ${width>1280?"w-[.2rem] h-[.2rem] mt-[1%] ":"w-[.5rem] h-[.5rem] mt-[2%] "}`}>
                            </div>
                            <p className={`employment  employ_skill ${width>1280?"ml-[6px] text-[7px]":"ml-5"}`}>
                                {item.summary}
                            </p>
                            </div>: null
                        }
                    
                     </div>)
               }
                     </> : null
                }
                 
            </div>
            <div>
                {
                    educations && educations.length>0 ?<> <h2 className={`font-bold ${width>1280?"text-[12px] mt-1":"text-2xl mt-3"} text-[#1b3055]`}>
                    Education
                </h2>
                {
                    educations.map((item,index)=>(
                       <div className='education' key={item.id}>
                        <h2 className={`font-bold text-[#1b3055] edu_tittle ${width>1280?"text-[8px]":""}`}>
                        {item?.degree} { item?.school} {item?.city}
                </h2>
                <h2 className={`text-gray-600 font-semibold  edu_year ${width>1280?"text-[8px] mb-1 mt-1":"mb-3 mt-1"}`}>
                    {item.startDate} {item.endDate}
                </h2>
                </div>
                    ))
                } </> : null
                }
                </div>
        </div>
    );
};

export default RightDetails;