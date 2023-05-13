import React from 'react';
import { data } from '../../../../App';
import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import useWidth from '../../../../hooks/useWidth';

const Skills = () => {
    const path = useLocation().pathname.split('/')[2]
    const {allData} = useContext(data)
    const skills =  allData[path]?.skills
    const width = useWidth()
    return (
        <div className={` ${width>=1280 || width<=480 || width<=768?"mt-4":"mt-10"}`}>
            {
                skills  && skills.length > 0 ? <> 
                <h2 className={` font-semibold  uppercase tracking-widest text-[#D0C2A6] ${width>=1280 || width<=480 || width<=768?"text-[14px]":"text-2xl"}`}>
                Skills
            </h2>
           
            <div className={` ${width>=1280 || width<=480 || width<=768?"mt-2":"mt-8"}`}>
                {
                    skills.map((skill) =>
                    <div className='my-2 skill' key={skill.id}>
                        <h2 className={`uppercase   font-[400] skill ${width>=1280 || width<=480 || width<=768?"text-[8px]":"text-[18px]"} mb-1`}>
                                    {skill?.tittle}
                         </h2>
                         <div className={`flex  ${width>=1280 || width<=480 || width<=768?"gap-1":"gap-3"}`}>
                         {
                            [ ...Array(skill?.rating ==='expert'?5 : skill?.rating==='intermediate' ? 4 : skill?.rating==='beginner'?3:5)].map((_,i) => 
                            <span className={` bg-black rounded-full ${width>=1280 || width<=480 || width<=768?"w-[3px] h-[3px]":"w-[9px] h-[9px]"}`} key={i}></span>
                            )
                         } 
                            </div>                    
                    </div>
                    )
                }
                </div>
                </> : null
            }
        </div>
    );
};

export default Skills;