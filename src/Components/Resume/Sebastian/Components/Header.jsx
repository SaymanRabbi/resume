import React from 'react';
import user from './img/user.jpg'
import useWidth from '../../../../hooks/useWidth';
const Header = () => {
  const widht = useWidth()
    return (
        <div className={`${widht>1280?'h-[15%] gap-1':'h-[200px] gap-2'} w-full flex `}>
            <img src={user} alt="" className={`h-full ${widht>1280?'w-[100px]':'w-[200px]'} user_img`}/>
            <div className={`rounded-t-md bg-[#FEE14B] w-full ${widht>1280?' p-3':' p-12'}`}>
              <h2 className='name'>
                <span className={`font-bold uppercase tracking-widest user_name ${widht>1280?"text-[16px] ":"text-4xl"}`}>
                   sebastian <br /> wilder
                </span>
              </h2>
                <p className={` tracking-widest font-bold user_tittle ${widht>1280?"text-[12px]":"mt-1"}`}>
                   Student
                </p>
            </div>
        </div>
    );
};

export default Header;