import React, { useContext } from 'react';
import user from './img/user.jpg'
import useWidth from '../../../../hooks/useWidth';
import { useLocation } from 'react-router-dom';
import { data } from '../../../../App';
const Left = () => {
    const path = useLocation().pathname.split('/')[2]
    const {allData} = useContext(data)
    const personal_info =  allData[path]?.personal_details
    const employment_info = allData[path]?.employment
    const education_info = allData[path]?.education
    const width = useWidth()
    const ref_info = allData[path]?.references
    return (
        <div className={` col-span-7 ${width>1280?"p-6":"px-10 py-16"}`}>
               <div className={` flex  ${width>1280?"mb-3 gap-2":"mb-8 gap-5"} items-center`}>
                 <img src={personal_info?.imgUrl} alt="" className={`${width>1280?" w-[50px] h-[50px]":"w-24 h-24"} rounded-full user_img`}/>
                 <div>
                        <h2 className={` font-bold ${width>1280?"text-[20px]":"text-[40px]"} text-[#1b3055] user_name`}>
                            {
                                personal_info?.firstName
                            } {
                                personal_info?.lastName
                            }
                        </h2>
                        <h2 className=' uppercase font-semibold user_tittle'>
                            {
                                personal_info?.tittle
                            }
                        </h2>
                 </div>
               </div>
            {
                personal_info?.summary ? <><h2 className={`font-bold ${width>1280?"text-[14px]":"text-2xl"} text-[#1b3055]`}>
                Profile
            </h2>
            <p className={`profile-dec font-semibold ${width>1280?" mt-1 text-[8px]":"mt-2"} text-[#1b3055] user_profile`}>
              {
                    personal_info?.summary
              }
            </p></>:null
            }


            <div className={` ${width>1280?"mt-2":" mt-4"}`}>
               {
                employment_info && employment_info.length>0 ? <>
                 <h2 className={`font-bold ${width>1280?"text-[14px]":"text-2xl"} text-[#1b3055]`}>Employment History</h2>
                {
                    employment_info.map((item,index)=><div key={index}>
                    <h2 className={`font-bold text-[#1b3055] employ_tittle ${width>1280?"text-[8px]":""}`}>
               {item.jobTittle} | {item.employer} | {item.city}
                </h2>
                <h2 className={`text-gray-600 font-semibold employ_year ${width>1280?" mb-1 text-[8px]":"mb-3"}`}>
                   {
                    item?.startDate
                   } - {item?.endDate}
                </h2>
            
                        {
                            item.summary ? <div className=' flex  gap-3 relative' key={index}>
                            <div className={`absolute  bg-[#1b3055] rounded-full  left-0 ${width>1280?"w-[.2rem] h-[.2rem] mt-[1%]":"w-[.5rem] h-[.5rem] mt-[2%]"}`}>
                            </div>
                            <p className={`employment  employ_skill ${width>1280?"text-[6px] ml-[7px]":"ml-5"}`}>
                                {item.summary}
                            </p>
                            </div> : null
                        }
                   
                    </div>)
                }
                </> : null
               }
            </div>
            <div>
                {
                    education_info && education_info.length>0 ? <> 
                     <h2 className={`font-bold ${width>1280?"text-[14px] mt-1":"text-2xl"} text-[#1b3055]`}>
                    Education
                </h2>
                {
                    education_info.map((item,index)=>(
                       <div className={`education ${width>1280?"":" mt-3"}`} key={index}>
                        <h2 className={` font-semibold  text-[#1B3055] edu_tittle ${width>1280?"text-[10px]":
                    ""}`}>
                        {item.degree} | {item.school} | {item.city}
                </h2>
                <h2 className={`text-gray-500 font-semibold edu_year ${width>1280?"text-[8px]":""}`}>
                    {item.startDate} - {item.endDate}
                </h2>
                       </div>
                    ))
                }
                    </> : null
                }

                </div>

                <div>
                    <h2 className={`references font-bold ${width>1280?"text-[14px]":"text-2xl"} text-[#1b3055] mt-3`}>
                        References
                        {
                            ref_info && ref_info.length>0 ? ref_info.map((item,index)=>(
                                <div className={`education ${width>1280?"":" mt-3"}`} key={index}>
                                 <h2 className={` font-semibold  text-[#1B3055] edu_tittle ${width>1280?"text-[10px]":
                             ""}`}>
                                {item.id}
                         </h2>
                         <h2 className={`text-gray-500 font-semibold edu_year ${width>1280?"text-[8px]":""}`}>
                         {item.name} | {item.institute} | {item.city}
                         </h2>
                                </div>
                             )):null
                        }
                           
                    </h2>
                </div>
        </div>   
      
    );
};

export default Left;