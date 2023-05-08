import React from 'react';
import user from './img/user.jpg'
import useWidth from '../../../../hooks/useWidth';
const Header = () => {
    const width = useWidth()
    return (
        <div className={`bg-[#4AFCBA] flex ${width>1280?"h-[20%] gap-6":"h-[170px] gap-8"} rounded `}>
             <img src={user} alt="" className={`h-full ${width>1280?"w-[110px] h-[100%]":"w-[200px]"} bg-cover bg-center user_img`} />
             <div className={` text-[#1b3055] ${width>1280?"py-1":"py-3"}`}>
                <h2 className={`username font-bold user_name ${width>1280?"text-[16px]":"text-[30px]"}`}>Patricia Giordano</h2>
                <h2 className={`font-semibold user-tittle ${width>1280?"text-[14px]":""}`}>Receptionnist</h2>
                <div className={`${width>1280?" mt-2":" mt-6"}`}>
                 <h2 className={`${width>1280?' text-[8px]':''}`}>
                    <span className='user_address'> 3620  W 6th St, Los Angeles, CA 90020</span>,<span className='user_country'>unitaed states</span> , <span className='user_phone'>0123456789</span> , <span className='user_emnail'>test@gmail.com</span>
                 </h2>
                </div>
             </div>
        </div>
    );
};

export default Header;