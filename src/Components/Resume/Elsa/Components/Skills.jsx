import React from 'react';
import { data } from '../../../../App';
import { useContext } from 'react';
import { useLocation } from 'react-router-dom';

const Skills = () => {
    const path = useLocation().pathname.split('/')[2]
    const {allData} = useContext(data)
    const skills =  allData[path]?.skills
     console.log(skills)
    return (
        <div className=' mt-10'>
            {
                skills  && skills.length > 0 ? <> 
                <h2 className=' font-semibold text-2xl uppercase tracking-widest text-[#D0C2A6]'>
                Skills
            </h2>
           
            <div className=' mt-8'>
                {
                    skills.map((skill) =>
                    <div className='my-2 skill' key={skill.id}>
                        <h2 className=' uppercase  text-[18px] font-[400] skill'>
                                    {skill?.tittle}
                         </h2>
                         <div className=' flex gap-3'>
                         {
                            [ ...Array(skill?.rating ==='expert'?5 : skill?.rating==='intermediate' ? 4 : skill?.rating==='beginner'?3:5)].map((_,i) => 
                            <span className=' w-[9px] h-[9px] bg-black rounded-full'></span>
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