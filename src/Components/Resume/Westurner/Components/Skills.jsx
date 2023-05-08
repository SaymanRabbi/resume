import React from 'react';
import useWidth from '../../../../hooks/useWidth';

const Skills = () => {
    const skills = [
       {
              id: 1,
                tittle: 'Project Management Skills',
                rating:5
       },{
        id:2,
        tittle: 'Busniess Development Strategy',
        rating:5
       },{
        id:3,
        tittle: 'Industry Knowledge',
        rating:5
    },{
        id:4,
        tittle: 'Interpersonal Communication Skills',
        rating:5
    },{
        id:5,
        tittle: 'Inovative Problem Solving',
        rating:5
    }
    ]
    const width = useWidth()
    return (
        <div className={`${width>1280?"mt-2":"mt-10"}`}>
            <h2 className={`font-semibold uppercase tracking-widest ${width>1280?"text-[10px]":"text-2xl"}`}>
                Skills
            </h2>
            <div className={`w-full  bg-[#000000] ${width>1280?"h-[2px] my-1 ":"h-[2px] my-3 "}`}></div>
            <div className={`${width>1280?"mt-2":"mt-5"}`}>
                {
                    skills.map((skill) =>
                    <div className={` skill ${width>1280?"my-1":"my-2"}`} key={skill.id}>
                        <h2 className={`uppercase  font-[400] skill_tittle ${width>1280?"text-[8px]":"text-[18px]"}`}>
                                    {skill.tittle}
                         </h2>
                         <div className={`flex ${width>1280?"gap-2":" gap-3"}`}>
                         {
                            [ ...Array(skill.rating)].map((_,i) => 
                            <span className= {`  bg-black rounded-full ${width>1280?"w-[5px] h-[5px]":"w-[9px] h-[9px]"}`}></span>
                            )
                         } 
                            </div>                    
                    </div>
                    )
                }
                </div>
        </div>
    );
};

export default Skills;