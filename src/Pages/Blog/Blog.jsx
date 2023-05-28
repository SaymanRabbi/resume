import { faCalendarDays, faPlus, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Blog.css';
import BlogData from './BlogData';
const Blog = () => {
    return (
        <div className=' relative p-0 mb-[50px]'>
        <div className=' pt-[50px] pr-[20px] pb-[100px] pl-[20px] relative blog flex justify-center items-center'>
            <div>
            <h2 className=' text-3xl font-[600]'>RESUME BLOG</h2>
            </div>
        </div>
         <div className=' max-w-[1200px] w-[100%] mx-auto grid grid-cols-12 mt-[40px]'>
            {
                BlogData.map((val, ind) => 
                    <div className=' lg:ml-[8%] lg:col-span-10 col-span-12 ml-0 shadow-lg mb-[40px]' key={ind}>
                       <div className=' relative mb-[70px]'>
                         <div className=' cursor-pointer p-10 overflow-hidden lg:flex block gap-x-6'>
                            <div className=' lg:w-[30%] w-[100%]'>
                                <img src={val?.img} alt="" className=' w-[100%]' />
                            </div>
                            <div className=' lg:w-[70%] w-[100%]'>
                                <h2 className=' text-[22px] font-[650] text-gray-700 mb-5'>{val?.tittle}</h2>
                                <p className=' text-gray-800 font-[400] text-[18px] mb-5'> {val?.sortDesc}</p>
                                <div className=' flex flex-wrap'>
                                <div className=' flex gap-x-8 flex-wrap'>
                                    <div className=' flex items-center gap-x-2'>
                                         <div className=' w-[25px] h-[25px] rounded-full bg-[#DAD8FF] flex justify-center items-center'>
                                         <FontAwesomeIcon icon={faUser} className=' text-[#6C62FF]'/>
                                         </div>
                                         <h2 className='font-[500] text-[18px] text-gray-700
                                         '>By {val?.author}</h2>
                                    </div>
                                    <div className=' flex items-center gap-x-2'>
                                         <div className=' w-[25px] h-[25px] rounded-full bg-[#FFD9D9] flex justify-center items-center'>
                                         <FontAwesomeIcon icon={faCalendarDays} className=' text-[#FE739E]'/>
                                         </div>
                                         <h2 className='font-[500] text-[18px] text-gray-700
                                         '>{val?.date}</h2>
                                    </div>
                                </div>
                                <div className='ml-auto'>
                                     <div className=' flex gap-x-2 items-center hover:text-[#6C62FF]'>
                                     <h2 className=' text-[18px] font-[500]'>Read More</h2>
                                     <FontAwesomeIcon icon={faPlus} className='text-[16px]'/>
                                     </div>
                                </div>
                                </div>
                            </div>
                         </div>
                         <div className=' absolute top-0 right-0 '> 
                          <p className={`w-[100px] h-[90px] ${val?.color} text-white text-[40px] font-[500] text-center span-border`}>
                            {
                                val?.number
                            }
                          </p>
                         </div>
                       </div>
                    </div>
                )
            }
            
         </div>
     </div>
    );
};

export default Blog;