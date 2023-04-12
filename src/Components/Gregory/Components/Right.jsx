import React from 'react';

const Right = () => {
    const skills = [
        {
            id: 1,
            tittle:'Mechanical Skills',
            rating: '80%'
        },{
            id: 2,
            tittle:'Mathematical Skills',
            rating: '70%'
        },{
            id: 3,
            tittle:'Critical Thinking Skills',
            rating: '90%'
        },{
            id: 4,
            tittle:'Problem Solving Skills',
            rating: '80%'
        },{
            id: 5,
            tittle:'Communication Skills',
            rating: '90%'
        },{
            id: 6,
            tittle:'Teamwork Skills',
            rating: '80%'
        },{
            id: 7,
            tittle:'Leadership Skills',
            rating: '70%'
        }
    ]
    return (
        <div className=' col-span-5 h-[1200px] rounded-md bg-[#082A4C] px-12'>
            <div className=' mt-[200px]'>
                <h2 className=' text-white text-3xl font-semibold'>
                    Details
                </h2>
                <div>
                <h2 className=' text-gray-400 font-semibold user_address mt-3'>
                26 Waywood Drive,Brampton,<br /> ON L6P 1A2          
                </h2>
                <h2 className=' text-gray-400 font-semibold user_country'>
                    Canada         
                </h2>
                <h2 className=' text-gray-400 font-semibold user_phone'>
                    (203)724-8485        
                </h2>
                <h2 className=' text-gray-400 font-semibold user_email'>
                email@gmail.com  
                </h2>
                </div>
                <div className=' mt-12'>
                <h2 className=' text-white text-3xl font-semibold'>
                   Skills
                </h2>
                <div>
                  {
                        skills.map((skill) => (
                            <div key={skill.id} className=' mt-2 details'>
                                <h2 className=' text-gray-400 font-semibold skill_tittle'>
                                    {skill.tittle}
                                </h2>
                                <div className=' w-[100%] h-1 bg-gray-600 mt-1'>
                                    <div className={`w-[${skill.rating}] h-1 bg-white`}>
                                        </div>
                                </div>
                            </div>
                        ))
                  }
                </div>
                </div>
            </div>
        </div>
    );
};

export default Right;