import React, { useContext } from 'react';
import './Header.css'
import img from './img/user2.jpg'
import useWidth from '../../../../hooks/useWidth';
import { useLocation } from 'react-router-dom';
import { data } from '../../../../App';
const Header = () => {
  const width = useWidth()
  const path = useLocation().pathname.split('/')[2]
  const {allData} = useContext(data)
  const personal_info = allData[path]?.personal_details
    return (
        <div className=' grid grid-cols-12'>
          <div className={`col-span-8  ${width>=1280 || width<=480 || width<=768?"pl-10 pt-7":"pl-10 py-10"}`}>
          <h2 className={`text-[#003469]  font-bold user_name ${width>=1280 || width<=480 || width<=768?"text-[14px]":"text-5xl"}`}>
           {
              personal_info?.firstName + " " + personal_info?.lastName
           }
           </h2> 
           <h2 className={`text-[#003469]  font-[500] user_tittle mt-2 ${width>=1280 || width<=480 || width<=768?"text-[14px]":"text-5xl"}`}>
            {
              personal_info?.tittle
            }
           </h2>
           <p className={`mt-2 font-[500] user_profile ${width>=1280 || width<=480 || width<=768?"text-[8px]":""}`}>
           {
              personal_info?.summary
           }
           </p>
          </div>
          <div className='relative w-full h-full col-span-4'>
          <div className={` relative ${width>=1280 || width<=480 || width<=768?"h-[130px] w-[130px] py-4":"clip  pl-3"}`}>
            <img src={personal_info?.imgUrl} alt="" className={`bg-center h-[90%] user_img bg-cover absolute  ${width>=1280 || width<=480 || width<=768?"top-[30px]":"top-[-5px]"}`}/>
            </div>
          </div>
        </div>
    );
};

export default Header;