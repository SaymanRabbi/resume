import React, { useContext } from 'react';
import user from './img/user.jpg'
import useWidth from '../../../../hooks/useWidth';
import { useLocation } from 'react-router-dom';
import { data } from '../../../../App';
const Header = () => {
    const width = useWidth()
    const path = useLocation().pathname.split('/')[2]
    const {allData} = useContext(data)
    const datas = allData[path]?.personal_details
    return (
       <>
       {
              datas ?  <div className={`bg-[#4AFCBA] flex ${width>1280?"h-[20%] gap-6":"h-[170px] gap-8"} rounded `}>
              <img src={datas?.imgUrl} alt="" className={`h-full ${width>1280?"w-[110px] h-[100%]":"w-[200px]"} bg-cover bg-center user_img`} />
              <div className={` text-[#1b3055] ${width>1280?"py-1":"py-3"}`}>
                 <h2 className={`username font-bold user_name ${width>1280?"text-[16px]":"text-[30px]"}`}>{datas?.firstName} {datas?.lastName}</h2>
                 <h2 className={`font-semibold user-tittle ${width>1280?"text-[14px]":""}`}>{
                     datas?.tittle
                 }</h2>
                 <div className={`${width>1280?" mt-2":" mt-6"}`}>
                  <h2 className={`${width>1280?' text-[8px]':''}`}>
                     <span className='user_address'> {
                         datas?.user_city
                     }, {datas?.user_postal_code}, {
                         datas?.user_country
                     }</span>,<span className='user_country'>{
                         datas?.user_country
                     }</span> , <span className='user_phone'>{
                         datas?.user_phone
                     }</span> , <span className='user_emnail'>{
                         datas?.user_email
                     }</span>
                  </h2>
                 </div>
              </div>
         </div>: null
       }
       </>
    );
};

export default Header;