import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,faRectangleList,faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import useWidth from '../../../../hooks/useWidth';
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
   const width = useWidth()
    return (
        <div className=' col-span-8'>
            <div className={`flex ${width>1280?"gap-2":" gap-5"}`}>
            <div className=' w-full flex flex-col  justify-center h-auto'>
            <div className={` flex items-center ${width>1280?"gap-2":"gap-5"}`}>
            <FontAwesomeIcon icon={faUser} className={`text-[#1b3055]  ${width>1280?"text-[8px]":"text-sm"}`} />
            <h2 className={` font-semibold text-[#1b3055] uppercase ${width>1280?"text-[10px]":""}`}>Profile</h2>
            </div>
            <div className={`relative ${width>1280?"gap-3 mt-2":" gap-6 mt-3"}`}>
            <p className={` text-[#1b3055] font-semibold ml-[2px] user_profile  w-fit  border-[#1b3055]  ${width>1280?"border-l-[1px] px-4 text-[8px] leading-4":"border-l-[2px] px-6"}`}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquet, nisl nisl aliquet nisl, eget aliquam nunc nisl sit amet nisl. Sed euismod, nunc ut aliquam aliquet, nisl nisl aliquet nisl, eget aliquam nunc nisl sit amet nisl. nisl nisl aliquet nisl, eget aliquam nunc nisl sit w-fit  border-[#1b3055]
                    w-fit  border-[#1b3055]
                    w-fit  border-[#1b3055]
                 </p>
                 <span className={`absolute  rounded-full bg-[#1b3055] left-[0px] top-[-3px] ${width>1280?"w-[.3rem] h-[.3rem]":"w-2 h-2"}`}></span>
            </div>
               
            <div className={` flex ${width>1280?"gap-2 mt-1":"gap-5 mt-4"}  items-center`}>
            <FontAwesomeIcon icon={faRectangleList} className={`text-[#1b3055]  ${width>1280?"text-[8px]":"text-sm"}`} />
            <h2 className={` font-semibold text-[#1b3055] uppercase ${width>1280?"text-[10px]":""}`}>Employment History</h2>
            </div>
            {/* ----Employment History--- */}
            <div className={` relative border-[#1b3055] ml-[2px]  ${width>1280?"border-l-[1px] px-4 text-[6px] mt-2":"border-l-[2px] px-6 mt-3"}`}>
                <span className={`absolute  rounded-full bg-[#1b3055] left-[-3px] top-[-3px] ${width>1280?"w-[.3rem] h-[.3rem]":"w-2 h-2"}`}></span>
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
                            <div className={`absolute  bg-[#1b3055] rounded-full  ${width>1280?"w-[.2rem] h-[.2rem] mt-[1%] left-0":"w-[.5rem] h-[.5rem] mt-[2%] left-0"}`}>
                            </div>
                            <p className={`employment employ_skill ${width>1280?"ml-2 text-[6px]":"ml-5"}`}>
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
            <div className={`flex items-center ${width>1280?"mt-2 gap-3":"mt-6 gap-5"}`}>
            <FontAwesomeIcon icon={faGraduationCap} className={`text-[#1b3055]  ${width>1280?"text-[8px]":"text-sm"}`} />
            <h2 className={` font-semibold text-[#1b3055] uppercase ${width>1280?"text-[10px]":""}`}>Education</h2>
            </div>
             <>
             <div className={`education  relative border-[#1b3055] ml-[2px]  ${width>1280?"border-l-[1px] px-4 text-[6px] mt-2":"border-l-[2px] px-6 mt-3"}`}>
             <span className={`absolute  rounded-full bg-[#1b3055] left-[-3px] top-[-3px] ${width>1280?"w-[.3rem] h-[.3rem]":"w-2 h-2"}`}></span>
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