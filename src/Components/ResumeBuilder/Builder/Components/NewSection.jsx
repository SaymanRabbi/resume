import React from 'react';

const NewSection = () => {
    return (
        <div>
            <h2 className='text-[24px] font-[500] mt-6'>
            Add Section
            </h2>
            <div className=' grid grid-cols-12 mt-2'>
               <div className=' col-span-6 flex items-center gap-2 cursor-pointer group'>
                 <img src="https://resume.io/assets/media/section-custom9a5c47fa7e40552b402c.svg" alt="" />
                 <h2 className=' text-[20px] font-[500] group-hover:text-blue-400'>
                 Custom Section
                 </h2>
               </div>
               <div className=' col-span-6'>
               <div className=' col-span-6 flex items-center gap-2 cursor-pointer group'>
                 <img src="https://resume.io/assets/media/section-coursesac242920cf036913a538.svg" alt="" />
                 <h2 className=' text-[20px] font-[500] group-hover:text-blue-400'>
                 Courses
                 </h2>
               </div>
               </div>
               <div className=' col-span-6 flex items-center gap-2 cursor-pointer group'>
                 <img src="https://resume.io/assets/media/section-activities6d0a105b290e6ee45eed.svg" alt="" />
                 <h2 className=' text-[20px] font-[500] group-hover:text-blue-400'>
                 Extra-curricular Activities
                 </h2>
               
               </div>
               <div className=' col-span-6 flex items-center gap-2 cursor-pointer group'>
                 <img src="https://resume.io/assets/media/section-internshipsc5602363c63601db351a.svg" alt="" />
                 <h2 className=' text-[20px] font-[500] group-hover:text-blue-400'>
                 InternShip
                 </h2>
               
               </div>
            </div>
        </div>
    );
};

export default NewSection;