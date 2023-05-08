import React from 'react';
import useWidth from '../../../../hooks/useWidth';

const Details = () => {
    const SKILLS=[
        {
            tittle:'GENERAL MANAGER'

        },{
            tittle:'PRBOLEM SOLVING SKILLS'
        },{
            tittle:'LEADERSHIP SKILLS'
        },{
            tittle:'COMMUNICATION SKILLS'
        },{
            tittle:'TEAMWORK SKILLS'
        }
    ]
    const width = useWidth()
    return (
        <div className=' col-span-4'>
            <div className='details'>
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
               102 Main Street,<br />Suite 100, New York
               </h2>
               <h2 className='text-center user_country'>
               United States
               </h2>
                <h2 className='text-center user_phone'>
                (123) 456-7890
                </h2>
                <h2 className='text-center user_email'>
                Test@gmail.com
                </h2>
               </div>
            </div>
            <div className={`${width>1280?"mt-2":"mt-5"}`}>
               <div className='text-center uppercase flex items-center gap-1 justify-center'>
                <div className={`${width>1280?"w-[.2rem] h-[.2rem]":" w-2 h-2"} bg-[#1b3055] rounded-full`}>

                </div>
               <h2 className={`${width>1280?"text-[10px]":"font-bold"}`}>
                     Skills
               </h2>
               <div className={`${width>1280?"w-[.2rem] h-[.2rem]":" w-2 h-2"} bg-[#1b3055] rounded-full`}>

              </div>
               </div>
               {
                        SKILLS.map((item,index)=>(
                            <div className='text-center skills font-semibold skills flex justify-center' key={index}>
                            <h2 className={` w-fit  border-[#1b3055] skill_tittle ${width>1280?"border-b-[2px] text-[7px]":"border-b-[3px]"}`}>
                            {item.tittle}
                            </h2>
                            </div>
                        ))
               }
            </div>
        </div>
    );
};

export default Details;