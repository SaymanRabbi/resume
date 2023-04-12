import React from 'react';

const Skills = () => {
    const skills=[
        {
            id:1,
            skill:'Advanced Communication Skills',
            rating:80
        },{
            id:2,
            skill:'Advanced Leadership Skills',
            rating:80
        },{
            id:3,
            skill:'Advanced Problem Solving Skills',
            rating:90
        },{
            id:4,
            skill:'Advanced Time Management Skills',
            rating:70
        }
    ]
    return (
        <div className=' mt-4'>
            <button className=' px-3 py-1 uppercase bg-black text-white font-semibold tracking-widest'>skills</button>
            <div className=' mt-1 grid grid-cols-12 gap-x-16'>
              {
                    skills.map((item)=><div className=' col-span-6 skill'>
                       <h2 className=' text-xl font-[400] mb-2 skill_tittle'>
                            {item.skill}
                       </h2>
                         
                                <div className=' bg-gray-300 h-2 w-[100%] rounded-full'>
                                <div className={`h-[6px] bg-black skill_rating w-[${item.rating}%]`}></div>

                         </div>
                    </div>)
              }
       
            </div>
        </div>
    );
};

export default Skills;