import React from 'react';

const Skills = () => {
    const skills = [
       {
              id: 1,
                tittle: 'Project Management Skills',
                rating:5
       },{
        id:2,
        tittle: 'Busniess Development Strategy',
        rating:5
       },{
        id:3,
        tittle: 'Industry Knowledge',
        rating:5
    },{
        id:4,
        tittle: 'Interpersonal Communication Skills',
        rating:5
    },{
        id:5,
        tittle: 'Inovative Problem Solving',
        rating:5
    }
    ]
    return (
        <div className=' mt-10'>
            <h2 className=' font-semibold text-2xl uppercase tracking-widest'>
                Skills
            </h2>
            <div className=' my-3 w-full h-[3px] bg-[#000000]'></div>
            <div className=' mt-5'>
                {
                    skills.map((skill) =>
                    <div className='my-2 skill' key={skill.id}>
                        <h2 className=' uppercase  text-[18px] font-[400] skill_tittle'>
                                    {skill.tittle}
                         </h2>
                         <div className=' flex gap-3'>
                         {
                            [ ...Array(skill.rating)].map((_,i) => 
                            <span className=' w-[9px] h-[9px] bg-black rounded-full '></span>
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