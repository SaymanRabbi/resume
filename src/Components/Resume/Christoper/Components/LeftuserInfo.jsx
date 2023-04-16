import React from 'react';
import './LeftUserInfo.css'
const LeftuserInfo = () => {
    const employment = [
        {
            id:1,
            tittle:'Psychologist at the University of California, Los Angeles',
            year:'04/2017 - 04/2018',
            skill:[
                {
                    id: 1,
                    name:'Conducting psychological assessments and evaluations for 8 clients'
                },{
                    id: 2,
                    name: 'Collaborating with other psychologists to develop treatment plans for 8 clients',
                },{
                    id: 3,
                    name: 'Implementing treatment that includes individual, group, and family therapy for 8 clients',
                },{
                    id: 4,
                    name: 'Studying and analyzing data from psychological tests and evaluations',
                    
                }
                ,{
                    id: 5,
                    name:'Utilizing evidence-based practices to treat clients with a variety of mental health issues'
                },{
                    id: 6,
                    name: 'Collaborating with other psychologists to develop treatment plans for 8 clients',
                }
            ]
        },
        {
            id:1,
            tittle:'Psychologist at the University of California, Los Angeles',
            year:'04/2017 - 04/2018',
            skill:[
                {
                    id: 1,
                    name:'Conducting psychological assessments and evaluations for 8 clients'
                },{
                    id: 2,
                    name: 'Collaborating with other psychologists to develop treatment plans for 8 clients',
                },{
                    id: 3,
                    name: 'Implementing treatment that includes individual, group, and family therapy for 8 clients',
                },{
                    id: 4,
                    name: 'Studying and analyzing data from psychological tests and evaluations',
                    
                }
                ,{
                    id: 5,
                    name:'Utilizing evidence-based practices to treat clients with a variety of mental health issues'
                },{
                    id: 6,
                    name: 'Collaborating with other psychologists to develop treatment plans for 8 clients',
                }
            ]
        }
    ]
    const educations = [
        {
            id:1,
            tittle:'Doctor of Psychology at the University of California, Los Angeles',
            year:'04/2017 - 04/2018',
            skill:[{}]
        }
    ]
    return (
        <div className=' col-span-7'>
            <h2 className=' text-3xl font-bold text-[#1B3055] mb-3'>Employment History</h2>
            
             {
                            employment.map(education => <div className='mt-3'>
                             <h2 className='text-white ' >
                <span className='bg-[#1B3055] employ_tittle'>
                {education.tittle}
                </span>
              </h2>
            
            <div>
                <h2 className=' text-xl text-gray-700 font-bold employ_year'>
                    {education.year}
                </h2>
            </div>
            <div className=' font-medium text-gray-600'>
              
                       {
                            education.skill.map(education => <div className=' relative'>
                             <div className=' w-2 h-2 bg-[#1B3055] rounded-full mt-[9px] absolute'></div>
                            <p className='employment ml-4 employ_skill'  key={education.id}>{education.name}</p>
                            </div>)    
                       }
                 
            </div>
                            </div>)
             }
            {/* -----Educations---- */}
            <div className=' pb-6'>
                <h2 className=' text-2xl font-bold text-[#1B3055]'>
                    Educations
                </h2>
            {
                            educations.map(education => <div className='mt-3'>
                                <h2 className='text-white' >
                <span className='bg-[#1B3055] edu_tittle'>
                {education.tittle}
                </span>
              </h2>
              <h2 className=' text-xl text-gray-700 font-bold edu_year'>
                   {education.year}
                </h2>
                                </div>)
            }
            </div>
            {/* -----Educations---- */}
        </div>
    );
};

export default LeftuserInfo;