import React from 'react';

const Address = () => {
    return (
        <div className=' grid grid-cols-12 gap-x-16'>  
            <div className=' col-span-6'>
               <div className=' flex'>
                 <h2 className=' text-xl font-[500] uppercase w-[50%]'>
                        Address
                 </h2>
                 <h2 className='text-xl font-[500] address w-[80%]'>
                       <span className='user_address'> 
                       408 Charlis Way <br/>
                        New York, NY 10014 <br/>
                       </span>
                        <span className=' user_country'>
                        United States
                        </span>
                 </h2>
               </div>
               <div className=' flex mt-3'>
               <h2 className=' text-xl font-[500] uppercase w-[50%]'>
                        Email
                 </h2>
                 <h2 className='text-xl font-[500] email w-[80%] user_email'>
                   
                 test@gmail.com
                 </h2>
               </div>
            </div>
            <div className=' col-span-6'>
            <div className=' flex mt-3'>
               <h2 className=' text-xl font-[500] uppercase w-[50%]'>
                       Phone
                 </h2>
                 <h2 className='text-xl font-[500] email w-[80%] user_phone'>
                 (718)0121212
                 </h2>
               </div>
            </div>
        </div>
    );
};

export default Address;