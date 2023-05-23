import React from 'react';
import img from './img/user.jpg'
import { useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { data } from '../../../../App';
import useWidth from '../../../../hooks/useWidth';
const Header = ({id}) => {
  const path = useLocation().pathname.split('/')[2]
  const {allData} = useContext(data)
  const personal_info = allData[id||path]?.personal_details
  const width = useWidth()
    return (
        <div className=' grid grid-cols-12 gap-x-6'>
            <div className='col-span-2'>
                <img src={personal_info?.imgUrl} alt=""  className={`rounded-md user_img ${width>=1280 || width<=480 || width<=768?"h-[50px] w-[70px]":"h-32 w-full"}`}/>
            </div>
            <div className=' col-span-10'>
             <div className='flex justify-between'>
               <div>
                <h2 className={` uppercase font-semibold text-[#1b3055] user_name ${width>=1280 || width<=480 || width<=768?"text-[14px]":"text-3xl"}`}>{
                  personal_info?.firstName
                } {
                  personal_info?.lastName
                }</h2>
                <p className={`text-black user_tittle font-[500] ${width>=1280 || width<=480 || width<=768?"text-[8px]  mt-1":"text-xl  mt-2 "}`}>{
                  personal_info?.tittle
                }</p>
               </div>
               <div>
                 <h2 className={`user_email text-[#1b3055] font-[500] ${width>=1280 || width<=480 || width<=768?"text-[8px]  mt-1":"text-xl "}`}>
                   {
                      personal_info?.user_email
                   }
                 </h2>
                    <h2 className={`user_phone text-[#1b3055] font-[700] ${width>=1280 || width<=480 || width<=768?"text-[8px]  mt-1":"text-xl "}`}>
                    {
                      personal_info?.user_phone
                    }
                    </h2>
               </div>
             </div>
             <div className={`w-full  bg-[#1b3055] ${width>=1280 || width<=480 || width<=768?"mt-2 mb-1 h-[2px]":" mt-4 mb-2 h-[5px]"}`}></div>
             <div className={` address flex  ${width>=1280 || width<=480 || width<=768?"text-[8px] gap-x-1":"gap-x-2"}`}>
               <h2 className={`user_address`}>{
                personal_info?.user_city
               } {
                personal_info?.user_postal_code
               }</h2>
                <h2 className='user_email'>{
                  personal_info?.user_country
                }</h2>
             </div>
            </div>
        </div>
    );
};

export default Header;