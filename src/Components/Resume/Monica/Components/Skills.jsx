import React from 'react';
import { data } from '../../../../App';
import { useContext } from 'react';
import { useLocation } from 'react-router-dom';

const Skills = () => {
    const path = useLocation().pathname.split('/')[2]
  const {allData} = useContext(data)
  const profile = allData[path]?.skills
    const skills = [
        {
            id: 1,
            tittle:'Excelent Communication Skills'
        },{
            id: 2,
            tittle:'Project Management Skills'
        },{
            id: 3,
            tittle:'Digital Marketing Skills',
        },{
            id: 4,
            tittle:'Social Media Marketing Skills'
        },{
            id: 5,
            tittle:'Creatvie And Problem Solving Skills'
        }
    ]
    return (
        <div>
            <h2 className=' text-[#1B3055] font-[700] my-4'>Skills</h2>
            <div className=' grid grid-cols-12 gap-x-8'>
            {
                skills.map(skill => (
                    <div key={skill.id} className=' col-span-4 mt-2 relative'>
                       <div className=' w-6 h-[6px] bg-[#1B3055] absolute mt-2'></div>
                          <p className=' text-[#1B3055] font-[500] ml-10 skill_tittle'>{skill.tittle}</p>
                    </div>
                ))
            }
            </div>
        </div>
    );
};

export default Skills;