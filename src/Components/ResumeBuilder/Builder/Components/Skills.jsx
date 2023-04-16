import React, { useState } from 'react';
import Titttle from './Titttle';
import SkillsButton from './SkillsButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Input from './Input';

const Skills = () => {
    const [open,SetOpen] = useState(false);
    return (
        <div className=' mt-6'>
            <Titttle tittle='Skills'/>
            <p className='text-gray-400 text-sm mb-5'>
            Choose 5 of the most important skills to show your talents! Make sure they match the keywords of the job listing if applying via an online system.
            </p>
            <div className=' flex flex-wrap'>
              <SkillsButton tittle='Marketing'/>
              <SkillsButton tittle='Dedicated team plyer'/>
              <SkillsButton tittle='Creativity'/>
              <SkillsButton tittle='Event Planing'/>
              <SkillsButton tittle='Problem Solving Skills'/>
              <SkillsButton tittle='Critical Thinking'/>
              <SkillsButton tittle='Data Analysis'/>
              <SkillsButton tittle='Complex Problem Solving'/>
              <SkillsButton tittle='Highly Motivated'/>
            </div>{
open?<div className=' p-4 border'>
        <div className=' flex gap-3 w-[100%]'>
            <Input label='Skill' />
            <Input label='Level-Expert' />
        </div>
</div>:null
            }
            <div className=' ml-5 flex gap-3 py-3 font-[600] text-blue-500 items-center cursor-pointer'>
               <FontAwesomeIcon icon={faPlus} onClick={()=>SetOpen(!open)}/>
               <p onClick={()=>SetOpen(!open)}>
                Add Skill
               </p>
            </div>
        </div>
    );
};

export default Skills;