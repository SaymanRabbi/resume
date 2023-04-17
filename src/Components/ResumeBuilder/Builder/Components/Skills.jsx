import React, { useState } from 'react';
import Titttle from './Titttle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus,faTrash } from '@fortawesome/free-solid-svg-icons';
import Input from './Input';


const Skills = () => {
    const [open,SetOpen] = useState(false);
    const data =[ {  id:1,
        tittle:'Marketing',
        
    },{
        id:2,
        tittle:'Dedicated team plyer',
    },{
        id:3,
        tittle:'Creativity',
    },{
        id:4,
        tittle:'Event Planing',
    },{
        id:5,
        tittle:'Problem Solving Skills',
    },{
        id:6,
        tittle:'Critical Thinking',
    },{
        id:7,
        tittle:'Leadership',
    },{
        id:8,
        tittle:'Communication',
    }]
    const [skillstext,SetSkillsText]=useState(data)
    const [skills,setSkills] = useState([]);
    const [newSkill,setNewSkill] = useState('');
    const removeSkillText = (e)=>{
        setSkills([e.target.innerText,...skills])
        setTimeout(() => {
            const data= skillstext.filter((skill)=>skill.tittle!==e.target.innerText)
            SetSkillsText(data)
        }, 500);  
    }
     const removeSkill= (text)=>{
            setTimeout(() => {
            const setAgeain = data.filter((skill)=>skill.tittle===text)
            SetSkillsText([...setAgeain,...skillstext])
            setSkills(skills.filter((skill)=>skill!==text))
            }, 500);
     }
    //  ------custom Skill---------
    const addSkill = ()=>{
        setSkills([newSkill,...skills])
        SetOpen(false)
    }
    //  ------custom Skill---------
    return (
        <div className=' mt-6'>
            <Titttle tittle='Skills'/>
            <p className='text-gray-400 text-sm mb-5'>
            Choose 5 of the most important skills to show your talents! Make sure they match the keywords of the job listing if applying via an online system.
            </p>
            <div className=' flex flex-wrap'>
                {
                    skillstext.map((skill)=><div key={skill.id} className='flex items-center bg-gray-200 text-black hover:bg-blue-200 hover:text-blue-500 text-[16px] whitespace-nowrap cursor-pointer py-[6px] pl-[10px] pr-[10px]  rounded-[4px] mb-[12px] mr-[12px]' onClick={(e)=>removeSkillText(e)}>
                    <h2>{skill.tittle}</h2>
                    <FontAwesomeIcon icon={faPlus} className='ml-[4px]' />
                </div>)
                }
            </div>{
                skills.map((text,index)=><div key={index} className=' h-[70px] w-[100%] py-[15px] px-[20px] border rounded flex justify-between mt-5 relative group'>
               <h2 className=' font-[600] text-xl'> {
                    text
                }</h2>
                <div>
                <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5 outline-none">
                <option value="Expert">Expert</option>
                <option value="Intermediate">
                Intermediate
                </option>
                <option value="Beginner ">Beginner </option>
                </select>
                </div>
                <button className=' absolute right-[-25px]'>
                    <FontAwesomeIcon icon={faTrash} className='text-red-500 text-2xl opacity-0 group-hover:opacity-100' onClick={()=>removeSkill(text)} />
                </button>
            </div>)
            }{
open?<div className=' p-4 border'>
        <div className=' flex gap-3 w-[100%] items-center relative'>
            <Input label='Skill' setNewSkill={setNewSkill}/>
            <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5 outline-none mt-12">
                <option value="Expert">Expert</option>
                <option value="Intermediate">
                Intermediate
                </option>
                <option value="Beginner ">Beginner </option>
                </select>
                <div className=' absolute top-0 right-0 bg-blue-500 text-white px-3 py-1 rounded-md font-[500] cursor-pointer' onClick={()=>addSkill()}>Add</div>
        </div>
</div>:null
            }
            <div className=' ml-5 flex gap-3 py-3 font-[600] text-blue-500 items-center cursor-pointer'>
               <FontAwesomeIcon icon={faPlus} onClick={()=>SetOpen(!open)}/>
               <p onClick={()=>SetOpen(!open)}>
                {
                    open?'Add One More Skill':'Add Skill'
                }
               </p>
            </div>
        </div>
    );
};

export default Skills;