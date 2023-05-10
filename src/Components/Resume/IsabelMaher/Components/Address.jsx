import React from 'react';
import { useLocation } from 'react-router-dom';
import { data } from '../../../../App';
import { useContext } from 'react';
import useWidth from '../../../../hooks/useWidth';

const Address = () => {
  const path = useLocation().pathname.split('/')[2]
  const {allData} = useContext(data)
  const personal_info =  allData[path]?.personal_details
  const width = useWidth()
    return (
        <div className={`grid grid-cols-12  w-[100%] ${width>1280?"gap-x-4":"gap-x-16"}`}>  
            <div className=' col-span-6'>
               <div className=' flex'>
                 <h2 className={` font-[500] uppercase w-[50%] ${width>1280?"text-[14px]":"text-xl"}`}>
                        Address
                 </h2>
                 <h2 className={` font-[500] address w-[80%] ${width>1280?"text-[8px]":"text-xl"}`}>
                       <span className='user_address'> 
                       {personal_info?.user_city} <br/>
                       {personal_info?.user_postal_code}<br/>
                       </span>
                        <span className=' user_country'>
                        {
                            personal_info?.user_country
                        }
                        </span>
                 </h2>
               </div>
               <div className={`flex  ${width>1280?"mt-1":"mt-3"}`}>
               {
                    personal_info?.user_email ? <><h2 className={` font-[500] uppercase w-[50%] ${width>1280?"text-[14px]":"text-xl"}`}>
                    Email
             </h2>
             <h2 className={` font-[500] email w-[80%] user_email ${width>1280?"text-[8px]":"text-xl"}`}>
               
            {
                personal_info?.user_email
            }
             </h2></> : null
               }
               </div>
            </div>
            <div className=' col-span-6'>
            <div className={` flex  ${width>1280 ?"mt-1":"mt-3"}`}>
              {
                personal_info?.user_phone ? <><h2 className={`font-[500] uppercase w-[50%] ${width>1280?"text-[14px]":"text-xl"}`}>
                Phone
          </h2>
          <h2 className={` font-[500] email w-[80%] user_phone ${width>1280?"text-[8px]":"text-xl"}`}>
          {
                personal_info?.user_phone
          }
          </h2></> : null
              }
               
               </div>
            </div>
        </div>
    );
};

export default Address;