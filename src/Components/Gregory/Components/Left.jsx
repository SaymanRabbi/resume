import React from 'react';
import user from './img/user.jpg'
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
    return (
        <div className=' col-span-7 px-10 py-16'>
               <div className=' flex gap-5 mb-8 items-center'>
                 <img src={user} alt="" className=' w-24 h-24 rounded-full user_img'/>
                 <div>
                        <h2 className=' font-bold text-[40px] text-[#1b3055] user_name'>
                            John Doe
                        </h2>
                        <h2 className=' uppercase font-semibold user_tittle'>
                            carpenter
                        </h2>
                 </div>
               </div>
            <h2 className=' font-bold text-2xl text-[#1b3055]'>
                Profile
            </h2>
            <p className='profile-dec font-semibold mt-2 text-[#1b3055] user_profile'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, recusandae. Accusamus id iure perferendis repellat est facilis quibusdam deleniti tenetur. Et distinctio iure nesciunt assumenda aspernatur tempora eum alias nobis.
            </p>


            <div className=' mt-4'>
                <h2 className=' font-bold text-2xl text-[#1b3055] my-3'>Employment History</h2>
                {
                    employmentHistory.map((item,index)=><div key={index}>
                    <h2 className='font-bold text-[#1b3055] employ_tittle'>
               {item.tittle}
                </h2>
                <h2 className=' text-gray-600 font-semibold mb-3 employ_year'>
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
                    </div>)
                }
            </div>
            <div>
                <h2 className=' font-bold text-2xl text-[#1b3055] mt-3'>
                    Education
                </h2>
                {
                    education.map((item,index)=>(
                       <div className='education mt-3' key={index}>
                        <h2 className=' font-semibold text-xl text-[#1B3055] edu_tittle'>
                        {item.tittle} 
                </h2>
                <h2 className=' text-gray-500 font-semibold edu_year'>
                    {item.year}
                </h2>
                       </div>
                    ))
                }
                </div>

                <div>
                    <h2 className='references font-bold text-2xl text-[#1b3055] mt-3'>
                        References
                    </h2>
                </div>
        </div>   
      
    );
};

export default Left;