import React from 'react';
import img from './img/user.jpg'
import { useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { data } from '../../../../App';
const Header = () => {
  const path = useLocation().pathname.split('/')[2]
  const {allData} = useContext(data)
  const personal_info = allData[path]?.personal_details
    return (
        <div className=' grid grid-cols-12 gap-x-6'>
            <div className='col-span-2'>
                <img src={personal_info?.imgUrl} alt=""  className=' h-32 w-full rounded-md user_img'/>
            </div>
            <div className=' col-span-10'>
             <div className='flex justify-between'>
               <div>
                <h2 className=' uppercase text-3xl font-semibold text-[#1b3055] user_name'>{
                  personal_info?.firstName
                } {
                  personal_info?.lastName
                }</h2>
                <p className=' text-black user_tittle mt-2 text-xl font-[500]'>{
                  personal_info?.tittle
                }</p>
               </div>
               <div>
                 <h2 className=' user_email text-[#1b3055] text-xl font-[500]'>
                   {
                      personal_info?.user_email
                   }
                 </h2>
                    <h2 className=' user_phone text-[#1b3055] text-xl font-[700]'>
                    {
                      personal_info?.user_phone
                    }
                    </h2>
               </div>
             </div>
             <div className=' w-full h-[5px] bg-[#1b3055] mt-4 mb-2'></div>
             <div className=' address flex gap-x-2'>
               <h2 className=' user_address'>{
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