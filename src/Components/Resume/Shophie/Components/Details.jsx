import React from 'react';
import useWidth from '../../../../hooks/useWidth';
import { useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { data } from '../../../../App';
const Details = () => {
    const path = useLocation().pathname.split('/')[2]
    const {allData} = useContext(data)
    const  SKILLS = allData[path]?.skills
    const personal_info = allData[path]?.personal_details
    const width = useWidth()
    return (
        <div className=' col-span-4'>
            <div className='details'>
               {
                     personal_info ? <>
                     <div className='text-center uppercase flex items-center gap-1 justify-center'>
                <div className={`${width>1280?"w-[.2rem] h-[.2rem]":" w-2 h-2"} bg-[#1b3055] rounded-full`}>

                </div>
               <h2 className={`${width>1280?"text-[10px]":"font-bold"}`}>
                     Details
               </h2>
               <div className={`${width>1280?"w-[.2rem] h-[.2rem]":" w-2 h-2"} bg-[#1b3055] rounded-full`}>

              </div>
               </div>
               <div className={` ${width>1280?"text-[7px] mt-1":"font-semibold"}`}>
               <h2 className='text-center  user_address'>
               {personal_info?.user_postal_code},<br />{personal_info?.user_city}
               </h2>
               <h2 className='text-center user_country'>
               {
                     personal_info?.user_country
               }
               </h2>
                <h2 className='text-center user_phone'>
                {
                        personal_info?.user_phone
                }
                </h2>
                <h2 className='text-center user_email'>
                {
                        personal_info?.user_email
                }
                </h2>
               </div>
                     </> : null
               }
            </div>
            <div className={`${width>1280?"mt-2":"mt-5"}`}>
               <div className='text-center uppercase flex items-center gap-1 justify-center'>
                {
                    SKILLS && SKILLS.length>0 ? <>
                    <div className={`${width>1280?"w-[.2rem] h-[.2rem]":" w-2 h-2"} bg-[#1b3055] rounded-full`}>

</div>
<h2 className={`${width>1280?"text-[10px]":"font-bold"}`}>
     Skills
</h2>
<div className={`${width>1280?"w-[.2rem] h-[.2rem]":" w-2 h-2"} bg-[#1b3055] rounded-full`}>

</div>
                    </> : null
                }
               </div>
               {
                  SKILLS && SKILLS.length>0 ?      SKILLS.map((item,index)=>(
                            <div className='text-center skills font-semibold skills flex justify-center' key={index}>
                            <h2 className={` w-fit  border-[#1b3055] skill_tittle ${width>1280?"border-b-[2px] text-[7px]":"border-b-[3px]"}`}>
                            {item}
                            </h2>
                            </div>
                        )) : null
               }
            </div>
        </div>
    );
};

export default Details;