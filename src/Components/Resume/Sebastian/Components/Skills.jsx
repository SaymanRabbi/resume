import React, { useContext } from 'react';
import useWidth from '../../../../hooks/useWidth';
import { data } from '../../../../App';
import { useLocation } from 'react-router-dom';

const Skills = () => {
    const width = useWidth()
    const path = useLocation().pathname.split('/')[2]
    const {allData} = useContext(data)
   const datas = allData?.[path]?.skills
    return (
        <div className={`${width>=1280 || width<=480 || width<=768?'mt-[2px]':"mt-4"}`}>
          {
           datas && datas.length>0? <> <button className={`uppercase bg-black text-white font-semibold tracking-widest ${width>=1280 || width<=480 || width<=768?"px-[5px] text-[8px]":"px-3 py-1"}`}>skills</button>
           <div className={`${width>=1280 || width<=480 || width<=768?"gap-x-7":"mt-1 gap-x-16"} grid grid-cols-12 `}>
             {
                   datas.map((item,i)=><div className=' col-span-6 skill' key={i}>
                      <h2 className={`${width>=1280 || width<=480 || width<=768?"text-[8px] my-1":"text-xl mb-2"} font-[400] skill_tittle`}>
                           {item?.tittle}
                      </h2>
                        
                               <div className={`bg-gray-300 ${width>=1280 || width<=480 || width<=768?"h-[2px]":"h-2"} w-[100%] rounded-full`}>
                               <div className={`${width>=1280 || width<=480 || width<=768?"h-[2px]":"h-2"} bg-black skill_rating w-[${item?.rating ==='expert'?100 : item?.rating==='intermediate' ? 60 : item?.rating==='beginner'?50:0}%]`}></div>

                        </div>
                   </div>)
             }
      
           </div></>  :null
          }
         
        </div>
    );
};

export default Skills;