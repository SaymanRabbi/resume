import React from 'react';

const Details = () => {
    const SKILLS=[
        {
            tittle:'GENERAL MANAGER'

        },{
            tittle:'PRBOLEM SOLVING SKILLS'
        },{
            tittle:'LEADERSHIP SKILLS'
        },{
            tittle:'COMMUNICATION SKILLS'
        },{
            tittle:'TEAMWORK SKILLS'
        }
    ]
    return (
        <div className=' col-span-4'>
            <div className='details'>
               <div className='text-center uppercase flex items-center gap-1 justify-center'>
                <div className='w-2 h-2 bg-[#1b3055] rounded-full'>

                </div>
               <h2 className='font-bold'>
                     Details
               </h2>
               <div className='w-2 h-2 bg-[#1b3055] rounded-full'>

              </div>
               </div>
               <h2 className='text-center font-semibold user_address'>
               102 Main Street,<br />Suite 100, New York
               </h2>
               <h2 className='text-center font-semibold user_country'>
               United States
               </h2>
                <h2 className='text-center font-semibold user_phone'>
                (123) 456-7890
                </h2>
                <h2 className='text-center font-semibold user_email'>
                Test@gmail.com
                </h2>
            </div>
            <div className=' mt-5'>
               <div className='text-center uppercase flex items-center gap-1 justify-center'>
                <div className='w-2 h-2 bg-[#1b3055] rounded-full'>

                </div>
               <h2 className='font-bold'>
                     Skills
               </h2>
               <div className='w-2 h-2 bg-[#1b3055] rounded-full'>

              </div>
               </div>
               {
                        SKILLS.map((item,index)=>(
                            <div className='text-center skills font-semibold skills flex justify-center' key={index}>
                            <h2 className=' w-fit border-b-[3px] border-[#1b3055] skill_tittle'>
                            {item.tittle}
                            </h2>
                            </div>
                        ))
               }
            </div>
        </div>
    );
};

export default Details;