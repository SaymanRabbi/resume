import React from 'react';
import user from './img/user.jpg'
const Header = () => {
    return (
        <div className=' h-[200px] w-full bg-[#B02124] flex items-center px-12'>
           <div className=' flex gap-8'>
             <img src={user} alt=""  className=' w-24 h-24 rounded-full bg-cover user_img'/>
             <div>
                <h2 className=' italic text-4xl font-bold text-white profile user_name'>Vince Murray</h2>
                <h2 className=' text-xl italic text-gray-400 mt-2 uppercase user_tittle'>
                    administrative assistant
                </h2>
             </div>
           </div>
        </div>
    );
};

export default Header;