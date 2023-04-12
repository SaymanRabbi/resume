import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

const Employment = () => {
    const employmentHistory=[
        {
            id:1,
            tittle:'Physical Therapist, Care Mount Medical',
            year:'jan 2013 - Aug 2019',
            location:'Poughkeepsie, NY',
            skill:[
                {  id:1,
                    name:'Greets up to 40 customers per hour and takes accurate orders on the register for menu items.'
                },
                {  id:2,
                    name:'Prepares food items for a menu of 36 dishes using restaurant-supplied recipes by measuring ingredients and mixing items correctly.'
                },{
                    id:3,
                    name:'Actively brainstorm new concepts with team members to develop creative solutions and unique strategies.'
                },
                {id:4,
                    name:'Greets up to 40 customers per hour and takes accurate orders on the register for menu items.'
                }
            ]
        },  {
            id:2,
            tittle:'Physical Therapist, Westchester Medical Center',
            year:'Oct 2010 - Dec 2013',
            location:'White Plains, NY',
            skill:[
                { id:1,
                    name:'Successfully managed a team of 10 sales associates to achieve sales targets and exceed customer expectations.'
                },
                {id:2,
                    name:'Developed and implemented a sales strategy to increase revenue by 20% in 6 months.'
                },{id:3,
                    name:'Prepares food items for a menu of 36 dishes using restaurant-supplied recipes by measuring ingredients and mixing items correctly.'
                },
                {id:4,
                    name:'Monitors and maintains inventory levels to ensure adequate supplies are available for daily operations.'
                }
            ]
        }
        
    ]
    
    return (
        <div className=' mb-8 mt-[76px]'>
            <h2 className=' font-semibold text-2xl uppercase tracking-widest text-[#D0C2A6] mb-6 '>
                Employment History
            </h2>
           
              {
                    employmentHistory.map((history) =>
                   <div className=' my-3'>
                     <div className=' my-3'>
                     <h2 className=' text-2xl font-[500] employ_tittle'>{history.tittle}</h2>
                       <div className=' flex gap-6 items-center py-2'>
                        <h2 className='text-xl font-[500] employ_year'>{history.year}</h2>
                         <div className=' flex gap-4 items-center'>
                         <FontAwesomeIcon icon={faLocationDot} className=' text-gray-500 text-xl'/>
                            <h2 className=' text-xl font-[500] employ_location'>{history.location}</h2>
                         </div>
                       </div>
                     </div>
                      {
                            history.skill.map((skill) => <div className=' relative ml-4' key={skill.id}>
                            <span className=' absolute w-[6px] h-[6px] rounded-full bg-black mt-[9px]'></span>
                            <p className=' ml-4 font-[500] employ_skill'>
                                  {
                                        skill.name
                                  }
                            </p>
                        </div>
                            )
                      }
                   </div>
                    )
              }
               
        </div>
    );
};

export default Employment;