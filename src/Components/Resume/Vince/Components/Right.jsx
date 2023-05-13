import React from 'react';
import './Right.css'
import useWidth from '../../../../hooks/useWidth';
import { data } from '../../../../App';
import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
const Right = () => {
    const path = useLocation().pathname.split('/')[2]
    const {allData} = useContext(data)
    const skills =  allData[path]?.skills
    const width = useWidth()
    return (
        <div className={`${width>=1280 || width<=480 || width<=768?'col-span-4 flex':'col-span-3 flex'}`}>
            <div className='vr'></div>
            <div className={`${width>=1280 || width<=480 || width<=768?'py-1 pl-3':'py-6 pl-10'}`}>
            {
                skills && skills.length>0 ? <>
                <h2 className={`italic ${width>=1280 || width<=480 || width<=768?"text-[14px]":"text-2xl"} font-bold`}>Skills</h2>
            {
                skills.map((skill)=>(
                    <div key={skill.id} className={`${width>=1280 || width<=480 || width<=768?'':' mt-2'}`}>
                        <h3 className={`font-[500] ${width>=1280 || width<=480 || width<=768?"text-[9px]":"text-xl mt-2"} skill_tittle`}>{skill?.tittle}</h3>
                        <div className={` flex ${width>=1280 || width<=480 || width<=768?'gap-x-1':'gap-2'}`}>
                            {/* angle backgrounbd */}
                            {
                                        [...Array(5)].map((_,i) => <div  className={`${width>=1280 || width<=480 || width<=768?"h-[2px]":"h-1"} bg-gray-400 w-full skill_rating mt-1`}>


                                             
                                           {
                                              i < (skill?.rating ==='expert'? 5 : skill?.rating==='intermediate' ? 4 : skill?.rating==='beginner'?3:5) && <div className={`${width>=1280 || width<=480 || width<=768?"h-[2px]":"h-1"} bg-red-500 w-full lan_rating`}>
                                                
                                              </div>
                                           }
                                        </div>) 
                                  }
                                  </div>
                    </div>
                ))
            }
                </> : null
            }
            </div>
        </div>
    );
};

export default Right;