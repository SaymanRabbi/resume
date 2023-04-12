import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,faRectangleList,faGraduationCap } from '@fortawesome/free-solid-svg-icons';
const DetailsRight = () => {
    const employmentHistory=[
       {
        id:1,
        tittle:'GRAPHIC DESIGNER | FIRST AGENCY | SEATTLE, WA',
        year:'september 2010 - september 2012',
        skill:[ {
            name:'Design brochures, billboards, flyers and other marketing material for 8 clients'

        },{
            name:'Create and design campaign for Sweet Chips, resulting in a 30% increase in sales and a large social media following'
        },{
            name:'Actively brainstorm new concepts with team members to develop creative solutions and unique strategies.'
        }
        ,{
            name:'Create and design campaign for Sweet Chips, resulting in a 30% increase in sales and a large social media following'
        }]
       },{
        id:2,
        tittle:'FOOD SERVER | BURGER SHACK UNLIMITED | NEWARK, NJ',
        year:'september 2010 - september 2012',
        skill:[ {
            name:'Greets up to 40 customers per hour and takes accurate orders on the register for menu items.'
        },
        {
            name:'Prepares food items for a menu of 36 dishes using restaurant-supplied recipes by measuring ingredients and mixing items correctly.'
        },
        
        {
            name:'Uses the computerized POS system to calculate customer food order totals and takes payment for cash and credit card transactions.'
        }, {
            name:'Greets up to 40 customers per hour and takes accurate orders on the register for menu items.'
        }]
       }
    ]
   const education=[
    {   id:1,
        tittle:'B.A. IN ACCOUNTING CANDIDATE',
        year:'september 2010 - september 2012'
    },{
        id:2,
        tittle:'VALLEY HIGH SCHOOL | VALLEY, MAINE',
        year:'september 2013 - september 2015'
    }
   ]
    return (
        <div className=' col-span-8'>
            <div className=' flex gap-5'>
            <div className=' w-full flex flex-col  justify-center h-auto'>
            <div className=' flex gap-5 items-center'>
            <FontAwesomeIcon icon={faUser} className='text-[#1b3055] text-sm' />
            <h2 className=' font-bold text-[#1b3055] uppercase'>Profile</h2>
            </div>
            <div className=' flex gap-6 items-center h-[150px] justify-center mt-3'>
            <div className='w-[20px] bg-[#1b3055]  ml-1 h-[90%] relative'>
            <span className='absolute w-2 h-2 rounded-full bg-[#1b3055] left-[-2px] top-[-1px]'></span>
            </div>
            
            <p className=' text-[#1b3055] font-semibold user_profile'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquet, nisl nisl aliquet nisl, eget aliquam nunc nisl sit amet nisl. Sed euismod, nunc ut aliquam aliquet, nisl nisl aliquet nisl, eget aliquam nunc nisl sit amet nisl. nisl nisl aliquet nisl, eget aliquam nunc nisl sit amet nisl. Sed euismod, nunc ut aliquam aliquet, nisl nisl aliquet nisl, eget aliquam nunc nisl sit amet nisl.
                 </p>
            </div>
               
            <div className=' flex gap-5 items-center mt-4'>
            <FontAwesomeIcon icon={faRectangleList} className='text-[#1b3055] text-sm' />
            <h2 className=' font-bold text-[#1b3055] uppercase'>Employment History</h2>
            </div>
            {/* ----Employment History--- */}
            <div className=' flex gap-6 h-[80%] mt-3'>
            <div className='w-[7px] bg-[#1b3055]  ml-1 h-[100%] relative'>
            <span className='absolute w-2 h-2 rounded-full bg-[#1b3055] left-[-2px] top-[-3px]'></span>
            </div>
            
             <div>
            {
                employmentHistory.map((item,index)=>
                <div key={index}>
                 <h2 className='font-bold uppercase employ_tittle'>
                {item.tittle}
                </h2>
                <h2 className=' text-gray-500 employ_year'>
                    {item.year}
                </h2>
             {
                    item.skill.map((item,index)=>(
                        <div className=' flex  gap-3 relative' key={index}>
                            <div className=' absolute w-[.5rem] h-[.5rem] bg-[#1b3055] rounded-full mt-[2%] left-0'>
                            </div>
                            <p className='employment ml-5 employ_skill'>
                                {item.name}
                            </p>
                            </div>
                    ))
                }
                </div>
                )
            }
             </div>
            </div>
            {/* ----Employment History--- */}
            <div className=' flex gap-5 items-center mt-6'>
            <FontAwesomeIcon icon={faGraduationCap} className='text-[#1b3055] text-sm' />
            <h2 className=' font-bold text-[#1b3055] uppercase'>Education</h2>
            </div>
             <>
             <div className=' flex gap-6 h-[90%] mt-3 education'>
            <div className='w-[3.5px] bg-[#1b3055]  ml-1 h-[90%] relative'>
            <span className='absolute w-2 h-2 rounded-full bg-[#1b3055] left-[-2px] top-[-3px]'></span>
            </div>
            
             
               <div>
               {
                    education.map((item,index)=><div key={index}> <h2 className=' font-semibold edu_tittle'>
                      {item.tittle}
                       </h2>
                       <h2 className=' text-gray-500 edu_year'>
                          {item.year}
                       </h2>
       
                       </div>)
                }
            
               </div>
                </div>
                
                
             </>
            </div>
            
            </div>
        </div>
    );
};

export default DetailsRight;