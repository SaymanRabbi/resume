import React from 'react';

const Skills = () => {
    const skills = [{
        id:1,
        tittle:'Creativity',
        rating:5
    },
   {
    id:2,
    tittle:'Collaboration Skills',
    rating:5
   },{
    id:3,
    tittle:'Knowledge of Complex Animation Software',
    rating:5
   },{
    id:4,
    tittle:'Technical Drawing Skills',
    rating:5
   },{
    id:5,
    tittle:'Excellent Communication Skills',
    rating:5
   },{
    id:6,
    tittle:'Knowledge of Adobe PhotoShop, After Effects, and Illustrator',
    rating:4
   }
]
    return (
        <div className=' py-5'>
              <h2 className='text-[#003469] font-[700] text-2xl mb-2'>Skills</h2>
              {
                    skills.map((item) => <div key={item.id} className=' py-1'>
                           <h2>
                                 <span className=' font-[600] skill_tittle'>{item.tittle}</span>
                                <div className=' flex gap-1'>
                                   {
                                        Array(item.rating).fill().map((_,i) => <div key={i} className=' w-full h-[6px] bg-[#003469] skill_rating'></div>)
                                   }
                                </div>
                           </h2>
                        </div>)
              }
        </div>
    );
};

export default Skills;