import React from 'react';

const Education = () => {
    const education=[
        {
            id:1,
            college:'Bechelor of Comminucation,New York University,New York',
            year:'AUGUST2016 - PRESENT',
            skill:[{
                id:1,
                name:'working towards a Comminucation degree'
            }],
        },{
            id:2,
            college:'High School Diploma,New York University,New York',
            year:'AUGUST2012 - 2016',
            skill:[{
                id:1,
                name:'Graduated with High Honors'
            }],
        }
    ]
    return (
        <div className=' mt-4'>
        <button className=' px-3 py-1 uppercase bg-black text-white font-semibold tracking-widest'>education</button>
           <div className=' mt-1'>
              {
                    education.map((item)=>{ 
                        return(
                            <div key={item.id} className=' mt-1'>
                                <h2 className='font-semibold text-xl edu_tittle'>{item.college}</h2>
                                <h2 className=' font-semibold text-gray-400 edu_year'>{item.year}</h2>
                                <div className=' relative px-3'>
                                    <span className=' absolute w-[6px] h-[6px] rounded-full bg-black mt-[9px]'></span>
                                {
                                    item.skill.map((item)=><h2 className=' text-gray-400 ml-4 edu_skill'>{item.name}</h2>)
                                }
                                </div>
                            </div>
                        )
                    })
              }
           </div>
        </div>
    );
};

export default Education;