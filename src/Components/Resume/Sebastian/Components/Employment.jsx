import React from 'react';

const Employment = () => {
    const employment=[
          {
            id:1,
            company:'Sales Associate,Big Apple Bookstore,New York',
            year:'AUGUST2015 - JUNE 2018',
            skill:[
                {
                    id:1,
                    name:'Greeted customers and provided assistance in locating items.'
                },{
                    id:2,
                    name:'Maintained a clean and organized store.'
                },{
                    id:3,
                    name:'Assisted customers with purchases and returns.'
                },{
                    id:4,
                    name:'Answered customer questions and provided product information.'
                }
            ]
          }
    ]
    return (
        <div className=' mt-4'>
            <button className=' px-3 py-1 uppercase bg-black text-white font-semibold tracking-widest'>employment</button>
            <div className=' mt-1'>
              {
                    employment.map((item)=>{ 
                        return(
                            <div key={item.id} className='mt-1'>
                                <h2 className='font-semibold text-xl edu_tittle'>{item.company}</h2>
                                <h2 className=' font-semibold text-gray-400 edu_year'>{item.year}</h2>
                                {
                                    item.skill.map((item)=>
                                    <div className=' relative px-3' key={item.id}>
                                <span className=' absolute w-[6px] h-[6px] rounded-full bg-black mt-[9px]'></span>
                                <h2 className='font-[500] ml-4 edu_skill'>{item.name}</h2>
                                </div>
                                    )
                                }
                                
                            </div>
                        )
                    })
              }
           </div>
        </div>
    );
};

export default Employment;