import React from 'react';
import useWidth from '../../../../hooks/useWidth';

const Skills = () => {
    const skills=[
        {
            id:1,
            skill:'Advanced Communication Skills',
            rating:80
        },{
            id:2,
            skill:'Advanced Leadership Skills',
            rating:80
        },{
            id:3,
            skill:'Advanced Problem Solving Skills',
            rating:90
        },{
            id:4,
            skill:'Advanced Time Management Skills',
            rating:70
        }
    ]
    const width = useWidth()
    return (
        <div className={`${width>1280?'mt-[2px]':"mt-4"}`}>
            <button className={`uppercase bg-black text-white font-semibold tracking-widest ${width>1280?"px-[5px] text-[8px]":"px-3 py-1"}`}>skills</button>
            <div className={`${width>1280?"gap-x-7":"mt-1 gap-x-16"} grid grid-cols-12 `}>
              {
                    skills.map((item)=><div className=' col-span-6 skill'>
                       <h2 className={`${width>1280?"text-[8px] my-1":"text-xl mb-2"} font-[400] skill_tittle`}>
                            {item.skill}
                       </h2>
                         
                                <div className={`bg-gray-300 ${width>1280?"h-[2px]":"h-2"} w-[100%] rounded-full`}>
                                <div className={`${width>1280?"h-[2px]":"h-2"} bg-black skill_rating w-[${item.rating}%]`}></div>

                         </div>
                    </div>)
              }
       
            </div>
        </div>
    );
};

export default Skills;