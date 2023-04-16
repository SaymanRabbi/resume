import React from 'react';
import img from './img/user.jpg'
const Header = () => {
    return (
        <div className=' grid grid-cols-12 gap-x-6'>
            <div className='col-span-2'>
                <img src={img} alt=""  className=' h-32 w-full rounded-md user_img'/>
            </div>
            <div className=' col-span-10'>
             <div className='flex justify-between'>
               <div>
                <h2 className=' uppercase text-3xl font-semibold text-[#1b3055] user_name'>Monica helmsley</h2>
                <p className=' text-black user_tittle mt-2 text-xl font-[500]'>Marketing Manager</p>
               </div>
               <div>
                 <h2 className=' user_email text-[#1b3055] text-xl font-[500]'>
                    monica@gmail.com
                 </h2>
                    <h2 className=' user_phone text-[#1b3055] text-xl font-[700]'>
                    +1 234 567 890
                    </h2>
               </div>
             </div>
             <div className=' w-full h-[5px] bg-[#1b3055] mt-4 mb-2'></div>
             <div className=' address flex gap-x-2'>
               <h2 className=' user_address'>?? Serial Drive,Austin,TX 78758,</h2>
                <h2 className='user_email'>United States</h2>
             </div>
            </div>
        </div>
    );
};

export default Header;