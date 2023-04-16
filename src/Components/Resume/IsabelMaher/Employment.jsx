import React from 'react';

const Employment = () => {
    const employment =[
       {
            id:1,
            tittle:'Early Childhood Teacher at The Seed',
            location:'Brooklyn, NY',
            year:'Sep 2015 - Sep 2019',
            skill:[ {
              id:1,
              name:'Provided Optimal Care and academic support for children ages 2-5 years old',
          },{
              id:2,
              name:'Developed and implemented lesson plans and activities to meet the needs of all students',
          },{
              id:3,
              name:'Established and maintained positive relationships with students, parents, and colleagues',
          },{
              id:4,
              name:'Maintained a safe and healthy learning environment',
          }]
       },{
            id:2,
            tittle:'Early Childhood Teacher at The Seed',
            location:'Brooklyn',
            year:'Sep 2019 - Sep 2023',
            skill:[  {
              id:1,
              name:'Developed and implemented lesson plans and activities to meet the needs of all students',
          },{
              id:2,
              name:'Engaged students in learning activities by using a variety of teaching methods and strategies',
          },{
              id:3,
              name:'Created a dynamic and engaging learning environment that met the needs of all learners',
          },{
              id:4,
              name:"Provided various forms of academic support to students, including tutoring, homework help, and test preparation"
          } ]
       }
    ]
    return (
        <div>
           <h1 className=' text-2xl font-semibold uppercase text-[#1b3055]'> 02 Employment</h1>
          {
              employment.map((item,i)=><>
              
           <div className=' grid grid-cols-12 py-5' key={i}>
            <div className=' col-span-4 w-full'>
              <h2  className='text-[#1b3055] text-xl employ_year'>{item.year}</h2>
              <h2 className=' text-gray-500 text-xl employ_location'>{item.location}</h2>
            </div>
            <div className=' col-span-8'>
              <h2 className=' text-2xl text-[#1b3055] font-semibold employ_tittle'>
                {
                    item.tittle
                }
              </h2>
              <div className=' ml-3 py-3'>
                 {
                        item.skill.map((item)=>
                        <div  className=' relative' key={item.id}>
                          <span className=' absolute w-[6px] h-[6px] rounded bg-[#1b3055] mt-[10px]'></span>
                            <p className=' text-gray-500 font-[400] leading-relaxed ml-4 employment employ_skilL'>{item.name}</p>
                        </div>
                        )
                 }
              </div>
            </div>
           </div>
              </>)
          }
        </div>
    );
};

export default Employment;