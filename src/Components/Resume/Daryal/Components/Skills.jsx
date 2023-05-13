import React from 'react';
import useWidth from '../../../../hooks/useWidth';
import { useLocation } from 'react-router-dom';
import { data } from '../../../../App';
import { useContext } from 'react';

const Skills = () => {
    const path = useLocation().pathname.split('/')[2]
    const {allData} = useContext(data)
    const skills = allData[path]?.skills
const width = useWidth()
    return (
        <div className={` ${width>=1280 || width<=480 || width<=768?"py-1":"py-5"}`}>
             {
                skills && skills.length>0 ?<>
                 <h2 className={`text-[#003469] font-[700]  ${width>=1280 || width<=480 || width<=768?"text-[14px]":"text-2xl mb-2"}`}>Skills</h2>
              {
                    skills.map((item) => <div key={item.id} className={` ${width>=1280 || width<=480 || width<=768?"":"py-1"}`}>
                           <h2 className={`${width>=1280 || width<=480 || width<=768?"leading-[10px]":""}`}>
                                 <span className={`font-[600] skill_tittle ${width>=1280 || width<=480 || width<=768?"text-[8px] leading-[10px]":""}`}>{item.tittle}</span>
                                <div className=' flex gap-1'>
                                   {
                                        Array(item?.rating ==='expert'?5 : item?.rating==='intermediate' ? 4 : item?.rating==='beginner'?3:5).fill().map((_,i) => <div key={i} className={`w-full  bg-[#003469] skill_rating ${width>=1280 || width<=480 || width<=768?"h-[2px] mt-[3px]":"h-[6px]"}`}></div>)
                                   }
                                </div>
                           </h2>
                        </div>)
              }
                </> :null
             }
        </div>
    );
};

export default Skills;