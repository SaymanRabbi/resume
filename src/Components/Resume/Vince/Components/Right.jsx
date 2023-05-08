import React from 'react';
import './Right.css'
import useWidth from '../../../../hooks/useWidth';
const Right = () => {
    const skills =[
        {
            id:1,
            tittle:'Administrative Support Skills',
            rating:5
        },{
            id:2,
            tittle:'Inventory Control Skills',
            rating:4
        },{
            id:3,
            tittle:'Scheduling Skills',
            rating:4
        },{
            id:4,
            tittle:'Event Planning',
            rating:5
        },{
            id:5,
            tittle:'Dictation Skills',
            rating:5
        }
    ]
    const width = useWidth()
    return (
        <div className={`${width>1280?'col-span-4 flex':'col-span-3 flex'}`}>
            <div className='vr'></div>
            <div className={`${width>1280?'py-1 pl-3':'py-6 pl-10'}`}>
            <h2 className={`italic ${width>1280?"text-[14px]":"text-2xl"} font-bold`}>Skills</h2>
            {
                skills.map((skill)=>(
                    <div key={skill.id} className={`${width>1280?'':' mt-2'}`}>
                        <h3 className={`font-[500] ${width>1280?"text-[9px]":"text-xl mt-2"} skill_tittle`}>{skill.tittle}</h3>
                        <div className={` flex ${width>1280?'gap-x-1':'gap-2'}`}>
                            {/* angle backgrounbd */}
                            {
                                        [...Array(5)].map((_,i) => <div  className='h-1 bg-gray-400 w-full mt-1'>

                                            {
                                                i < skill.rating && <div className='h-1 bg-[#B02124] w-full skill_rating'></div>
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

export default Right;