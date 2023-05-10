import React, { useContext } from 'react';
import useWidth from '../../../../hooks/useWidth';
import { useLocation } from 'react-router-dom';
import { data } from '../../../../App';

const Right = () => {
   
    const path = useLocation().pathname.split('/')[2]
    const {allData} = useContext(data)
    const personal_info =  allData[path]?.personal_details
    const skills = allData[path]?.skills
    const width = useWidth()
    return (
        <div className={` col-span-5 h-[100%] rounded-md bg-[#082A4C] ${width>1280?" px-6" : ' px-12'}`}>
            <div className={`${width>1280?" mt-[90px]":" mt-[200px]"}`}>
                <h2 className={`text-white ${width>1280?"text-[14px]":"text-3xl"} font-semibold`}>
                    Details
                </h2>
                <div>
                <h2 className={`text-gray-400 font-semibold user_address ${width>1280?"mt-1 text-[8px]":"mt-3"}`}>
                {
                    personal_info?.user_city

                } {
                    personal_info?.user_postal_code
                }         
                </h2>
                <h2 className={`text-gray-400 font-semibold user_country ${width>1280?"text-[8px]":""}`}>
                    {
                        personal_info?.user_country
                    }   
                </h2>
                <h2 className={`text-gray-400 font-semibold user_phone ${width>1280?"text-[8px]":""}`}>
                    {
                        personal_info?.user_phone
                    }        
                </h2>
                <h2 className={`text-gray-400 font-semibold user_email ${width>1280?"text-[8px]":""}`}>
                {
                    personal_info?.user_email
                }
                </h2>
                </div>
                <div className={`${width>1280?"mt-4":" mt-12"}`}>
                <h2 className={`text-white ${width>1280?"14px":"text-3xl"} font-semibold`}>
                   Skills
                </h2>
                <div>
                  {
                       skills && skills.length>0 ?  skills.map((skill,i) => (
                        <div key={i} className={` ${width>1280?"mt-1":"mt-2"} details`}>
                            <h2 className={`text-gray-400 font-semibold skill_tittle ${width>1280?"text-[8px]":""}`}>
                                {skill?.tittle}
                            </h2>
                            <div className={`w-[100%] ${width>1280?"h-[.1rem]":"h-1"} bg-gray-600 mt-1`}>
                                <div className={`w-[${skill?.rating ==='expert'? 100 : skill?.rating==='intermediate' ? 80 : skill?.rating==='beginner'?50:0}%] ${width>1280?"h-[.1rem]":"h-1"} bg-white`}>
                                    </div>
                            </div>
                        </div>
                    ))
                    : null
                  }
                </div>
                </div>
            </div>
        </div>
    );
};

export default Right;