import React from 'react';
import useWidth from '../../../../hooks/useWidth';

const LeftDetails = () => {
    const skills = [
        {
            id: 1,
            tittle:'Exclenet communication skills',
            rating: 5
        },{
            id: 2,
            tittle:'Multi-tasking skills',
            rating: 5
        },{
            id: 3,
            tittle:'Office Technology Skills',
            rating: 5
        },{
            id: 4,
            tittle:'Organizational Skills',
            rating: 5
        },{
            id: 5,
            tittle:'Problem Solving Skills',
            rating: 5
        }
    ]
    const language = [
        {
            id: 1,
            tittle:'English',
            rating: 4
        },{
            id: 2,
            tittle:'Spanish',
            rating: 3
        },{
            id: 3,
            tittle:'French',
            rating: 5
        }
    ]
    const width = useWidth()
    return (
        <div className=' col-span-4'>
            <div>
                <h2 className={`font-bold text-[#1b3055] ${width>1280?"text-[10px]":"text-xl"}`}>Skills</h2>
                 {
                        skills.map(skill => (
                            <div key={skill.id} className={`skills ${width>1280?"py-1":"py-2"}`}>
                                <h2 className={`font-semibold text-[#1b3055] skill_tittle ${width>1280?"text-[8px] mb-1":""}`}>{skill.tittle}</h2>
                                  <div className={` flex ${width>1280?"gap-1":'gap-2'}`}>
                                  {
                                        [...Array(skill.rating)].map((_,i) => <div  className={`${width>1280?"h-[2px]":"h-1 mt-1"} bg-[#181b1a] w-full  skill_rating`}></div>) 
                                  }
                                  </div>
                            </div>
                        ))
                 }
            </div>
            <div className={`${width>1280?' mt-2':' mt-8'}`}>
                <h2 className={`font-bold text-[#1b3055] ${width>1280?"text-[10px]":"text-xl"}`}>Language</h2>
                 {
                        language.map(lan => (
                            <div key={lan.id} className='language py-2'>
                                <h2 className={`font-semibold text-[#1b3055] lan_tittle ${width>1280?"text-[8px] mb-1":""}`}>{lan.tittle}</h2>
                                  <div className={`flex ${width>1280?"gap-1":"gap-2"}`}>
                                  {
                                        [...Array(5)].map((_,i) => <div  className={`${width>1280?"h-[2px]":"h-1 mt-1"} bg-gray-400 w-full`}>

                                            {
                                                i < lan.rating && <div className={`${width>1280?"h-[2px]":"h-1"} bg-[#181b1a] w-full lan_rating`}></div>
                                            }
                                        </div>) 
                                  }
                                  </div>
                            </div>
                        ))
                 }
            </div>
        </div>
    );
};

export default LeftDetails;