import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Education = () => {
    const educations = [
        {
            id: 1,
            tittle:'Marist College, Master of Physical Therapy',
            year:'Aug 2008 - May 2010',
            location:'Poughkeepsie, NY',
            skill:[
                {
                    id:1,
                    name:'Graduated with a 3.8 GPA and was awarded the Dean’s List Award.'
                }
            ]
        },
        {
            id: 2,
            tittle:'St. Joseph’s College, Bachelor of Science in Physical Therapy',
            year:'Aug 2006 - May 2008',
            location:'Vancouver, BC',
            skill:[
                {
                    id:1,
                    name:'Graduated summa cum laude'
                }
            ]
        }
    ]
    return (
        <div className=' mt-3 education pb-5'>
            <h2 className=' font-semibold text-2xl uppercase tracking-widest text-[#D0C2A6] mb-6'>
                Educations
            </h2>
            {
                    educations.map((history) =>
                   <div className=' my-3 education'>
                     <div className=' my-3'>
                     <h2 className=' text-2xl font-[400] edu_tittle'>{history.tittle}</h2>
                       <div className=' flex gap-6 items-center py-2'>
                        <h2 className='text-xl font-[400] edu_year'>{history.year}</h2>
                         <div className=' flex gap-4 items-center'>
                         <FontAwesomeIcon icon={faLocationDot} className=' text-gray-500 text-xl'/>
                            <h2 className=' text-xl font-[400] edu_location'>{history.location}</h2>
                         </div>
                       </div>
                     </div>
                      {
                            history.skill.map((skill) => <div className=' relative ml-4' key={skill.id}>
                            <span className=' absolute w-[6px] h-[6px] rounded-full bg-black mt-[9px]'></span>
                            <p className=' ml-4 font-[500] edu_skill'>
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

export default Education;