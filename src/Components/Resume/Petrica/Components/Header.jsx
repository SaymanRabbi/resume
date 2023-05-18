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
       <div className={`${width>=1280 || width<=480 || width<=768?"h-[80px]":"h-[170px]"}`}>
       {
              datas ?  <div className={`bg-[#4AFCBA] flex h-[100%] rounded `}>
             <div className='h-[100%] w-[20%]'>
             <img src={datas?.imgUrl} alt="" className={`h-[100%] w-[100%] ${width>=1280 || width<=480 || width<=768?"":""} bg-cover bg-center user_img`} />
             </div>
              <div className={` text-[#1b3055] w-[80%] px-3 ${width>=1280 || width<=480 || width<=768?"py-1":"py-3"}`}>
                 <h2 className={`username font-bold user_name ${width>=1280 || width<=480 || width<=768?"text-[16px]":"text-[30px]"}`}>{datas?.firstName} {datas?.lastName}</h2>
                 <h2 className={`font-semibold user-tittle ${width>=1280 || width<=480 || width<=768?"text-[14px]":""}`}>{
                     datas?.tittle
                 }</h2>
                 <div className={`${width>=1280 || width<=480 || width<=768?" mt-2":" mt-6"}`}>
                  <h2 className={`${width>=1280 || width<=480 || width<=768?' text-[8px]':''}`}>
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
       </div>
    );
};

export default Header;