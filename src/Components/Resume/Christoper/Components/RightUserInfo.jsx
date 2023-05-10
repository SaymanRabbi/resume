import React, {  } from 'react';
import useWidth from '../../../../hooks/useWidth';
import { useContext } from 'react';
import { data } from '../../../../App';
import { useLocation } from 'react-router-dom';

const RightUserInfo = () => {
    const {allData} = useContext(data)
    const path = useLocation().pathname.split('/')[2]
    const skills = allData[path]?.skills
    const references = allData[path]?.references
    const width = useWidth()
    return (
        <div className=' col-span-5'>
           {
                skills?.length>0 ? <div className='bg-gray-200 rounded-lg p-2'>
                <h2 className={`${width>1280?"text-[16px]":"text-3xl  mb-3"} font-bold text-[#1B3055]`}>
                               Skills
                           </h2>
                           {
                               skills.map((skill,index)=> <div className={`flex justify-between items-center  ${width>1280?"gap-x-[2px]":"gap-3"}  text-gray-700`}>
                               <h2 className={`font-bold skill_tittle ${width>1280?"text-[8px]":""}`}  key={index}>{skill?.tittle}</h2>
                                <div className={` w-auto border-gray-700 h-0 flex-grow ${width>1280?' border-[1px]':" border"}`}></div>
                                <h2 className={`font-medium skill_rating ${width>1280?"text-[8px]":""}`}>{skill?.rating ==='expert'?5 : skill?.rating==='intermediate' ? 4 : skill?.rating==='beginner'?3:5}/5</h2>
                               </div>)   
                           }
                </div>
                :null
           }
             <div>
             <div className='bg-gray-200 rounded-lg p-2 mt-3'>
                            {
                                references?.length>0 ? <>
                                <h2 className={`${width>1280?"text-[16px]":"text-3xl  mb-3"} font-bold text-[#1B3055]`}>
                               References
                            </h2>
{
    references.map(referance => <div key={referance.id} className={`text-gray-700 References ${width>1280?'':'my-2 '}`}>
    <h2 className={`ref_tittle font-bold ${width>1280?"text-[8px]":""}`}>{referance?.name} { referance?.city}</h2>
    <h2 className={`font-medium ref_uni ${width>1280?"text-[6px]":""}`}>{referance?.institute}</h2>
    <h2  className={`font-medium ref_id ${width>1280?"text-[6px]":""}`}>{referance?.id}</h2>
    </div>)
}   
                                </> : null
                            }
                        </div>
             </div>
        </div>
    );
};

export default RightUserInfo;