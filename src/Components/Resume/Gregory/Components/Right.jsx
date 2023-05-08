import React from 'react';
import useWidth from '../../../../hooks/useWidth';

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
    const width = useWidth()
    return (
        <div className={` col-span-5 h-[100%] rounded-md bg-[#082A4C] ${width>1280?" px-6" : ' px-12'}`}>
            <div className={`${width>1280?" mt-[90px]":" mt-[200px]"}`}>
                <h2 className={`text-white ${width>1280?"text-[14px]":"text-3xl"} font-semibold`}>
                    Details
                </h2>
                <div>
                <h2 className={`text-gray-400 font-semibold user_address ${width>1280?"mt-1 text-[8px]":"mt-3"}`}>
                26 Waywood Drive,Brampton,<br /> ON L6P 1A2          
                </h2>
                <h2 className={`text-gray-400 font-semibold user_country ${width>1280?"text-[8px]":""}`}>
                    Canada         
                </h2>
                <h2 className={`text-gray-400 font-semibold user_phone ${width>1280?"text-[8px]":""}`}>
                    (203)724-8485        
                </h2>
                <h2 className={`text-gray-400 font-semibold user_email ${width>1280?"text-[8px]":""}`}>
                email@gmail.com  
                </h2>
                </div>
                <div className={`${width>1280?"mt-4":" mt-12"}`}>
                <h2 className={`text-white ${width>1280?"14px":"text-3xl"} font-semibold`}>
                   Skills
                </h2>
                <div>
                  {
                        skills.map((skill) => (
                            <div key={skill.id} className={` ${width>1280?"mt-1":"mt-2"} details`}>
                                <h2 className={`text-gray-400 font-semibold skill_tittle ${width>1280?"text-[8px]":""}`}>
                                    {skill.tittle}
                                </h2>
                                <div className={`w-[100%] ${width>1280?"h-[.1rem]":"h-1"} bg-gray-600 mt-1`}>
                                    <div className={`w-[${skill.rating}] ${width>1280?"h-[.1rem]":"h-1"} bg-white`}>
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