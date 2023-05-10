import React from 'react';
import { useLocation } from 'react-router-dom';
import { data } from '../../../../App';
import { useContext } from 'react';

const Address = () => {
  const path = useLocation().pathname.split('/')[2]
  const {allData} = useContext(data)
  const personal_info =  allData[path]?.personal_details
    return (
        <div className=' grid grid-cols-12 gap-x-16'>  
            <div className=' col-span-6'>
               <div className=' flex'>
                 <h2 className=' text-xl font-[500] uppercase w-[50%]'>
                        Address
                 </h2>
                 <h2 className='text-xl font-[500] address w-[80%]'>
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
               <div className=' flex mt-3'>
               {
                    personal_info?.user_email ? <><h2 className=' text-xl font-[500] uppercase w-[50%]'>
                    Email
             </h2>
             <h2 className='text-xl font-[500] email w-[80%] user_email'>
               
            {
                personal_info?.user_email
            }
             </h2></> : null
               }
               </div>
            </div>
            <div className=' col-span-6'>
            <div className=' flex mt-3'>
              {
                personal_info?.user_phone ? <><h2 className=' text-xl font-[500] uppercase w-[50%]'>
                Phone
          </h2>
          <h2 className='text-xl font-[500] email w-[80%] user_phone'>
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