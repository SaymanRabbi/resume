import React from 'react';
import user from './img/user.jpg';
const Header = () => {
    return (
        <div className=' grid grid-cols-12 pl-16 py-16'>
            <div className='col-span-3 flex w-full'>
                <img src={user} alt="" className=' w-24 h-24 rounded-full user_img'/>
            </div>
            <div className='col-span-9'>
                <h2 className=' font-[500] text-[#1b3055] text-4xl user_name'>
                    Elsa Williams
                </h2>
                <p className=' text-gray-600 text-xl font-[500] mt-2 user_tittle'>
                    Physical Therapist
                </p>
            </div>
        </div>
    );
};

export default Header;