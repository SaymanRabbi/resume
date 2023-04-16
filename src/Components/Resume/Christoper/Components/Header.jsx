import React from 'react';
import user from './Img/user1.jpg'
const Header = () => {
    return (
        <div className='grid grid-cols-12 items-center'>
             <div className=' col-span-4'>
               <img src={user} alt="" className=' w-24 h-24 user_img' />
               <h1 className=' mt-2 font-medium user_tittle'>Psychology</h1>
               <h2 className='user_email'>test@gmail.com</h2>
               <h2 className='mb-2 user_phone'>(405) 7410000</h2>
               <h2 className='user_address'>
               address: Lorem ipsum dolor sit consectetur adipisicing elit
               </h2>
             </div>
             <div className=' col-span-8'>
                <div >
                    <div className='flex flex-col  text-[60px] font-bold text-[#1B3055]'>
                    <span className='user_name'>
                    Christoper
                    </span>
                    <span className=' mt-[-32px] user_name'>
                    Gonan
                    </span>
                    </div>
                    <div className='bg-[#EDEDEC] p-2 rounded-lg'>
                        <h2 className='text-2xl font-bold  text-[#1B3055]'>
                            Profile
                        </h2>
                       <p className='user_profile'>
                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, veniam odit quas nostrum repudiandae, quibusdam error maxime modi officiis qui, reiciendis provident doloribus omnis facilis? Delectus sapiente molestias aspernatur consectetur?
                       </p>
                    </div>
                </div>
             </div>
        </div>
    );
};

export default Header;