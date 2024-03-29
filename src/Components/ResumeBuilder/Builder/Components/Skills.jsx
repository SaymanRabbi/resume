import React, { useState } from 'react';
import Titttle from './Titttle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus,faTrash } from '@fortawesome/free-solid-svg-icons';
import Input from './Input';
import { useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { data } from '../../../../App';
  import { amsterdam, copenhagen, lisbon, london, madrid, milan, new_york, sydney, tokyo, toronto, vancouver, vienna } from '../../../Skills/SkillsData';
  import useOpenAi from '../../../../hooks/useOpenAi';

const Skills = () => {
  const {allData,setAllData } = useContext(data)
  const path = useLocation().pathname.split('/')[2]
    // const apidata = useOpenAi(` ${allData[path]?.personal_details?.tittle} resume skills` || 'resume skills')
    // console.log(apidata)
    const [open,SetOpen] = useState(false);
    const datatext = path === 'toronto' ? toronto: path ==='madrid' ? madrid : path ==='vienna' ? vienna : path ==='sydney' ? sydney: path==='new_york' ? new_york : path === 'amsterdam' ?amsterdam : path ==='london' ? london : path ==='vancouver' ? vancouver : path === 'tokyo' ? tokyo : path ==='milan'? milan : path ==='copenhagen' ? copenhagen : path ==='lisbon' ? lisbon : []
     const options = [
        {value: 'expert', text: 'Expert'},
        {value: 'intermediate', text: 'Intermediate'},
        {value: 'beginner', text: 'Beginner'},
      ];
      const [custom,setCustom] = useState('expert')
    const [skills,setSkills] = useState(
        allData[path]?.skills || []
        );
    const [skillstext,SetSkillsText]=useState(
        datatext.filter((skill)=>!skills.find((skil)=>skil.tittle===skill.tittle))
    )
    const [newSkill,setNewSkill] = useState('');
    const removeSkillText = (data)=>{
        setSkills([data,...skills])
        setTimeout(() => {
            const datas= skillstext.filter((skill)=>skill.tittle!==data?.tittle)
            SetSkillsText(datas)
        }, 500);  
    }
     const removeSkill= (text)=>{
            setTimeout(() => {
            const setAgeain = datatext.filter((skill)=>skill.tittle===text?.tittle)
            SetSkillsText([...setAgeain,...skillstext])
            setSkills(skills.filter((skill)=>skill.tittle!==text?.tittle))
            }, 500);
     }
     const customSkill = (e)=>{
           setCustom(e.target.value)
          
     }
    //  ------custom Skill---------
    const addSkill = ()=>{
        setSkills([...skills,{tittle:newSkill,rating:custom}])
       
        const newSkillobj = {tittle:newSkill,rating:custom}
       
        const exits = allData[path]?.skills
    if(exits && exits.length>0){
            setAllData({...allData,
                [path]:{
                  ...allData[path],
                  skills:[
                    newSkillobj,
                    ...allData[path]?.skills
                  ]
                }
              })
              SetOpen(false)
        }
       else{
        setAllData({...allData,
            [path]:{
              ...allData[path],
              skills:[
                newSkillobj
              ]
            }
          })
          SetOpen(false)
       }
    }
    const skillData = (datas)=>{
        const exits = allData[path]?.skills
        if(exits && exits.length>0){          
            setAllData({...allData,
                [path]:{
                  ...allData[path],
                  skills:[
                    datas,
                    ...allData[path]?.skills
                  ]
                }
              })
        }
       else{
        setAllData({...allData,
            [path]:{
              ...allData[path],
              skills:[
                datas
              ]
            }
          })
       }
        
    }
    const removeSkillData = (data)=>{
        const exits = allData[path]?.skills
        if(exits){
            const dataa = exits.filter((skill)=>skill?.tittle!==data.tittle)
            setAllData({...allData,
                [path]:{
                  ...allData[path],
                  skills:[
                    ...dataa
                  ]
                }
              })
        }
    }
    const handleChange =(event,text) => {
        const updates = [...allData[path]?.skills]
        const updateData = updates.map((skill)=>skill?.tittle ===text?{...skill,rating:event.target.value}:skill)
        setAllData({...allData,
          [path]:{
            ...allData[path],
            skills: updateData
          }
        })
      };

    //  ------custom Skill---------
    return (
        <div className=' mt-6'>
            <Titttle tittle='Skills'/>
            <p className='text-gray-400 text-sm mb-5'>
            Choose 5 of the most important skills to show your talents! Make sure they match the keywords of the job listing if applying via an online system.
            </p>
            <div className=' flex flex-wrap'>
                {
                    skillstext.map((skill,i)=><div key={i} className='flex items-center bg-gray-200 text-black hover:bg-blue-200 hover:text-blue-500 text-[16px] whitespace-nowrap cursor-pointer py-[6px] pl-[10px] pr-[10px]  rounded-[4px] mb-[12px] mr-[12px]' onClick={()=>removeSkillText(skill)}>
                    <h2 onClick={()=>skillData(skill)}>{skill.tittle}</h2>
                    <FontAwesomeIcon icon={faPlus} className='ml-[4px]' onClick={()=>skillData(skill)}/>
                </div>)
                }
            </div>{
              skills.map((text,index)=><div key={index} className=' h-[70px] w-[100%] py-[15px] px-[20px] border rounded flex justify-between mt-5 relative group'>
               <h2 className=' font-[600] text-xl'> {
                    text?.tittle}</h2>
                <div>
                <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5 outline-none" onChange={(e)=>handleChange(e,text?.tittle)}>
                  {
                    options.map((option,i)=><option key={i} value={option.value} selected={option.value===text?.rating}>{option.text}</option>)
                  }
                </select>
                </div>
                <button className=' absolute right-[-25px]' onClick={()=>removeSkillData(text)}>
                    <FontAwesomeIcon icon={faTrash} className='text-red-500 text-[20px] opacity-0 group-hover:opacity-100' onClick={()=>removeSkill(text)} />
                </button>
            </div>)
            }{
open?<div className=' p-4 border'>
        <div className=' flex gap-3 w-[100%] items-center relative'>
            <Input label='Skill' setNewSkill={setNewSkill}/>
            <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5 outline-none mt-12" onChange={(e)=>customSkill(e)}>
            {options.map(option => (
              <option key={option.value} value={option.value}>
                 {option.text}
               </option>
                ))}
                </select>
                <div className=' absolute top-0 right-0 bg-blue-500 text-white px-3 py-1 rounded-md font-[500] cursor-pointer' onClick={()=>addSkill()}>Add</div>
        </div>
</div>:null
            }
            <div className=' ml-5 flex gap-3 py-3 font-[600] text-blue-500 items-center cursor-pointer'>
               <FontAwesomeIcon icon={faPlus} onClick={()=>SetOpen(!open)}/>
               <p onClick={()=>SetOpen(!open)}>
                {
                    open?'Close Skill':'Add Skill'
                }
               </p>
            </div>
        </div>
    );
};

export default Skills;