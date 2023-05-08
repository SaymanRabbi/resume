import React from 'react';
import useWidth from '../../../../hooks/useWidth';

const RightDetails = () => {
    const employmentHistory=[
        {
             id:1,
             tittle:' Graphic Designer | First Agency | Seattle, WA',
             year:' september 2010 - september 2012',
                skill:[{
                    id:1,
                    name:'Design brochures, billboards, flyers and other marketing material for 8 clients'
        
                },{
                    id:2,
                    name:'Create and design campaign for Sweet Chips, resulting in a 30% increase in sales and a large social media following'
                },{
                    id:3,
                    name:'Actively brainstorm new concepts with team members to develop creative solutions and unique strategies.'
                },
                {
                    id:4,
                    name:'Design brochures, billboards, flyers and other marketing material for 8 clients'
        
                }]
        },{
            id:2,
            tittle:' Food Server | Burger Shack Unlimited | Newark, NJ',
            year:' september 2010 - september 2012',
            skill:[ {
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
        }
        
    ]
    const education=[
        {
            tittle:' B.A. in Accounting candidate',
            year:'september 2010 - september 2012'
        },{
            tittle:' Valley High School | Valley, Maine',
            year:'september 2013 - september 2015'
        }
    ]
    const width = useWidth()
    return (
        <div className=' col-span-8'>
            <h2 className={`font-bold ${width>1280?"text-[12px]":"text-2xl"} text-[#1b3055]`}>
                Profile
            </h2>
            <p className={`profile-dec font-semibold  text-[#1b3055] user_profile ${width>1280?"mt-1 text-[8px]":"mt-2"}`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, recusandae. Accusamus id iure perferendis repellat est facilis quibusdam deleniti tenetur. Et distinctio iure nesciunt assumenda aspernatur tempora eum alias nobis.
            </p>


            <div className={`${width>1280?"mt-1":"mt-4"}`}>
                <h2 className={`font-bold ${width>1280?"text-[12px]":"text-2xl"} text-[#1b3055]`}>Employment History</h2>
               {
                     employmentHistory.map((item,index)=><div key={index}>
                      <h2 className={`font-bold text-[#1b3055] employ_tittle ${width>1280?"text-[8px]":""}`}>
                   {
                          item.tittle
                   }
                </h2>
                <h2 className={`text-gray-600 font-semibold  employ_year ${width>1280?"text-[8px] mb-1 mt-1":"mb-3 mt-1"}`}>
                    {
                        item.year
                    }
                </h2>
             {
                    item.skill.map((item,index)=>(
                        <div className={` flex  relative ${width>1280?"gap-1":"gap-3"}`} key={index}>
                            <div className={` absolute  bg-[#1b3055] rounded-full left-0 ${width>1280?"w-[.2rem] h-[.2rem] mt-[1%] ":"w-[.5rem] h-[.5rem] mt-[2%] "}`}>
                            </div>
                            <p className={`employment  employ_skill ${width>1280?"ml-[6px] text-[7px]":"ml-5"}`}>
                                {item.name}
                            </p>
                            </div>
                    ))
                }
                     </div>)
               }
                 
            </div>
            <div>
                <h2 className={`font-bold ${width>1280?"text-[12px] mt-1":"text-2xl mt-3"} text-[#1b3055]`}>
                    Education
                </h2>
                {
                    education.map((item,index)=>(
                       <div className='education' key={index}>
                        <h2 className={`font-bold text-[#1b3055] edu_tittle ${width>1280?"text-[8px]":""}`}>
                        {item.tittle} 
                </h2>
                <h2 className={`text-gray-600 font-semibold  edu_year ${width>1280?"text-[8px] mb-1 mt-1":"mb-3 mt-1"}`}>
                    {item.year}
                </h2>
                </div>
                    ))
                }
                </div>
        </div>
    );
};

export default RightDetails;