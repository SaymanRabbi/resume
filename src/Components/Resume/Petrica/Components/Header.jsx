import React from 'react';
import user from './img/user.jpg'
const Header = () => {
    return (
        <div className=' bg-[#4AFCBA] flex h-[170px] rounded gap-8'>
             <img src={user} alt="" className='h-full w-[200px] bg-cover bg-center user_img' />
             <div className='py-3 text-[#1b3055]'>
                <h2 className='username font-bold text-[30px] user_name'>Patricia Giordano</h2>
                <h2 className=' font-semibold user-tittle'>Receptionnist</h2>
                <div className=' mt-6'>
                 <h2 >
                    <span className='user_address'> 3620  W 6th St, Los Angeles, CA 90020</span>,<span className='user_country'>unitaed states</span> , <span className='user_phone'>0123456789</span> , <span className='user_emnail'>test@gmail.com</span>
                 </h2>
                </div>
             </div>
        </div>
    );
};

export default Header;