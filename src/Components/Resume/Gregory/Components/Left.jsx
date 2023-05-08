import React from 'react';
import user from './img/user.jpg'
import useWidth from '../../../../hooks/useWidth';
const Left = () => {
    const employmentHistory=[
        {
            id:1,
            tittle:'Graphic Designer | First Agency | Seattle, WA',
            year:'september 2010 - september 2012',
            skill:[{
                name:'Design brochures, billboards, flyers and other marketing material for 8 clients'
            },{
                name:'Create and design campaign for Sweet Chips, resulting in a 30% increase in sales and a large social media following'
            },{
                name:'Actively brainstorm new concepts with team members to develop creative solutions and unique strategies.'
            }]
        },{
            id:2,
            tittle:'Food Server | Burger Shack Unlimited | Newark, NJ',
            year:' september 2010 - september 2012',
            skill:[{
                name:'Greets up to 40 customers per hour and takes accurate orders on the register for menu items.'
            },
            {
                name:'Prepares food items for a menu of 36 dishes using restaurant-supplied recipes by measuring ingredients and mixing items correctly.'
            },{
                
                    name:'Prepares food items for a menu of 36 dishes using restaurant-supplied recipes by measuring ingredients and mixing items correctly.'
                
            } ]
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
        <div className={` col-span-7 ${width>1280?"p-6":"px-10 py-16"}`}>
               <div className={` flex  ${width>1280?"mb-3 gap-2":"mb-8 gap-5"} items-center`}>
                 <img src={user} alt="" className={`${width>1280?" w-[50px] h-[50px]":"w-24 h-24"} rounded-full user_img`}/>
                 <div>
                        <h2 className={` font-bold ${width>1280?"text-[20px]":"text-[40px]"} text-[#1b3055] user_name`}>
                            John Doe
                        </h2>
                        <h2 className=' uppercase font-semibold user_tittle'>
                            carpenter
                        </h2>
                 </div>
               </div>
            <h2 className={`font-bold ${width>1280?"text-[14px]":"text-2xl"} text-[#1b3055]`}>
                Profile
            </h2>
            <p className={`profile-dec font-semibold ${width>1280?" mt-1 text-[8px]":"mt-2"} text-[#1b3055] user_profile`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, recusandae. Accusamus id iure perferendis repellat est facilis quibusdam deleniti tenetur. Et distinctio iure nesciunt assumenda aspernatur tempora eum alias nobis.
            </p>


            <div className={` ${width>1280?"mt-2":" mt-4"}`}>
                <h2 className={`font-bold ${width>1280?"text-[14px]":"text-2xl"} text-[#1b3055]`}>Employment History</h2>
                {
                    employmentHistory.map((item,index)=><div key={index}>
                    <h2 className={`font-bold text-[#1b3055] employ_tittle ${width>1280?"text-[8px]":""}`}>
               {item.tittle}
                </h2>
                <h2 className={`text-gray-600 font-semibold employ_year ${width>1280?" mb-1 text-[8px]":"mb-3"}`}>
                   {item.year}
                </h2>
             {
                    item.skill.map((item,index)=>(
                        <div className=' flex  gap-3 relative' key={index}>
                            <div className={`absolute  bg-[#1b3055] rounded-full  left-0 ${width>1280?"w-[.2rem] h-[.2rem] mt-[1%]":"w-[.5rem] h-[.5rem] mt-[2%]"}`}>
                            </div>
                            <p className={`employment  employ_skill ${width>1280?"text-[6px] ml-[7px]":"ml-5"}`}>
                                {item.name}
                            </p>
                            </div>
                    ))
                }
                    </div>)
                }
            </div>
            <div>
                <h2 className={`font-bold ${width>1280?"text-[14px] mt-1":"text-2xl"} text-[#1b3055]`}>
                    Education
                </h2>
                {
                    education.map((item,index)=>(
                       <div className={`education ${width>1280?"":" mt-3"}`} key={index}>
                        <h2 className={` font-semibold text-xl text-[#1B3055] edu_tittle ${width>1280?"text-[8px]":
                    ""}`}>
                        {item.tittle} 
                </h2>
                <h2 className={`text-gray-500 font-semibold edu_year ${width>1280?"text-[8px]":""}`}>
                    {item.year}
                </h2>
                       </div>
                    ))
                }
                </div>

                <div>
                    <h2 className={`references font-bold ${width>1280?"text-[14px]":"text-2xl"} text-[#1b3055] mt-3`}>
                        References
                    </h2>
                </div>
        </div>   
      
    );
};

export default Left;