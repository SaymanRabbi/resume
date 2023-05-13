import React from 'react';
import { data } from '../../../../App';
import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import useWidth from '../../../../hooks/useWidth';

const Skills = () => {
    const path = useLocation().pathname.split('/')[2]
  const {allData} = useContext(data)
  const skills = allData[path]?.skills
  const width = useWidth()
    return (
        <div>
           {
            skills && skills.length>0 ?<>
             <h2 className={`text-[#1B3055] font-[700] ${width>=1280 || width<=480 || width<=768?" my-1":" my-4"}`}>Skills</h2>
            <div className={`grid grid-cols-12  ${width>=1280 || width<=480 || width<=768?"gap-x-2":"gap-x-8"}`}>
            {
                skills.map(skill => (
                    <div key={skill.id} className=' col-span-4 mt-2 relative'>
                       <div className={` bg-[#1B3055] absolute  ${width>=1280 || width<=480 || width<=768?"w-6 h-[2px] mt-[5px]":"w-6 h-[6px] mt-2"}`}></div>
                          <p className={`text-[#1B3055] font-[500] skill_tittle ${width>=1280 || width<=480 || width<=768?" ml-8 text-[8px]":" ml-10"}`}>{skill.tittle}</p>
                    </div>
                ))
            }
            </div>
            </>
            :null
           }
        </div>
    );
};

export default Skills;