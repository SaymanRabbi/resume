import React from 'react';

const Employment = () => {
    const employmet = [
        {
            id: 1,
            title: 'Marketing Manager at Zane Telecommunications, Austin, TX',
            year:'Novemver 2011 - August 2019',
            skill:[{
                id: 1,
                name:'Efectively managed marketing campaigns and developed marketing strategies.'
            },{
                id: 2,
                name:'Used digital marketing tools to increase brand awareness and drive sales.'
            },{
                id: 3,
                name:'Developed and implemented marketing plans and strategies to promote the company’s products and services.'
            },{
                id: 4,
                name:'Managed the company’s social media platforms to increase brand awareness and drive sales.'
            }
        
        
        ]
        },{
            id: 2,
            title: 'Marketing Manager at Giga Tech, Austin, TX',
            year:'August 2019 - August 2023',
            skill:[{
                id: 1,
                name:'A Marketing Manager should be able to develop and execute marketing strategies that align with the overall business goals.'
            },{
                id: 2,
                name:' A Marketing Manager should be able to communicate effectively with the team and the clients.'
            },{
                id: 3,
                name:' Creativity is crucial for a Marketing Manager as they need to come up with innovative ideas and campaigns to attract customers.'
            }]
        }
    ]
    return (
        <div className='px-20 pb-12'>
             <h2 className=' text-[#1B3055] font-[700] py-10'>Employment History</h2>
             <div>
                {
                    employmet.map(employment => (
                        <div className='grid grid-cols-12 mb-8' key={employment.id}>

                            <div className='col-span-5'>
                                <h3 className=' text-[#1B3055] text-xl font-[700] employ_tittle'>{employment.title}</h3>
                                <p className=' text-[#1B3055] font-[500] employ_year'>{employment.year}</p>
                                </div>
                                <div className='col-span-7'>
                                    {
                                        employment.skill.map(skill => (
                                            <div className=' relative' key={skill.id}>
                                        <span className=' w-[6px] h-[6px] bg-[#1B3055] absolute mt-2 rounded-full'></span>
                                       <h2 className=' ml-4 employment employ_skill'>
                                       {
                                            skill.name
                                        }
                                       </h2>
                                    </div>
                                        ))
                                    }
                                    </div>
                        </div>
                    ))
                }
             </div>
        </div>
    );
};

export default Employment;