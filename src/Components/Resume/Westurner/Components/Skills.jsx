import React, { useContext } from 'react';
import useWidth from '../../../../hooks/useWidth';
import { useLocation } from 'react-router-dom';
import { data } from '../../../../App';

const Skills = () => { 
    const path = useLocation().pathname.split('/')[2]
    const {allData} = useContext(data)
    const skills_data = allData[path]?.skills
    console.log(skills_data)
    const width = useWidth()
    return (
        <div className={`${width>=1280 || width<=480 || width<=768?"mt-2":"mt-10"}`}>
            {
                skills_data && skills_data.length>0?<>
                <h2 className={`font-semibold uppercase tracking-widest ${width>=1280 || width<=480 || width<=768?"text-[10px]":"text-2xl"}`}>
                Skills
            </h2>
            <div className={`w-full  bg-[#000000] ${width>=1280 || width<=480 || width<=768?"h-[2px] my-1 ":"h-[2px] my-3 "}`}></div>
            <div className={`${width>=1280 || width<=480 || width<=768?"mt-2":"mt-5"}`}>
                {
                 skills_data && skills_data.length>0 ?   skills_data?.map((skill,i) =>
                    <div className={` skill ${width>=1280 || width<=480 || width<=768?"my-1":"my-2"}`} key={i}>
                        <h2 className={`uppercase  font-[400] skill_tittle ${width>=1280 || width<=480 || width<=768?"text-[8px]":"text-[18px]"}`}>
                                    {skill?.tittle}
                         </h2>
                         <div className={`flex ${width>=1280 || width<=480 || width<=768?"gap-2":" gap-3"}`}>
                         {
                            [ ...Array(skill?.rating ==='expert'?5 : skill?.rating==='intermediate' ? 4 : skill?.rating==='beginner'?3:5)].map((_,i) => 
                            <span key={i} className= {`  bg-black rounded-full ${width>=1280 || width<=480 || width<=768?"w-[5px] h-[5px]":"w-[9px] h-[9px]"}`}></span>
                            )
                         } 
                            </div>                    
                    </div>
                    ): null
                }
                </div>
                </>:null
            }
        </div>
    );
};

export default Skills;