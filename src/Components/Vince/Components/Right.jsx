import React from 'react';
import './Right.css'
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
    return (
        <div className=' col-span-3 flex'>
            <div className='vr'></div>
            <div className=' py-8 pl-10'>
            <h2 className=' italic text-2xl font-bold'>Skills</h2>
            {
                skills.map((skill)=>(
                    <div key={skill.id} className=' mt-2'>
                        <h3 className='font-[500] skill_tittle'>{skill.tittle}</h3>
                        <div className=' flex gap-2'>
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