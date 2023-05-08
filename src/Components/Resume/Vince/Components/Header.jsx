import React from 'react';
import user from './img/user.jpg'
import useWidth from '../../../../hooks/useWidth';
const Header = () => {
    const width = useWidth()
    console.log(width>1280);
    return (
        <div className=' h-[15%] w-full bg-[#B02124] flex items-center  rounded-t-[6px] px-8'>
           <div className=' flex items-center gap-x-[3%] w-full'>
             <img src={user} alt=""  className={`rounded-full bg-cover user_img ${width>1280?'h-[50px] w-[50px]':'h-[70px] w-[70px]'}`}/>
             <div>
                <h2 className={`italic ${width>1280?"text-lg":"text-xl"} font-bold text-white profile user_name`}>Vince Murray</h2>
                <h2 className='text-lg sm:text-sm italic text-gray-400 mt-2 uppercase user_tittle'>
                    administrative assistant
                </h2>
             </div>
           </div>
        </div>
    );
};

export default Header;