import React from 'react';

const Skills = () => {
    const skills = [
        {
            id:1,
            tittle:'Finalcial Reporting',
            rating:'Expert',
        },{
            id:2,
            tittle:'Budgeting & Forecasting',
            rating:'Expert',
        },{
            id:3,
            tittle:'Interparsonal Skills',
            rating:'Expert',
        },{
            id:4,
            tittle:'Advanced Technological Skills',
            rating:'Expert',
        },{
            id:5,
            tittle:'Effective Time Management',
            rating:'Expert',
        }
    ]
    return (
        <div className=' mt-3'>
            
              <div className='grid grid-cols-12'>
              <div className=' col-span-3'>
              <h2 className=' uppercase text-2xl font-semibold text-[#1B3055] tracking-wider'>
                Skills
              </h2>
              </div>
              <div className=' col-span-9'> 
               <div className=' grid grid-cols-12 gap-6'>
                {
                    skills.map((item) => {
                        return(
                            <div key={item.id} className='col-span-6 justify-items-center skill'>
                                <div className='flex'>
                                <h2 className=' w-[80%] text-[18px] font-medium skill_tittle'>{item.tittle}</h2>
                                <h2 className='  w-[20%] text-[18px] font-medium text-gray-700 skill_rating'>{item.rating}</h2>
                                </div>
                            </div>
                        )
                    })
                }
               </div>
              </div>
              </div>
              
            
            <div className=' w-full h-1 bg-[#1B3055] mt-3'></div>
        </div>
    );
};

export default Skills;