import React from 'react';

const Employment = () => {
    const employmentHistory=[
        {
            id:1,
            tittle:'Sales Manager, Winthrop and Lee',
            year:'sep 2010 - sep 2012',
            location:'Boulder',
            skill:[{
                name:'Greets up to 40 customers per hour and takes accurate orders on the register for menu items.'
            },
            {
                name:'Prepares food items for a menu of 36 dishes using restaurant-supplied recipes by measuring ingredients and mixing items correctly.'
            },{
                name:'Actively brainstorm new concepts with team members to develop creative solutions and unique strategies.'
            },
            {
                name:'Greets up to 40 customers per hour and takes accurate orders on the register for menu items.'
            }]
        },
        {
            id:2,
            tittle:'Sales Manager, Lola & Co',
            year:'sep 2010 - sep 2012',
            location:'Denver',
            skill:[{
                name:'Successfully managed a team of 10 sales associates to achieve sales targets and exceed customer expectations.'
            },
            {
                name:'Developed and implemented a sales strategy to increase revenue by 20% in 6 months.'
            },{
                name:'Prepares food items for a menu of 36 dishes using restaurant-supplied recipes by measuring ingredients and mixing items correctly.'
            },
            {
                name:'Monitors and maintains inventory levels to ensure adequate supplies are available for daily operations.'
            }]
        }
        
    ]
   
    return (
        <div className=' my-3'>
            <h2 className=' font-semibold text-2xl uppercase tracking-widest'>
                Employment
            </h2>
            <div className=' my-3 w-full h-[3px] bg-[#000000]'></div>
            {
                employmentHistory.map((item,index)=> <div key={index} className=' my-3'>
                 <div className=' flex justify-between'>
             <h2 className='font-bold text-[#1b3055] employ_tittle'>
                 {
                        item.tittle
                 }
                </h2>
                <h2 className='font-bold text-[#1b3055] employ_location'>
                {
                    item.location
                }
                </h2>
             </div>
                <h2 className=' text-gray-600 font-semibold mb-3 employ_year'>
               {
                     item.year
               }
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
                </div>)
            }
                
        </div>
    );
};

export default Employment;