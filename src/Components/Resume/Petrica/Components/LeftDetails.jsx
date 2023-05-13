import React from 'react';
import useWidth from '../../../../hooks/useWidth';
import { data } from '../../../../App';
import { useLocation } from 'react-router-dom';
import { useContext } from 'react';

const LeftDetails = () => {
    const path = useLocation().pathname.split('/')[2]
    const {allData} = useContext(data)
    const skills = allData[path]?.skills
    console.log(skills)
    const language = allData[path]?.languages
    const width = useWidth()
    return (
        <div className=' col-span-4'>
            {
                skills && skills.length>0 ? <div>
                <h2 className={`font-bold text-[#1b3055] ${width>=1280 || width<=480 || width<=768?"text-[10px]":"text-xl"}`}>Skills</h2>
                 {
                        skills.map((skill,i) => (
                            <div key={i} className={`skills ${width>=1280 || width<=480 || width<=768?"py-1":"py-2"}`}>
                                <h2 className={`font-semibold text-[#1b3055] skill_tittle ${width>=1280 || width<=480 || width<=768?"text-[8px] mb-1":""}`}>{skill?.tittle}</h2>
                                  <div className={` flex ${width>=1280 || width<=480 || width<=768?"gap-1":'gap-2'}`}>
                                  {
                                        [...Array(skill?.rating ==='expert'?5 : skill?.rating==='intermediate' ? 4 : skill?.rating==='beginner'?3:5)].map((_,i) => <div  className={`${width>=1280 || width<=480 || width<=768?"h-[2px]":"h-1 mt-1"} bg-[#181b1a] w-full  skill_rating`}></div>) 
                                  }
                                  </div>
                            </div>
                        ))
                 }
            </div>:''
            }
            <div className={`${width>=1280 || width<=480 || width<=768?' mt-2':' mt-8'}`}>
               <>
               {
                language && language.length>0 ? <>  <h2 className={`font-bold text-[#1b3055] ${width>=1280 || width<=480 || width<=768?"text-[10px]":"text-xl"}`}>Language</h2>
                {
                       language.map(lan => (
                           <div key={lan._id} className='language py-2'>
                               <h2 className={`font-semibold text-[#1b3055] lan_tittle ${width>=1280 || width<=480 || width<=768?"text-[8px] mb-1":""}`}>{lan.lan}</h2>
                                 <div className={`flex ${width>=1280 || width<=480 || width<=768?"gap-1":"gap-2"}`}>
                                 {
                                       [...Array(5)].map((_,i) => <div  className={`${width>=1280 || width<=480 || width<=768?"h-[2px]":"h-1 mt-1"} bg-gray-400 w-full`} key={i}>

                                           {
                                               i < lan?.rating && <div className={`${width>=1280 || width<=480 || width<=768?"h-[2px]":"h-1"} bg-[#181b1a] w-full lan_rating`}></div>
                                           }
                                       </div>) 
                                 }
                                 </div>
                           </div>
                       ))
                }</> : null
               }
               </>
            </div>
        </div>
    );
};

export default LeftDetails;