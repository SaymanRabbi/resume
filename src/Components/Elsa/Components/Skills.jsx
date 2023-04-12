import React from 'react';

const Skills = () => {
    const skills = [
       {
              id: 1,
                name: 'Patient Education',
                rating:5
       },{
        id:2,
        name: 'Physical Therapy',
        rating:5
       },{
        id:3,
        name: 'Treatment Planning',
        rating:5
    },{
        id:4,
        name: 'Excellent Communication',
        rating:5
    }
    ]
    return (
        <div className=' mt-10'>
            <h2 className=' font-semibold text-2xl uppercase tracking-widest text-[#D0C2A6]'>
                Skills
            </h2>
           
            <div className=' mt-8'>
                {
                    skills.map((skill) =>
                    <div className='my-2 skill' key={skill.id}>
                        <h2 className=' uppercase  text-[18px] font-[400] skill'>
                                    {skill.name}
                         </h2>
                         <div className=' flex gap-3'>
                         {
                            [ ...Array(skill.rating)].map((_,i) => 
                            <span className=' w-[9px] h-[9px] bg-black rounded-full'></span>
                            )
                         } 
                            </div>                    
                    </div>
                    )
                }
                </div>
        </div>
    );
};

export default Skills;