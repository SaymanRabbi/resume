import React from 'react';
import user from './img/user.jpg'
const Header = () => {
    return (
        <div className=' h-[200px] w-full flex gap-2'>
            <img src={user} alt="" className=' h-full w-[200px] user_img'/>
            <div className=' bg-[#FEE14B] w-full p-12'>
              <h2 className='name'>
                <span className=' text-4xl font-bold uppercase tracking-widest user_name'>
                   sebastian <br /> wilder
                </span>
              </h2>
                <p className='mt-1 tracking-widest font-bold user_tittle'>
                   Student
                </p>
            </div>
        </div>
    );
};

export default Header;