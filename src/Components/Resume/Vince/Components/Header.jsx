import React, { useContext } from 'react';
import user from './img/user.jpg'
import useWidth from '../../../../hooks/useWidth';
import { useLocation } from 'react-router-dom';
import { data } from '../../../../App';
const Header = () => {
    const width = useWidth()
    const path = useLocation().pathname.split('/')[2]
    const {allData} = useContext(data)
    const profile =  allData[path]?.personal_details
    return (
        <div className=' h-[15%] w-full bg-[#B02124] flex items-center  rounded-t-[6px] px-8'>
           <div className=' flex items-center gap-x-[3%] w-full'>
             <img src={profile?.imgUrl} alt=""  className={`rounded-full bg-cover user_img ${width>1280?'h-[50px] w-[50px]':'h-[70px] w-[70px]'}`}/>
             <div>
                <h2 className={`italic ${width>1280?"text-lg":"text-xl"} font-bold text-white profile user_name`}>
                    {
                        profile?.firstName || profile?.lastName?`${profile?.firstName}-${profile?.lastName}`:''
                    }
                </h2>
                <h2 className='text-lg sm:text-sm italic text-gray-400 mt-2 uppercase user_tittle'>
                   {
                          profile?.tittle
                   }
                </h2>
             </div>
           </div>
        </div>
    );
};

export default Header;